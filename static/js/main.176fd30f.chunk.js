(this.webpackJsonpfire_alarm=this.webpackJsonpfire_alarm||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(54),i=n.n(r),s=(n(65),n(8)),o=(n(66),n(20)),u=n(1);function l(e){var t=e.children,n=e.to;return Object(u.jsx)(o.b,{className:"link-no-style",to:n,children:t})}function b(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(l,{to:"/",children:Object(u.jsx)("h2",{children:"Hotel Management"})})})})}var d,j,h,f,m=n(4),x=n(11),g=n.n(x),v=n(15),O=n(5),p="https://it3-fire-api.herokuapp.com",y={fetchItems:function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(p,"/room")).then((function(e){return e.json()})).then((function(e){return e.payload})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchItemById:function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(p,"/room/get-by-id/").concat(t)).then((function(e){return e.json()})).then((function(e){return e.payload})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=y,D=n(9),w=n(31),T=D.a.img(d||(d=Object(s.a)(["\n    width: 100%;\n    object-fit:cover;\n    aspect-ratio:3/2;\n"]))),I=D.a.div(j||(j=Object(s.a)(["\n    position: relative;\n    border-radius:10px;\n    overflow:hidden;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n"]))),_=D.a.div(h||(h=Object(s.a)(["\n    position: absolute;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n    text-transform: uppercase;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    color: white;\n    font-size: 22px;\n    background-color: rgba(247,15,15,.7);\n    z-index:1;\n    font-weight: bold;\n"])));D.a.h5(f||(f=Object(s.a)(["\n    text-decoration: none;\n    color:black;\n    &:hover{\n        text-decoration: none;\n    }\n"])));function k(e){var t=e.id,n=e.imageUrl,c=e.name,r=Object(w.a)(p),i=Object(O.a)(r,1)[0],s=Object(a.useState)(!1),o=Object(O.a)(s,2),b=o[0],d=o[1];return Object(a.useEffect)((function(){i.on("SERVER_EMIT_ROOM_WITH_STATUS_".concat(t),(function(e){0===e.gas||0===e.flame?d(!0):d(!1)}))}),[t,i,d]),Object(u.jsx)("div",{children:Object(u.jsx)(l,{to:"/room/"+t,children:Object(u.jsxs)(I,{children:[Object(u.jsx)(T,{src:n,alt:""}),b?Object(u.jsx)(_,{children:c}):null,b?null:Object(u.jsx)("h5",{className:"text-center py-2",children:c})]})})})}function M(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.fetchItems();case 3:t=e.sent,c(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]);var r=n.map((function(e){return Object(u.jsx)("div",{className:"col-md-4 vitri mb-4",children:Object(u.jsx)(k,{id:e._id,imageUrl:e.imageUrl,name:e.name})},e._id)}));return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:r})})}function N(){return Object(u.jsx)(M,{})}var E=[{value:1,text:"1 hour"},{value:24,text:"1 day"},{value:168,text:"7 days"},{value:240,text:"10 days"},{value:720,text:"30 days"},{value:2160,text:"90 days"}];function L(e){var t=this,n=e.chartTimeInHour,a=e.onTimeChange,c=E.map((function(e){var c=e.value===n?"btn-primary":"btn-light";return Object(u.jsx)("button",{onClick:a.bind(t,e.value),type:"button",className:"btn ".concat(c),children:e.text},e.value)}));return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"btn-group",role:"group","aria-label":"",children:c})})}var R,F={strPad:function(e,t,n){return(e+="")?e.length>=t?e:n.repeat(t-e.length)+e:e}},H=D.a.span(R||(R=Object(s.a)(["\n    font-size:1.5rem;\n"])));function C(e){var t=Object(a.useState)(new Date),n=Object(O.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){setInterval((function(){r(new Date)}),1e3)}),[r]);var i=F.strPad(c.getHours(),2,"0"),s=F.strPad(c.getMinutes(),2,"0"),o=F.strPad(c.getSeconds(),2,"0");return Object(u.jsxs)(H,{children:[i,":",s,":",o,'"']})}var P=n(6),A={fetchLastItemsByRoomId:function(e,t){return fetch("".concat(p,"/room-status/get-last-items-by-room-id/").concat(e,"?qty=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.payload}))},fetchLastItemsAfterTimeByRoomId:function(e,t){return fetch("".concat(p,"/room-status/get-last-items-after-time/").concat(e,"?time=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.payload}))}},U=n(16),B=n(2),z=n(3),G=function(){function e(t,n){Object(B.a)(this,e),this.time=t,this.items=n,this.timelineLength=this.getTimelineLength()}return Object(z.a)(e,[{key:"genData",value:function(){var t=this.genDefaultData(this.time),n=t.gasData,a=t.flameData,c=t.labels,r=0,i=this.groupStatus(),s=this.getTimelineIndexesForNewStatuses(i);for(var o in i){var u=Object(U.a)(Object(U.a)({},i[o]),{},{date:o}),l=s[r];n[l]=e.getStatus(u,"gas"),a[l]=e.getStatus(u,"flame"),c[l]=e.getLabel(u,this.time),r++}return{gasData:n,flameData:a,labels:c}}},{key:"genDefaultData",value:function(){return e.genDefaultData(this.time)}},{key:"getGroupStatusKey",value:function(e){var t=new Date(e);return this.time>=24&&(t.setMinutes(0),this.time>=720&&t.setHours(0)),t.setSeconds(0),t.setMilliseconds(0),t.toString()}},{key:"groupStatus",value:function(){var e=this,t={};if(this.items.length>0){var n=1,a=1,c=this.getGroupStatusKey(this.items[0].date);this.items.forEach((function(r,i){var s=e.items.length-1===i,o=e.getGroupStatusKey(r.date);t[o]||(c&&(t[c]={gas:n,flame:a}),n=1,a=1,c=o,t[o]=!0),0===r.gas&&(n=0),0===r.flame&&(a=0),s&&(t[o]={gas:n,flame:a})}))}return t}},{key:"getTimelineLength",value:function(){return e.getTimelineLength(this.time)}},{key:"getTimelineIndexesForNewStatuses",value:function(e){var t=[];for(var n in e){var a=6e4;this.time>=24&&(a*=60,this.time>=720&&(a*=24));var c=Math.abs(new Date-new Date(n)),r=Math.ceil(c/a),i=this.timelineLength-r;t.push(i)}return t}}],[{key:"genDefaultData",value:function(t){var n=this,a=e.getTimelineLength(t),c=Object(P.a)(Array(a)).map((function(e){return 0}));return{gasData:c.slice(0),flameData:c.slice(0),labels:c.slice(0).map((function(e,c){var r=new Date;return t<24?r.setMinutes(r.getMinutes()-(a-c)+1):t<720?r.setHours(r.getHours()-(a-c)+1):r.setDate(r.getDate()-(a-c)+1),n.getLabel({date:r},t)}))}}},{key:"getStatus",value:function(e,t){return 1===e[t]?0:1}},{key:"getLabel",value:function(e,t){var n=new Date(e.date),a=F.strPad(n.getMonth()+1,2,"0"),c=F.strPad(n.getDate(),2,"0"),r=F.strPad(n.getHours(),2,"0"),i=F.strPad(n.getMinutes(),2,"0");return t<24?"".concat(r,":").concat(i):t>=720?"".concat(c,"/").concat(a):"".concat(c,"/").concat(a," ").concat(r,":").concat(i)}},{key:"getFetchTime",value:function(e){var t=new Date,n=t.getHours();return t.setHours(n-e),t.toISOString()}},{key:"getTimelineLength",value:function(e){return e<24?60*e:e>=720?Math.ceil(e/24):e}}]),e}();function V(e){var t=e.children,n=e.color,a=void 0===n?"primary":n;return Object(u.jsx)("div",{className:"alert alert-".concat(a," text-center"),role:"alert",children:t})}var K,W,J,q,Y,Z=n(60),Q=D.a.div(K||(K=Object(s.a)(["\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n"]))),X=function(e){var t=e.labels,n=e.gasData,a=e.flameData,c={maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},animation:{duration:0},responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:e.title,font:{size:22,weight:"bold",lineHeight:1.2}}}},r={labels:t,datasets:[{label:"Gas",data:n,fill:!1,backgroundColor:"#dbdbdb",borderColor:"#8c8c8c",borderDash:[10,5]},{label:"Flame",data:a,fill:!1,backgroundColor:"#FFB1C1",borderColor:"#FF6384"}]};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Q,{children:Object(u.jsx)(Z.a,{height:250,data:r,options:c})})})},$=D.a.div(W||(W=Object(s.a)(["\n    height:400px;\n"])));function ee(e){var t=e.item,n=e.chartTimeInHour,c=e.hasDummyRealtimeStatus,r=Object(w.a)(p),i=Object(O.a)(r,1)[0],s=G.genDefaultData(n),o=s.flameData,l=s.gasData,b=s.labels,d=Object(a.useState)(l),j=Object(O.a)(d,2),h=j[0],f=j[1],m=Object(a.useState)(o),x=Object(O.a)(m,2),y=x[0],S=x[1],D=Object(a.useState)(b),T=Object(O.a)(D,2),I=T[0],_=T[1],k=Object(a.useState)(!1),M=Object(O.a)(k,2),N=M[0],L=M[1];Object(a.useEffect)((function(){i.off("SERVER_EMIT_ROOM_WITH_STATUS_".concat(t._id)),i.off("SERVER_EMIT_DUMMY_STATUS_".concat(t._id)),i.on("SERVER_EMIT_ROOM_WITH_STATUS_".concat(t._id),(function(e){n<24&&(f((function(t){var n=G.getStatus(e,["gas"]);return 0===t.length?[n]:[].concat(Object(P.a)(t.slice(1)),[n])})),S((function(t){var n=G.getStatus(e,["flame"]);return 0===t.length?[n]:[].concat(Object(P.a)(t.slice(1)),[n])})),_((function(t){var a=G.getLabel(e,n);return 0===t.length?[a]:[].concat(Object(P.a)(t.slice(1)),[a])})))}))}),[t._id,n,c,i]),Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var a,c,r,i,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,A.fetchLastItemsAfterTimeByRoomId(t._id,G.getFetchTime(n));case 4:a=(a=e.sent).reverse(),c=new G(n,a),r=c.genData(a),i=r.gasData,s=r.flameData,o=r.labels,f(i),S(s),_(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:return e.prev=16,L(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[t._id,n,f,_,S]);var R=E.find((function(e){return e.value===n})),F=n<24?"Realtime Last ".concat(R.text):"Last ".concat(R.text);return Object(u.jsx)("div",{className:"card border-0",children:Object(u.jsx)($,{className:"card-body",children:N?Object(u.jsx)(V,{color:"info",children:"Loading ..."}):Object(u.jsx)(X,{title:F,gasData:h,flameData:y,labels:I})})})}var te,ne=D.a.div(J||(J=Object(s.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n"]))),ae=D.a.img(q||(q=Object(s.a)(["\n    aspect-ratio:3/2;\n    border-radius:10px;\n    max-width:100%;\n     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n"]))),ce=D.a.div(Y||(Y=Object(s.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    margin-bottom: .5rem;\n    @media (max-width: 576px){ \n        max-width: 800px;\n        flex-direction:column-reverse;\n        align-items:center;\n        >*{\n            margin-bottom:.5rem;\n        }\n    }\n"])));function re(){var e=Object(m.f)().id,t=Object(a.useState)(void 0),n=Object(O.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(O.a)(i,2),o=s[0],l=(s[1],Object(a.useState)(240)),b=Object(O.a)(l,2),d=b[0],j=b[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(v.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.fetchItemById(e);case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,r]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"row mb-4",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(ne,{children:[Object(u.jsx)("h1",{children:c.name}),Object(u.jsx)(C,{})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"offset-sm-4 col-sm-4 mb-3",children:Object(u.jsx)(ae,{src:c.imageUrl,alt:""})}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)(ce,{children:Object(u.jsx)(L,{chartTimeInHour:d,onTimeChange:j})}),Object(u.jsx)(ee,{chartTimeInHour:d,item:c,hasDummyRealtimeStatus:o})]})]})]}):null})})}var ie=D.a.div(te||(te=Object(s.a)(["\n    display:flex;\n    flex-direction:column;\n    min-height:100vh;\n"])));var se=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(ie,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{path:"/room/:id",children:Object(u.jsx)(re,{})}),Object(u.jsx)(m.a,{path:"/",exact:!0,children:Object(u.jsx)(N,{})})]})})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(se,{})}),document.getElementById("root")),oe()},65:function(e,t,n){},66:function(e,t,n){},98:function(e,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.176fd30f.chunk.js.map