import { addProperty, getResolvedProperties } from "../src/properties";

describe('addProperty', () => {
  test('can add a key to an object', () => {
    const object = {};
    addProperty(object, ['key'], 'value')
    expect(object).toEqual({
      key: 'value',
    });
  });

  test('can add an extended key to an object', () => {
    const object = {};
    addProperty(object, ['key1', 'key2'], 'value')
    expect(object).toEqual({
      key1: {
        key2: 'value',
      },
    });
  });

  test('can set a key to null', () => {
    const object = { key1: { key2: 'value' } };
    addProperty(object, ['key1'], null)
    expect(object).toEqual({
      key1: null,
    });
  });
});

describe('getResolvedProperties', () => {
  test('can getResolvedProperties', async () => {
    const object = {
      field1: 'value1',
      field2: Promise.resolve({
        subfieldA: Promise.resolve('valueA'),
        subfieldB: Promise.resolve('valueB'),
      }),
    }

    const extracted = await getResolvedProperties(object, {
      field1: null,
      field2: {
        subfieldA: null,
      }
    })

    const expectedExtracted = {
      field1: 'value1',
      field2: {
        subfieldA: 'valueA',
      }
    }

    expect(extracted).toEqual(expectedExtracted);
  });
});
