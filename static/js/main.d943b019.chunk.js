(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"l",(function(){return r})),n.d(t,"j",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"k",(function(){return j})),n.d(t,"i",(function(){return o})),n.d(t,"m",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return f}));var c=n(16),a=Object(c.makeVar)([]),r=Object(c.makeVar)([]),i=Object(c.makeVar)({}),s=Object(c.makeVar)([]),j=Object(c.makeVar)([]),o=Object(c.makeVar)({}),u=Object(c.makeVar)({}),l=Object(c.makeVar)(0),b=Object(c.makeVar)(0),d=Object(c.makeVar)(2),O=Object(c.makeVar)({main:!0,articleListDatabase:!0,articleDetails:!1,fetchOptionAuthor:!0,fetchOptionJournal:!0,fetchOptionTag:!0,plot:!1,search:!1}),h=Object(c.makeVar)(!1),f={selectedArticlesOnSearch:{read:function(){return r()}},articlesSearched:{read:function(){return a()}},queryForArticleSearch:{read:function(){return i()}},selectedArticlesOnDatabase:{read:function(){return j()}},articlesFetched:{read:function(){return s()}},queryForArticleFetch:{read:function(){return o()}},currentIndex:{read:function(){return l()}},plotLaunch:{read:function(){return b()}},paramK:{read:function(){return d()}},selectedFilter:{read:function(){return u()}}}},347:function(e,t,n){"use strict";(function(e){n(0),n(414);var c=n(396),a=n(392),r=n(30),i=n(671),s=n(672),j=n(394),o=n(16),u=n(10),l=n(393),b=n.n(l),d=n(3);t.a=Object(j.hot)(e)((function(){b.a.config();var e=Object(o.useReactiveVar)(u.e);return Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{theme:e?i.a:s.a,children:Object(d.jsx)(c.a,{})})})}))}).call(this,n(275)(e))},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(16),a=n(10),r=(n(0),n(3)),i=new c.InMemoryCache({resultCaching:!0,typePolicies:{Query:{fields:a.d}}}),s=new c.HttpLink({uri:"https://sta220-2021-f.herokuapp.com/graphql"}),j=new c.ApolloClient({cache:i,resolvers:{},link:s}),o=function(e){return Object(r.jsx)(c.ApolloProvider,{client:j,children:e.children})}},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return dt}));var c,a=n(0),r=n(18),i=n(11),s=n(22),j=n(75),o=n(155),u=n(193),l=n(398),b=n(682),d=n(111),O=n(16),h=n(42),f=n(348),x=n.n(f),g=n(40),m=n(96),p=n(10),v=n(693),A=n(353),y=n.n(A),w=n(354),S=n.n(w),C=n(3),k=function(e){return Object(C.jsx)(u.a,{children:Object(C.jsx)(d.a,{level:2,margin:"size-0",children:e.text})})},I=function(e){var t=Object(p.k)().length,n=Object(O.useReactiveVar)(p.c);return Object(C.jsxs)(h.a,{alignContent:"baseline",justifyContent:"space-between",children:[Object(C.jsx)(k,{text:e.name}),Object(C.jsxs)(h.a,{gap:"size-100",height:"single-line-height",children:[Object(C.jsx)(u.a,{width:"size-500",children:e.isFetching?Object(C.jsx)(v.a,{isIndeterminate:!0}):Object(C.jsx)(C.Fragment,{})}),Object(C.jsx)(l.a,{width:"size-600",onPressEnd:function(){Object(p.c)(n-1),e.setIsFetching(!0)},isDisabled:0===n,children:Object(C.jsx)(y.a,{})}),Object(C.jsx)(h.a,{alignSelf:"center",width:"size-600",justifyContent:"center",children:Object(C.jsxs)(d.b,{children:[n+1," / ",t]})}),Object(C.jsx)(l.a,{width:"size-600",onPressEnd:function(){Object(p.c)(n+1),e.setIsFetching(!0)},isDisabled:t-1===n,children:Object(C.jsx)(S.a,{})})]})]})},E={},D=Object(O.gql)(c||(c=Object(j.a)(["\n  query($where: ArticleWhereUniqueInput!) {\n    article(where: $where) {\n      id\n      name\n      authors {\n        id\n        name\n        articles {\n          id\n        }\n      }\n      date\n      citation\n      abstract\n      journal {\n        id\n        name\n        articles {\n          id\n        }\n      }\n      tags {\n        id\n        name\n        articles {\n          id\n        }\n      }\n    }\n  }\n"]))),M=function(e,t){Object(p.m)(Object(r.a)(Object(r.a)({},Object(p.m)()),{},Object(s.a)({},e,t.id))),Object(p.i)(Object(r.a)(Object(r.a)({},Object(p.i)()),{},Object(s.a)({},e,t.articles.map((function(e){return e.id}))))),Object(p.c)(0)},z=function(e){var t=Object(O.useReactiveVar)(p.k),n=Object(O.useReactiveVar)(p.c),c=Object(O.useQuery)(D,{variables:{where:{id:t[n]||"nothing"}},onCompleted:function(){setTimeout((function(){return Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{articleDetails:!1}))}),500)}}).data,s=Object(a.useState)(!1),j=Object(i.a)(s,2),f=j[0],v=j[1],A=Object(a.useState)(null),y=Object(i.a)(A,2),w=y[0],S=y[1];return Object(a.useEffect)((function(){c&&(S(c.article),Object(p.f)().articleListDatabase&&Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{articleListDatabase:!1})),f&&v(!1))}),[n,c,f]),Object(C.jsx)(h.b,{height:"100%",children:w?Object(C.jsxs)(h.a,{width:"100%",direction:"column",gap:"size-150",children:[Object(C.jsx)(I,Object(r.a)(Object(r.a)({},w),{},{isFetching:f,setIsFetching:v})),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(m.a,{children:Object(C.jsxs)(h.b,{width:"100%",columns:["size-2000","auto"],columnGap:"size-200",rowGap:"size-100",UNSAFE_style:{overflowY:"hidden"},marginTop:"size-200",marginBottom:"size-200",children:[Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"ID:"}),Object(C.jsx)(u.a,{children:w.id}),Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Authors:"}),Object(C.jsx)(h.a,{gap:"size-50",wrap:!0,children:w.authors.map((function(e){return Object(C.jsx)(l.a,{onPressEnd:function(){return M("author",e)},children:e.name})}))}),w.journal?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Journal:"}),Object(C.jsx)(u.a,{children:Object(C.jsx)(l.a,{onPressEnd:function(){return M("journal",w.journal)},children:w.journal.name.split(" ").map((function(e){return Object(g.capitalize)(e)})).join(" ")})})]}):null,Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Publish Date:"}),Object(C.jsx)(u.a,{children:new Date(w.date).toLocaleDateString()}),Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Tags:"}),Object(C.jsx)(h.a,{gap:"size-50",wrap:!0,children:w.tags.map((function(e){return Object(C.jsx)(l.a,{onPressEnd:function(){return M("tag",e)},children:e.name})}))}),Object(C.jsx)(u.a,{alignSelf:"center",UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Num. of Citations:"}),Object(C.jsx)(u.a,{children:w.citation}),Object(C.jsx)(u.a,{UNSAFE_style:{fontWeight:700,textAlign:"right"},children:"Abstract:"}),Object(C.jsx)(u.a,{UNSAFE_style:{textAlign:"justify"},children:w.abstract})]})})]}):Object(C.jsx)(h.b,{children:Object(C.jsx)(h.a,{width:"100%",justifyContent:"center",alignSelf:"center",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(x.a,{color:"informative",size:"XXL"}),Object(C.jsx)(d.a,{children:"Welcome!"}),Object(C.jsx)(d.b,{children:"Select a question from the side bar to proceed."})]})})})})};z.defaultProps=E;var R=n(20),N=n.n(R),F=n(48),V=n(125),L=n.n(V),B=n(683),U=n(356),P=n.n(U),T=n(644),J=n(357),Q=n.n(J),W=function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){"notReady"===e.item.status&&r(!1),c||void 0!==e.item.status||setTimeout((function(){r(!0)}),1e3)}),[c,e.item.status]),Object(C.jsxs)(l.a,{onPressEnd:function(){return e.onClick(e.item["search"===e.type?"Id":"id"])},isDisabled:"search"!==e.type&&void 0!==e.item.status,UNSAFE_style:{backgroundColor:void 0!==e.item.color?Q()(T.a[e.item.color],"0.25"):e.selected?"rgba(200,200,255,0.5)":void 0},children:[Object(C.jsx)(d.b,{UNSAFE_style:{textAlign:"left"},children:e.item["search"===e.type?"DN":"name"]}),e.selected?Object(C.jsx)(P.a,{color:"positive"}):null,"notReady"===e.item.status?Object(C.jsx)(B.a,{variant:"neutral",alignSelf:"center"}):null,"embedded"===e.item.status?Object(C.jsx)(B.a,{variant:"notice",alignSelf:"center"}):null,void 0!==e.item.status||c?null:Object(C.jsx)(B.a,{variant:"info",alignSelf:"center"})]})},Y=n(358),G=n.n(Y),q=n(686),H=n(694),Z=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){e.loading?r(!1):r(!0)}),[e.loading]),Object(C.jsx)(q.a.div,{animate:{display:c?"none":"unset",opacity:e.loading?1:0},initial:{opacity:1,display:"unset"},children:Object(C.jsx)(h.b,{height:"100%",width:"100%",alignContent:"center",justifyContent:"center",position:"absolute",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(v.a,{isIndeterminate:!0,size:e.size||"L","aria-label":"Loading..."}),Object(C.jsx)(d.a,{children:"Loading..."})]})})})},X=function(e){var t=Object(H.a)(),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(C.jsxs)(h.b,{position:"relative",height:"100%",children:[Object(C.jsx)(q.a.div,{ref:c,style:{position:"relative",top:0,left:0,width:"100%",height:"100%",zIndex:10},animate:{opacity:-((e.loading?1:0)-1)},initial:{opacity:0},children:e.children}),Object(C.jsx)(u.a,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,children:Object(C.jsx)(Z,{loading:e.loading,dimension:a,size:e.size})})]})},K={},_=function(e){e&&Object(p.l)(Object(g.xor)(Object(p.l)(),[e]))},$=function(){var e=Object(F.a)(N.a.mark((function e(t){var n,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&Object.values(t).filter((function(e){return e})).length>0)){e.next=17;break}return c="".concat(t.author?"Composite(AA.AuN='".concat(t.author.toLowerCase(),"'), "):"").concat(t.title?"Ti='".concat(t.title.toLowerCase(),"'..., "):"").concat(t.journal?"Composite(J.JN='".concat(t.journal.toLowerCase(),"'), "):"").concat(t.tag?"Composite(F.FN='".concat(t.tag.toLowerCase(),"')"):"").replace(/, $/,""),e.next=4,L.a.get("https://api.labs.cognitive.microsoft.com/academic/v1.0/evaluate",{params:{expr:"And(".concat(c,")"),count:100,attributes:"D,CC,AA.DAuN,AA.AuId,DN,Id,S,F.DFN,F.FId,FP,J.JId,J.JN,IA,FamId","subscription-key":"fe20f3c2bcfa444d97e94a36b3af07c8"}});case 4:if(e.t1=n=e.sent.data,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===n;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=n.entities;case 13:return a=e.t2,e.abrupt("return",a.filter((function(e){return e.IA&&(e.FamId===e.Id||!e.FamId)})).sort((function(e,t){return e.DN<t.DN?-1:1})));case 17:return e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t=Object(O.useReactiveVar)(p.j),n=Object(O.useReactiveVar)(p.b),c=Object(O.useReactiveVar)(p.l);Object(a.useEffect)((function(){(function(){var e=Object(F.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p.b,e.next=3,$(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t).then((function(){return setTimeout((function(){return Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{search:!1}))}),500)}))}),[t]);var i=Object(O.useReactiveVar)(p.f).search;return Object(C.jsx)(h.b,{height:"100%",width:"100%",children:Object(C.jsx)(X,{loading:i,children:n?0===n.length?Object(C.jsxs)(b.a,{children:[Object(C.jsx)(G.a,{color:"notice",size:"XXL"}),Object(C.jsx)(d.a,{children:"Search"}),Object(C.jsxs)(d.b,{children:["Search articles on"," ",Object(C.jsx)("a",{href:"https://academic.microsoft.com/home",target:"_blank",rel:"noreferrer",children:"Microsoft Academic"}),"."]})]}):Object(C.jsx)(m.a,{children:Object(C.jsx)(h.b,{height:"100%",width:"100%",gap:"size-75",children:n.map((function(e){return Object(C.jsx)(W,{item:e,type:"search",onClick:_,selected:c.includes(e.Id)})}))})}):null})})};ee.defaultProps=K;var te,ne=n(28),ce=n(359),ae=function(e){var t,n=null===(t=Object(p.a)().find((function(t){return t.id===e.data.articleId})))||void 0===t?void 0:t.name;return Object(C.jsx)(u.a,{width:"size-3000",minHeight:"size-300",UNSAFE_style:{backgroundColor:"rgba(255,255,255, 0.5)",padding:"1rem",textOverflow:"ellipsis"},children:Object(C.jsx)(d.a,{level:5,margin:"size-0",children:n})})},re=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],j=e.data,o=function(e,t){return function(n){var c=n.node,a=n.x,r=n.y,i=n.size,s=n.color,j=n.blendMode,o=n.onMouseEnter,u=n.onMouseMove,l=n.onMouseLeave,b=n.onClick;return Object(C.jsx)("g",{transform:"translate(".concat(a,",").concat(r,")"),children:e.includes(c.data.articleId)?c.data.articleId===e[t]?Object(C.jsx)("polygon",{points:"0,-16.5 -9,12 13.5,-6 -13.5,-6 9,12",fill:s,style:{mixBlendMode:j},onMouseEnter:o,onMouseMove:u,onMouseLeave:l,onClick:b}):Object(C.jsx)("rect",{x:-.5*i,y:-.5*i,width:i,height:i,fill:s,style:{mixBlendMode:j},onMouseEnter:o,onMouseMove:u,onMouseLeave:l,onClick:b}):Object(C.jsx)("circle",{r:i/2,fill:s,style:{mixBlendMode:j},onMouseEnter:o,onMouseMove:u,onMouseLeave:l,onClick:b})})}}(Object(O.useReactiveVar)(p.k),Object(O.useReactiveVar)(p.c)),u=Object(O.useReactiveVar)(p.e);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(ce.a,{data:j.data,margin:{top:40,right:40,bottom:100,left:100},xScale:{type:"linear",min:j.range.xMin,max:j.range.xMax},yScale:{type:"linear",min:j.range.yMin,max:j.range.yMax},axisBottom:{legend:"PC1: ".concat(Math.round(1e4*j.prl[0])/100,"%"),legendPosition:"middle",legendOffset:50},axisLeft:{legend:"PC2: ".concat(Math.round(1e4*j.prl[1])/100,"%"),legendPosition:"middle",legendOffset:-50},nodeSize:function(e){return e.id===c?15:9},colors:{scheme:"set2"},onMouseMove:function(e){return s(e.id)},onMouseLeave:function(){return s(null)},onClick:function(e){var t=e.data.articleId,n=Object(g.xor)(Object(p.k)(),[t]);Object(p.k)(n),Object(p.c)(Math.max(n.findIndex((function(e){return e===t})),0))},tooltip:function(e){var t=e.node;return Object(C.jsx)("div",{children:Object(C.jsx)(ae,Object(r.a)({},t))})},theme:{textColor:u?"#DDDDDD":"#333333"},renderNode:o})})},ie=n(370),se=n.n(ie),je=n(371),oe=function(e){var t=[{id:"prl",data:e.data.prl.map((function(e,t){return{x:t+1,y:Math.round(1e4*e)/100}}))}],n=Object(O.useReactiveVar)(p.e);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(je.a,{data:t,margin:{top:40,right:40,bottom:100,left:100},xScale:{type:"linear",min:0,max:e.data.prl.length+1},yScale:{type:"linear",min:0,max:110*Object(g.max)(e.data.prl)},axisBottom:{legend:"Dimension",legendPosition:"middle",legendOffset:50},axisLeft:{legend:"Importance (%)",legendPosition:"middle",legendOffset:-50},theme:{textColor:n?"#DDDDDD":"#333333"},useMesh:!0})})},ue=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],j=Object(a.useState)(0),o=Object(i.a)(j,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){e>u?function(){var t=Object(F.a)(N.a.mark((function t(){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.post("https://sta220-2021-f.herokuapp.com/kmeans",{data:{k:Object(p.g)()}});case 2:n=t.sent,s(n.data),l(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then((function(){return setTimeout((function(){return Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{plot:!1}))}),1e3)})):e<u&&(l(0),s(null))}),[u,e]),c},le=function(e){var t=Object(O.useReactiveVar)(p.h),n=ue(t),c=Object(O.useReactiveVar)(p.f).plot;return Object(C.jsx)(X,{loading:c,children:Object(C.jsx)(h.b,{height:"100%",columns:["1fr","1fr"],areas:["C C"],children:n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(h.b,{rows:["4rem","auto","36rem"],children:[Object(C.jsx)(h.a,{children:Object(C.jsx)(d.a,{level:2,children:"K-Means Clustering"})}),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(re,{data:n})]}),Object(C.jsxs)(h.b,{rows:["4rem","auto","36rem"],children:[Object(C.jsx)(h.a,{children:Object(C.jsx)(d.a,{level:2,children:"Principal Component Analysis"})}),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(oe,{data:n})]})]}):Object(C.jsx)(h.a,{width:"100%",justifyContent:"center",alignSelf:"center",gridArea:"C",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(se.a,{color:"positive",size:"XXL"}),Object(C.jsx)(d.a,{children:"Plotting"}),Object(C.jsx)(d.b,{children:'Hit "Run k-means" to generate a plot.'})]})})})})},be={},de=function(e){if(e){var t=Object(g.xor)(Object(p.k)(),[e]);Object(p.k)(t),Object(p.c)(t.length-1)}},Oe=Object(O.gql)(te||(te=Object(j.a)(["\n  query {\n    articles {\n      id\n      name\n    }\n  }\n"]))),he=function(e){var t=Object(O.useQuery)(Oe).data,n=Object(O.useReactiveVar)(p.i),c=Object(O.useReactiveVar)(p.a),i=Object(O.useReactiveVar)(p.k),s=Object(O.useReactiveVar)(p.h),j=ue(s);return Object(a.useEffect)((function(){var e=Object.values(n).filter((function(e){return e}));e.length?Object(p.k)(Object(g.intersection)(e.reduce((function(e,t){return Object(g.intersection)(e,t)})))):Object(p.k)([])}),[n]),Object(a.useEffect)((function(){var e=null===j||void 0===j?void 0:j.data.map((function(e,t){return e.data.map((function(e){return{cat:t,id:e.articleId}}))})).flat();t&&Object(p.a)(Object(ne.a)(t.articles).sort((function(e,t){return e.name<t.name?-1:1})).map((function(t){return Object(r.a)(Object(r.a)({},t),{},{color:null===e||void 0===e?void 0:e.find((function(e){return e.id===t.id})).cat})})))}),[t,null===j||void 0===j?void 0:j.data]),Object(C.jsx)(h.b,{width:"100%",gap:"size-75",UNSAFE_style:{textAlign:"left"},children:c?0===c.length?"no articles":c.map((function(e){return Object(C.jsx)(W,{item:e,type:"database",onClick:de,selected:i.includes(e.id)})})):null})};he.defaultProps=be;var fe,xe=n(376),ge=n(687),me=n(372),pe=n.n(me),ve=n(373),Ae=n.n(ve),ye=n(374),we=n.n(ye),Se=n(375),Ce=n.n(Se),ke=function(e){switch(e){case"title":return Object(C.jsx)(pe.a,{});case"author":return Object(C.jsx)(Ae.a,{});case"journal":return Object(C.jsx)(we.a,{});case"tag":return Object(C.jsx)(Ce.a,{});default:return}},Ie=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],j=n[1];return Object(a.useEffect)((function(){if(""!==c){var t=setTimeout((function(){Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{search:!0})),Object(p.j)(Object(r.a)(Object(r.a)({},Object(p.j)()),{},Object(s.a)({},e.type,c)))}),1e3);return function(){return clearTimeout(t)}}Object(p.j)(Object(r.a)(Object(r.a)({},Object(p.j)()),{},Object(s.a)({},e.type,void 0)))}),[e.type,c]),Object(C.jsx)(xe.a,{width:"100%",children:Object(C.jsx)(h.a,{alignItems:"end",justifyContent:"space-between",columnGap:"size-300",children:Object(C.jsx)(ge.a,{label:e.type.toUpperCase(),onChange:function(e){j(e)},value:c,width:"100%",icon:ke(e.type)})})})},Ee=n(395),De=function(e){var t,n,c=Object(O.useQuery)((n="".concat(e.type,"s"),Object(O.gql)(fe||(fe=Object(j.a)(["\n  query {\n    ","(orderBy: {name: asc}) {\n      id\n      name\n      articles{\n        id\n      }\n    }\n  }\n"])),n))).data,o=Object(O.useReactiveVar)(p.m),u=Object(a.useState)([]),l=Object(i.a)(u,2),b=l[0],f=l[1],x=Object(O.useReactiveVar)(p.e),m=Object(a.useState)(!1),v=Object(i.a)(m,2),A=v[0],y=v[1];return Object(a.useEffect)((function(){c&&(Object(p.f)()["fetchOption".concat(Object(g.capitalize)(e.type))]&&Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},Object(s.a)({},"fetchOption".concat(Object(g.capitalize)(e.type)),!1))),f(c["".concat(e.type,"s")].map((function(e){return{value:e.id,label:e.name.split(" ").map((function(e){return Object(g.capitalize)(e)})).join(" ")}}))))}),[c,e.type]),Object(C.jsx)(xe.a,{width:"100%",children:Object(C.jsx)(h.a,{alignItems:"end",justifyContent:"space-between",columnGap:"size-300",children:c?Object(C.jsxs)("div",{style:{width:"100%"},children:[Object(C.jsx)(d.b,{children:e.type.toUpperCase()}),Object(C.jsx)(Ee.a,{value:{label:null===(t=b.find((function(t){return t.value===o[e.type]})))||void 0===t?void 0:t.label,value:o[e.type]},isClearable:!0,options:b,onChange:function(t){t?(Object(p.m)(Object(r.a)(Object(r.a)({},o),{},Object(s.a)({},e.type,t.value))),Object(p.i)(Object(r.a)(Object(r.a)({},Object(p.i)()),{},Object(s.a)({},e.type,c["".concat(e.type,"s")].find((function(e){return e.id===t.value})).articles.map((function(e){return e.id}))))),Object(p.c)(0)):(Object(p.m)(Object(r.a)(Object(r.a)({},o),{},Object(s.a)({},e.type,void 0))),Object(p.i)(Object(r.a)(Object(r.a)({},Object(p.i)()),{},Object(s.a)({},e.type,void 0))))},onMenuOpen:function(){return y(!0)},onMenuClose:function(){return y(!1)},onKeyDown:function(e){!A&&"enter"===e.code&&e.preventDefault()},theme:function(e){return Object(r.a)(Object(r.a)({},e),{},{colors:x?Object(r.a)(Object(r.a)({},e.colors),{},{neutral0:"#282828",neutral5:"#282828",neutral10:"#282828",neutral20:"#777777",neutral30:"#777777",neutral70:"#CCCCCC",neutral80:"#CCCCCC",neutral90:"#CCCCCC",primary25:"#2266DD"}):e.colors})}})]}):Object(C.jsx)(C.Fragment,{})})})},Me={full:!0},ze=function(e){var t=Me&&e,n=t.full?["title","author","journal","tag"]:["author","journal","tag"];return Object(C.jsx)(h.b,{children:t.full?n.map((function(e){return Object(C.jsx)(Ie,{type:e})})):n.map((function(e){return Object(C.jsx)(De,{type:e})}))})};ze.defaultProps=Me;var Re,Ne=n(381),Fe=n.n(Ne),Ve=n(691),Le=n(382),Be=n.n(Le),Ue=n(383),Pe=n.n(Ue),Te=function(e){return function(){var t=Object(p.k)(),n=Object(p.a)();e({variables:{where:t.map((function(e){return e.toString()}))}}).then((function(){Object(p.k)([]),Object(p.a)(Object(g.differenceBy)(n,t.map((function(e){return{id:e}})),"id"))}))}},Je=Object(O.gql)(Re||(Re=Object(j.a)(["\n  mutation DELETE_ARTICLES($where: [String!]) {\n    deleteManyArticle(where: { id: { in: $where } }) {\n      count\n    }\n  }\n"]))),Qe=function(e){var t=Object(O.useMutation)(Je),n=Object(i.a)(t,1)[0],c=Object(O.useReactiveVar)(p.g);return Object(C.jsxs)(h.b,{gap:"size-200",columns:["4fr","6fr"],children:[Object(C.jsxs)(l.b,{alignSelf:"center",variant:"secondary",onPressEnd:function(){Object(p.k)([]),Object(p.m)({}),Object(p.i)({}),Object(p.h)(0)},children:[Object(C.jsx)(Pe.a,{}),Object(C.jsx)(d.b,{children:"Clear"})]}),Object(C.jsx)(Ve.a,{width:"size-2000",label:"k for k-means",value:c,onChange:function(e){return Object(p.g)(e)},minValue:2,maxValue:8}),Object(C.jsxs)(l.b,{variant:"secondary",onPressEnd:Te(n),children:[Object(C.jsx)(Be.a,{}),Object(C.jsx)(d.b,{children:"Delete"})]}),Object(C.jsxs)(l.b,{variant:"cta",onPressEnd:function(){Object(p.h)(Object(p.h)()+1),Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{plot:!0}))},children:[Object(C.jsx)(Fe.a,{}),Object(C.jsx)(d.b,{children:"Run k-means"})]})]})},We=n(384),Ye=n.n(We),Ge=n(688),qe=function(e){var t=new Array(e.IndexLength-1);return Object.entries(e.InvertedIndex).map((function(e){e[1].map((function(n){t[n]=e[0]}))})),t.slice("Abstract"===t[0]?1:0).join(" ").replace(/\s+/," ")},He=function(){var e=Object(F.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.abstract})),e.next=3,Ze(n);case 3:return c=e.sent,e.abrupt("return",t.map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{abstractEmbedding:c[t].embedded,status:"embedded"})})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Ze(e){return Xe.apply(this,arguments)}function Xe(){return(Xe=Object(F.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("https://sta220-2021-text-analyzer.azurewebsites.net/api/HttpTrigger1?code=RQ/qkMrW1C/NNmH4cohV4bAEXpunAk3zTVsE7dbJlMiskvBhcN6VZw==",t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ke,_e=n(385),$e=n.n(_e),et=function(e,t,n){return Object(F.a)(N.a.mark((function c(){var a,i,s,j,o,u;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=e.filter((function(e){return t.includes(e.Id)})),l=Object(g.uniqBy)(a,"Id"),i=l.map((function(e,t){return{id:e.Id.toString(),date:e.D,citation:e.CC,name:e.DN,abstract:qe(e.IA),abstractEmbedding:[],authors:e.AA.map((function(e){return{id:e.AuId.toString(),name:e.DAuN}})),tags:e.F.map((function(e){return{id:e.FId.toString(),name:e.DFN}})),journal:e.J?{id:e.J.JId.toString(),name:e.J.JN}:void 0,status:"notReady"}})),Object(p.a)(Object(g.unionBy)(i,Object(p.a)(),"id")),Object(p.l)([]),c.next=6,He(i);case 6:for(s=c.sent,Object(p.a)(Object(g.unionBy)(s,Object(p.a)(),"id")),j=s.map((function(e){var t=Object(r.a)(Object(r.a)({},e),{},{date:new Date(e.date).toISOString(),abstractEmbedding:{set:e.abstractEmbedding},journal:e.journal?{connectOrCreate:{where:{id:e.journal.id},create:e.journal}}:void 0,authors:{connectOrCreate:e.authors.map((function(e){return{where:{id:e.id},create:e}}))},tags:{connectOrCreate:e.tags.map((function(e){return{where:{id:e.id},create:e}}))}});return delete t.status,t})),o=function(e){var t=j[e];n({variables:{where:{id:t.id},create:t}}).then((function(){var t=s[e];delete t.status,Object(p.a)(Object(g.unionBy)([t],Object(p.a)(),"id"))}))},u=0;u<j.length;u++)o(u);case 11:case"end":return c.stop()}var l}),c)})))},tt=Object(O.gql)(Ke||(Ke=Object(j.a)(["\n  mutation UPSERT_ONE_ARTICLE(\n    $where: ArticleWhereUniqueInput!\n    $create: ArticleCreateInput!\n  ) {\n    upsertOneArticle(where: $where, create: $create, update: {}) {\n      id\n    }\n  }\n"]))),nt=function(e){var t=Object(O.useReactiveVar)(p.b),n=Object(O.useReactiveVar)(p.l),c=Object(O.useMutation)(tt),a=Object(i.a)(c,1)[0];return Object(C.jsxs)(h.a,{alignItems:"center",gap:"size-100",children:[Object(C.jsxs)(Ge.b,{delay:0,children:[Object(C.jsx)(l.a,{isQuiet:!0,children:Object(C.jsx)($e.a,{})}),Object(C.jsx)(Ge.a,{children:"Adding articles for the first time in the app may take a while."})]}),Object(C.jsxs)(l.b,{variant:"cta",onPressEnd:et(t,n,a),children:[Object(C.jsx)(Ye.a,{}),Object(C.jsx)(d.b,{children:"Add Articles to the List"})]})]})},ct={type:null},at=function(e){var t=ct&&e;return t.type?Object(C.jsxs)(h.a,{direction:"column",rowGap:"size-150",children:["search"===t.type?Object(C.jsx)(d.a,{level:2,margin:"size-0",children:"Search Articles"}):Object(C.jsx)(d.a,{level:2,margin:"size-0",children:"Fetch Database"}),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(u.a,{marginBottom:"size-200",children:Object(C.jsx)(ze,{full:"search"===t.type})}),Object(C.jsx)(o.a,{size:"S"}),"search"===t.type?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ee,{}),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(u.a,{alignSelf:"flex-end",children:Object(C.jsx)(nt,{})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(m.a,{children:Object(C.jsx)(he,{})}),Object(C.jsx)(o.a,{size:"S"}),Object(C.jsx)(u.a,{alignSelf:"flex-end",children:Object(C.jsx)(Qe,{})})]})]}):null};at.defaultProps=ct;var rt=n(690),it=n(692),st=n(685),jt=n(390),ot=n.n(jt),ut=n(391),lt=n.n(ut),bt=function(e){var t=Object(rt.a)(),n=Object(O.useReactiveVar)(p.f);return Object(a.useEffect)((function(){!n.main||n.articleListDatabase||n.fetchOptionAuthor||n.fetchOptionJournal||n.fetchOptionTag||Object(p.f)(Object(r.a)(Object(r.a)({},Object(p.f)()),{},{main:!1}))}),[n]),Object(C.jsx)(X,{loading:n.main,children:Object(C.jsxs)(h.b,{areas:["header header header header header","sidebar1 divider1 sidebar2 divider2 main"],columns:["20rem","0.25rem","20rem","0.25rem","auto"],rows:["4rem","auto"],height:t.height,width:t.width,children:[Object(C.jsx)(h.b,{gridArea:"header",height:"4rem",children:Object(C.jsx)(u.a,{backgroundColor:"gray-400",children:Object(C.jsxs)(h.a,{justifyContent:"space-between",alignContent:"center",height:"4rem",children:[Object(C.jsx)(d.a,{level:3,marginStart:"size-200",children:"IevA - Interactive exploration and visualization tool of academic Articles"}),Object(C.jsxs)(h.b,{alignItems:"center",columns:["size-1000","size-600"],children:[Object(C.jsxs)(h.a,{alignItems:"center",children:[Object(C.jsx)(ot.a,{size:"S"}),Object(C.jsx)(it.a,{margin:"size-75",onChange:function(e){e?Object(p.e)(!0):Object(p.e)(!1)}}),Object(C.jsx)(lt.a,{size:"S"})]}),Object(C.jsx)(l.a,{isQuiet:!0,UNSAFE_style:{cursor:"pointer"},onPressEnd:function(){return window.open("https://github.com/keita-makino/sta220-2021-f","_blank")},children:Object(C.jsx)(st.a,{alt:"GitHub",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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",height:"2rem",width:"2rem",UNSAFE_style:{opacity:.6}})})]})]})})}),Object(C.jsx)(h.b,{gridArea:"sidebar1",margin:"1rem",UNSAFE_style:{overflow:"hidden"},children:Object(C.jsx)(at,{type:"search"})}),Object(C.jsx)(h.b,{gridArea:"divider1",children:Object(C.jsx)(o.a,{orientation:"vertical",size:"M"})}),Object(C.jsx)(h.b,{gridArea:"sidebar2",margin:"1rem",UNSAFE_style:{overflow:"hidden"},children:Object(C.jsx)(at,{type:"database"})}),Object(C.jsx)(h.b,{gridArea:"divider2",children:Object(C.jsx)(o.a,{orientation:"vertical",size:"M"})}),Object(C.jsx)(m.a,{children:Object(C.jsxs)(h.b,{gridArea:"main",margin:"1rem",alignContent:"start",areas:["details","divider","plot"],rows:[Object(h.c)("size-4600","40vh"),"auto",Object(h.c)("36rem","48vh")],alignItems:"stretch",children:[Object(C.jsx)(z,{}),Object(C.jsx)(o.a,{size:"M"}),Object(C.jsx)(le,{})]})})]})})},dt=function(e){return Object(C.jsx)(bt,{})}},413:function(e,t,n){},414:function(e,t,n){},424:function(e,t){},643:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(56),i=n.n(r),s=(n(413),n(347)),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,695)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},o=n(3);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{})}),document.getElementById("root")),j()}},[[643,1,2]]]);
//# sourceMappingURL=main.d943b019.chunk.js.map