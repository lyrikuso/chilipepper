(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,t,n){"use strict";(function(e){t.a={data:()=>({nehan:void 0}),props:["context"],mounted(){const e=new Nehan.Document;this.nehan=e},directives:{nehan:{bind(t,n,i){i.context.$nextTick(()=>{if(!i.context.checkHTML(n.value))return null;{const o=n.value.split("\n"),c=e.reduce(o,(e,t)=>e+i.context.compiled({row:t}),"");i.context.nehan.setContent(i.context.wrapper({item:c})),i.context.nehan.setStyle("body",{display:"inline-block",flow:"tb-rl",height:$(t).height()}),i.context.nehan.setStyle(".serif",{"font-family":"'Noto Serif JP', 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'HGP明朝B', sans-serif"}),i.context.nehan.render({onPage:(e,t)=>{$(i.context.$refs.nehan).html(e.element)}})}})}}},computed:{display(){return e.isUndefined(this.context)?"":this.context},wrapper:()=>e.template('<div class="disp-iblock"><%= item %></div>'),compiled:()=>e.template('<h6 class="serif"><%= row %></h6>')},methods:{checkHTML(e){const t=document.createElement("div");return t.innerHTML=e,t.innerHTML===e}}}}).call(this,n(168))},163:function(e,t,n){},183:function(e,t,n){"use strict";var i=n(163);n.n(i).a},191:function(e,t,n){"use strict";n.r(t);var i=n(162).a,o=(n(183),n(6)),c=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("clientOnly",[t("div",{staticClass:"flex"},[t("div",{directives:[{name:"nehan",rawName:"v-nehan",value:this.display,expression:"display"}],ref:"nehan",staticClass:"pull",staticStyle:{height:"90vh"},attrs:{role:"presentation"}})])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);