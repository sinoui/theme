(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./docs/components/Col.ts":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(){var e=Object(i.a)(["\n  flex-grow: 1;\n  ","\n  ","\n\n  box-sizing: border-box;\n  margin: 0;\n"]);return s=function(){return e},e}var o=Object(a.d)((function(e){var t=e.xs;return t>0?"\n      max-width: ".concat(t/24*100,"%;\n      flex-basis: ").concat(t/24*100,"%;\n      flex-grow: 0;\n    "):null})),l=["sm","md","lg","xl"],c=Object(a.d)((function(e){return l.filter((function(t){return e[t]>0})).reduce((function(t,n){return t["@media screen and (min-width: ".concat(e.theme.breakpoints[n],"px)")]={"&":{width:"".concat(e[n]/24*100,"%"),maxWidth:"".concat(e[n]/24*100,"%"),flexBasis:"".concat(e[n]/24*100,"%")}},t}),{})})),p=a.e.div(s(),o,c);t.a=p,"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Col",filename:"docs\\components\\Col.ts"}})},"./docs/components/ImageWithTitle.tsx":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=n("./node_modules/react/index.js"),s=n.n(a),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./docs/components/Video.tsx");function c(){var e=Object(i.a)(["\n  border-top: 15px solid ",";\n  color: ",";\n  font-size: 14px;\n  padding: 10px 0 2px;\n  font-weight: 600;\n"]);return c=function(){return e},e}var p={ok:"#4caf50",no:"#d32f2f",caution:"#f9a825"},d={ok:"#2e7b32",no:"#d32f2f",caution:"#f57f17"},r={ok:"\u63a8\u8350\u3002",no:"\u4e0d\u80fd\u3002",caution:"\u5f53\u5fc3"},u=o.e.div(c(),(function(e){return p[e.status]}),(function(e){return d[e.status]})),g=function(e){var t=e.status;return t?s.a.createElement(u,{status:t},r[t]):null},m=g;function b(){var e=Object(i.a)(["\n  margin-bottom: 48px;\n"]);return b=function(){return e},e}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StatusBar",filename:"docs\\components\\StatusBar.tsx"}}),n.d(t,"a",(function(){return j}));var y=o.e.section(b());function j(e){var t=e.children,n=e.img,i=e.video,a=e.noGutter,o=e.status,c=e.marginTop,p=a?"section":y;return s.a.createElement(p,{style:{marginTop:c,fontSize:14,color:"#616161"}},n&&s.a.createElement("img",{src:n,alt:"img",style:{minWidth:"100%"}}),i&&s.a.createElement(l.a,{src:i}),s.a.createElement(m,{status:o}),s.a.createElement("div",null,t))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ImageWithTitle",filename:"docs\\components\\ImageWithTitle.tsx"}})},"./docs/components/Row.ts":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  ",";\n"]);return s=function(){return e},e}function o(){var e=Object(i.a)(["\n  width: calc(100% + ","px);\n  margin: -"," -","px;\n\n  & > * {\n    padding: ","px\n      ","px;\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(i.a)(["\n  width: calc(100% + ","px);\n  margin: 0px -","px;\n  & > * {\n    padding: 0 ","px;\n  }\n"]);return l=function(){return e},e}var c=Object(a.d)(l(),(function(e){return e.gutter}),(function(e){return e.gutter/2}),(function(e){return e.gutter/2})),p=Object(a.d)(o(),(function(e){return e.gutter[0]}),(function(e){return e.gutter[1]/2}),(function(e){return e.gutter[0]/2}),(function(e){return e.gutter[1]/2}),(function(e){return e.gutter[0]/2})),d=a.e.div(s(),(function(e){var t=e.gutter;return"number"===typeof t?c:Array.isArray(t)&&p}));t.a=d,"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"docs\\components\\Row.ts"}})},"./docs/components/Video.tsx":function(e,t,n){"use strict";var i=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),s=n("./node_modules/react/index.js"),o=n.n(s),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=n("./docs/components/images/pause.svg"),p=n.n(c),d=n("./docs/components/images/play.svg"),r=n.n(d);function u(){var e=Object(a.a)(["\n  max-width: 100%;\n  width: 100%;\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  display: inline-flex;\n\n  & > video {\n    max-width: 100%;\n  }\n\n  &::before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    pointer-events: none;\n    content: '';\n\n    background: rgba(0, 0, 0, 0.5) url(",") no-repeat center center;\n    background-size: 72px;\n\n    transition: background-size 235ms cubic-bezier(0.4, 0, 0.2, 1),\n      opacity 235ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    ","\n  }\n"]);return u=function(){return e},e}var g=l.e.div(u(),r.a,(function(e){return e.isPlaying&&"\n      background-image: url(".concat(p.a,");\n      opacity: ").concat(e.isHover?1:0,";\n    ")}));function m(e){var t=e.src,n=Object(s.useState)(!1),a=Object(i.a)(n,2),l=a[0],c=a[1],p=Object(s.useState)(!1),d=Object(i.a)(p,2),r=d[0],u=d[1],m=Object(s.useRef)(null);return o.a.createElement(g,{isPlaying:l,isHover:r,onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},o.a.createElement("video",{loop:!0,muted:!0,preload:"metadata",onClick:function(){l?(c(!1),m.current.pause()):(c(!0),u(!1),m.current.play())},ref:m},o.a.createElement("source",{src:t})))}t.a=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Video",filename:"docs\\components\\Video.tsx"}})},"./docs/components/images/pause.svg":function(e,t,n){e.exports=n.p+"static/img/pause.1f45001d.svg"},"./docs/components/images/play.svg":function(e,t,n){e.exports=n.p+"static/img/play.7ea338aa.svg"},"./docs/material-design/layout/images/custom-keylines.gif":function(e,t,n){e.exports=n.p+"static/img/custom-keylines.59a50f3b.gif"},"./docs/material-design/layout/images/layout-responsive-cropping-adapt-ratio.png":function(e,t,n){e.exports=n.p+"static/img/layout-responsive-cropping-adapt-ratio.a872cbf8.png"},"./docs/material-design/layout/images/layout-responsive-cropping-fixed-height.png":function(e,t,n){e.exports=n.p+"static/img/layout-responsive-cropping-fixed-height.db36dceb.png"},"./docs/material-design/layout/images/layout-responsive-cropping-maintain-ratio.png":function(e,t,n){e.exports=n.p+"static/img/layout-responsive-cropping-maintain-ratio.43ed4a4b.png"},"./docs/material-design/layout/images/layout-spacing-4dp-baslinegrid.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-4dp-baslinegrid.b68e5c9d.png"},"./docs/material-design/layout/images/layout-spacing-alignment.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-alignment.7dc3149f.png"},"./docs/material-design/layout/images/layout-spacing-baslinegrid.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-baslinegrid.2a77fbd7.png"},"./docs/material-design/layout/images/layout-spacing-baslinetype.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-baslinetype.a51128cf.png"},"./docs/material-design/layout/images/layout-spacing-dimensions-height.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-dimensions-height.32e6b0e5.png"},"./docs/material-design/layout/images/layout-spacing-keylinespadding-keylines.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-keylinespadding-keylines.8a045504.png"},"./docs/material-design/layout/images/layout-spacing-keylinespadding-padding-verthorz.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-keylinespadding-padding-verthorz.0d8bf95e.png"},"./docs/material-design/layout/images/layout-spacing-keylinespadding-verticalspacing-type.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-keylinespadding-verticalspacing-type.66b0deed.png"},"./docs/material-design/layout/images/layout-spacing-touchtargets.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacing-touchtargets.71b386ae.png"},"./docs/material-design/layout/images/layout-spacingmethods-01-padding.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacingmethods-01-padding.eb6f155e.png"},"./docs/material-design/layout/images/layout-spacingmethods-02-alignment.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacingmethods-02-alignment.620076f2.png"},"./docs/material-design/layout/images/layout-spacingmethods-02-dimensions.png":function(e,t,n){e.exports=n.p+"static/img/layout-spacingmethods-02-dimensions.f53c17df.png"},"./docs/material-design/layout/images/layout-spacingmethods-containers.gif":function(e,t,n){e.exports=n.p+"static/img/layout-spacingmethods-containers.415055a9.gif"},"./docs/material-design/layout/images/layout-unitsmeasurements-dev-aspectratio-baseline.png":function(e,t,n){e.exports=n.p+"static/img/layout-unitsmeasurements-dev-aspectratio-baseline.c366c01a.png"},"./docs/material-design/layout/images/layout-unitsmeasurements-dev-aspectratio.png":function(e,t,n){e.exports=n.p+"static/img/layout-unitsmeasurements-dev-aspectratio.ab1b8eb6.png"},"./docs/material-design/layout/images/layout-unitsmeasurements-dev-containers.png":function(e,t,n){e.exports=n.p+"static/img/layout-unitsmeasurements-dev-containers.b9056216.png"},"./docs/material-design/layout/spacing-methods.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),s=n("./docs/components/ImageWithTitle.tsx"),o=n("./docs/components/Row.ts"),l=n("./docs/components/Col.ts"),c=n("./docs/material-design/layout/images/layout-spacing-baslinegrid.png"),p=n.n(c),d=n("./docs/material-design/layout/images/layout-spacing-4dp-baslinegrid.png"),r=n.n(d),u=n("./docs/material-design/layout/images/layout-spacing-baslinetype.png"),g=n.n(u),m=n("./docs/material-design/layout/images/layout-spacing-keylinespadding-verticalspacing-type.png"),b=n.n(m),y=n("./docs/material-design/layout/images/layout-spacingmethods-01-padding.png"),j=n.n(y),f=n("./docs/material-design/layout/images/layout-spacingmethods-02-dimensions.png"),O=n.n(f),h=n("./docs/material-design/layout/images/layout-spacingmethods-02-alignment.png"),x=n.n(h),v=n("./docs/material-design/layout/images/layout-spacing-keylinespadding-padding-verthorz.png"),T=n.n(v),w=n("./docs/material-design/layout/images/layout-spacing-dimensions-height.png"),k=n.n(w),W=n("./docs/material-design/layout/images/layout-spacing-alignment.png"),_=n.n(W),I=n("./docs/material-design/layout/images/layout-spacing-keylinespadding-keylines.png"),E=n.n(I),C=n("./docs/material-design/layout/images/custom-keylines.gif"),z=n.n(C),P=n("./docs/material-design/layout/images/layout-unitsmeasurements-dev-containers.png"),S=n.n(P),R=n("./docs/material-design/layout/images/layout-spacingmethods-containers.gif"),A=n.n(R),L=n("./docs/material-design/layout/images/layout-unitsmeasurements-dev-aspectratio.png"),M=n.n(L),N=n("./docs/material-design/layout/images/layout-unitsmeasurements-dev-aspectratio-baseline.png"),B=n.n(N),D=n("./docs/material-design/layout/images/layout-responsive-cropping-maintain-ratio.png"),V=n.n(D),X=n("./docs/material-design/layout/images/layout-responsive-cropping-adapt-ratio.png"),F=n.n(X),H=n("./docs/material-design/layout/images/layout-responsive-cropping-fixed-height.png"),J=n.n(H),G=n("./docs/material-design/layout/images/layout-spacing-touchtargets.png"),K=n.n(G),q={};function Q(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object.assign({},q,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u95f4\u8ddd\u65b9\u6cd5-spacing-methods"},"\u95f4\u8ddd\u65b9\u6cd5 Spacing methods"),Object(a.b)("p",null,"\u7a7a\u95f4\u65b9\u6cd5\u4f7f\u7528\u57fa\u51c6\u7f51\u683c\u3001\u53c2\u8003\u7ebf\u3001\u5185\u8fb9\u8ddd\u548c\u589e\u91cf\u95f4\u8ddd\u6765\u5f71\u54cd\u6bd4\u7387\u3001\u5bb9\u5668\u548c\u89e6\u6478\u76ee\u6807\u3002"),Object(a.b)("h2",{id:"\u57fa\u51c6\u7f51\u683c-baseline-grid"},"\u57fa\u51c6\u7f51\u683c Baseline grid"),Object(a.b)("h3",{id:"8dp-\u7f51\u683c--8dp-grid"},"8dp \u7f51\u683c / 8dp grid"),Object(a.b)("p",null,"\u5728\u79fb\u52a8\u3001\u5e73\u677f\u548c\u684c\u9762\u8bbe\u5907\u4e0a\u6240\u6709\u7ec4\u4ef6\u5bf9\u9f50 8dp \u7684\u65b9\u5f62\u57fa\u51c6\u7f51\u683c\u3002"),Object(a.b)(s.a,{img:p.a,mdxType:"ImageWithTitle"},"\u5e94\u7528\u7a0b\u5e8f\u680f\u548c\u6d6e\u52a8\u64cd\u4f5c\u6309\u94ae\u5bf9\u9f50 8dp \u7f51\u683c\u3002"),Object(a.b)("h3",{id:"4dp-\u7f51\u683c--4dp-grid"},"4dp \u7f51\u683c / 4dp grid"),Object(a.b)("p",null,"\u7ec4\u4ef6\u4e2d\u7684\u56fe\u6807\u3001\u6587\u5b57\u548c\u67d0\u4e9b\u5143\u7d20\u53ef\u4ee5\u4e0e 4dp \u7f51\u683c\u5bf9\u9f50\u3002"),Object(a.b)(s.a,{img:r.a,mdxType:"ImageWithTitle"},"\u5e95\u90e8\u5bfc\u822a\u680f\u7684\u5143\u7d20\u4e0e 4dp \u7f51\u683c\u5bf9\u9f50\u3002"),Object(a.b)("h3",{id:"4dp-\u57fa\u51c6\u7f51\u683c--4dp-baseline-grid"},"4dp \u57fa\u51c6\u7f51\u683c / 4dp baseline grid"),Object(a.b)("p",null,"\u6587\u5b57\u5bf9\u9f50 4dp \u57fa\u51c6\u7f51\u683c\u3002"),Object(a.b)(s.a,{img:g.a,mdxType:"ImageWithTitle"},"4dp \u57fa\u51c6\u7f51\u683c\u3002"),Object(a.b)("p",null,"\u5f53\u6587\u5b57\u5728\u7ec4\u4ef6\u4e2d\u5c45\u4e2d\u5bf9\u9f50\u65f6\uff0c\u53ef\u4ee5\u5728 4dp \u7f51\u683c\u4e4b\u5916\u663e\u793a\uff0c\u6bd4\u5982\u6309\u94ae\u548c\u5217\u8868\u9879\u76ee\u3002\u5c3d\u7ba1\u7ec4\u4ef6\u5185\u5c45\u4e2d\u6587\u672c\u663e\u793a\u5728\u7f51\u683c\u4e4b\u5916\uff0c\u4f46\u662f\u6587\u672c\u4ecd\u53ef\u4ee5\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50\u3002"),Object(a.b)(s.a,{img:b.a,mdxType:"ImageWithTitle"},"\u5373\u4f7f\u4e0d\u57284dp\u7f51\u683c\u4e0a\uff0c\u6587\u672c\u4e5f\u4f1a\u5728\u5217\u8868\u9879\u91cc\u5782\u76f4\u5c45\u4e2d\u3002"),Object(a.b)("h2",{id:"\u95f4\u8ddd-spacing"},"\u95f4\u8ddd Spacing"),Object(a.b)("h3",{id:"\u95f4\u8ddd\u65b9\u6cd5-spacing-methods-1"},"\u95f4\u8ddd\u65b9\u6cd5 Spacing methods"),Object(a.b)("p",null,"\u95f4\u9694\u65b9\u6cd5\u6bd4\u54cd\u5e94\u5f0f\u5e03\u5c40\u7f51\u683c\u66f4\u7cbe\u7ec6\u3002\u95f4\u8ddd\u65b9\u6cd5\u662f\u56f4\u7ed5\u5982\u4f55\u5728\u5e03\u5c40\u548c\u7ec4\u4ef6\u4e2d\u653e\u7f6e\u5143\u7d20\u7684\u4e00\u7ec4\u89c4\u5219\u3002"),Object(a.b)(o.a,{gutter:48,mdxType:"Row"},Object(a.b)(l.a,{xs:24,sm:12,md:8,mdxType:"Column"},Object(a.b)(s.a,{img:j.a,mdxType:"ImageWithTitle"},Object(a.b)("h4",null,"\u5185\u8fb9\u8ddd"),Object(a.b)("p",null,"\u5185\u8fb9\u8ddd\u662f\u7ec4\u4ef6\u5185\u90e8\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002"))),Object(a.b)(l.a,{xs:24,sm:12,md:8,mdxType:"Column"},Object(a.b)(s.a,{img:O.a,mdxType:"ImageWithTitle"},Object(a.b)("h4",null,"\u5c3a\u5bf8"),Object(a.b)("p",null,"\u5c3a\u5bf8\u63cf\u8ff0\u7684\u662f\u7ec4\u4ef6\u5143\u7d20\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"))),Object(a.b)(l.a,{xs:24,sm:12,md:8,mdxType:"Column"},Object(a.b)(s.a,{img:x.a,mdxType:"ImageWithTitle"},Object(a.b)("h4",null,"\u5bf9\u9f50"),Object(a.b)("p",null,"\u5bf9\u9f50\u662f\u7ec4\u4ef6\u5143\u7d20\u7684\u653e\u7f6e\u4f4d\u7f6e\u3002")))),Object(a.b)("h3",{id:"\u5185\u8fb9\u8ddd-padding"},"\u5185\u8fb9\u8ddd Padding"),Object(a.b)("p",null,"\u5185\u8fb9\u8ddd\u6307\u7684\u662f\u7528\u6237\u754c\u9762\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u5185\u8fb9\u8ddd\u662f\u4e00\u79cd\u66ff\u4ee3\u53c2\u8003\u7ebf\u7684\u95f4\u8ddd\u65b9\u6cd5\uff0c\u4ee5 8dp \u6216 4dp \u7684\u589e\u91cf\u8fdb\u884c\u5ea6\u91cf\u3002"),Object(a.b)("p",null,"\u5185\u8fb9\u8ddd\u53ef\u4ee5\u5728\u5782\u76f4\u548c\u6c34\u5e73\u65b9\u5411\u4e0a\u8fdb\u884c\u6d4b\u91cf\uff0c\u4e0d\u9700\u8981\u8de8\u8d8a\u5e03\u5c40\u7684\u6574\u4e2a\u9ad8\u5ea6\u3002"),Object(a.b)(s.a,{img:T.a,mdxType:"ImageWithTitle"},"\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5185\u8fb9\u8ddd\u662f 24dp\u3002"),Object(a.b)("h3",{id:"\u5c3a\u5bf8-dimensions"},"\u5c3a\u5bf8 Dimensions"),Object(a.b)("p",null,"\u5c3a\u5bf8\u6307\u7684\u662f\u7ec4\u4ef6\u5143\u7d20\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),Object(a.b)("p",null,"\u67d0\u4e9b\u7ec4\u4ef6\uff0c\u4f8b\u5982\u5e94\u7528\u7a0b\u5e8f\u680f\u6216\u5217\u8868\uff0c\u4ec5\u6982\u8ff0\u5143\u7d20\u7684\u9ad8\u5ea6\u3002\u8fd9\u4e9b\u5143\u7d20\u7684\u9ad8\u5ea6\u9700\u5bf9\u5176 8dp \u7f51\u683c\u3002\u4e0d\u9700\u8981\u6307\u5b9a\u5176\u5bbd\u5ea6\uff0c\u56e0\u4e3a\u5b83\u4f1a\u54cd\u5e94\u89c6\u53e3\u5bbd\u5ea6\u3002"),Object(a.b)(s.a,{img:k.a,mdxType:"ImageWithTitle"},Object(a.b)("ol",null,Object(a.b)("li",null,"\u72b6\u6001\u680f\u9ad8\u5ea6\uff1a24dp"),Object(a.b)("li",null,"\u5e94\u7528\u7a0b\u5e8f\u680f\u9ad8\u5ea6\uff1a56dp"),Object(a.b)("li",null,"\u5217\u8868\u9879\u76ee\u9ad8\u5ea6\uff1a88dp"))),Object(a.b)("h3",{id:"\u5bf9\u9f50-alignment"},"\u5bf9\u9f50 Alignment"),Object(a.b)("p",null,"\u5bf9\u9f50\u662f\u7ec4\u4ef6\u4e2d\u5143\u7d20\u7684\u653e\u7f6e\u4f4d\u7f6e\u3002"),Object(a.b)(s.a,{img:_.a,mdxType:"ImageWithTitle"},Object(a.b)("ol",null,Object(a.b)("li",null,"\u5e03\u5c40\u7f51\u683c"),Object(a.b)("li",null,"\u5bf9\u9f50"))),Object(a.b)("h3",{id:"\u53c2\u8003\u7ebf-keylines"},"\u53c2\u8003\u7ebf Keylines"),Object(a.b)("p",null,"\u53c2\u8003\u7ebf\u662f\u4e00\u79cd\u5bf9\u9f50\u5de5\u5177\uff0c\u53ef\u7528\u4e8e\u5c06\u5143\u7d20\u4e00\u81f4\u5730\u653e\u7f6e\u5728\u5e03\u5c40\u7f51\u683c\u4e4b\u5916\u3002\u5b83\u4eec\u662f\u5782\u76f4\u7ebf\uff0c\u663e\u793a\u4e86\u5143\u7d20\u672a\u4e0e\u7f51\u683c\u5bf9\u9f50\u65f6\u653e\u7f6e\u7684\u4f4d\u7f6e\u3002\u53c2\u8003\u7ebf\u7531\u6bcf\u4e2a\u5143\u7d20\u4e0e\u5c4f\u5e55\u8fb9\u7f18\u7684\u8ddd\u79bb\u786e\u5b9a\uff0c\u5e76\u4ee5 8dp \u7684\u589e\u91cf\u8fdb\u884c\u5ea6\u91cf\u3002"),Object(a.b)(s.a,{img:E.a,mdxType:"ImageWithTitle"},Object(a.b)("ol",null,Object(a.b)("li",null,"\u5e03\u5c40\u7f51\u683c"),Object(a.b)("li",null,"\u53c2\u8003\u7ebf"))),Object(a.b)("p",null,"\u53c2\u8003\u7ebf\u53ef\u4ee5\u5728\u5e03\u5c40\u4e2d\u7684\u5143\u7d20\u4e4b\u95f4\u521b\u5efa\u66f4\u591a\u6216\u66f4\u5c11\u7684\u95f4\u8ddd\u3002\u5b83\u4eec\u53ef\u5728\u6bcf\u4e2a\u65ad\u70b9\u8303\u56f4\u5185\u8c03\u6574\u3002"),Object(a.b)(s.a,{img:z.a,mdxType:"ImageWithTitle"},"\u53c2\u8003\u7ebf\u53ef\u4ee5\u6269\u5927\u6216\u7f29\u5c0f\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002"),Object(a.b)("h2",{id:"\u5bb9\u5668\u548c\u5bbd\u9ad8\u6bd4-containers-and-ratios"},"\u5bb9\u5668\u548c\u5bbd\u9ad8\u6bd4 Containers and ratios"),Object(a.b)("h3",{id:"\u5bb9\u5668-containers"},"\u5bb9\u5668 Containers"),Object(a.b)("p",null,"\u5bb9\u5668\u662f\u7528\u4e8e\u8868\u793a\u5c01\u95ed\u533a\u57df\u7684\u5f62\u72b6\u3002\u5bb9\u5668\u53ef\u4ee5\u5bb9\u7eb3\u7528\u6237\u754c\u9762\u5143\u7d20\uff0c\u4f8b\u5982\u56fe\u50cf\u3001\u56fe\u6807\u6216\u8868\u9762\u3002"),Object(a.b)(s.a,{img:S.a,mdxType:"ImageWithTitle"},Object(a.b)("p",null,"200%"),Object(a.b)("ol",null,Object(a.b)("li",null,"\u56fe\u50cf\u5bb9\u5668"),Object(a.b)("li",null,"\u56fe\u6807\u5bb9\u5668"),Object(a.b)("li",null,"\u8868\u9762\u5bb9\u5668"))),Object(a.b)("p",null,"\u5bb9\u5668\u53ef\u4ee5\u662f\u56fa\u5b9a\u5c3a\u5bf8\u7684\uff0c\u5e76\u9650\u5236\u5176\u4e2d\u5143\u7d20\u7684\u5927\u5c0f\u6216\u88c1\u526a\u3002\u6216\u8005\uff0c\u5bb9\u5668\u4e5f\u53ef\u4ee5\u662f\u5f39\u6027\u7684\uff0c\u80fd\u591f\u7f29\u653e\u4ee5\u5bb9\u7eb3\u5185\u5bb9\u7684\u5927\u5c0f\u3002"),Object(a.b)(s.a,{img:A.a,mdxType:"ImageWithTitle"},Object(a.b)("ol",null,Object(a.b)("li",null,"\u56fa\u5b9a\u5c3a\u5bf8\u5bb9\u5668\u88c1\u526a\u5305\u542b\u7684\u56fe\u7247\u3002"),Object(a.b)("li",null,"\u5f39\u6027\u56fe\u50cf\u5bb9\u5668\uff0c\u53ef\u4ee5\u7f29\u653e\u4ee5\u5bb9\u7eb3\u539f\u59cb\u56fe\u50cf\u5927\u5c0f\u3002"))),Object(a.b)("h3",{id:"\u5bbd\u9ad8\u6bd4-aspect-ratios"},"\u5bbd\u9ad8\u6bd4 Aspect ratios"),Object(a.b)("p",null,"\u5bbd\u9ad8\u6bd4\u662f\u5143\u7d20\u7684\u5bbd\u5ea6\u4e0e\u9ad8\u5ea6\u7684\u6bd4\u4f8b\u3002\u5bbd\u9ad8\u6bd4\u5199\u6210",Object(a.b)("inlineCode",{parentName:"p"},"\u5bbd\u5ea6:\u9ad8\u5ea6"),"\u3002"),Object(a.b)("p",null,"\u8981\u4fdd\u6301\u5e03\u5c40\u7684\u4e00\u81f4\u6027\uff0c\u8bf7\u5bf9\u56fe\u50cf\u3001\u8868\u9762\u548c\u5c4f\u5e55\u5c3a\u5bf8\u7b49\u5143\u7d20\u4f7f\u7528\u4e00\u81f4\u7684\u5bbd\u9ad8\u6bd4\u3002"),Object(a.b)("p",null,"\u5efa\u8bae\u5728\u60a8\u7684\u7528\u6237\u754c\u9762\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u5bbd\u9ad8\u6bd4\uff1a16:9, 3:2, 4:3, 1:1, 3:4, 2:3\u3002"),Object(a.b)(s.a,{img:M.a,mdxType:"ImageWithTitle"}),Object(a.b)("h3",{id:"\u5f39\u6027\u5bbd\u9ad8\u6bd4-flexible-ratios"},"\u5f39\u6027\u5bbd\u9ad8\u6bd4 Flexible ratios"),Object(a.b)("p",null,"\u5f39\u6027\u5bbd\u9ad8\u6bd4\u7531\u5e03\u5c40\u7f51\u683c\u51b3\u5b9a\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u5bb9\u5668\u5bbd\u5ea6\u7531\u5c4f\u5e55\u5e03\u5c40\u51b3\u5b9a\uff0c\u5e76\u4e14\u4f38\u5c55\u5230\u6700\u5927\u53ef\u586b\u5145\u7684\u7a7a\u95f4"),Object(a.b)("li",{parentName:"ol"},"\u5bb9\u5668\u9ad8\u5ea6\u7531\u5bb9\u5668\u4e2d\u56fe\u50cf\u7684\u9ad8\u5ea6\u51b3\u5b9a")),Object(a.b)("p",null,"\u4f7f\u7528\u5f39\u6027\u5bbd\u9ad8\u6bd4\u8ba9\u5185\u5bb9\u51b3\u5b9a\u5bb9\u5668\u7684\u9ad8\u5ea6\u3002"),Object(a.b)(s.a,{img:B.a,mdxType:"ImageWithTitle"},"\u5bb9\u5668\u7684\u5bbd\u5ea6\u7531\u5e03\u5c40\u7684\u5217\u5bbd\u5ea6\u51b3\u5b9a\u3002"),Object(a.b)("h3",{id:"\u54cd\u5e94\u5f0f\u88c1\u526a-responsive-cropping"},"\u54cd\u5e94\u5f0f\u88c1\u526a Responsive cropping"),Object(a.b)("p",null,"\u54cd\u5e94\u5f0f\u663e\u793a\u56fe\u50cf\uff0c\u8bf7\u786e\u5b9a\u4e0d\u540c\u65ad\u70b9\u8303\u56f4\u5982\u4f55\u88c1\u526a\u56fe\u50cf\u3002\u5728\u4e0d\u540c\u65ad\u70b9\u8303\u56f4\u5185\uff0c\u88c1\u526a\u53ef\u4ee5\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4fdd\u6301\u4e00\u4e2a\u56fa\u5b9a\u7684\u6bd4\u4f8b"),Object(a.b)("li",{parentName:"ul"},"\u9002\u5e94\u4e0d\u540c\u7684\u6bd4\u4f8b"),Object(a.b)("li",{parentName:"ul"},"\u56fa\u5b9a\u56fe\u50cf\u7684\u9ad8\u5ea6")),Object(a.b)("h4",{id:"\u4fdd\u6301\u56fa\u5b9a\u6bd4-maintain-one-ratio"},"\u4fdd\u6301\u56fa\u5b9a\u6bd4 Maintain one ratio"),Object(a.b)("p",null,"\u56fe\u50cf\u5c3a\u5bf8\u53ef\u4ee5\u5728\u6240\u6709\u65ad\u70b9\u8303\u56f4\u5185\u91c7\u7528\u56fa\u5b9a\u6bd4\u4f8b\u3002"),Object(a.b)(s.a,{img:V.a,mdxType:"ImageWithTitle"},Object(a.b)("p",null,"50%",Object(a.b)("br",null),"\u7528\u6237\u754c\u9762\u4e2d\u7684\u56fe\u50cf\u5728\u65ad\u70b9\u95f4\u4fdd\u6301 3:2 \u6bd4\u4f8b\u3002")),Object(a.b)("h4",{id:"\u9002\u5e94\u4e0d\u540c\u6bd4\u4f8b-adapt-to-different-ratios"},"\u9002\u5e94\u4e0d\u540c\u6bd4\u4f8b Adapt to different ratios"),Object(a.b)("p",null,"\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u65ad\u70b9\u8303\u56f4\u4f7f\u7528\u4e0d\u540c\u7684\u56fe\u50cf\u5c3a\u5bf8\u6bd4\u4f8b\u3002"),Object(a.b)(s.a,{img:F.a,mdxType:"ImageWithTitle"},Object(a.b)("p",null,"50%",Object(a.b)("br",null),"\u56fe\u50cf\u6bd4\u4f8b\u4ece 1:1 \u53d8\u6210\u4e86 16:9\u3002")),Object(a.b)("h4",{id:"\u56fa\u5b9a\u56fe\u50cf\u9ad8\u5ea6-fixed-image-heights"},"\u56fa\u5b9a\u56fe\u50cf\u9ad8\u5ea6 Fixed image heights"),Object(a.b)("p",null,"\u56fe\u50cf\u5728\u4e0d\u540c\u7684\u65ad\u70b9\u8303\u56f4\u5185\u6709\u56fa\u5b9a\u7684\u9ad8\u5ea6\u548c\u5f39\u6027\u5bbd\u5ea6\u3002"),Object(a.b)(s.a,{img:J.a,mdxType:"ImageWithTitle"},Object(a.b)("p",null,"50%",Object(a.b)("br",null),"\u56fe\u50cf\u6709\u56fa\u5b9a\u9ad8\u5ea6\u548c\u5f39\u6027\u5bbd\u5ea6\u3002")),Object(a.b)("h2",{id:"\u89e6\u6478\u76ee\u6807-touch-targets"},"\u89e6\u6478\u76ee\u6807 Touch targets"),Object(a.b)("p",null,"\u89e6\u6478\u76ee\u6807\u9002\u7528\u4e8e\u540c\u65f6\u63a5\u6536\u89e6\u6478\u8f93\u5165\u548c\u975e\u89e6\u6478\u8f93\u5165\uff08\u5982\u9f20\u6807\u70b9\u51fb\uff09\u7684\u4efb\u4f55\u8bbe\u5907\u3002\u4e3a\u4e86\u5e73\u8861\u4fe1\u606f\u5bc6\u5ea6\u548c\u53ef\u7528\u6027\uff0c\u89e6\u6478\u76ee\u6807\u81f3\u5c11\u4e3a 48 x 48 dp\uff0c\u76ee\u6807\u4e4b\u524d\u81f3\u5c11\u8981\u6709 8dp \u7684\u95f4\u8ddd\u3002"),Object(a.b)(s.a,{img:K.a,mdxType:"ImageWithTitle"},"\u89e6\u6478\u76ee\u6807\u6700\u5c0f\u5c3a\u5bf8\uff1a 48 x 48 dp\u3002"))}Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\material-design\\layout\\spacing-methods.mdx"}}),Q.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-material-design-layout-spacing-methods.f2eca15bd4f7ef8d59f3.js.map