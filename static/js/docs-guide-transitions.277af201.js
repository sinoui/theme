(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/guide/transitions.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),i={};function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\u52a8\u6548"},"\u52a8\u6548"),Object(b.b)("p",null,"\u52a8\u6548\u6709\u52a9\u4e8e\u63d0\u5347 UI \u7684\u8868\u73b0\u529b\u548c\u6613\u7528\u6027\u3002\u8bbe\u8ba1\u4e0a\u7684\u6307\u5357\u53c2\u8003",Object(b.b)("a",Object.assign({parentName:"p"},{href:"md-understanding-motion"}),"\u4e86\u89e3\u52a8\u6548"),"\u3002"),Object(b.b)("p",null,"@sinoui/theme \u63d0\u70bc\u4e86\u51fa Material Design \u89c4\u5b9a\u7684\u8fc7\u6e21\u7f13\u52a8\u3001\u8fc7\u6e21\u6301\u7eed\u65f6\u957f\u53c2\u6570\u503c\uff0c\u4ee5\u53ca\u7528\u6765\u521b\u5efa css transitions \u7684\u51fd\u6570 ",Object(b.b)("inlineCode",{parentName:"p"},"theme.transitions.create()"),"\u3002"),Object(b.b)("h2",{id:"\u7f13\u52a8"},"\u7f13\u52a8"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"theme.transitions.easing")," \u5bf9\u8c61\u5305\u542b\u8bbe\u8ba1\u5185\u7f6e\u7684\u7f13\u52a8\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"easeInOut")," - \u5bf9\u5e94\u89c4\u8303\u4e2d\u7684\u6807\u51c6\u7f13\u52a8\u3002\u5927\u90e8\u5206\u573a\u666f\u4f7f\u7528\u7684\u7f13\u52a8\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"easeOut")," - \u5bf9\u5e94\u89c4\u8303\u4e2d\u7684\u52a0\u901f\u7f13\u52a8\u3002\u7ecf\u5e38\u7528\u4e8e\u79bb\u5f00\u5c4f\u5e55\u7684\u8fc7\u6e21\u52a8\u753b\u4e2d\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"easeIn")," - \u5bf9\u5e94\u89c4\u8303\u4e2d\u7684\u51cf\u901f\u7f13\u52a8\u3002\u7ecf\u5e38\u7528\u4e8e\u8fdb\u5165\u5c4f\u5e55\u7684\u8fc7\u6e21\u52a8\u753b\u4e2d\u3002"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"sharp")," - \u6b64\u7f13\u52a8\u5df2\u7ecf\u4ece\u6700\u65b0\u7684\u89c4\u8303\u4e2d\u79fb\u51fa\u3002\u5b83\u662f\u6807\u51c6\u7f13\u52a8\u7684\u5feb\u901f\u7248\u7f13\u52a8\u3002\u6309\u7167\u65e7\u7248\u672c\u89c4\u8303\u7684\u63cf\u8ff0\uff1a\u53ef\u4ee5\u968f\u65f6\u8fd4\u56de\u5230\u5c4f\u5e55\u7684\u5bf9\u8c61\u4f7f\u7528\u3002")),Object(b.b)("h2",{id:"\u6301\u7eed\u65f6\u957f"},"\u6301\u7eed\u65f6\u957f"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"theme.transitions.durations")," \u5bf9\u8c61\u5305\u542b\u8bbe\u8ba1\u5185\u7f6e\u7684\u6301\u7eed\u65f6\u957f\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"shortest")," - 150ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"shorter")," - 200ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"short")," - 250ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"standard")," - 300ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"complex")," - 500ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"enteringScreen")," - 225ms"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"leavingScreen")," - 195ms")),Object(b.b)("p",null,"\u56e0\u5f53\u524d\u63d0\u4f9b\u7684\u6301\u7eed\u65f6\u957f\u53c2\u8003\u7684\u662f\u65e7\u7248\u672c\u7684\u8bbe\u8ba1\u89c4\u8303\uff0c\u4e0e\u73b0\u6709\u8bbe\u8ba1\u89c4\u8303\u6709\u51fa\u5165\u3002\u6240\u4ee5\u5728\u5b9e\u73b0\u6807\u51c6\u7ec4\u4ef6\u65f6\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb",Object(b.b)("a",Object.assign({parentName:"p"},{href:"md-motion-speed"}),"\u52a8\u6548\u901f\u5ea6"),"\u548c\u76f8\u5173\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u6587\u6863\u3002"),Object(b.b)("h2",{id:"create-\u51fd\u6570"},"create() \u51fd\u6570"),Object(b.b)("p",null,"\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"theme.transitions.create()")," \u51fd\u6570\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u521b\u5efa css transitions\uff0c\u5b83\u6709\u4e24\u4e2a\u53c2\u6570\u3002TypeScript \u7c7b\u578b\u5982\u4e0b\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function create(\n  props?: string | string[],\n  options?: {\n    duration?: number;\n    delay?: number;\n    easing?: string;\n  },\n): string;\n")),Object(b.b)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570\u540d\u79f0"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"props"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"['all']")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6307\u5b9a\u53c2\u4e0e\u8fc7\u6e21\u52a8\u753b\u7684 css \u5c5e\u6027\u540d\u79f0\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"options"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fc7\u6e21\u914d\u7f6e\u9879")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"options.duration"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"300"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fc7\u6e21\u6301\u7eed\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"options.delay"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"0"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fc7\u6e21\u5ef6\u65f6\u6267\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u6beb\u79d2\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"options.easing"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"'cubic-bezier(0.4, 0.0, 0.2, 1)'"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u7f13\u52a8")))),Object(b.b)("p",null,"\u793a\u4f8b 1\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const transtion = theme.transitions.create();\n\nconsole.log(transition);\n/*\n * \u8f93\u51fa\uff1a\n * all 300ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms\n */\n")),Object(b.b)("p",null,"\u793a\u4f8b 2\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const {\n  transitions: { create, easing, duration },\n} = theme;\nconst duration = create(['color', 'transform'], {\n  duration: duration.short,\n  easing: duration.easeIn,\n});\n\nconsole.log(duration);\n\n/**\n * \u8f93\u51fa\uff1a\n *\n * color 250ms cubic-bezier(0.4, 0.0, 1, 1) 0ms,easing 250ms cubic-bezier(0.4, 0.0, 1, 1) 0ms\n */\n")),Object(b.b)("h2",{id:"\u5b9a\u5236"},"\u5b9a\u5236"),Object(b.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"createTheme()")," \u51fd\u6570\u5b9a\u5236\u52a8\u6548\u53c2\u6570\uff0c\u5982\u4e0b\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { createTheme } from '@sinoui/theme';\n\nconst theme = createTheme({\n  transitions: {\n    durations: {\n      shortest: 75,\n    },\n  },\n});\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\guide\\transitions.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-guide-transitions.f2eca15bd4f7ef8d59f3.js.map