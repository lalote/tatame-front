(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Fighters"],{"1ebe":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",[e("v-layout",{staticStyle:{padding:"30px"},attrs:{row:"",wrap:"",color:"transparent","justify-center":""}},t._l(t.info,function(a){return e("v-flex",{key:a.url_photo,staticStyle:{padding:"20px"},attrs:{xs12:"",sm6:"",md4:""}},[e("v-card",{staticClass:"mx-auto",staticStyle:{"border-radius":"5px"},attrs:{hover:"",round:"",color:"#739E82",dark:"","max-width":"400"}},[e("v-card-title",[e("v-icon",{attrs:{large:"",left:""}},[t._v("mdi-twitter")]),e("span",{staticClass:"title font-weight-light"},[t._v("\n              "+t._s(a.first_name)+" "+t._s(a.last_name)+"\n              "),a.alias.length>0?e("span",[t._v("("+t._s(a.alias)+")")]):t._e()])],1),e("v-responsive",{staticClass:"headline font-weight-bold"},[e("clazy-load",{attrs:{src:a.url_photo}},[e("transition",{attrs:{name:"fade"}},[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/fighter/"+a.id}},[e("v-img",{attrs:{src:a.url_photo}})],1)],1),e("div",{staticClass:"preloader",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("Cargando Imagen ...")])],1)],1),e("v-card-actions",[e("v-list-tile",{staticClass:"grow"},[e("v-list-tile-avatar",{attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(a.team))])],1)],1)],1)],1)],1)}),1),e("infinite-loading",[e("span",{attrs:{slot:"no-more"},slot:"no-more"}),e("span",{attrs:{slot:"no-results"},slot:"no-results"})]),e("v-alert",{attrs:{value:t.existeError,type:"error"}},[t._v(t._s(t.errorMsg))])],1)},s=[],o=(e("cadf"),e("551c"),e("097d"),e("bc3a")),i=e.n(o),l={data:function(){return{info:null,existeError:!1,errorMsg:""}},methods:{infiniteHandler:function(t){console.log("scrolll "),t.loaded()}},mounted:function(){var t=this;i.a.get("http://127.0.0.1:3000/api/fighters.json").then(function(a){t.info=a.data}).catch(function(a){t.existeError=!0,t.errorMsg=a}).finally(function(){return t.loading=!1})}},n=l,c=(e("9433"),e("2877")),d=e("6544"),u=e.n(d),p=e("0798"),f=e("b0af"),v=e("99d9"),h=e("12b2"),g=e("0e8f"),y=e("132d"),_=e("adda"),m=e("a722"),C=e("ba95"),w=e("c954"),T=e("5d23"),b=e("6b53"),V=Object(c["a"])(n,r,s,!1,null,null,null);V.options.__file="Fighters.vue";a["default"]=V.exports;u()(V,{VAlert:p["a"],VCard:f["a"],VCardActions:v["a"],VCardTitle:h["a"],VFlex:g["a"],VIcon:y["a"],VImg:_["a"],VLayout:m["a"],VListTile:C["a"],VListTileAvatar:w["a"],VListTileContent:T["a"],VListTileTitle:T["b"],VResponsive:b["a"]})},9433:function(t,a,e){"use strict";var r=e("d4f6"),s=e.n(r);s.a},d4f6:function(t,a,e){}}]);
//# sourceMappingURL=Fighters.0e83e5ad.js.map