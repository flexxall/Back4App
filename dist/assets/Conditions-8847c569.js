import{j as a}from"./index-32bedc2d.js";const r=e=>{const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=new Date(e.weekDay*1e3).getDay();let d=t[n];return a.jsxs(a.Fragment,{children:[a.jsx("div",{children:d}),a.jsx("img",{className:"mx-auto",src:`https://openweathermap.org/img/wn/${e.weatherType}.png`,alt:`${e.weatherDesc}`}),a.jsxs("div",{children:[Math.round(e.min),"°"," ",Math.round(e.max),"°"]})]})};export{r as default};
