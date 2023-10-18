"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[309],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},s="Understanding the current value",p={unversionedId:"basics/fundamentals",id:"basics/fundamentals",title:"Understanding the current value",description:"Before digging into how to create animations is essential that we understand how Anima figures out the initial property value to use:",source:"@site/tutorials/basics/fundamentals.mdx",sourceDirName:"basics",slug:"/basics/fundamentals",permalink:"/docs/tutorials/basics/fundamentals",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/tutorials/intro"},next:{title:"begin` vs `begin_single_shot",permalink:"/docs/tutorials/basics/begin-vs-begin_single_shot"}},m={},u=[{value:"1. All is set",id:"1-all-is-set",level:2},{value:"2. The current value",id:"2-the-current-value",level:2},{value:"Loop strategy for relative data",id:"loop-strategy-for-relative-data",level:2},{value:"Example",id:"example",level:3},{value:"What if we want the final value to be the next initial one?",id:"what-if-we-want-the-final-value-to-be-the-next-initial-one",level:3}],d={toc:u};function h(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-the-current-value"},"Understanding the current value"),(0,r.kt)("p",null,"Before digging into how to create animations is essential that we understand how Anima figures out the initial property value to use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We specify both initial and final values when creating the animation"),(0,r.kt)("li",{parentName:"ol"},"Anima infers the missing initial/final value when the animation is created")),(0,r.kt)("h2",{id:"1-all-is-set"},"1. All is set"),(0,r.kt)("p",null,"In this case, we give Anima all the info needed to create the animation, so it doesn't matter when this is created."),(0,r.kt)("h2",{id:"2-the-current-value"},"2. The current value"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When the animation is created matters!"))),(0,r.kt)("p",null,"To understand what this means, let's consider the following example:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Image of a cross Sprite",src:n(6085).Z,width:"2182",height:"778"})),(0,r.kt)("p",null,"In our test scene, we have a Button and a ",(0,r.kt)("strong",{parentName:"p"},"Sprite"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sprite with the initial position of ",(0,r.kt)("inlineCode",{parentName:"li"},"Vector2(490, 280)"),"."),(0,r.kt)("li",{parentName:"ul"},"Button animates the Sprite to a final position of ",(0,r.kt)("inlineCode",{parentName:"li"},"x = 600")," using 1 second.")),(0,r.kt)("p",null,"Now let's consider the following two animations:"),(0,r.kt)("table",{style:{width:"100%"}},(0,r.kt)("tr",{style:{width:"100%"}},(0,r.kt)("th",{style:{width:"50%"}},"Initialise the animation on: `_ready`"),(0,r.kt)("th",{style:{width:"50%"}},"Initialise the animation on: `_on_Button_pressed`")),(0,r.kt)("tr",{style:{width:"100%"}},(0,r.kt)("td",{valign:"top"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"var anima: AnimaNode\n\nfunc _ready():\n  anima = Anima.begin(self) \\\n    .then(\n      Anima.Node($sprite)\n        .anima_position_x(600, 1)\n    )\n\nfunc _on_Button_pressed():\n    anima.play()\n"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"func _on_Button_pressed():\n  Anima.begin(self) \\\n    .then(\n      Anima.Node($sprite)\n        .anima_position_x(600, 1)\n    ).play()\n"))))),(0,r.kt)("p",null,"We only specified the final ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," value, leaving Anima to use the current ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," value as the initial value."),(0,r.kt)("p",null,"Remember we said that Anima uses the initial value when the animation is created?\nLet's play the animations and see what this means:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"_ready"),(0,r.kt)("th",null,"_on_Button_pressed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"Anima animates ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," from ",(0,r.kt)("strong",{parentName:"p"},"490")," ",(0,r.kt)("em",{parentName:"p"},"to")," ",(0,r.kt)("strong",{parentName:"p"},"600"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"490")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," value found when initialising the animation on ",(0,r.kt)("inlineCode",{parentName:"p"},"_ready"),".")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Anima animates ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," from ",(0,r.kt)("strong",{parentName:"p"},"490")," ",(0,r.kt)("em",{parentName:"p"},"to")," ",(0,r.kt)("strong",{parentName:"p"},"600"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"490")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," value found when initialising the animation on ",(0,r.kt)("inlineCode",{parentName:"p"},"_on_Button_pressed"),".")))),(0,r.kt)("p",null,"Both codes behave the same here, but what happens if we re-trigger the animation?"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"_ready"),(0,r.kt)("th",null,"_on_Button_pressed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"We press the button:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anima animates ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," from ",(0,r.kt)("strong",{parentName:"li"},"490")," ",(0,r.kt)("em",{parentName:"li"},"to")," ",(0,r.kt)("strong",{parentName:"li"},"600"),".")),(0,r.kt)("p",null,"Before the animation completes, we press the button again:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anima is animating ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," from ",(0,r.kt)("strong",{parentName:"li"},"490")," ",(0,r.kt)("em",{parentName:"li"},"to")," ",(0,r.kt)("strong",{parentName:"li"},"600"),".")),(0,r.kt)("p",null,"Here the initial value of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is always ",(0,r.kt)("strong",{parentName:"p"},"490")," because we're reusing the same animation we initialised on ",(0,r.kt)("inlineCode",{parentName:"p"},"_ready"),".")),(0,r.kt)("td",null,(0,r.kt)("p",null,"We press the button:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anima animates ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," from ",(0,r.kt)("strong",{parentName:"li"},"490")," ",(0,r.kt)("em",{parentName:"li"},"to")," ",(0,r.kt)("strong",{parentName:"li"},"600"),".")),(0,r.kt)("p",null,"Before the animation completes, we press the button again:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anima is animating ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," from ",(0,r.kt)("strong",{parentName:"li"},"??")," ",(0,r.kt)("em",{parentName:"li"},"to")," ",(0,r.kt)("strong",{parentName:"li"},"600"),".")),(0,r.kt)("p",null,"Here the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," value depends on when we re-trigger the animation again. If we trigger the animation again once it\nhas completed, we will have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial ",(0,r.kt)("inlineCode",{parentName:"li"},"x = 600")),(0,r.kt)("li",{parentName:"ul"},"Final ",(0,r.kt)("inlineCode",{parentName:"li"},"x = 600"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x")," is calculated when the animation is created and, in this case, matches with the final value. If we re-trigger the animation before\nit reaches the final ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," position, and then the initial value will be a number between ",(0,r.kt)("strong",{parentName:"p"},"490")," and ",(0,r.kt)("strong",{parentName:"p"},"600"),".")))),(0,r.kt)("p",null,"As we can see, when the animation is initialised matters!\nThis is true especially if we use built-in animations or animation frames, where positions are specified as relative or the current value."),(0,r.kt)("h2",{id:"loop-strategy-for-relative-data"},"Loop strategy for relative data"),(0,r.kt)("p",null,"Loops behave in the same way. By default, the initial value is set when the loop animation is initialised, for example:"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"func _ready():\n  anima = Anima.begin(self) \\\n    .then(\n      Anima.Node($sprite)\n        .anima_relative_position_x(100, 1)\n    )\n\nfunc _on_Button_pressed():\n    anima.loop()\n")),(0,r.kt)("p",null,"In this case Anima loops the Sprite ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," position from ",(0,r.kt)("strong",{parentName:"p"},"490")," to ",(0,r.kt)("strong",{parentName:"p"},"490 + 100 = 590"),"."),(0,r.kt)("h3",{id:"what-if-we-want-the-final-value-to-be-the-next-initial-one"},"What if we want the final value to be the next initial one?"),(0,r.kt)("p",null,"Simple, by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/anima-node/#set_loop_strategy"},"set_loop_strategy"),"."),(0,r.kt)("p",null,"This method tells Anima what to do when a loop completes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enum LOOP_STRATEGY {\n   USE_EXISTING_RELATIVE_DATA,\n   RECALCULATE_RELATIVE_DATA,\n}\n")),(0,r.kt)("p",null,"Anima uses ",(0,r.kt)("inlineCode",{parentName:"p"},"LOOP.USE_EXISTING_RELATIVE_DATA")," by default so that we can change the behaviour with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func _ready():\n  anima = Anima.begin(self) \\\n    .set_loop_strategy(Anima.LOOP_STRATEGY.RECALCULATE_RELATIVE_DATA) \\\n    .then(\n      Anima.Node($sprite)\n        .anima_relative_position_x(100, 1)\n    )\n\nfunc _on_Button_pressed():\n    anima.loop()\n")),(0,r.kt)("p",null,"When we play this animation, the Sprite ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," position will be animated indefinitely as the starting point will get updated at each loop."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This method re-calculates only relative data!"))))}h.isMDXComponent=!0},6085:function(e,t,n){t.Z=n.p+"assets/images/fundamentals-cross-55301c3c1a74a5c796d04a2f196a8315.png"}}]);