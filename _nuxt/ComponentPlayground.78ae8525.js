import{u as m}from"./asyncData.0ec4d7b6.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.a361a14e.js";import f from"./Ellipsis.7d2e64cc.js";import _ from"./ComponentPlaygroundData.dac91a5d.js";import"./TabsHeader.414ad18a.js";import"./ComponentPlaygroundProps.3585a339.js";import"./ProseH4.d3382f0b.js";import"./ProseCodeInline.1a27c170.js";import"./Badge.af116224.js";import"./MDCSlot.52ccd065.js";import"./slot.e0c50a30.js";import"./ProseP.be942a08.js";import"./index.881458f7.js";import"./ComponentPlaygroundSlots.vue.54370ec9.js";import"./ComponentPlaygroundTokens.vue.79a333ae.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-101e6304"]]);export{V as default};
