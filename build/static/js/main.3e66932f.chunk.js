(this.webpackJsonptrelloclone=this.webpackJsonptrelloclone||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),o=c(18),r=c.n(o),i=(c(24),c(12)),l=c.n(i),s=c(15),d=c(10),u=c(19).a.initializeApp({apiKey:"AIzaSyBSTYzFFZTPe_eWrjprqukgJKBGYC8c7dQ",authDomain:"trelloclone01.firebaseapp.com",projectId:"trelloclone01",storageBucket:"trelloclone01.appspot.com",messagingSenderId:"358188859542",appId:"1:358188859542:web:cb7092a4a7a66c369c02b7"}).firestore(),j=c(4),b=function(e){var t=e.title,c=e.description,n=e.closeModal;return Object(j.jsx)("div",{className:"card__modal",children:Object(j.jsxs)("div",{className:"card__modal__body",children:[Object(j.jsxs)("div",{className:"card__modal__head",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("i",{onClick:function(){return n(!1)},className:"fas fa-times-circle"})]}),Object(j.jsx)("p",{children:c})]})})},m=function(e){var t=e.element,c=e.i,a=e.tempData,o=e.index,r=e.actionHandler,i=(e.el,e.id),l=Object(n.useState)(!1),s=Object(d.a)(l,2),u=s[0],m=s[1];return Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsxs)("div",{className:"column__card",children:[Object(j.jsx)("div",{className:"column__card__content",onClick:function(){return m(!0)},children:Object(j.jsx)("h3",{className:"column__card__title",children:null===t||void 0===t?void 0:t.name})}),Object(j.jsxs)("div",{className:"direction__btn__group",children:[o>0&&o<=(null===a||void 0===a?void 0:a.length)-1?Object(j.jsx)("i",{className:"fas fa-arrow-circle-left arrow__left",onClick:function(){return r(i,t,"left")}}):"",o>=0&&o<(null===a||void 0===a?void 0:a.length)-1?Object(j.jsx)("i",{className:"fas fa-arrow-circle-right arrow__right",onClick:function(){return r(i,t,"right")}}):""]})]},c),u&&Object(j.jsx)(b,{title:t.name,description:t.desc,closeModal:function(){return m(!1)}})]})},f=function(e){var t=e.addColumn,c=Object(n.useState)(""),a=Object(d.a)(c,2),o=a[0],r=a[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),s=l[0],u=l[1];return Object(j.jsx)("div",{className:"add__card__form__parent",children:Object(j.jsxs)("form",{className:"add__card__form",onSubmit:function(e){return function(e){e.preventDefault(),t(o,s),u(""),r("")}(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Type Card Title",onChange:function(e){return r(e.target.value)},value:o}),Object(j.jsx)("textarea",{onChange:function(e){return u(e.target.value)},placeholder:"Type Description",value:s,rows:"2"}),Object(j.jsx)("button",{className:"btn btn__submit",children:"Submit"})]})})},p=function(e){var t=e.id,c=e.index,a=e.tempData,o=(e.el,Object(n.useState)(null)),r=Object(d.a)(o,2),i=r[0],l=r[1],s=function(e,t,n,o){if("right"===n){var r=a[c].id,i=a[c+1].id;u.collection("columns").doc(r).collection("cards").doc(e).delete(),u.collection("columns").doc(i).collection("cards").add(t)}if("left"===n){var l=a[c].id,s=a[c-1].id;console.log(s),u.collection("columns").doc(l).collection("cards").doc(e).delete(),u.collection("columns").doc(s).collection("cards").add(t)}};Object(n.useEffect)((function(){u.collection("columns").doc(t).collection("cards").onSnapshot((function(e){var t=[];e.docs.map((function(e){return t.push({id:e.id,data:e.data()})})),l(t)}))}),[]);return Object(j.jsxs)("div",{children:[i&&i.map((function(e,t){return Object(j.jsx)(m,{element:e.data,id:e.id,i:t,tempData:a,index:c,actionHandler:function(e,t,c){return s(e,t,c)},el:i},e.id)})),Object(j.jsx)(f,{addColumn:function(e,c){return function(e,c){u.collection("columns").doc(t).collection("cards").add({name:e,desc:c})}(e,c)}})]})},_=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(""),r=Object(d.a)(o,2),i=r[0],b=r[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),_=f[0],h=f[1];Object(n.useEffect)((function(){O()}),[_]);var O=function(){a([]),u.collection("columns").onSnapshot((function(e){var t=[];e.docs.map((function(e){return t.push({id:e.id,colName:e.data().colName})})),a(t)}))},x=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("columns").doc(t).delete();case 2:h(!_);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u.collection("columns").add({colName:i});case 3:b(""),h(!_);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"kanban__board",children:[Object(j.jsx)("h1",{children:"Kanban board"}),Object(j.jsxs)("div",{className:"board__grid",children:[c&&c.map((function(e,t){return Object(j.jsxs)("div",{className:"board__column",children:[Object(j.jsxs)("div",{className:"col__head",children:[Object(j.jsx)("h5",{children:e.colName}),Object(j.jsx)("button",{onClick:function(){return x(e.id)},className:"btn btn__remove",children:"Remove Column"})]}),Object(j.jsx)(p,{id:e.id,index:t,tempData:c,el:e})]},t)})),Object(j.jsx)("div",{className:"board__column col__add",children:Object(j.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(j.jsx)("input",{type:"text",className:"form__control",placeholder:"Type Column Name",onChange:function(e){return b(e.target.value)},value:i}),Object(j.jsx)("button",{type:"submit",className:"btn btn__submit",children:"Submit"})]})})]})]})};var h=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(_,{})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3e66932f.chunk.js.map