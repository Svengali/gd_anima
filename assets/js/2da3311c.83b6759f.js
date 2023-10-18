"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[467],{8416:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(3117),i=(a(7294),a(3905)),o=a(2004);const s={sidebar_position:0},r="Popup animation",l={unversionedId:"node/simple-animation",id:"node/simple-animation",title:"Popup animation",description:"Let's implement the following animation:",source:"@site/tutorials/node/simple-animation.mdx",sourceDirName:"node",slug:"/node/simple-animation",permalink:"/anima/tutorials/node/simple-animation",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Dynamic values",permalink:"/anima/tutorials/basics/dynamic-value"},next:{title:"Use dynamic value",permalink:"/anima/tutorials/node/dynamic-value"}},m={},p=[{value:"The animation",id:"the-animation",level:2},{value:"The Panel",id:"the-panel",level:3},{value:"The Text",id:"the-text",level:3},{value:"The Button",id:"the-button",level:3}],d={toc:p},h="wrapper";function u(e){let{components:t,...s}=e;return(0,i.kt)(h,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"popup-animation"},"Popup animation"),(0,i.kt)("p",null,"Let's implement the following animation:"),(0,i.kt)(o.Z,{controls:!0,url:"/docs/videos/popup.webm",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"As we can see the animation is made of 3 components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Popup panel"),(0,i.kt)("li",{parentName:"ol"},"Text"),(0,i.kt)("li",{parentName:"ol"},"Button")),(0,i.kt)("p",null,"To create the animation in Godot let's consider this basic Hierarchy:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Popup example hierarchy",src:a(2140).Z,width:"443",height:"119"})),(0,i.kt)("p",null,"Before writing any code let's see how the animation is made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The panel opens",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2192 ",(0,i.kt)("strong",{parentName:"li"},"then")," the text is animated",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2192 ",(0,i.kt)("strong",{parentName:"li"},"then")," the button is animated but its starting time is anticipated of about 0.2 seconds")))))),(0,i.kt)("p",null,"In this example the ",(0,i.kt)("em",{parentName:"p"},"Panel")," opening is realized animating the ",(0,i.kt)("inlineCode",{parentName:"p"},"scale:y")," property from ",(0,i.kt)("strong",{parentName:"p"},"0")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"1"),". The ",(0,i.kt)("em",{parentName:"p"},"Label")," uses the ",(0,i.kt)("a",{parentName:"p",href:"/ciao"},"built-in")," ",(0,i.kt)("strong",{parentName:"p"},"typewrite")," animation; while the ",(0,i.kt)("em",{parentName:"p"},"Button")," uses the ",(0,i.kt)("strong",{parentName:"p"},"tada")," one."),(0,i.kt)("p",null,"We want to animate the popup as soon as the scene is open, so let's add our code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"_ready")," function:"),(0,i.kt)("h2",{id:"the-animation"},"The animation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},"func _ready():\n  Anima.begin_single_shot(self)\n")),(0,i.kt)("p",null,"In this case I'm adding an AnimaNode by code, but you could manually add one to the scene; there is no difference and is completely up to you.\nAlso, we can use either ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima/#begin"},"begin")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima/#begin_single_shot"},"begin_single_shot")," without difference in how the animation is created/played. Is completely up to you to decide ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/basics/begin-vs-begin_single_shot"},"which one suits your need"),"."),(0,i.kt)("h3",{id:"the-panel"},"The Panel"),(0,i.kt)("p",null,"Because we're animating a single node we're going to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima/anima-node"},"Anima.Node")," utility class and its ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima-declaration/#anima_scale_y"},"anima_scale_y")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},".then( Anima.Node(self).anima_scale_y(1.0, 0.3).anima_from(0) )\n")),(0,i.kt)("p",null,"The second parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"anima_scale_y")," indicates the duration in seconds, and in this case is ",(0,i.kt)("strong",{parentName:"p"},"0.3 seconds"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We have manually specified the ",(0,i.kt)("strong",{parentName:"p"},"from")," value because, if omitted, Anima would use the ",(0,i.kt)("inlineCode",{parentName:"p"},"scale:y")," value we have ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/basics/fundamentals"},"when the animation is created"),".")),(0,i.kt)("h3",{id:"the-text"},"The Text"),(0,i.kt)("p",null,"As we said before the text is animated by using the built-in ",(0,i.kt)("strong",{parentName:"p"},"typewrite")," animation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},'.then( Anima.Node($VBoxContainer/Label).anima_animation("typewrite", 0.01) )\n')),(0,i.kt)("p",null,"Once again we used the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima/anima-node"},"Anima.Node")," utility class because we're animating a single node. While the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima-declaration/#anima_animation"},"anima_animation")," let us specify the name of the animation to use and its duration."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Typewrite"),' is a "special" animation where we specify the duration of animating the single character, instead of the entire animation.')),(0,i.kt)("h3",{id:"the-button"},"The Button"),(0,i.kt)("p",null,"The button animation starts slightly before the text one completes. So, before writing any code let's see how to achieve that:"),(0,i.kt)("p",null,"We could define the animation as parallel, using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima-node/#with-parallel-animations"},"with")," syntax, but because the text animation depends by its length we would need to manually calculate the delay to apply."),(0,i.kt)("p",null,"So, how can we solve this? By using a negative delay :)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdscript"},".then( Anima.Node($VBoxContainer/Button).anima_animation('tada', 0.5 ).anima_delay(-0.1) )\n")),(0,i.kt)("p",null,"Now we don't need to worry about the length of the text as the button is always animated 0.1 second before the previous animation completes!"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If we have a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/anima-declaration/#anima_delay"},"anima_delay")," documentation, we can see that we can also pass a negative number to anticipate the start of a sequential or parallel animation.")))}u.isMDXComponent=!0},2140:function(e,t){t.Z="data:image/png;base64,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"}}]);