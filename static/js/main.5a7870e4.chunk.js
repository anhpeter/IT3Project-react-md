(this.webpackJsonpfire_alarm=this.webpackJsonpfire_alarm||[]).push([[0],{107:function(t,e){},109:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(67),i=n.n(c),s=(n(80),n(11)),o=(n(81),n(34)),u=n(1);function l(t){var e=t.children,n=t.to;return Object(u.jsx)(o.b,{className:"link-no-style",to:n,children:e})}function b(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h2",{children:Object(u.jsx)(l,{to:"/",children:"Hotel Management"})})})})}var f,d,j,h=n(9),m=n(17),g=n.n(m),x=n(28),v=n(14),p="https://it3-fire-api.herokuapp.com",O={fetchItems:function(){var t=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p,"/room")).then((function(t){return t.json()})).then((function(t){return t.payload})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),fetchItemById:function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p,"/room/get-by-id/").concat(e)).then((function(t){return t.json()})).then((function(t){return t.payload})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=O,D=n(12),w=(n(55),n(74)),S=Object(w.a)(p),T="";S.on("connect",(function(){T=S.id,console.log(T)}));var k=D.a.img(f||(f=Object(s.a)(["\n    width: 100%;\n    object-fit:cover;\n    aspect-ratio:3/2;\n"]))),I=D.a.div(d||(d=Object(s.a)(["\n    position: relative;\n    border-radius:10px;\n    overflow:hidden;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n"]))),_=D.a.div(j||(j=Object(s.a)(["\n    position: absolute;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n    text-transform: uppercase;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    color: white;\n    font-size: 22px;\n    background-color: rgba(247,15,15,.7);\n    z-index:1;\n    font-weight: bold;\n"])));function L(t){var e=t.id,n=t.imageUrl,r=t.name,c=Object(a.useState)(!1),i=Object(v.a)(c,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){S.on("SERVER_EMIT_ROOM_WITH_STATUS_".concat(e),(function(t){0===t.gas||0===t.flame?o(!0):o(!1)}))}),[e,S,o]),Object(u.jsx)("div",{children:Object(u.jsx)(l,{to:"/room/"+e,children:Object(u.jsxs)(I,{children:[Object(u.jsx)(k,{src:n,alt:""}),s?Object(u.jsx)(_,{children:r}):null,s?null:Object(u.jsx)("h5",{className:"text-center py-2",children:r})]})})})}function N(){var t=Object(a.useState)([]),e=Object(v.a)(t,2),n=e[0],r=e[1];Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.fetchItems();case 3:e=t.sent,r(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]);var c=n.map((function(t){return Object(u.jsx)("div",{className:"col-md-4 vitri mb-4",children:Object(u.jsx)(L,{id:t._id,imageUrl:t.imageUrl,name:t.name})},t._id)}));return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:c})})}function M(){return Object(u.jsx)(N,{})}var E,F=[{value:-1,text:"Realtime"},{value:1,text:"1 hour"},{value:24,text:"1 day"},{value:168,text:"7 days"},{value:360,text:"15 days"},{value:720,text:"1 month"},{value:2160,text:"3 months"},{value:4320,text:"6 months"}],H=D.a.div(E||(E=Object(s.a)(["\n    overflow-x:auto;\n    max-width:100%;\n"])));function R(t){var e=this,n=t.chartTimeInHour,a=t.onTimeChange,r=F.map((function(t){var r=t.value===n?"btn-primary":"btn-light";return Object(u.jsx)("button",{onClick:a.bind(e,t.value),type:"button",className:"btn ".concat(r),children:t.text},t.value)}));return Object(u.jsx)(H,{children:Object(u.jsx)("div",{className:"btn-group text-nowrap",role:"group","aria-label":"",children:r})})}var C,P={strPad:function(t,e,n){return(t+="")?t.length>=e?t:n.repeat(e-t.length)+t:t}},A=D.a.span(C||(C=Object(s.a)(["\n    font-size:1.5rem;\n"])));function B(t){var e=Object(a.useState)(new Date),n=Object(v.a)(e,2),r=n[0],c=n[1];Object(a.useEffect)((function(){setInterval((function(){c(new Date)}),1e3)}),[c]);var i=P.strPad(r.getHours(),2,"0"),s=P.strPad(r.getMinutes(),2,"0"),o=P.strPad(r.getSeconds(),2,"0");return Object(u.jsxs)(A,{children:[i,":",s,":",o,'"']})}var U=n(10),z={fetchLastItems:function(t,e){return fetch("".concat(p,"/room-status/get-last-items/").concat(t,"?qty=").concat(e)).then((function(t){return t.json()})).then((function(t){return t.payload}))},fetchLastItemsAfterTimeByRoomId:function(t,e){return fetch("".concat(p,"/room-status/get-last-items-after-time/").concat(t,"?time=").concat(e)).then((function(t){return t.json()})).then((function(t){return t.payload}))}},G=n(29),K=n(2),V=n(3),W=function(){function t(e,n){Object(K.a)(this,t),this.time=e,this.items=n,this.timelineLength=this.getTimelineLength()}return Object(V.a)(t,[{key:"genData",value:function(){var e=this;if(this.time>-1){var n=this.genDefaultData(),a=n.gasData,r=n.flameData,c=n.labels,i=0,s=this.groupStatus(),o=this.getTimelineIndexesForNewStatuses(s);for(var u in s){var l=Object(G.a)(Object(G.a)({},s[u]),{},{date:u}),b=o[i];a[b]=t.getStatus(l,"gas"),r[b]=t.getStatus(l,"flame"),c[b]=t.getLabel(l,this.time),i++}return{gasData:a,flameData:r,labels:c}}var f=this.items.map((function(e){return t.getStatus(e,"gas")})),d=this.items.map((function(e){return t.getStatus(e,"flame")})),j=this.items.map((function(n){return t.getLabel(n,e.time)}));return{gasData:f,flameData:d,labels:j}}},{key:"genDefaultData",value:function(){return t.genDefaultData(this.time)}},{key:"getGroupStatusKey",value:function(t){var e=new Date(t);return this.time>=24&&(e.setMinutes(0),this.time>=720&&e.setHours(0)),e.setSeconds(0),e.setMilliseconds(0),e.toString()}},{key:"groupStatus",value:function(){var t=this,e={};if(this.items.length>0){var n=1,a=1,r=this.getGroupStatusKey(this.items[0].date);this.items.forEach((function(c,i){var s=t.items.length-1===i,o=t.getGroupStatusKey(c.date);e[o]||(r&&(e[r]={gas:n,flame:a}),n=1,a=1,r=o,e[o]=!0),0===c.gas&&(n=0),0===c.flame&&(a=0),s&&(e[o]={gas:n,flame:a})}))}return e}},{key:"getTimelineLength",value:function(){return t.getTimelineLength(this.time)}},{key:"getTimelineIndexesForNewStatuses",value:function(t){var e=[];for(var n in t){var a=6e4;this.time>=24&&(a*=60,this.time>=720&&(a*=24));var r=Math.abs(new Date-new Date(n)),c=Math.ceil(r/a),i=this.timelineLength-c;e.push(i)}return e}}],[{key:"genDefaultData",value:function(e){var n=e>-1?t.getTimelineLength(e):30,a=Object(U.a)(Array(n)).map((function(t){return 0}));return{gasData:a.slice(0),flameData:a.slice(0),labels:t.genDefaultLabels(n,e)}}},{key:"genDefaultLabels",value:function(t,e){var n=this;return Object(U.a)(Array(t)).map((function(a,r){var c=new Date;return e<24?c.setMinutes(c.getMinutes()-(t-r)+1):e<720?c.setHours(c.getHours()-(t-r)+1):c.setDate(c.getDate()-(t-r)+1),n.getLabel({date:c},e)}))}},{key:"getStatus",value:function(t,e){return 1===t[e]?0:1}},{key:"getLabel",value:function(t,e){var n=new Date(t.date),a=P.strPad(n.getMonth()+1,2,"0"),r=P.strPad(n.getDate(),2,"0"),c=P.strPad(n.getHours(),2,"0"),i=P.strPad(n.getMinutes(),2,"0");return e<24?"".concat(c,":").concat(i):e>=720?"".concat(r,"/").concat(a):"".concat(r,"/").concat(a," ").concat(c,":").concat(i)}},{key:"getFetchTime",value:function(t){var e=new Date,n=e.getHours();return e.setHours(n-t),e.toISOString()}},{key:"getTimelineLength",value:function(t){return t<24?60*t:t>=720?Math.ceil(t/24):t}}]),t}();var J,q,Z,Q=n(75),X=D.a.div(J||(J=Object(s.a)(["\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n"]))),Y=function(t){var e=t.labels,n=t.gasData,a=t.flameData,r={maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}},animation:{duration:0},responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:t.title,font:{size:22,weight:"bold",lineHeight:1.2}}}},c={labels:e,datasets:[{label:"Gas",data:n,fill:!1,backgroundColor:"#dbdbdb",borderColor:"#8c8c8c",borderDash:[10,5]},{label:"Flame",data:a,fill:!1,backgroundColor:"#FFB1C1",borderColor:"#FF6384"}]};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(X,{children:Object(u.jsx)(Q.a,{height:250,data:c,options:r})})})},$=n.p+"static/media/loading.2157149b.gif",tt=D.a.img(q||(q=Object(s.a)(["\n    height: 100px;\n    object-fit: contain;\n"])));function et(){return Object(u.jsx)(tt,{src:$,alt:"loading"})}var nt,at,rt,ct=D.a.div(Z||(Z=Object(s.a)(["\n    min-height:300px;\n    flex-direction:column;\n    display:flex;\n    justify-content:center;\n"])));function it(t){var e=t.item,n=t.chartTimeInHour,r=t.hasDummyRealtimeStatus,c=Object(a.useState)(!1),i=Object(v.a)(c,2),s=i[0],o=i[1],l=W.genDefaultData(n),b=l.flameData,f=l.gasData,d=l.labels,j=Object(a.useState)(f),h=Object(v.a)(j,2),m=h[0],p=h[1],O=Object(a.useState)(b),y=Object(v.a)(O,2),D=y[0],w=y[1],T=Object(a.useState)(d),k=Object(v.a)(T,2),I=k[0],_=k[1];Object(a.useEffect)((function(){return S.on("SERVER_EMIT_ROOM_WITH_STATUS_".concat(e._id),(function(t){console.log("data",t),-1===n&&(p((function(e){var n=W.getStatus(t,["gas"]);return 0===e.length?[n]:[].concat(Object(U.a)(e.slice(1)),[n])})),w((function(e){var n=W.getStatus(t,["flame"]);return 0===e.length?[n]:[].concat(Object(U.a)(e.slice(1)),[n])})),_((function(e){var a=W.getLabel(t,n);return 0===e.length?[a]:[].concat(Object(U.a)(e.slice(1)),[a])})))})),function(){S.off("SERVER_EMIT_ROOM_WITH_STATUS_".concat(e._id))}}),[e._id,n,r,S]),Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(g.a.mark((function t(){var a,r,c,i,s,u;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o(!0),t.prev=1,-1!==n){t.next=8;break}return t.next=5,z.fetchLastItems(e._id,30);case 5:a=t.sent,t.next=11;break;case 8:return t.next=10,z.fetchLastItemsAfterTimeByRoomId(e._id,W.getFetchTime(n));case 10:a=t.sent;case 11:a=a.reverse(),r=new W(n,a),c=r.genData(a),i=c.gasData,s=c.flameData,u=c.labels,p(i),w(s),_(u),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),console.error(t.t0);case 22:return t.prev=22,o(!1),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[1,19,22,25]])})));return function(){return t.apply(this,arguments)}}();t()}),[e._id,n,p,_,w]);var L,N,M,E=F.find((function(t){return t.value===n})),H=-1===n?"Realtime status":"Last ".concat(E.text);return L=m,N=D,M=I,Object(u.jsx)("div",{className:"card border-0",children:Object(u.jsx)(ct,{className:"card-body",children:s?Object(u.jsx)(et,{}):Object(u.jsx)(Y,{title:H,gasData:L,flameData:N,labels:M})})})}var st=D.a.div(nt||(nt=Object(s.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n"]))),ot=D.a.img(at||(at=Object(s.a)(["\n    aspect-ratio:3/2;\n    border-radius:10px;\n    max-width:100%;\n     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n"]))),ut=D.a.div(rt||(rt=Object(s.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    margin-bottom: .5rem;\n    @media (max-width: 576px){ \n        max-width: 800px;\n        flex-direction:column-reverse;\n        align-items:center;\n        >*{\n            margin-bottom:.5rem;\n        }\n    }\n"])));function lt(){var t=Object(h.f)().id,e=Object(a.useState)(void 0),n=Object(v.a)(e,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(v.a)(i,2),o=s[0],l=(s[1],Object(a.useState)(-1)),b=Object(v.a)(l,2),f=b[0],d=b[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(x.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.fetchItemById(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"row mb-4",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(st,{children:[Object(u.jsx)("h1",{children:r.name}),Object(u.jsx)(B,{})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"offset-sm-4 col-sm-4 mb-3",children:Object(u.jsx)(ot,{src:r.imageUrl,alt:""})}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)(ut,{children:Object(u.jsx)(R,{chartTimeInHour:f,onTimeChange:d})}),Object(u.jsx)(it,{chartTimeInHour:f,item:r,hasDummyRealtimeStatus:o})]})]})]}):null})})}var bt;n.p;var ft=D.a.div(bt||(bt=Object(s.a)(["\n    display:flex;\n    flex-direction:column;\n"])));var dt=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(ft,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{path:"/room/:id",children:Object(u.jsx)(lt,{})}),Object(u.jsx)(h.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{})})]})})]})})},jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(dt,{})}),document.getElementById("root")),jt()},80:function(t,e,n){},81:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.5a7870e4.chunk.js.map