(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,u){l.exports=u("zUnb")},zUnb:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("s7LF"),o=function(){function l(l){this._builder=l,this.update=new t.j}return l.prototype.ngOnInit=function(){this.initForm()},l.prototype.submit=function(){this.form.invalid||(this.update.emit(this.form.value.estimate),this.form.markAsPristine())},l.prototype.initForm=function(){this.form=this._builder.group({estimate:[this.defaultEstimateValue,e.n.required]})},l}(),r=function(){function l(l){this._productSvc=l,this.estimateValue=4e4,this.perPage=2}return l.prototype.ngOnInit=function(){this.products=this._productSvc.products.sort((function(l,n){return l.mileage-n.mileage}))},l.prototype.estimateChange=function(l){this.estimateValue=l,this.perPage=2},l.prototype.showMore=function(){this.perPage+=2},l}(),i=function(){},a=function(){function l(){}return l.prototype.transform=function(l,n,u){return this.getLeftArray(l,n,u).concat(this.getRightArray(l,n,u))},l.prototype.getLeftArray=function(l,n,u){var t=l.filter((function(l){return l.mileage<n}));return u/2>t.length?t:t.splice(t.length-u/2,u/2)},l.prototype.getRightArray=function(l,n,u){var t=l.filter((function(l){return l.mileage>=n}));return u/2>t.length?t:t.splice(0,u/2)},l}(),c=function(){},b=function(l){this.productSvc=l},s=t.eb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.xb(2,[(l()(),t.gb(0,0,null,null,1,"div",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.vb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.product.label)}))}var f=u("SVse"),g=t.eb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.xb(2,[(l()(),t.gb(0,0,null,null,13,"form",[["class","input-group mb-3"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.qb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.qb(l,2).onReset()&&e),"submit"===n&&(e=!1!==o.submit()&&e),e}),null,null)),t.fb(1,16384,null,0,e.r,[],null,null),t.fb(2,540672,null,0,e.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.tb(2048,null,e.b,null,[e.f]),t.fb(4,16384,null,0,e.k,[[4,e.b]],null,null),(l()(),t.gb(5,0,null,null,6,"input",[["class","form-control mr-3"],["formControlName","estimate"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.qb(l,6)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.qb(l,6).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.qb(l,6)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.qb(l,6)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.qb(l,7).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.qb(l,7).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.qb(l,7).onTouched()&&e),e}),null,null)),t.fb(6,16384,null,0,e.c,[t.v,t.h,[2,e.a]],null,null),t.fb(7,16384,null,0,e.l,[t.v,t.h],null,null),t.tb(1024,null,e.h,(function(l,n){return[l,n]}),[e.c,e.l]),t.fb(9,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.h],[2,e.q]],{name:[0,"name"]},null),t.tb(2048,null,e.i,null,[e.e]),t.fb(11,16384,null,0,e.j,[[4,e.i]],null,null),(l()(),t.gb(12,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.vb(-1,null,["Update"]))],(function(l,n){l(n,2,0,n.component.form),l(n,9,0,"estimate")}),(function(l,n){var u=n.component;l(n,0,0,t.qb(n,4).ngClassUntouched,t.qb(n,4).ngClassTouched,t.qb(n,4).ngClassPristine,t.qb(n,4).ngClassDirty,t.qb(n,4).ngClassValid,t.qb(n,4).ngClassInvalid,t.qb(n,4).ngClassPending),l(n,5,0,t.qb(n,11).ngClassUntouched,t.qb(n,11).ngClassTouched,t.qb(n,11).ngClassPristine,t.qb(n,11).ngClassDirty,t.qb(n,11).ngClassValid,t.qb(n,11).ngClassInvalid,t.qb(n,11).ngClassPending),l(n,12,0,u.form.pristine||u.form.invalid)}))}var m,h=((m=function(){function l(){this._products=[{mileage:1e4,label:"10000 mileage service"},{mileage:3e4,label:"30000 mileage service"},{mileage:5e4,label:"50000 mileage service"},{mileage:7e4,label:"70000 mileage service"},{mileage:8e4,label:"80000 mileage service"}]}return Object.defineProperty(l.prototype,"products",{get:function(){return this._products},enumerable:!0,configurable:!0}),l}()).ngInjectableDef=t.Bb({factory:function(){return new m},token:m,providedIn:"root"}),m),v=t.eb({encapsulation:0,styles:[[""]],data:{}});function y(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,1,"app-product",[],null,null,null,p,s)),t.fb(1,49152,null,0,i,[],{product:[0,"product"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function q(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,1,"button",[["class","btn btn-primary btn-sm mt-3"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showMore()&&t),t}),null,null)),(l()(),t.vb(-1,null,["show more"]))],null,null)}function w(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.V(16777216,null,null,1,null,y)),t.fb(2,278528,null,0,f.c,[t.D,t.A,t.m],{ngForOf:[0,"ngForOf"]},null),(l()(),t.V(16777216,null,null,1,null,q)),t.fb(4,16384,null,0,f.d,[t.D,t.A],{ngIf:[0,"ngIf"]},null),(l()(),t.V(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,n.context.ngIf),l(n,4,0,n.context.ngIf.length!==u.products.length)}),null)}function C(l){return t.xb(0,[t.rb(0,a,[]),(l()(),t.gb(1,0,null,null,8,"div",[["class","card"],["style","width: 18rem;"]],null,null,null,null,null)),(l()(),t.gb(2,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.gb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t.vb(-1,null,["Mileage (estimate)"])),(l()(),t.gb(5,0,null,null,1,"app-mileage-estimate-form",[],null,[[null,"update"]],(function(l,n,u){var t=!0;return"update"===n&&(t=!1!==l.component.estimateChange(u)&&t),t}),d,g)),t.fb(6,114688,null,0,o,[e.d],{defaultEstimateValue:[0,"defaultEstimateValue"]},{update:"update"}),(l()(),t.V(16777216,null,null,2,null,w)),t.fb(8,16384,null,0,f.d,[t.D,t.A],{ngIf:[0,"ngIf"]},null),t.sb(9,3)],(function(l,n){var u=n.component;l(n,6,0,u.estimateValue);var e=t.wb(n,8,0,l(n,9,0,t.qb(n,0),u.products,u.estimateValue,u.perPage));l(n,8,0,e)}),null)}var x=t.eb({encapsulation:0,styles:[[""]],data:{}});function P(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,1,"app-product",[],null,null,null,p,s)),t.fb(1,49152,null,0,i,[],{product:[0,"product"]},null)],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function V(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,8,"div",[["class","d-flex mt-5"]],null,null,null,null,null)),(l()(),t.gb(1,0,null,null,5,"div",[["class","card mr-5 mb-auto"],["style","width: 18rem;"]],null,null,null,null,null)),(l()(),t.gb(2,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.gb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),t.vb(-1,null,["default values (just for testing)"])),(l()(),t.V(16777216,null,null,1,null,P)),t.fb(6,278528,null,0,f.c,[t.D,t.A,t.m],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(7,0,null,null,1,"app-mileage-card",[],null,null,null,C,v)),t.fb(8,114688,null,0,r,[h],null,null)],(function(l,n){l(n,6,0,n.component.productSvc.products),l(n,8,0)}),null)}var I=t.cb("app-root",b,(function(l){return t.xb(0,[(l()(),t.gb(0,0,null,null,1,"app-root",[],null,null,null,V,x)),t.fb(1,49152,null,0,b,[h],null,null)],null,null)}),{},{},[]),O=u("cUpR"),_=t.db(c,[b],(function(l){return t.ob([t.pb(512,t.g,t.O,[[8,[I]],[3,t.g],t.p]),t.pb(5120,t.o,t.ab,[[3,t.o]]),t.pb(4608,f.f,f.e,[t.o,[2,f.j]]),t.pb(5120,t.W,t.bb,[t.r]),t.pb(4608,t.f,t.f,[]),t.pb(5120,t.a,t.X,[]),t.pb(5120,t.m,t.Y,[]),t.pb(5120,t.n,t.Z,[]),t.pb(4608,O.b,O.k,[f.b]),t.pb(6144,t.y,null,[O.b]),t.pb(4608,O.e,O.g,[]),t.pb(5120,O.c,(function(l,n,u,t,e,o,r,i){return[new O.i(l,n,u),new O.n(t),new O.m(e,o,r,i)]}),[f.b,t.r,t.t,f.b,f.b,O.e,t.P,[2,O.f]]),t.pb(4608,O.d,O.d,[O.c,t.r]),t.pb(135680,O.l,O.l,[f.b]),t.pb(4608,O.j,O.j,[O.d,O.l,t.a]),t.pb(6144,t.w,null,[O.j]),t.pb(6144,O.o,null,[O.l]),t.pb(4608,t.B,t.B,[t.r]),t.pb(4608,e.p,e.p,[]),t.pb(4608,e.d,e.d,[]),t.pb(1073742336,f.a,f.a,[]),t.pb(1024,t.i,O.p,[]),t.pb(1024,t.b,(function(l){return[O.q(l)]}),[[2,t.q]]),t.pb(512,t.c,t.c,[[2,t.b]]),t.pb(131584,t.e,t.e,[t.r,t.P,t.l,t.i,t.g,t.c]),t.pb(1073742336,t.d,t.d,[t.e]),t.pb(1073742336,O.a,O.a,[[3,O.a]]),t.pb(1073742336,e.o,e.o,[]),t.pb(1073742336,e.g,e.g,[]),t.pb(1073742336,e.m,e.m,[]),t.pb(1073742336,c,c,[]),t.pb(256,t.N,!0,[])])}));Object(t.H)(),O.h().bootstrapModuleFactory(_).catch((function(l){return console.error(l)}))},zn8P:function(l,n){function u(l){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n}))}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="zn8P"}},[[0,0,5]]]);