(this["webpackJsonpreact-ex-03"]=this["webpackJsonpreact-ex-03"]||[]).push([[0],{257:function(e,t,i){},258:function(e,t,i){},398:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(99),a=i.n(r),s=(i(257),i(10)),o=(i(258),i(106)),d=i(15),l=i(19),j=i.n(l),b=i(55),h=i(228),u=i.n(h),f=i(2);function O(e){var t=e.movies,i=e.date;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h3",{children:["MovieList Page (",i,")"]}),Object(f.jsxs)("table",{className:"movieListTable",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\ub2f9\uc77c \uc21c\uc704"}),Object(f.jsx)("th",{children:"\uc601\ud654\uc81c\ubaa9"}),Object(f.jsx)("th",{children:"\ub2f9\uc77c \uad00\uac1d\uc218"}),Object(f.jsx)("th",{children:"\ub2f9\uc77c \ub9e4\ucd9c\uc561"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.rank}),Object(f.jsx)("td",{children:e.movieNm}),Object(f.jsx)("td",{children:e.audiCnt}),Object(f.jsx)("td",{children:e.salesAmt})]},e.movieCd)}))})]})]})}function x(){var e=Object(n.useState)("20210901"),t=Object(s.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)([]),a=Object(s.a)(r,2),o=a[0],d=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=cad9be1865105b37c7878f3391f806e8&targetDt="+i).then((function(e){d(e.data.boxOfficeResult.dailyBoxOfficeList),localStorage.gData=JSON.stringify(e.data.boxOfficeResult.dailyBoxOfficeList)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(f.jsxs)("article",{children:[Object(f.jsx)("h3",{children:"Movie page"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"date",onChange:function(e){var t=e.target.value.split("-");c(t[0]+t[1]+t[2])}}),Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do",target:"_blank",rel:"noreferrer",className:"instruction",children:"\uc124\uba85\uc11c"}),Object(f.jsx)(O,{movies:o,date:i})]})}var g=i(244);function p(){var e=Object(n.useState)(JSON.parse(localStorage.gData)),t=Object(s.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){c(i.map((function(e){return{country:e.movieNm,donut:e.audiCnt}})))}),[localStorage.gData]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Graph page"}),Object(f.jsx)("div",{className:"contents",children:Object(f.jsx)("div",{className:"graphContainer",style:{height:"50vw"},children:Object(f.jsx)(g.a,{data:i,keys:["hot dog","burger","sandwich","kebab","fries","donut"],indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"greys"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"title",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"\uad00\uac1d\uc218",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]})})})]})}var m=function(){var e=function(e){var t=Object(n.useState)(e),i=Object(s.a)(t,2),c=i[0],r=i[1];return Object(n.useEffect)((function(){document.querySelector("title").innerText=c}),[c]),r}("Loading...");return setTimeout((function(){return e("Movie")}),500),Object(f.jsxs)(o.a,{children:[Object(f.jsx)("header",{children:Object(f.jsxs)("nav",{children:[Object(f.jsx)(o.b,{to:"/",children:"Movie"}),Object(f.jsx)(o.b,{to:"/Graph",children:"Graph"})]})}),Object(f.jsxs)(d.c,{children:[Object(f.jsxs)(d.a,{exact:!0,path:"/",children:[" ",Object(f.jsx)(x,{})," "]}),Object(f.jsxs)(d.a,{path:"/Graph",children:[" ",Object(f.jsx)(p,{})," "]})]})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,437)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),v()}},[[398,1,2]]]);
//# sourceMappingURL=main.187930c4.chunk.js.map