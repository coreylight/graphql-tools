(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[3868],{5318:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return h}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return r?t.createElement(u,l(l({ref:n},c),{},{components:r})):t.createElement(u,l({ref:n},c))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4692:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var t=r(9603),a=r(120),o=(r(7378),r(5318)),l=["components"],i={id:"schema-loading",title:"Loading GraphQL Schemas from different sources",sidebar_label:"Schema loading"},s={unversionedId:"schema-loading",id:"schema-loading",isDocsHomePage:!1,title:"Loading GraphQL Schemas from different sources",description:"These utils are useful for scanning, loading and building a GraphQL schema from any input.",source:"@site/docs/schema-loading.md",sourceDirName:".",slug:"/schema-loading",permalink:"/docs/schema-loading",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-loading.md",version:"current",sidebar_label:"Schema loading",frontMatter:{id:"schema-loading",title:"Loading GraphQL Schemas from different sources",sidebar_label:"Schema loading"},sidebar:"someSidebar",previous:{title:"Setup an HTTP server",permalink:"/docs/server-setup"},next:{title:"Loading GraphQL operation documents from different sources",permalink:"/docs/documents-loading"}},p=[{value:"Usage",id:"usage",children:[{value:"Using <code>#import</code> expression",id:"using-import-expression",children:[]},{value:"Binding to HTTP Server",id:"binding-to-http-server",children:[]}]}],c={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These utils are useful for scanning, loading and building a GraphQL schema from any input."),(0,o.kt)("p",null,"You can specify a GraphQL endpoint, local introspection JSON file, code file that ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"s a GraphQLSchema, AST string and ",(0,o.kt)("inlineCode",{parentName:"p"},".graphql")," files (with support for ",(0,o.kt)("inlineCode",{parentName:"p"},"glob")," expression)."),(0,o.kt)("p",null,"All found schema files can be merged into a complete schema. There is support for ",(0,o.kt)("inlineCode",{parentName:"p"},"#import")," syntax (formerly known as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-import"},(0,o.kt)("inlineCode",{parentName:"a"},"graphql-import")),")."),(0,o.kt)("p",null,"The user is given the option of implementing their own loader (implement the interface ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaLoader"),")."),(0,o.kt)("p",null,"The schema loading util is using loaders, and implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern"},"chain-of-responsibility pattern"),"."),(0,o.kt)("p",null,"Specifying the loader is not necessary. The user need only provide the inputs. The utils will detect it automatically."),(0,o.kt)("p",null,"For notes on typescript, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/loaders"},"loaders")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { loadSchema } = require('@graphql-tools/load');\nconst { UrlLoader } = require('@graphql-tools/url-loader');\nconst { JsonFileLoader } = require('@graphql-tools/json-file-loader');\nconst { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');\n\nconst schema1 = await loadSchema('type A { foo: String }');   // load from string w/ no loaders\n\nconst schema2 = await loadSchema('http://localhost:3000/graphql', {   // load from endpoint\n    loaders: [\n        new UrlLoader()\n    ]\n});\n\nconst schema3 = await loadSchema('./schema.json', {   // load from local json file\n    loaders: [\n        new JsonFileLoader()\n    ]\n});\n\nconst schema4 = await loadSchema('schema.graphql', {  // load from a single schema file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst schema5 = await loadSchema('./src/**/*.graphql', { // load from multiple files using glob\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n")),(0,o.kt)("h3",{id:"using-import-expression"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"#import")," expression"),(0,o.kt)("p",null,"Assume the following directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 schema.graphql\n\u251c\u2500\u2500 posts.graphql\n\u2514\u2500\u2500 comments.graphql\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema.graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'# import Post from "posts.graphql"\n\ntype Query {\n  posts: [Post]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"posts.graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# import Comment from 'comments.graphql'\n\ntype Post {\n  comments: [Comment]\n  id: ID!\n  text: String!\n  tags: [String]\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"comments.graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Comment {\n  id: ID!\n  text: String!\n}\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"loadSchema")," produces the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  posts: [Post]\n}\n\ntype Post {\n  comments: [Comment]\n  id: ID!\n  text: String!\n  tags: [String]\n}\n\ntype Comment {\n  id: ID!\n  text: String!\n}\n")),(0,o.kt)("h3",{id:"binding-to-http-server"},"Binding to HTTP Server"),(0,o.kt)("p",null,"You can extend loaded schema with resolvers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { join } from 'path';\nimport { loadSchemaSync } from '@graphql-tools/load';\nimport { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';\nimport { addResolversToSchema } from '@graphql-tools/schema';\nimport * as express from 'express';\nimport * as graphqlHTTP from 'express-graphql';\n\n// Load schema from the file\nconst schema = loadSchemaSync(join(__dirname, './schema.graphql'), {\n  loaders: [\n    new GraphQLFileLoader(),\n  ]\n});\n\n// Write some resolvers\nconst resolvers = {};\n\n// Add resolvers to the schema\nconst schemaWithResolvers = addResolversToSchema({\n    schema,\n    resolvers,\n});\n\nconst app = express();\n\napp.use(\n    graphqlHTTP({\n        schema: schemaWithResolvers,\n        graphiql: true,\n    })\n);\n\napp.listen(4000, () => {\n    console.info(`Server listening on http://localhost:4000`)\n})\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/loaders"},"loaders")," to load schemas from different sources.")))}m.isMDXComponent=!0}}]);