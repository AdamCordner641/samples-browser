!function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/",t(t.s=138)}({138:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=r(139);r.d(t,"options",function(){return e.c}),r.d(t,"app",function(){return e.a}),r.d(t,"renderer",function(){return e.d}),r.d(t,"basicText",function(){return e.b}),r.d(t,"style",function(){return e.f}),r.d(t,"richText",function(){return e.e})},139:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"d",function(){return u}),r.d(t,"b",function(){return d}),r.d(t,"f",function(){return c}),r.d(t,"e",function(){return a});var e=r(16),o=(r.n(e),{backgroundColor:1087931}),i=new e.Application(800,600,o);document.body.appendChild(i.view);var u=i.renderer,d=new e.Text("Basic text in pixi");d.x=30,d.y=90,i.stage.addChild(d);var c={wordWrapWidth:440,wordWrap:!0,dropShadowDistance:6,dropShadowAngle:Math.PI/6,dropShadowBlur:4,dropShadowColor:"#000000",dropShadow:!0,strokeThickness:5,stroke:"#4a1850",fill:["#ffffff","#00ff99"],fontWeight:"bold",fontStyle:"italic",fontSize:36,fontFamily:"Arial"},a=new e.Text("Rich text with a lot of options and across multiple lines",c);a.x=30,a.y=180,i.stage.addChild(a)},16:function(n,t){n.exports=PIXI}});
//# sourceMappingURL=bundle.js.map