"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{3371:function(t,e,n){n.d(e,{Z:function(){return i}});let r={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function i(t={}){let e,n,o,u,c;let l=0,s=!1,a=!1;function f(){if(o||s)return;n.emit("autoScroll:play");let t=n.internalEngine(),{ownerWindow:r}=t;l=r.setTimeout(()=>{t.scrollBody=function(t){let{location:r,previousLocation:i,offsetLocation:o,target:u,scrollTarget:c,index:l,indexPrevious:s,limit:{reachedMin:a,reachedMax:f,constrain:p},options:{loop:g}}=t,m="forward"===e.direction?-1:1,h=()=>E,y=0,v=0,w=r.get(),b=0,x=!1,E={direction:()=>v,duration:()=>-1,velocity:()=>y,settled:()=>x,seek:function(){i.set(r),y=m*e.speed,w+=y,r.add(y),u.set(r),v=Math.sign(w-b),b=w;let t=c.byDistance(0,!1).index;l.get()!==t&&(s.set(l.get()),l.set(t),n.emit("select"));let h="forward"===e.direction?a(o.get()):f(o.get());if(!g&&h){x=!0;let t=p(r.get());r.set(t),u.set(r),d()}return E},useBaseFriction:h,useBaseDuration:h,useFriction:h,useDuration:h};return E}(t),t.animation.start()},u),s=!0}function d(){if(o||!s)return;n.emit("autoScroll:stop");let t=n.internalEngine(),{ownerWindow:e}=t;t.scrollBody=c,e.clearTimeout(l),l=0,s=!1}function p(){a||d()}function g(){a||v()}function m(){a=!0,d()}function h(){a=!1,f()}function y(){n.off("settle",y),f()}function v(){n.on("settle",y)}return{name:"autoScroll",options:t,init:function(l,s){n=l;let{mergeOptions:a,optionsAtMedia:y}=s,v=a(r,i.globalOptions);if(e=y(a(v,t)),n.scrollSnapList().length<=1)return;u=e.startDelay,o=!1,c=n.internalEngine().scrollBody;let{eventStore:w}=n.internalEngine(),b=!!n.internalEngine().options.watchDrag,x=function(t,e){let n=t.rootNode();return e&&e(n)||n}(n,e.rootNode);b&&n.on("pointerDown",p),b&&!e.stopOnInteraction&&n.on("pointerUp",g),e.stopOnMouseEnter&&w.add(x,"mouseenter",m),e.stopOnMouseEnter&&!e.stopOnInteraction&&w.add(x,"mouseleave",h),e.stopOnFocusIn&&n.on("slideFocusStart",d),e.stopOnFocusIn&&!e.stopOnInteraction&&w.add(n.containerNode(),"focusout",f),e.playOnInit&&f()},destroy:function(){n.off("pointerDown",p).off("pointerUp",g).off("slideFocusStart",d).off("settle",y),d(),o=!0,s=!1},play:function(t){void 0!==t&&(u=t),f()},stop:function(){s&&d()},reset:function(){s&&(d(),v())},isPlaying:function(){return s}}}i.globalOptions=void 0},9467:function(t,e,n){n.d(e,{Z:function(){return L}});var r=n(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function l(t){return"string"==typeof t}function s(t){return"boolean"==typeof t}function a(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function g(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function h(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function w(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function b(t=0,e=0){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function x(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function E(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=null,o=!1;return{clear:function(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){if(o)return;let u=Math.round(100*t.direction(e))/100;u!==i&&(r.transform=n(u),i=u)},toggleActive:function(t){o=!t}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function O(t,e,n){let r,i,o,u,L;let D=t.ownerDocument,k=D.defaultView,I=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=a(i)&&a(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(k),M=(L=[],{init:function(t,e){return(L=e.filter(({options:t})=>!1!==I.optionsAtMedia(t).active)).forEach(e=>e.init(t,I)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){L=L.filter(t=>t.destroy())}}),B=w(),F=function(){let t,e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n},clear:function(){e={}}};return n}(),{mergeOptions:A,optionsAtMedia:W,optionsMediaQueries:N}=I,{on:P,off:T,emit:H}=F,z=!1,R=A(S,O.globalOptions),j=A(R),V=[];function C(e,n){!z&&(j=W(R=A(R,e)),V=n||V,function(){let{container:e,slides:n}=j;o=(l(e)?t.querySelector(e):e)||t.children[0];let r=l(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let a,S;let{align:O,axis:L,direction:D,startIndex:k,loop:I,duration:M,dragFree:B,dragThreshold:F,inViewThreshold:A,slidesToScroll:W,skipSnaps:N,containScroll:P,watchResize:T,watchSlides:H,watchDrag:z,watchFocus:R}=o,j={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},V=j.measure(e),C=n.map(j.measure),X=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(L,D),$=X.measureSize(V),Y={measure:function(t){return t/100*$}},U=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return l(t)?n[t](r):t(e,r,i)}}}(O,$),q=!I&&!!P,{slideSizes:_,slideSizesWithGaps:G,startGap:J,endGap:Z}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:l}=t,s=n[0]&&i,a=function(){if(!s)return 0;let t=n[0];return f(e[c]-t[c])}(),d=s?parseFloat(o.getComputedStyle(g(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===m(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+a}).map(f);return{slideSizes:p,slideSizesWithGaps:h,startGap:a,endGap:d}}(X,V,C,n,I||!!P,i),K=function(t,e,n,r,i,o,u,l,s){let{startEdge:a,endEdge:d,direction:h}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,s)=>{let p=g(n)||0,y=c===m(t),v=i[a]-o[p][a],w=i[a]-o[c][d],b=r||0!==p?0:h(u),x=f(w-(!r&&y?h(l):0)-(v+b));return s&&x>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(X,$,W,I,V,C,J,Z,0),{snaps:Q,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,l=c(r).map(t=>g(t)[u]-t[0][o]).map(f).map(e.measure),s=r.map(t=>n[o]-t[o]).map(t=>-f(t)),a=c(s).map(t=>t[0]).map((t,e)=>t+l[e]);return{snaps:s,snapsAligned:a}}(X,U,V,C,K),te=-g(Q)+g(G),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,i){let o=b(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===m(n);return e?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=g(u);return b(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}($,te,tt,P,0),ti=q?tn:tt,{limit:to}=function(t,e,n){let r=e[0];return{limit:b(n?r-t:g(e),r)}}(te,ti,I),tu=function t(e,n,r){let{constrain:i}=b(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function l(){return t(e,u,r)}let s={get:function(){return u},set:function(t){return u=c(t),s},add:function(t){return l().set(u+t)},clone:l};return s}(m(ti),k,I),tc=tu.clone(),tl=p(n),ts=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},ta=({scrollBody:t,translate:e,location:n,offsetLocation:r,previousLocation:i,scrollLooper:o,slideLooper:u,dragHandler:c,animation:l,eventHandler:s,scrollBounds:a,options:{loop:f}},d)=>{let p=t.settled(),g=!a.shouldConstrain(),m=f?p:p&&g;m&&!c.pointerDown()&&(l.stop(),s.emit("settle")),m||s.emit("scroll");let h=n.get()*d+i.get()*(1-d);r.set(h),f&&(o.loop(t.direction()),u.loop()),e.to(r.get())},tf=function(t,e,n,r){let i=w(),o=1e3/60,u=null,c=0,l=0;function s(t){if(!l)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(),c-=o;r(c/o),l&&(l=e.requestAnimationFrame(s))}function a(){e.cancelAnimationFrame(l),u=null,c=0,l=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){a(),i.clear()},start:function(){l||(l=e.requestAnimationFrame(s))},stop:a,update:n,render:r}}(r,i,()=>ts(tL),t=>ta(tL,t)),td=ti[tu.get()],tp=x(td),tg=x(td),tm=x(td),th=x(td),ty=function(t,e,n,r,i,o){let u=0,c=0,l=i,s=.68,a=t.get(),p=0;function g(t){return l=t,h}function m(t){return s=t,h}let h={direction:function(){return c},duration:function(){return l},velocity:function(){return u},seek:function(){let e=r.get()-t.get(),i=0;return l?(n.set(t),u+=e/l,u*=s,a+=u,t.add(u),i=a-p):(u=0,n.set(r),t.set(r),i=e),c=d(i),p=a,h},settled:function(){return .001>f(r.get()-e.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return g(i)},useFriction:m,useDuration:g};return h}(tp,tm,tg,th,M,0),tv=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function l(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function s(e,r){let i=[e,e+n,e-n];if(!t)return e;if(!r)return l(i);let o=i.filter(t=>d(t)===r);return o.length?l(o):g(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:a,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map((t,e)=>({diff:s(t-r,0),index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:i,distance:r}}(l),p=!t&&o(l);if(!r||p)return{index:a,distance:n};let g=n+s(e[a]-d,0);return{index:a,distance:g}},byIndex:function(t,n){let r=s(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:s}}(I,ti,te,to,th),tw=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,l=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),l&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(tf,tu,tc,ty,tv,th,u),tb=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tx=w(),tE=function(t,e,n,r){let i;let o={},u=null,c=null,l=!1;return{init:function(){i=new IntersectionObserver(t=>{l||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),l=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,A),{slideRegistry:tS}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:l}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,l).map((t,e,n)=>{let r=e===m(n);return e?r?h(m(o)-g(n)[0]+1,g(n)[0]):t:h(g(n[0])+1)}):r}()}}(q,P,ti,tr,K,tl),tO=function(t,e,n,r,i,o,u,l){let a={passive:!0,capture:!0},f=0;function d(t){"Tab"===t.code&&(f=new Date().getTime())}return{init:function(p){l&&(o.add(document,"keydown",d,!1),e.forEach((e,d)=>{o.add(e,"focus",e=>{(s(l)||l(p,e))&&function(e){if(new Date().getTime()-f>10)return;u.emit("slideFocusStart"),t.scrollLeft=0;let o=n.findIndex(t=>t.includes(e));c(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(d)},a)}))}}}(t,n,tS,tw,ty,tx,u,R),tL={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:V,slideRects:C,animation:tf,axis:X,dragHandler:function(t,e,n,r,i,o,u,c,l,a,p,g,m,h,y,x,E,S,O){let{cross:L,direction:D}=t,k=["INPUT","SELECT","TEXTAREA"],I={passive:!1},M=w(),B=w(),F=b(50,225).constrain(h.measure(20)),A={mouse:300,touch:400},W={mouse:500,touch:600},N=y?43:25,P=!1,T=0,H=0,z=!1,R=!1,j=!1,V=!1;function C(t){if(!v(t,r)&&t.touches.length>=2)return X(t);let e=o.readPoint(t),n=o.readPoint(t,L),u=f(e-T),l=f(n-H);if(!R&&!V&&(!t.cancelable||!(R=u>l)))return X(t);let s=o.pointerMove(t);u>x&&(j=!0),a.useFriction(.3).useDuration(.75),c.start(),i.add(D(s)),t.preventDefault()}function X(t){let e=p.byDistance(0,!1).index!==g.get(),n=o.pointerUp(t)*(y?W:A)[V?"mouse":"touch"],r=function(t,e){let n=g.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||f(t)<F?r:E&&e?.5*r:p.byIndex(n.get(),0).distance}(D(n),e),i=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(n,r);R=!1,z=!1,B.clear(),a.useDuration(N-10*i).useFriction(.68+i/50),l.distance(r,!y),V=!1,m.emit("pointerUp")}function $(t){j&&(t.stopPropagation(),t.preventDefault(),j=!1)}return{init:function(t){O&&M.add(e,"dragstart",t=>t.preventDefault(),I).add(e,"touchmove",()=>void 0,I).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",X).add(e,"contextmenu",X).add(e,"click",$,!0);function c(c){(s(O)||O(t,c))&&function(t){let c=v(t,r);V=c,j=y&&c&&!t.buttons&&P,P=f(i.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return k.includes(e)}(t.target)||(z=!0,o.pointerDown(t),a.useFriction(0).useDuration(0),i.set(u),function(){let t=V?n:e;B.add(t,"touchmove",C,I).add(t,"touchend",X).add(t,"mousemove",C,I).add(t,"mouseup",X)}(),T=o.readPoint(t),H=o.readPoint(t,L),m.emit("pointerDown"))}(c)}},destroy:function(){M.clear(),B.clear()},pointerDown:function(){return z}}}(X,t,r,i,th,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(v(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,l=e/u;return u&&!c&&f(l)>.1?l:0},readPoint:o}}(X,i),tp,tf,tw,ty,tv,tu,u,Y,B,F,N,0,z),eventStore:tx,percentOfView:Y,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tm,previousLocation:tg,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,l;let a=[t].concat(r),d=[],p=!1;function g(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(l=g(t),d=r.map(g),c=new ResizeObserver(n=>{(s(o)||o(i,n))&&function(n){for(let o of n){if(p)return;let n=o.target===t,u=r.indexOf(o.target),c=n?l:d[u];if(f(g(n?t:r[u])-c)>=.5){i.reInit(),e.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{a.forEach(t=>c.observe(t))}))},destroy:function(){p=!0,c&&c.disconnect()}}}(e,u,i,n,X,T,j),scrollBody:ty,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=b(.1,.99),l=!1;function s(){return!!(!l&&t.reachedAny(n.get())&&t.reachedAny(e.get()))}return{shouldConstrain:s,constrain:function(i){if(!s())return;let l=t.reachedMin(e.get())?"min":"max",a=f(t[l]-e.get()),d=n.get()-e.get(),p=c.constrain(a/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){l=!t}}}(to,tm,th,ty,Y),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=b(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,to,tm,[tp,tm,tg,th]),scrollProgress:tb,scrollSnapList:ti.map(tb.get),scrollSnaps:ti,scrollTarget:tv,scrollTo:tw,slideLooper:function(t,e,n,r,i,o,u,c,l){let s=p(i),a=g(d(p(i).reverse(),u[0]),n,!1).concat(g(d(s,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-i[e],e)}function d(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function g(i,u,s){let a=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=s?0:-n,i=s?n:0,o=a[e][s?"end":"start"];return{index:e,loopPoint:o,slideLocation:x(-1),translate:E(t,l[e]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return a.every(({index:t})=>.1>=f(s.filter(e=>e!==t),e))},clear:function(){a.forEach(t=>t.translate.clear())},loop:function(){a.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:a}}(X,$,te,_,G,Q,ti,tm,n),slideFocus:tO,slidesHandler:(S=!1,{init:function(t){H&&(a=new MutationObserver(e=>{!S&&(s(H)||H(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){a&&a.disconnect(),S=!0}}),slidesInView:tE,slideIndexes:tl,slideRegistry:tS,slidesToScroll:K,target:th,translate:E(X,e)};return tL}(t,o,u,D,k,n,F);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(j),N([R,...V.map(({options:t})=>t)]).forEach(t=>B.add(t,"change",X)),j.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(q),r.eventHandler.init(q),r.resizeHandler.init(q),r.slidesHandler.init(q),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(q),i=M.init(q,V)))}function X(t,e){let n=U();$(),C(A({startIndex:n},t),e),F.emit("reInit")}function $(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),M.destroy(),B.clear()}function Y(t,e,n){j.active&&!z&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:j.duration),r.scrollTo.index(t,n||0))}function U(){return r.index.get()}let q={canScrollNext:function(){return r.index.add(1).get()!==U()},canScrollPrev:function(){return r.index.add(-1).get()!==U()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){z||(z=!0,B.clear(),$(),F.emit("destroy"),F.clear())},off:T,on:P,emit:H,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:X,rootNode:function(){return t},scrollNext:function(t){Y(r.index.add(1).get(),t,-1)},scrollPrev:function(t){Y(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:Y,selectedScrollSnap:U,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return C(e,n),setTimeout(()=>F.emit("init"),0),q}function L(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,l]=(0,r.useState)(),[s,a]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,f())},[e,f]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&s){O.globalOptions=L.globalOptions;let t=O(s,n.current,i.current);return l(t),()=>t.destroy()}l(void 0)},[s,l]),[a,c]}O.globalOptions=void 0,L.globalOptions=void 0},1906:function(t,e,n){n.d(e,{c:function(){return c}});var r=n(2265),i=n(3078),o=n(5750),u=n(3576);function c(t){let e=(0,u.h)(()=>(0,i.BX)(t)),{isStatic:n}=(0,r.useContext)(o._);if(n){let[,n]=(0,r.useState)(t);(0,r.useEffect)(()=>e.on("change",n),[])}return e}},5447:function(t,e,n){let r,i;n.d(e,{v:function(){return C}});var o=n(3078),u=n(3576),c=n(2265),l=n(2035),s=n(1511);let a=new WeakMap;function f({target:t,contentRect:e,borderBoxSize:n}){var r;null===(r=a.get(t))||void 0===r||r.forEach(r=>{r({target:t,contentSize:e,get size(){return function(t,e){if(e){let{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function d(t){t.forEach(f)}let p=new Set;var g=n(6376),m=n(4438);let h=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:h(),y:h()}),v={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w(t,e,n,r){let i=n[e],{length:o,position:u}=v[e],c=i.current,l=n.time;i.current=t[`scroll${u}`],i.scrollLength=t[`scroll${o}`]-t[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,g.Y)(0,i.scrollLength,i.current);let s=r-l;i.velocity=s>50?0:(0,m.R)(i.current-c,s)}let b=[[0,0],[1,1]],x={start:0,center:.5,end:1};function E(t,e,n=0){let r=0;if(t in x&&(t=x[t]),"string"==typeof t){let e=parseFloat(t);t.endsWith("px")?r=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?r=e/100*document.documentElement.clientWidth:t.endsWith("vh")?r=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(r=e*t),n+r}let S=[0,0];var O=n(8843),L=n(8913);let D={x:0,y:0};var k=n(5414);let I=new WeakMap,M=new WeakMap,B=new WeakMap,F=t=>t===document.documentElement?window:t;function A(t,{container:e=document.documentElement,...n}={}){let o=B.get(e);o||(o=new Set,B.set(e,o));let u=function(t,e,n,r={}){return{measure:()=>(function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!==t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight})(t,r.target,n),update:e=>{w(t,"x",n,e),w(t,"y",n,e),n.time=e,(r.offset||r.target)&&function(t,e,n){let{offset:r=b}=n,{target:i=t,axis:o="y"}=n,u="y"===o?"height":"width",c=i!==t?function(t,e){let n={x:0,y:0},r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let t=r.getBoundingClientRect(),e=(r=r.parentElement).getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else if(r instanceof SVGGraphicsElement){let{x:t,y:e}=r.getBBox();n.x+=t,n.y+=e;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,t):D,l=i===t?{width:t.scrollWidth,height:t.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},s={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let a=!e[o].interpolate,f=r.length;for(let t=0;t<f;t++){let n=function(t,e,n,r){let i=Array.isArray(t)?t:S,o=0;return"number"==typeof t?i=[t,t]:"string"==typeof t&&(i=(t=t.trim()).includes(" ")?t.split(" "):[t,x[t]?t:"0"]),E(i[0],n,r)-E(i[1],e)}(r[t],s[u],l[u],c[o]);a||n===e[o].interpolatorOffsets[t]||(a=!0),e[o].offset[t]=n}a&&(e[o].interpolate=(0,O.s)(e[o].offset,(0,L.Y)(r)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}(t,n,r)},notify:()=>e(n)}}(e,t,y(),n);if(o.add(u),!I.has(e)){let t=()=>{for(let t of o)t.measure()},n=()=>{for(let t of o)t.update(k.frameData.timestamp)},u=()=>{for(let t of o)t.notify()},c=()=>{k.Wi.read(t,!1,!0),k.Wi.read(n,!1,!0),k.Wi.update(u,!1,!0)};I.set(e,c);let l=F(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&M.set(e,"function"==typeof e?(p.add(e),i||(i=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};p.forEach(t=>t(e))},window.addEventListener("resize",i)),()=>{p.delete(e),!p.size&&i&&(i=void 0)}):function(t,e){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(d));let n=(0,s.IG)(t);return n.forEach(t=>{let n=a.get(t);n||(n=new Set,a.set(t,n)),n.add(e),null==r||r.observe(t)}),()=>{n.forEach(t=>{let n=a.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==r||r.unobserve(t)})}}(e,c)),l.addEventListener("scroll",c,{passive:!0})}let c=I.get(e);return k.Wi.read(c,!1,!0),()=>{var t;(0,k.Pn)(c);let n=B.get(e);if(!n||(n.delete(u),n.size))return;let r=I.get(e);I.delete(e),r&&(F(e).removeEventListener("scroll",r),null===(t=M.get(e))||void 0===t||t(),window.removeEventListener("resize",r))}}function W(t,e){let n;let r=()=>{let{currentTime:r}=e,i=(null===r?0:r.value)/100;n!==i&&t(i),n=i};return k.Wi.update(r,!0),()=>(0,k.Pn)(r)}var N=n(9163),P=n(6277);let T=new Map;function H({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),T.has(e)||T.set(e,{});let r=T.get(e);return r[n]||(r[n]=(0,N.t)()?new ScrollTimeline({source:e,axis:n}):function({source:t,container:e,axis:n="y"}){t&&(e=t);let r={value:0},i=A(t=>{r.value=100*t[n].progress},{container:e,axis:n});return{currentTime:r,cancel:i}}({source:e,axis:n})),r[n]}function z(t){return t&&(t.target||t.offset)}var R=n(1534);function j(t,e){(0,l.K)(!!(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let V=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function C({container:t,target:e,layoutEffect:n=!0,...r}={}){let i=(0,u.h)(V);return(n?R.L:c.useEffect)(()=>(j("target",e),j("container",t),function(t,{axis:e="y",...n}={}){let r={axis:e,...n};return"function"==typeof t?2===t.length||z(r)?A(e=>{t(e[r.axis].progress,e)},r):W(t,H(r)):function(t,e){if(t.flatten(),z(e))return t.pause(),A(n=>{t.time=t.duration*n[e.axis].progress},e);{let n=H(e);return t.attachTimeline?t.attachTimeline(n,t=>(t.pause(),W(e=>{t.time=t.duration*e},n))):P.Z}}(t,r)}((t,{x:e,y:n})=>{i.scrollX.set(e.current),i.scrollXProgress.set(e.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...r,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[t,e,JSON.stringify(r.offset)]),i}},5318:function(t,e,n){n.d(e,{q:function(){return f}});var r=n(2265),i=n(3999),o=n(1906),u=n(5750),c=n(1534),l=n(7454),s=n(5414);function a(t){return"number"==typeof t?t:parseFloat(t)}function f(t,e={}){let{isStatic:n}=(0,r.useContext)(u._),f=(0,r.useRef)(null),d=(0,o.c)((0,i.i)(t)?a(t.get()):t),p=(0,r.useRef)(d.get()),g=(0,r.useRef)(()=>{}),m=()=>{let t=f.current;t&&0===t.time&&t.sample(s.frameData.delta),h(),f.current=(0,l.y)({keyframes:[d.get(),p.current],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:g.current})},h=()=>{f.current&&f.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((t,e)=>n?e(t):(p.current=t,g.current=e,s.Wi.update(m),d.get()),h),[JSON.stringify(e)]),(0,c.L)(()=>{if((0,i.i)(t))return t.on("change",t=>d.set(a(t)))},[d]),d}},3812:function(t,e,n){n.d(e,{H:function(){return d}});var r=n(8843);let i=t=>t&&"object"==typeof t&&t.mix,o=t=>i(t)?t.mix:void 0;var u=n(1906),c=n(1534),l=n(5414);function s(t,e){let n=(0,u.c)(e()),r=()=>n.set(e());return r(),(0,c.L)(()=>{let e=()=>l.Wi.preRender(r,!1,!0),n=t.map(t=>t.on("change",e));return()=>{n.forEach(t=>t()),(0,l.Pn)(r)}}),n}var a=n(3576),f=n(3078);function d(t,e,n,i){if("function"==typeof t)return function(t){f.S1.current=[],t();let e=s(f.S1.current,t);return f.S1.current=void 0,e}(t);let u="function"==typeof e?e:function(...t){let e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],u=t[1+n],c=t[2+n],l=t[3+n],s=(0,r.s)(u,c,{mixer:o(c[0]),...l});return e?s(i):s}(e,n,i);return Array.isArray(t)?p(t,u):p([t],([t])=>u(t))}function p(t,e){let n=(0,a.h)(()=>[]);return s(t,()=>{n.length=0;let r=t.length;for(let e=0;e<r;e++)n[e]=t[e].get();return e(n)})}}}]);