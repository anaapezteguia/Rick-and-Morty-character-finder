(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(16),n=c.n(s),i=c(7),l=(c(22),c(14)),j=(c(23),c(2)),o=c.p+"static/media/Rick-and-Morty-logo.de13d484.png",h=(c(24),c(0)),d=function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)("img",{className:"header__img",src:o,title:"Ricky and Morty",alt:"Ricky and Morty"})})})},m=(c(31),function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("small",{className:"footer__small",children:" \xa9 2021. Ana Apeztegu\xeda Mart\xednez"})})}),u=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:"form__label",htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{className:"form__input",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})},b=(c(32),function(e){e.preventDefault()}),O=function(e){return Object(h.jsx)("section",{className:"filters",children:Object(h.jsxs)("form",{onSubmit:b,children:[Object(h.jsx)("h2",{className:"form__title",children:"Search by"}),Object(h.jsx)(u,{handleFilter:e.handleFilter})]})})},x=(c(33),c(34),function(e){return Object(h.jsx)("article",{className:"character",children:Object(h.jsxs)(i.b,{to:"/character-details/".concat(e.character.id),children:[Object(h.jsx)("img",{className:"character__img",src:e.character.image,alt:e.character.name,title:e.character.name}),Object(h.jsxs)("div",{className:"character__wrap",children:[Object(h.jsx)("h3",{className:"character__name",children:e.character.name}),Object(h.jsx)("p",{className:"character__species",children:e.character.species}),Object(h.jsx)("p",{className:"character__species",children:e.character.status})]})]})})}),p=function(e){var t=e.characterList.map((function(e){return Object(h.jsx)("li",{className:"charList__item",children:Object(h.jsx)(x,{character:e})},e.id)}));return Object(h.jsxs)("section",{className:"charList",children:[Object(h.jsx)("h1",{className:"charList__title",children:"Characters"}),Object(h.jsx)("ul",{className:"charList__list",children:t})]})},f=function(e){var t=e.selectedCharacter;return Object(h.jsxs)("section",{children:[Object(h.jsx)("img",{className:"",src:t.image,alt:t.name,title:t.name}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("p",{children:["Name: ",t.name]}),Object(h.jsxs)("p",{children:["Species: ",t.species]}),Object(h.jsxs)("p",{children:["Origin: ",t.origin]}),Object(h.jsxs)("p",{children:["Episodes: ",t.episodes.length]}),Object(h.jsxs)("p",{children:["Dead or alive? ",t.status]})]})]})},_=function(){return fetch("//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,type:e.type,gender:e.gender,origin:e.origin.name,location:e.location.name,image:e.image,episodes:e.episode,created:e.created}}))}))},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),n=Object(l.a)(s,2),i=n[0],o=n[1];Object(a.useEffect)((function(){_().then((function(e){return r(e)}))}),[]);var u=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{}),Object(h.jsxs)("main",{className:"wrapper",children:[Object(h.jsx)(O,{handleFilter:function(e){"name"===e.key&&o(e.value)}}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(p,{characterList:u})}),Object(h.jsx)(j.a,{path:"/character-details/:id",render:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return e.id===t}));return Object(h.jsx)(f,{selectedCharacter:a})}})]})]}),Object(h.jsx)(m,{})]})};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(g,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8d8dd5be.chunk.js.map