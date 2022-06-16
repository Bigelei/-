(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Message"],{"067b":function(t,e,n){},26260:function(t,e,n){"use strict";n("c7a4")},"367e":function(t,e,n){"use strict";n("067b")},"684a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-area-container"},[n("DataFrom",t._g({},t.$listeners)),n("h3",[t._v(t._s(t.title))]),n("span",[t._v(t._s(t.subTilte))]),n("DataList",{attrs:{list:t.list}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form-item"},[n("div",{staticClass:"input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),n("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),n("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),n("div",{staticClass:"form-item"},[n("div",{staticClass:"text-area"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),n("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),n("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),n("div",{staticClass:"form-item"},[n("div",{staticClass:"button-area"},[n("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},s=[],o={data:function(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit:function(){var t=this;this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,(function(e){t.$showMessage({content:e,type:"success",duration:1e3,container:t.$refs.form,callback:function(){t.isSubmiting=!1,t.formData.nickname="",t.formData.content=""}})})))}}},c=o,u=(n("fdb2"),n("2877")),l=Object(u["a"])(c,i,s,!1,null,"2e19f3b7",null),f=l.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return n("li",{key:e.id},[n("Avatar",{attrs:{url:e.avatar,size:40}}),n("div",{staticClass:"data"},[n("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),n("div",{staticClass:"content"},[t._v(t._s(e.content))]),n("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},d=[],h=n("77c0"),p=n("ed08"),v={components:{Avatar:h["a"]},props:{list:{type:Array,default:function(){return[]}}},methods:{formatDate:p["b"]}},g=v,b=(n("367e"),Object(u["a"])(g,m,d,!1,null,"39031538",null)),w=b.exports,_={components:{DataFrom:f,DataList:w},props:{title:{type:String,default:""},subTilte:{type:String,default:""},list:{type:Array,default:function(){}},isListLoading:{type:Boolean,default:!1}}},S=_,D=(n("26260"),Object(u["a"])(S,a,r,!1,null,null,null));e["a"]=D.exports},"8fc4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"messageContainer",staticClass:"message-container"},[n("MessageArea",{attrs:{title:"留言板",subTitle:"("+t.data.total+")",isListLoading:t.isLoading,list:t.data.rows},on:{submit:t.handleSubmit}})],1)},r=[],i=(n("99af"),n("96cf"),n("1da1")),s=n("684a"),o=n("e128"),c=n("0c6d");function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,t.next=4,c["a"].get("/api/message",{params:{page:e,limit:n}});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].post("/api/message",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}var d=n("f119"),h={components:{MessageArea:s["a"]},data:function(){return{page:1,limit:10}},mixins:[Object(o["a"])({total:0,rows:[]}),Object(d["a"])("messageContainer")],created:function(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed:function(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore:function(){return this.data.rows.length<this.data.total}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u(t.page,t.limit));case 1:case"end":return e.stop()}}),e)})))()},handleScroll:function(t){if(!this.isLoading&&t){var e=100,n=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);n<=e&&this.fetchMore()}},fetchMore:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasMore){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,t.page++,e.next=6,t.fetchData();case 6:n=e.sent,t.data.total=n.total,t.data.rows=t.data.rows.concat(n.rows),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},handleSubmit:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,f(t);case 2:r=a.sent,e("感谢您的留言"),n.data.rows.unshift(r);case 5:case"end":return a.stop()}}),a)})))()}}},p=h,v=(n("948c"),n("2877")),g=Object(v["a"])(p,a,r,!1,null,"4b83dbd7",null);e["default"]=g.exports},"914f":function(t,e,n){},"948c":function(t,e,n){"use strict";n("cd80")},c7a4:function(t,e,n){},cd80:function(t,e,n){},e128:function(t,e,n){"use strict";n("96cf");var a=n("1da1");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{data:function(){return{data:t,isLoading:!0}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()}}}},f119:function(t,e,n){"use strict";e["a"]=function(t){return{mounted:function(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy:function(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll:function(e){this.$refs[t].scrollTop=e},handleMainScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}},fdb2:function(t,e,n){"use strict";n("914f")}}]);
//# sourceMappingURL=Message.12a7261f.js.map