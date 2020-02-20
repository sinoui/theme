(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),s={};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u4e3b\u9898\u5b9a\u5236"},"\u4e3b\u9898\u5b9a\u5236"),Object(c.b)("p",null,"sinoui \u9075\u5faa ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://material.io/"}),"Material Design")," \u8bbe\u8ba1\u6807\u51c6\u3002@sinoui/theme \u63d0\u4f9b\u4e86\u5bf9\u6807\u51c6\u6837\u5f0f\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u80fd\u529b\u3002"),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5feb\u901f\u5b89\u88c5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 npm")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm install --save @sinoui/theme styled-components\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 yarn")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @sinoui/theme styled-components\n")),Object(c.b)("h2",{id:"\u4e3b\u9898\u4e0a\u4e0b\u6587"},"\u4e3b\u9898\u4e0a\u4e0b\u6587"),Object(c.b)("p",null,"\u8981\u60f3\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u4e3b\u9898\uff0c\u5219\u9700\u8981\u5728\u5e94\u7528\u7a0b\u5e8f\u5165\u53e3\u70b9\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e3b\u9898\u4e0a\u4e0b\u6587\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import { ThemeProvider } from 'styled-components';\nimport { createTheme, ThemeStyle } from '@sinoui/theme';\n\nconst theme = createTheme(); // \u521b\u5efa\u4e3b\u9898\n\nfunction App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <>\n        <ThemeStyle />\n        {/**\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801**/}\n      </>\n    </ThemeProvider>\n  );\n}\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ThemeStyle"),"\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e0e\u4e3b\u9898\u76f8\u5173\u7684\u5168\u5c40\u6837\u5f0f\u3002"),Object(c.b)("p",null,"\u67e5\u770b",Object(c.b)("a",Object.assign({parentName:"p"},{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98"}),"\u81ea\u5b9a\u4e49\u4e3b\u9898"),"\uff0c\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4e3b\u9898\u5b9a\u5236\u7684\u7ec6\u8282\u3002"),Object(c.b)("h2",{id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e3b\u9898"},"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e3b\u9898"),Object(c.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u5b9a\u4e49\u6837\u5f0f\u7ec4\u4ef6\u65f6\u4f7f\u7528\u4e3b\u9898\u5bf9\u8c61\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import styled from 'styled-components';\n\nconst Title = styled.h6((props) => ({\n  ...props.theme.typography.subtitle1,\n  color: props.theme.palette.text.primary,\n}));\n")),Object(c.b)("p",null,"\u6216\u8005\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import styled from 'styled-components';\n\nconst Button = styled.button`\n  color: ${props => props.theme.palette.action.active};\n  &:hover {\n    background-color: ${props => props.theme.palette.action.hover};\n  }\n  @media (hover: none) {\n    background-color: transparent;\n  }\n`;\n")),Object(c.b)("p",null,"\u7a0b\u5e8f\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"props.theme")," \u5373\u662f\u4e3b\u9898\u4e0a\u4e0b\u6587\u4e2d\u7684\u4e3b\u9898\u5bf9\u8c61\u3002"),Object(c.b)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u666e\u901a\u7ec4\u4ef6\u901a\u8fc7\u4e0a\u4e0b\u6587\u83b7\u53d6\u5230\u4e3b\u9898\u5bf9\u8c61\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useContext } from 'react';\nimport { ThemeContext } from 'styled-components';\n\nfunction MyComponent() {\n  const theme = useContext(ThemeContext);\n\n  console.log('current theme: ', theme);\n\n  // ...\n}\n")),Object(c.b)("h2",{id:"\u81ea\u5b9a\u4e49\u4e3b\u9898"},"\u81ea\u5b9a\u4e49\u4e3b\u9898"),Object(c.b)("p",null,"@sinoui/theme \u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u4e3b\u9898\u5bf9\u8c61",Object(c.b)("inlineCode",{parentName:"p"},"defaultTheme"),"\u3002\u4f46\u5728\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u9ed8\u8ba4\u4e3b\u9898\u53ef\u80fd\u4e0d\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u6211\u4eec\u81ea\u5b9a\u4e49\u4e3b\u9898\u4ee5\u6ee1\u8db3\u4e3b\u9898\u5207\u6362\u7684\u6548\u679c\u3002"),Object(c.b)("p",null,"\u4e3b\u9898\u5bf9\u8c61\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u53ef\u5b9a\u5236\u7684\u70b9\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"/palette"}),"palette \u989c\u8272"),"\u3002\u5305\u62ec\u5b57\u4f53\u989c\u8272\u3001\u80cc\u666f\u8272\u3001\u5206\u9694\u7b26\u989c\u8272\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"/typography"}),"typography \u6587\u5b57\u6392\u7248"),"\u3002\u5305\u62ec\u5b57\u4f53\u5927\u5c0f\u3001\u5b57\u4f53\u7c7b\u578b\u3001\u5b57\u91cd\u3001\u5b57\u4f53\u989c\u8272\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"/shadows"}),"shadows \u9634\u5f71"),"\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"/transitions"}),"transitions \u52a8\u6548"),"\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"/spacing"}),"spacing \u95f4\u8ddd"),"\u3002")),Object(c.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8c03\u7528 createTheme \u6765\u521b\u5efa\u4e3b\u9898\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { createTheme } from '@sinoui/theme';\n\nconst theme = createTheme({\n  palette: {\n    type: 'dark',\n    primary: pink,\n    secondary: green,\n  },\n  typography: {\n    fontSize: 16,\n    fontWeightMedium: 600,\n    h1: {\n      fontSize: '3rem',\n      fontWeight: 600,\n    },\n  },\n  spacing: 12,\n});\n")),Object(c.b)("h2",{id:"typescript-\u652f\u6301"},"TypeScript \u652f\u6301"),Object(c.b)("p",null,"@sinoui/theme \u672c\u8eab\u7531 typescript \u5f00\u53d1\u3002"),Object(c.b)("p",null,"\u5728\u9879\u76ee\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"src/env.d.ts")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5373\u53ef\u652f\u6301 theme \u5bf9\u8c61\u7684 ts \u7c7b\u578b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/* eslint-disable @typescript-eslint/no-empty-interface */\nimport 'styled-components';\nimport { Theme } from '@sinoui/theme';\n\ndeclare module 'styled-components' {\n  export interface DefaultTheme extends Theme {}\n}\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-index.f2eca15bd4f7ef8d59f3.js.map