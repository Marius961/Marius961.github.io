(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={app:0},a={app:0},s=[];function o(t){return c.p+"js/"+({LikedProducts:"LikedProducts",addProduct:"addProduct",forgotPassword:"forgotPassword",login:"login",register:"register",userProfile:"userProfile"}[t]||t)+"."+{LikedProducts:"0efbbb1b",addProduct:"7c4c925f",forgotPassword:"f53530f0",login:"316966cf",register:"27bb47c5",userProfile:"6cb69eb6"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={addProduct:1,forgotPassword:1,login:1,register:1,userProfile:1};i[t]?e.push(i[t]):0!==i[t]&&r[t]&&e.push(i[t]=new Promise((function(e,r){for(var n="css/"+({LikedProducts:"LikedProducts",addProduct:"addProduct",forgotPassword:"forgotPassword",login:"login",register:"register",userProfile:"userProfile"}[t]||t)+"."+{LikedProducts:"31d6cfe0",addProduct:"5e42dd1b",forgotPassword:"cd41e20c",login:"ecc348cb",register:"8127baa4",userProfile:"d561e259"}[t]+".css",a=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],p.parentNode.removeChild(p),r(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,r[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://marius961.github.io/projects/apiko/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0254":function(t,e,r){"use strict";r("9d99")},"19e6":function(t,e,r){"use strict";r("5bae")},"4a65":function(t,e,r){"use strict";r("8314")},"53ad":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("nav-bar")],1),r("main",[r("router-view")],1),r("app-footer")],1)},a=[],s=r("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"nav-bar",class:{"nav-bar-transparent":t.transparentNav}},[r("div",{staticClass:"nav-content"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}}),r("span",{staticClass:"menu-icon",on:{click:t.toggleMenuVisibility}}),r("div",{staticClass:"actions-container",class:{hide:!t.showNavMenu}},[r("ul",{staticClass:"nav-actions"},[r("li",{directives:[{name:"show",rawName:"v-show",value:!t.hideSellButton,expression:"!hideSellButton"}],staticClass:"sell-btn-container"},[r("router-link",{staticClass:"sell-btn btn-primary",attrs:{to:"/product/add"},nativeOn:{click:function(e){t.showNavMenu=!1}}},[t._v(t._s(t.sellButtonText))])],1),t.isAuthenticated?t._e():r("li",{staticClass:"login-link-container"},[r("router-link",{staticClass:"login-link",attrs:{to:"/login"},nativeOn:{click:function(e){t.showNavMenu=!1}}},[t._v("Login")])],1),t.isAuthenticated?r("li",{staticClass:"user-profile-link-container"},[r("router-link",{staticClass:"user-icon",attrs:{to:"/user/profile",tag:"span"},nativeOn:{click:function(e){t.showNavMenu=!1}}},[t._v(t._s(t.userInitials))])],1):t._e(),r("li",[r("router-link",{staticClass:"liked-products-link",attrs:{to:"/product/liked"},nativeOn:{click:function(e){return t.toggleMenuVisibility(e)}}})],1)])]),t.showSearchBar?r("search-bar"):t._e()],1)])},c=[],u=(r("99af"),r("ac1f"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-bar-container"},[r("ul",{staticClass:"search-bar"},[r("li",{staticClass:"search-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.title,expression:"filters.title"}],attrs:{type:"search",placeholder:"Search products by name"},domProps:{value:t.filters.title},on:{input:function(e){e.target.composing||t.$set(t.filters,"title",e.target.value)}}})]),r("li",{staticClass:"location-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.location,expression:"filters.location"}],attrs:{type:"search",placeholder:"Location"},domProps:{value:t.filters.location},on:{input:function(e){e.target.composing||t.$set(t.filters,"location",e.target.value)}}})]),r("li",{staticClass:"search-btn-container"},[r("button",{on:{click:t.search}},[t._v("SEARCH")])])])])}),l=[],d=r("2f62"),p=r("77c5"),f={name:"SearchBar",mixins:[p["a"]],computed:Object(s["a"])({},Object(d["c"])({getFilters:"getFilters"})),data:function(){return{filters:{title:"",location:""}}},methods:Object(s["a"])(Object(s["a"])({},Object(d["d"])({setFilters:"setFilters"})),{},{search:function(){var t=Object(s["a"])({},this.getFilters);this.setFilters(this.mergeObjects(t,this.filters))}})},h=f,m=(r("4a65"),r("2877")),g=Object(m["a"])(h,u,l,!1,null,"543be4cd",null),b=g.exports,v={name:"NavBar",components:{SearchBar:b},computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])({isAuthenticated:"isAuthenticated",currentUser:"getCurrentUser"})),{},{sellButtonText:function(){return this.showAltButtonText?this.altSellButtonText:this.defaultSellButtonText},userInitials:function(){if(this.isAuthenticated){var t=this.currentUser.displayName,e=t.split(" ");return(null===e||void 0===e?void 0:e.length)>1?e[0].substr(0,1).concat(e[1].substr(0,1)).toUpperCase():1===(null===e||void 0===e?void 0:e.length)?e[0].substr(0,1).toUpperCase():""}}}),data:function(){return{showNavMenu:!1,showSearchBar:!0,transparentNav:!1,showAltButtonText:!1,hideSellButton:!1,defaultSellButtonText:"SELL",altSellButtonText:"+ADD"}},methods:{updateNav:function(t){var e=t.path;switch(e){case"/":this.showAltButtonText=!0;break;default:this.showAltButtonText=!1}var r=t.meta;this.showSearchBar=r.showSearchBar,this.transparentNav=r.transparentNav,this.hideSellButton=r.hideSellButton},toggleMenuVisibility:function(){this.showNavMenu=!this.showNavMenu}},watch:{$route:function(t){this.updateNav(t)}},created:function(){this.updateNav(this.$route)}},w=v,k=(r("89c7"),Object(m["a"])(w,o,c,!1,null,"45721642",null)),P=k.exports,O=r("260b"),x=(r("e71f"),r("ea7b"),r("588e"),{apiKey:"AIzaSyBuj64-3nyMstT1Q-SI14dL5r90iArm6QA",authDomain:"apiko-b2417.firebaseapp.com",databaseURL:"https://apiko-b2417-default-rtdb.europe-west1.firebasedatabase.app",projectId:"apiko-b2417",storageBucket:"apiko-b2417.appspot.com",messagingSenderId:"1055746496516",appId:"1:1055746496516:web:f4e451450610040d677d51"});O["a"].initializeApp(x);var y=O["a"].firestore(),j=O["a"].auth(),C=O["a"].storage().ref(),_=y.collection("products"),L=y.collection("categories"),A=y.collection("likedProducts"),S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"app-footer"},[r("span",[t._v("Copyright © 2021. Privacy Policy.")])])}],N={name:"AppFooter"},B=N,U=(r("19e6"),Object(m["a"])(B,S,F,!1,null,"bdd3a72c",null)),E=U.exports,I={components:{AppFooter:E,NavBar:P},methods:Object(s["a"])({},Object(d["d"])({setUser:"setUser"})),created:function(){this.setUser(j.currentUser)}},T=I,R=Object(m["a"])(T,i,a,!1,null,null,null),$=R.exports,M=(r("d3b7"),r("8c4f")),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("product-list",{attrs:{products:t.products}})],1)},q=[],H=r("b8e5"),V={name:"Home",components:{ProductList:H["a"]},computed:Object(s["a"])({},Object(d["c"])({filters:"getFilters"})),data:function(){return{products:[]}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])({getProducts:"getProducts"})),{},{loadProducts:function(t){var e=this;this.getProducts({filters:t,likedOnly:!1}).then((function(t){e.products=t}))}}),watch:{filters:function(){this.loadProducts(this.filters)}},created:function(){this.loadProducts()}},z=V,J=(r("f917"),Object(m["a"])(z,D,q,!1,null,"05f749df",null)),K=J.exports;n["a"].use(M["a"]);var Q=[{path:"/",name:"Home",component:K,meta:{showSearchBar:!0}},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"b2c5"))},meta:{transparentNav:!0,isAnonymousOnly:!0}},{path:"/register",name:"Register",component:function(){return r.e("register").then(r.bind(null,"8ef1"))},meta:{transparentNav:!0,isAnonymousOnly:!0}},{path:"/password/forgot",name:"ForgotPassword",component:function(){return r.e("forgotPassword").then(r.bind(null,"66e9"))},meta:{transparentNav:!0,isAnonymousOnly:!0}},{path:"/product/add",name:"AddProduct",component:function(){return r.e("addProduct").then(r.bind(null,"c5de"))},meta:{hideSellButton:!0,requireAuth:!0}},{path:"/product/liked",name:"LikedProducts",component:function(){return r.e("LikedProducts").then(r.bind(null,"600e"))},meta:{hideSellButton:!0,requireAuth:!0}},{path:"/user/profile",name:"UserProfile",component:function(){return r.e("userProfile").then(r.bind(null,"4336"))},meta:{requireAuth:!0}}],W=new M["a"]({routes:Q});W.beforeEach((function(t,e,r){var n=j.currentUser,i=t.meta.requireAuth,a=t.meta.isAnonymousOnly;a&&n&&r("/"),i&&!n&&r("/login"),r()}));var G=W,X=(r("96cf"),r("1da1")),Y={state:{user:null},actions:{login:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",j.signInWithEmailAndPassword(e.email,e.password).then((function(e){t.commit("setUser",e.user)})));case 1:case"end":return r.stop()}}),r)})))()},logout:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.signOut();case 2:t.commit("resetUser");case 3:case"end":return e.stop()}}),e)})))()},register:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",j.createUserWithEmailAndPassword(e.email,e.password).then((function(r){return r.user.updateProfile({displayName:e.fullName}).then((function(){t.commit("setUser",j.currentUser)}))})));case 1:case"end":return r.stop()}}),r)})))()},resetPassword:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",j.sendPasswordResetEmail(e));case 1:case"end":return t.stop()}}),t)})))()}},mutations:{resetUser:function(t){t.user=null,G.push("/")},setUser:function(t,e){t.user=null!==e&&void 0!==e&&e.uid?e:null}},getters:{isAuthenticated:function(t){return!!t.user},getCurrentUser:function(t){return t.user}}},Z=(r("c740"),r("4160"),r("d81d"),r("45fc"),r("a434"),r("b0c0"),r("3ca3"),r("159b"),r("ddb0"),r("4de4"),r("2909")),tt={filterProducts:function(t,e){var r=Object(Z["a"])(t),n=null===e||void 0===e?void 0:e.priceFrom,i=null===e||void 0===e?void 0:e.priceTo,a=n>=.1,s=i>0;return(a||s)&&(r=a&&!s?t.filter((function(t){return t.price>=n})):!a&&s?t.filter((function(t){return t.price<=i})):t.filter((function(t){return t.price>=n&&t.price<=i}))),r}},et={state:{filters:{title:"",location:"",categoryId:"",priceFrom:0,priceTo:0}},actions:{addProduct:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.product,i=e.imageFiles,r.abrupt("return",new Promise((function(e,r){var a=t.getters.getCurrentUser;if(!a||!a.uid)throw new Error("Something went wrong. Can not add product.");C.constructor.prototype.putFiles=function(t){var e=this;return Promise.all(t.map((function(t){return e.child(t.name).put(t.data,t.metadata).then((function(t){return t.ref.getDownloadURL()}))})))},C.putFiles(i).then((function(t){n.imageUrls=t;var i=Object(s["a"])({uid:a.uid,createdAt:new Date},n);_.doc().set(i).then((function(){return e()})).catch((function(t){return r(t)}))}))})));case 2:case"end":return r.stop()}}),r)})))()},getProducts:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,i,a,o,c,u,l,d,p,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.filters,i=e.likedOnly,a=_,o=null===n||void 0===n?void 0:n.title,c=null===n||void 0===n?void 0:n.location,u=null===n||void 0===n?void 0:n.categoryId,n&&(o||c||u)&&(o&&(a=a.where("title",">=",o).where("title","<=",o+"")),c&&(a=a.where("location","==",c)),u&&(a=a.where("categoryId","==",u))),!i){r.next=17;break}return r.next=9,t.dispatch("getLikedProductsIds");case 9:if(d=r.sent,null!==d&&void 0!==d&&d.length){r.next=12;break}return r.abrupt("return",[]);case 12:return r.next=14,a.where(O["a"].firestore.FieldPath.documentId(),"in",d).get();case 14:l=r.sent,r.next=20;break;case 17:return r.next=19,a.get();case 19:l=r.sent;case 20:if(!l.empty){r.next=22;break}return r.abrupt("return",[]);case 22:if(p=[],l.forEach((function(t){p.push(Object(s["a"])({id:t.id,isLiked:i},t.data()))})),p=tt.filterProducts(p,n),i||!t.getters.isAuthenticated){r.next=30;break}return r.next=28,t.dispatch("getLikedProductsIds");case 28:f=r.sent,null!==f&&void 0!==f&&f.length&&(p=p.map((function(t){return t.isLiked=f.some((function(e){return e===t.id})),t})));case 30:return r.abrupt("return",p);case 31:case"end":return r.stop()}}),r)})))()},getCategories:function(){return Object(X["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.get();case 2:if(e=t.sent,!e.empty){t.next=5;break}return t.abrupt("return");case 5:return r=[],e.forEach((function(t){r.push(Object(s["a"])({id:t.id},t.data()))})),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))()},likeProduct:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,i,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.dispatch("getLikedProductsIds");case 2:if(n=r.sent,i=t.getters.getCurrentUser,a=A.doc(i.uid),n){r.next=10;break}return r.next=8,a.set({productIds:[e]});case 8:r.next=16;break;case 10:if(s=n.findIndex((function(t){return e===t})),!(s>-1)){r.next=13;break}return r.abrupt("return");case 13:return n.push(e),r.next=16,a.update("productIds",n);case 16:case"end":return r.stop()}}),r)})))()},removeLikedProduct:function(t,e){return Object(X["a"])(regeneratorRuntime.mark((function r(){var n,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.dispatch("getLikedProductsIds");case 2:if(n=r.sent,i=t.getters.getCurrentUser,!n){r.next=10;break}if(a=n.findIndex((function(t){return e===t})),!(a>-1)){r.next=10;break}return n.splice(a,1),r.next=10,A.doc(i.uid).update("productIds",n);case 10:case"end":return r.stop()}}),r)})))()},getLikedProductsIds:function(t){return Object(X["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.getters.getCurrentUser,!r||!r.uid){e.next=10;break}return e.next=4,A.doc(r.uid).get();case 4:if(n=e.sent,n.exists){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",n.data().productIds);case 10:throw new Error("Something went wrong. Can not like product.");case 11:case"end":return e.stop()}}),e)})))()}},mutations:{setFilters:function(t,e){t.filters=Object(s["a"])({},e)}},getters:{getFilters:function(t){return t.filters}}};n["a"].use(d["a"]);var rt,nt=new d["a"].Store({state:{},mutations:{},actions:{},modules:{"authModule ":Y,product:et}}),it=r("1dce"),at=r.n(it);r("c1c3");n["a"].use(at.a),n["a"].config.productionTip=!1,j.onAuthStateChanged((function(){rt||(rt=new n["a"]({router:G,store:nt,render:function(t){return t($)}}).$mount("#app"))}))},"5a81":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("select",{staticClass:"input-base category-select",on:{change:function(e){return t.$emit("change",e)}}},[r("option",{attrs:{value:"",selected:""}},[t._v("Chose category")]),t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name))])}))],2)},i=[],a=r("5530"),s=r("2f62"),o={name:"CategorySelect",data:function(){return{categories:[]}},methods:Object(a["a"])({},Object(s["b"])({getCategories:"getCategories"})),created:function(){var t=this;this.getCategories().then((function(e){t.categories=e})).catch((function(t){console.error(t)}))}},c=o,u=r("2877"),l=Object(u["a"])(c,n,i,!1,null,"66656fb8",null);e["a"]=l.exports},"5bae":function(t,e,r){},"77c5":function(t,e,r){"use strict";e["a"]={methods:{mergeObjects:function(t,e){return Object.assign({},t,e)}}}},8314:function(t,e,r){},"89c7":function(t,e,r){"use strict";r("53ad")},"9d99":function(t,e,r){},af84:function(t,e,r){},b8e5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list-container"},[r("filter-panel"),r("div",{staticClass:"product-list"},t._l(t.products,(function(t){return r("product-card",{key:t.id,attrs:{product:t}})})),1)],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-item bg-white"},[r("div",{staticClass:"product-photo-container"},[r("img",{attrs:{src:t.product.imageUrls.length?t.product.imageUrls[0]:"",alt:""}}),r("a",{staticClass:"like-button",class:{liked:t.product.isLiked},on:{click:t.onLikeClick}})]),r("div",{staticClass:"card-body"},[r("span",{staticClass:"item-name"},[t._v(t._s(t.product.title))]),r("span",{staticClass:"item-price"},[t._v("$"+t._s(t.product.price))])])])},s=[],o=r("5530"),c=r("2f62"),u={name:"ProductCard",computed:Object(o["a"])({},Object(c["c"])({isAuthenticated:"isAuthenticated"})),props:{product:{required:!0}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])({likeProduct:"likeProduct",removeLikedProduct:"removeLikedProduct"})),{},{onLikeClick:function(){this.isAuthenticated?this.product.isLiked?this.removeLikedProduct(this.product.id).then(this.toggleProductLike):this.likeProduct(this.product.id).then(this.toggleProductLike):this.$router.push("/login")},toggleProductLike:function(){this.product.isLiked=!this.product.isLiked}})},l=u,d=(r("f3a3"),r("2877")),p=Object(d["a"])(l,a,s,!1,null,"37483c7f",null),f=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"filter-panel bg-white"},[r("ul",{staticClass:"filter-list"},[r("li",{staticClass:"category-filter"},[r("category-select",{on:{change:function(e){t.filters.categoryId=e.target.value}}})],1),r("li",{staticClass:"price-filter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.priceFrom,expression:"filters.priceFrom"}],staticClass:"input-base",attrs:{type:"text",placeholder:"Price from (USD)"},domProps:{value:t.filters.priceFrom},on:{input:function(e){e.target.composing||t.$set(t.filters,"priceFrom",e.target.value)}}}),r("span",{staticClass:"line"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.priceTo,expression:"filters.priceTo"}],staticClass:"input-base",attrs:{type:"text",placeholder:"Price to (USD)"},domProps:{value:t.filters.priceTo},on:{input:function(e){e.target.composing||t.$set(t.filters,"priceTo",e.target.value)}}})])])])},m=[],g=r("77c5"),b=r("5a81"),v={name:"FilterPanel",components:{CategorySelect:b["a"]},mixins:[g["a"]],computed:Object(o["a"])({},Object(c["c"])({getFilters:"getFilters"})),data:function(){return{filters:{categoryId:"",priceFrom:0,priceTo:0}}},methods:Object(o["a"])(Object(o["a"])({},Object(c["d"])({setFilters:"setFilters"})),{},{updateFilters:function(){var t=Object(o["a"])({},this.getFilters);this.setFilters(this.mergeObjects(t,this.filters))}}),watch:{filters:{handler:function(){this.updateFilters()},deep:!0}}},w=v,k=(r("f4aa"),Object(d["a"])(w,h,m,!1,null,"9541a37e",null)),P=k.exports,O={name:"ProductList",components:{ProductCard:f,FilterPanel:P},props:{products:{required:!0}}},x=O,y=(r("0254"),Object(d["a"])(x,n,i,!1,null,"034817d4",null));e["a"]=y.exports},c1c3:function(t,e,r){},d437:function(t,e,r){},da0f:function(t,e,r){},f3a3:function(t,e,r){"use strict";r("da0f")},f4aa:function(t,e,r){"use strict";r("af84")},f917:function(t,e,r){"use strict";r("d437")}});
//# sourceMappingURL=app.e6c14f91.js.map