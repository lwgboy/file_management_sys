(function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"91e2b44a"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"2ce1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.showingCom,{tag:"component"}),n("button",{attrs:{type:"button"},on:{click:function(t){e.showingCom="Login"}}},[e._v("登陆界面")]),n("button",{attrs:{type:"button"},on:{click:function(t){e.showingCom="Upload"}}},[e._v("上传界面")]),n("button",{attrs:{type:"button"},on:{click:function(t){e.showingCom="Register"}}},[e._v("登陆界面")])],1)},a=[],i=n("96eb"),s=n.n(i);s.a.mock("/api/news","get",{"data|10":[{"id|+1":1,"title|+1":s.a.Random.cword(8,20),"image|+1":s.a.Random.image("200*100",s.a.Random.color()),"date|+1":s.a.Random.date("yyyy-MM-dd")}]}),s.a.mock("/user/login.do","post",(function(e){return console.log(e),{status:200,message:"上传成功"}}));var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("login")])])])},u=[],c=n("bc3a"),p=n.n(c);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return v(e,t,n,o)}function v(e,t,n,o){var r={url:e,method:t.toLowerCase(),data:n};return p()(r).then((function(e){return n}))}var m={name:"Login",data:function(){return{email:"",password:"",domain:""}},methods:{login:function(){d("http://localhost:8081/user/login.do","post",{email:this.email,password:this.password}).then((function(e){console.log()}))}}},f=m,h=n("2877"),g=Object(h["a"])(f,l,u,!1,null,"cccaacec",null),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("input",{attrs:{type:"file"},on:{change:function(t){return e.getFile(t)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){return e.fileUpload(t)}}},[e._v("Upload")])])])},w=[],y={data:function(){return{file:""}},name:"Upload",methods:{getFile:function(e){this.file=e.target.files[0],console.log(this.file)},fileUpload:function(e){var t=new FormData;t.append("file",this.file),d("http://localhost:8081/file/upload","post",t).then((function(e){console.log(e)}))}}},k=y,j=Object(h["a"])(k,_,w,!1,null,null,null),x=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){return e.sendEmail()}}},[e._v("send verification email")]),n("br"),n("br"),n("input",{attrs:{type:"checkbox",name:"sex",value:"male"}}),e._v("male "),n("input",{attrs:{type:"checkbox",name:"sex",value:"female"}}),e._v("female "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.domain,expression:"domain"}],attrs:{type:"text",placeholder:"domain"},domProps:{value:e.domain},on:{input:function(t){t.target.composing||(e.domain=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationCode,expression:"verificationCode"}],attrs:{type:"text",placeholder:"verificationCode"},domProps:{value:e.verificationCode},on:{input:function(t){t.target.composing||(e.verificationCode=t.target.value)}}}),n("br"),n("br"),n("button",{attrs:{type:"button"},on:{click:function(t){return e.register()}}},[e._v("register")])])])},E=[],O={name:"Register",data:function(){return{email:"",password:"",domain:"",verificationCode:""}},methods:{sendEmail:function(){d("http://localhost:8081/user/send","get",{email:this.email}).then((function(e){console.log(e)}))},register:function(){d("http://localhost:8081/user/register.do","post",{email:this.email,gendet:this.gender,password:this.password,domain:this.domain,verificationCode:this.verificationCode}).then((function(e){console.res()}))}}},P=O,$=(n("bf47"),Object(h["a"])(P,C,E,!1,null,"4078cfab",null)),L=$.exports,R={data:function(){return{showingCom:"Register"}},components:{Upload:x,Login:b,Register:L}},N=R,S=(n("034f"),Object(h["a"])(N,r,a,!1,null,null,null)),M=S.exports,T=(n("d3b7"),n("8c4f")),U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},F=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],A={name:"HelloWorld",props:{msg:String}},D=A,I=(n("b2a1"),Object(h["a"])(D,H,W,!1,null,"a87ea5ee",null)),J=I.exports,V={name:"Home",components:{HelloWorld:J}},q=V,z=Object(h["a"])(q,U,F,!1,null,null,null),Y=z.exports;o["a"].use(T["a"]);var B=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new T["a"]({mode:"history",base:"",routes:B}),K=G,Q=n("2f62");o["a"].use(Q["a"]);var X=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,o["a"].$axios=p.a,new o["a"]({router:K,store:X,render:function(e){return e(M)}}).$mount("#app")},"85ec":function(e,t,n){},"86bb":function(e,t,n){},b2a1:function(e,t,n){"use strict";var o=n("2ce1"),r=n.n(o);r.a},bf47:function(e,t,n){"use strict";var o=n("86bb"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"assets/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8e51717a.js.map