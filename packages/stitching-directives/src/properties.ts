import { ValueOrPromise } from 'value-or-promise';

import { PropertyTree } from './types';

export function addProperty(object: Record<string, any>, path: Array<string | number>, value: any) {
  const initialSegment = path[0];
  if (path.length === 1) {
    object[initialSegment] = value;
    return;
  }

  let field = object[initialSegment];
  if (field != null) {
    addProperty(field, path.slice(1), value);
    return;
  }

  if (typeof path[1] === 'string') {
    field = Object.create(null);
  } else {
    field = [];
  }
  addProperty(field, path.slice(1), value);
  object[initialSegment] = field;
}

export function getProperty(object: Record<string, any>, path: Array<string>): any {
  if (!path.length || object == null) {
    return object;
  }

  const newPath = path.slice();
  const key = newPath.shift();
  if (key == null) {
    return;
  }
  const prop = object[key];

  return getProperty(prop, newPath);
}

// c.f. https://github.com/graphql/graphql-js/blob/main/src/jsutils/promiseForObject.ts
export function getResolvedProperties(object: Record<string, any>, propertyTree: PropertyTree): ValueOrPromise<any> {
  if (object == null) {
    return new ValueOrPromise(() => object);
  }

  const keys = Object.keys(propertyTree);

  const newObject = Object.create(null);
  return ValueOrPromise.all(
    keys.map(key =>
      new ValueOrPromise(() => object[key]).then(value => {
        const subKey = propertyTree[key];
        if (subKey == null) {
          newObject[key] = value;
          return;
        }

        return deepMap(value, function deepMapFn(item) {
          return getResolvedProperties(item, subKey).resolve();
        })
          .then(mappedValue => {
            newObject[key] = mappedValue;
          })
          .resolve();
      })
    )
  ).then(() => newObject);
}

export function propertyTreeFromPaths(paths: Array<Array<string>>): PropertyTree {
  const propertyTree = Object.create(null);
  for (const path of paths) {
    addProperty(propertyTree, path, null);
  }
  return propertyTree;
}

function deepMap(arrayOrItem: any, fn: (item: any) => any | Promise<any>): ValueOrPromise<any> {
  if (Array.isArray(arrayOrItem)) {
    return ValueOrPromise.all(
      arrayOrItem.map(nestedArrayOrItem =>
        new ValueOrPromise(() => nestedArrayOrItem).then(resolvedNestedArrayOrItem =>
          deepMap(resolvedNestedArrayOrItem, fn).resolve()
        )
      )
    );
  }

  return new ValueOrPromise(() => fn(arrayOrItem));
}
