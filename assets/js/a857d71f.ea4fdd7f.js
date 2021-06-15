(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[2818],{5318:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9085:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var t=r(9603),a=r(120),o=(r(7378),r(5318)),l=["components"],i={id:"apollo-engine-loader",title:"@graphql-tools/apollo-engine-loader",sidebar_label:"apollo-engine-loader"},p={unversionedId:"api/modules/apollo-engine-loader",id:"api/modules/apollo-engine-loader",isDocsHomePage:!1,title:"@graphql-tools/apollo-engine-loader",description:"- ApolloEngineLoader",source:"@site/docs/api/modules/loaders_apollo_engine_src.md",sourceDirName:"api/modules",slug:"/api/modules/apollo-engine-loader",permalink:"/docs/api/modules/apollo-engine-loader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/loaders_apollo_engine_src.md",version:"current",sidebar_label:"apollo-engine-loader",frontMatter:{id:"apollo-engine-loader",title:"@graphql-tools/apollo-engine-loader",sidebar_label:"apollo-engine-loader"},sidebar:"someSidebar",previous:{title:"@graphql-tools/wrap",permalink:"/docs/api/modules/wrap"},next:{title:"@graphql-tools/code-file-loader",permalink:"/docs/api/modules/code-file-loader"}},s=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Variables",id:"variables-1",children:[{value:"SCHEMA_QUERY",id:"schema_query",children:[]}]}],c={toc:s};function d(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_apollo_engine_src.apolloengineloader"},"ApolloEngineLoader"))),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_apollo_engine_src.apolloengineoptions"},"ApolloEngineOptions"))),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/modules/apollo-engine-loader#schema_query"},"SCHEMA","_","QUERY"))),(0,o.kt)("h2",{id:"variables-1"},"Variables"),(0,o.kt)("h3",{id:"schema_query"},"SCHEMA","_","QUERY"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"SCHEMA","_","QUERY"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"\\n  query GetSchemaByTag($tag: String!, $id: ID!) {\\n    service(id: $id) {\\n      ... on Service {\\n        __typename\\n        schema(tag: $tag) {\\n          document\\n        }\\n      }\\n    }\\n  }\\n"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"internal"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/apollo-engine/src/index.ts#L92"},"packages/loaders/apollo-engine/src/index.ts:92")))}d.isMDXComponent=!0}}]);