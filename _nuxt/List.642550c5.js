import{d as r,a8 as l,I as u,N as n,a6 as p,k as _}from"./entry.0f8e5eee.js";import{u as m,f as d,_ as f}from"./MDCSlot.df559f01.js";const y=()=>({unwrap:m,flatUnwrap:d}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:a,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=a((o.default&&o.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",i.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>t}))])))}}});const v=_(g,[["__scopeId","data-v-34897563"]]);export{v as default};
