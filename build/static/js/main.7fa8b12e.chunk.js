(this["webpackJsonpcar-map"]=this["webpackJsonpcar-map"]||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r,c=n(0),o=n.n(c),a=n(22),i=n.n(a),s=(n(51),n(5)),l=n(79),b=n(80),d=n(81),h=n(82),j=n(41),u=n.n(j),p=n(2),x=new p.Icon({iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",iconAnchor:new p.Point(11,34)}),f=new p.Icon({iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",iconAnchor:new p.Point(11,34)}),O=n(7),g=n(8),m=n(1),v=g.a.i(r||(r=Object(O.a)(["\n  & {\n    margin: auto;\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    width: 30%;\n    height: 15%;\n    max-width: 50px;\n    max-height: 25px;\n    transform: scale(var(--ggs, 1));\n    border: 2px solid;\n    border-radius: 3px;\n  }\n  &::after,\n  &::before {\n    content: '';\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    height: 85%;\n    background: currentColor;\n    top: 1px;\n  }\n  &::before {\n    right: -4px;\n    border-radius: 3px;\n    width: 4px;\n  }\n  &::after {\n    width: ","%;\n    left: 1px;\n    background-color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.width-10}),(function(e){return e.width>65?"green":"orange"}),(function(e){return e.width<=30&&"red"}));var k,w=function(e){var t=e.levelPct;return Object(m.jsx)(v,{width:t})},y=g.a.button(k||(k=Object(O.a)(["\n    margin: 0;\n    position: absolute;\n    top: ","%;\n    left: ","%;\n    height: ","px;\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\n    background-color:#79bbff;\n    border-radius:6px;\n    border:1px solid #84bbf3;\n    display:inline-block;\n    cursor:pointer;\n    color:#ffffff;\n    font-family:Arial;\n    font-size:15px;\n    font-weight:bold;\n    padding:6px 24px;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #528ecc;\n    z-index: 999;\n    &:hover {\n      background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n\t    background-color:#378de5;\n    }\n  "])),(function(e){return e.top}),(function(e){return e.left}),(function(e){return e.height}));var L,C,F,A,E,P=function(e){var t=e.children,n=e.onClick,r=e.position,c=e.height;return Object(m.jsx)(y,{left:r.left,top:r.top,height:c,onClick:n,children:t})},S=g.a.div(L||(L=Object(O.a)(["\n    position: relative;\n  "]))),z=g.a.div(C||(C=Object(O.a)(["\ndisplay: flex;\nmargin: auto;\n"]))),I=g.a.div(F||(F=Object(O.a)(["\nwidth: 120px;\nheight:100px;\ntext-align: center;\n"]))),_=g.a.img(A||(A=Object(O.a)(["\nheight: 50%;\nmargin: 0;\nmargin-bottom: 8px;\npadding: 0;\n"]))),B=g.a.h3(E||(E=Object(O.a)(["\nmargin: 3px;\npadding: 0;\n"])));var N=function(e){var t=e.data,n="https://android.jrotor.com/api/attachments/".concat(t.picture.name);return Object(m.jsxs)(S,{children:[Object(m.jsxs)(z,{children:[Object(m.jsxs)(I,{children:[Object(m.jsx)(_,{src:n,alt:t.name}),Object(m.jsx)(B,{children:t.platesNumber})]}),Object(m.jsxs)(I,{children:[Object(m.jsxs)(B,{children:[t.rangeKm," km"]}),Object(m.jsx)(w,{levelPct:t.batteryLevelPct}),Object(m.jsxs)(B,{children:[t.batteryLevelPct," %"]})]})]}),Object(m.jsxs)(z,{children:[Object(m.jsxs)(I,{children:[Object(m.jsx)(B,{children:t.type}),Object(m.jsxs)(B,{children:["reservation: ",t.reservation?t.reservationEnd:"--"]})]}),Object(m.jsx)(I,{children:Object(m.jsx)(B,{children:t.name})})]}),Object(m.jsx)(P,{onClick:function(){return alert("rental function")},position:{left:25,top:85},height:30,children:"Rent"})]})};var V=function(e){var t=e.data,n=e.center;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(l.a,{center:[n.lat,n.lon],zoom:15,maxZoom:18,scrollWheelZoom:!0,children:[Object(m.jsx)(b.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(m.jsx)(u.a,{showCoverageOnHover:!1,children:t.map((function(e){return Object(m.jsx)(d.a,{position:[e.location.latitude,e.location.longitude],icon:"AVAILABLE"===e.status?f:x,children:Object(m.jsx)(h.a,{children:Object(m.jsx)(N,{data:e})})},e.id)}))})]})})},H=(n(31),n(57),n(58),n(45)),J=n(28),M=n.n(J),R=n(46),U=n.n(R),Z=Object(c.createContext)({data:null,error:{}});var K=function(e){var t=e.children,n=Object(c.useState)(),r=Object(s.a)(n,2),o=r[0],a=r[1],i=Object(c.useState)(),l=Object(s.a)(i,2),b=l[0],d=l[1],h=function(){var e=Object(H.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("https://cors-anywhere.herokuapp.com/https://android.jrotor.com/api/map?objectType=VEHICLE");case 3:(t=e.sent)&&a(t.data.objects),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=!1;return e||h(),function(){e=!0}}),[]),Object(m.jsx)(Z.Provider,{value:{data:o,error:b},children:t})};var T=function(e){var t=e.handleClose,n=e.open,r=(e.setOpen,e.children),o=Object(c.useRef)();return Object(c.useEffect)((function(){var e=function(e){n&&o.current&&!o.current.contains(e.target)&&t()};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[n,t]),Object(m.jsx)("div",{className:"".concat(n?"modal-container":"close"),children:Object(m.jsxs)("div",{ref:o,className:"modal",children:[r,Object(m.jsx)(P,{onClick:t,position:{left:50,top:90},height:40,children:"Close"})]})})};var W=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(s.a)(o,2),i=a[0],l=a[1],b=Object(c.useContext)(Z),d=b.data,h=b.error,j=function(e,t){var n=Object(c.useState)(null),r=Object(s.a)(n,2),o=r[0],a=r[1];return Object(c.useEffect)((function(){e&&(t.status?a(e.filter((function(e){return"AVAILABLE"===e.status&&t.batteryLeve?e.batteryLevelPct>50:e.batteryLevelPct>0}))):a(e.filter((function(e){return t.batteryLeve?e.batteryLevelPct>50:e.batteryLevelPct>0}))))}),[e,t.batteryLeve,t.status]),o}(d,{batteryLeve:i,status:n}),u=Object(c.useState)(!1),p=Object(s.a)(u,2),x=p[0],f=p[1];return Object(m.jsx)("div",{className:"App",children:h?Object(m.jsx)("p",{children:"something went wrong"}):j?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{open:x,handleClose:function(){return f(!1)},setOpen:f,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:{margin:"30px"},children:[Object(m.jsx)("label",{htmlFor:"checkbox",children:"Available: "}),Object(m.jsx)("input",{type:"checkbox",id:"checkbox",checked:n,onChange:function(){r(!n)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"checkbox",children:"Battery greater than 50% : "}),Object(m.jsx)("input",{type:"checkbox",id:"checkbox",checked:i,onChange:function(){l(!i)}})]})]})}),Object(m.jsx)(P,{onClick:function(){return f(!0)},position:{left:50,top:90},height:40,children:"Filter"}),Object(m.jsx)(V,{data:j,center:{lat:d[0].location.latitude,lon:d[0].location.longitude}})]}):Object(m.jsx)("p",{children:"loading..."})})};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(K,{children:Object(m.jsx)(W,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.7fa8b12e.chunk.js.map