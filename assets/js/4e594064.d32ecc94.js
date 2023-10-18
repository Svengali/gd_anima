"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[290],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(m,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},m="Anima",d={unversionedId:"anima/anima",id:"anima/anima",title:"Anima",description:"Once activated, the addon will add the Anima singleton class to your project.",source:"@site/docs/anima/anima.md",sourceDirName:"anima",slug:"/anima/",permalink:"/docs/docs/anima/",editUrl:"https://github.com/ceceppa/anima/docs/docs/anima/anima.md",tags:[],version:"current",lastUpdatedAt:1669826099,formattedLastUpdatedAt:"11/30/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/docs/intro"},next:{title:"ANIMA",permalink:"/docs/docs/anima/constants"}},p={},s=[{value:"Custom nodes",id:"custom-nodes",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Reference",id:"reference",level:2},{value:"begin",id:"begin",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Example",id:"example",level:4},{value:"begin_single_shot",id:"begin_single_shot",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Example",id:"example-1",level:4}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anima"},"Anima"),(0,i.kt)("p",null,"Once activated, the addon will add the Anima singleton class to your project."),(0,i.kt)("h2",{id:"custom-nodes"},"Custom nodes"),(0,i.kt)("p",null,"Anima provides those two additional nodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/doc/anima-node.html"},"AnimaNode"),", used to handle the setup of all the animations supported by the addon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/doc/anima-tween.html"},"AnimaTween"),", is the custom Tween used that allows the magic to happen :)")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#begin"},"begin(node, animation_name, is_single_shot)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#begin_single_shot"},"begin_single_shot(node, animation_name)"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"begin"},"begin"),(0,i.kt)("p",null,"This method is used to programmatically add the AnimaNode to the scene as a child of the specified ",(0,i.kt)("strong",{parentName:"p"},"node")," one.\nIt will return the AnimaNode added attached to the specified ",(0,i.kt)("strong",{parentName:"p"},"node"),"."),(0,i.kt)("h4",{id:"syntax-1"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"begin(node: Node, animation_name = 'Anima', is_single_shot := false) -> AnimaNode:\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"Node"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The node where to attache the AnimaNode generated during the process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"animation_name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Anima"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"(optional)")," The animation name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_single_shot"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"(optional)")," If true automatically frees the AnimaNode created by the scene once the animation completes")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Anytime this method is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Anima")," will check if an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimaNode")," already exists with the given name and, if not, creates one.\nSo, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," multiple times using the same name will result in reusing the same ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimaNode")," over and over."),(0,i.kt)("p",null,"The node created is not freed by default once an animation has completed unless ",(0,i.kt)("inlineCode",{parentName:"p"},"is_singl_shot")," is set to true."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"var anima: AnimaNode = Anima.begin(self)\nvar anima: AnimaNode = Anima.begin(self, 'my cool animation')\nvar anima: AnimaNode = Anima.begin(self, 'my cool animation', true)\n")),(0,i.kt)("h3",{id:"begin_single_shot"},"begin_single_shot"),(0,i.kt)("p",null,"This method is syntax sugar for the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," one automatically sets ",(0,i.kt)("inlineCode",{parentName:"p"},"is_single_shot")," to true."),(0,i.kt)("h4",{id:"syntax-2"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"begin(node: Node, animation_name = 'Anima') -> AnimaNode:\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"Node"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The node where to attache the AnimaNode generated during the process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"animation_name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Anima"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"(optional)")," The animation name.")))),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"var anima: AnimaNode = Anima.begin(self, 'my cool animation')\nvar anima: AnimaNode = Anima.begin(self)\n")))}c.isMDXComponent=!0}}]);