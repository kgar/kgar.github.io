(this["webpackJsonpbuy-books-direct"]=this["webpackJsonpbuy-books-direct"]||[]).push([[0],{12:function(e,a,t){e.exports={"banner-container":"CallToAction_banner-container__2TbN6",banner:"CallToAction_banner__2HBui","banner-image":"CallToAction_banner-image__hFOhA","beautiful-rule":"CallToAction_beautiful-rule__1x8z2","header-text":"CallToAction_header-text__93vTc"}},15:function(e,a,t){e.exports={container:"App_container__3eftW","head-spaced":"App_head-spaced__3eo94","search-container":"App_search-container__2HKO0 App_head-spaced__3eo94 App_container__3eftW","search-link-text":"App_search-link-text__3Tqgl"}},16:function(e,a,t){e.exports={authors:"Filter_authors__1fuP_",author:"Filter_author__23ppp","filter-option":"Filter_filter-option__3NwCv",checked:"Filter_checked__nPiCf"}},18:function(e,a,t){e.exports={gallery:"Books_gallery__hkYj_","book-summary":"Books_book-summary__2qF3m","image-link":"Books_image-link__1XqCf"}},21:function(e,a,t){e.exports={"hero-button":"Buttons_hero-button__3ESpX","link-button":"Buttons_link-button__jCSSF"}},32:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),n=t(25),i=t.n(n),s=(t(32),t(27)),o=t(6),l=(t(33),t(34),t(2)),u=t(18),h=t.n(u),b=t(0);function m(e){var a=e.books;return Object(b.jsx)("div",{className:h.a.gallery,children:a.map((function(e){return Object(b.jsx)(d,{book:e},e.Title+e.AuthorFullName+e.PublicationDate)}))})}function d(e){var a=e.book;return Object(b.jsxs)("article",{className:h.a["book-summary"],children:[Object(b.jsx)("a",{href:a.Link,target:"_blank",rel:"noreferrer",className:h.a["image-link"],children:Object(b.jsx)("img",{src:a.ImageSrc,alt:'Book cover of "'.concat(a.Title,'" by ').concat(a.AuthorFullName)})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:a.Title}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:a.AuthorFullName})]})]},a.Title+a.AuthorFullName+a.PublicationDate)}var j=t(24),f=t(21),g=t.n(f),O=["children","className"],p=["children"];function k(e){var a=e.children,t=e.className,r=Object(j.a)(e,O);return Object(b.jsx)("button",Object(l.a)(Object(l.a)({className:"".concat(g.a["link-button"]," ").concat(null!==t&&void 0!==t?t:"")},r),{},{children:a}))}function x(e){e.children;var a=Object(j.a)(e,p);return Object(b.jsx)("button",Object(l.a)(Object(l.a)({className:g.a["hero-button"]},a),{},{children:e.children}))}var _=t(16),v=t.n(_);function A(e){var a=e.checked,t=e.onChange,r=e.value;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("label",{className:"".concat(v.a["filter-option"]," ").concat(a?v.a.checked:""),children:[Object(b.jsx)("input",{type:"checkbox",value:r,checked:a,onChange:t}),r]})})}function N(e){var a=e.genres,t=e.searchCriteria,c=e.setSearchCriteria,n=Object(r.useState)([]),i=Object(o.a)(n,2),s=i[0],u=i[1];Object(r.useEffect)((function(){var e=a.map((function(e){return{value:e,checked:t.genres.includes(e)}}));u(e)}),[a,t.genres]);var h=function(e){var a=s.map((function(a){return a.value!==e.target.value?Object(l.a)({},a):Object(l.a)(Object(l.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));c(Object(l.a)(Object(l.a)({},t),{},{genres:a}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"filter",children:"Filter by Genre"}),s.map((function(e){return Object(b.jsx)(A,{checked:e.checked,value:e.value,onChange:h},e.value)}))]})}function C(e){var a=e.tags,t=e.searchCriteria,c=e.setSearchCriteria,n=Object(r.useState)([]),i=Object(o.a)(n,2),s=i[0],u=i[1];Object(r.useEffect)((function(){var e=a.map((function(e){return{value:e,checked:t.tags.includes(e)}}));u(e)}),[a,t.tags]);var h=function(e){var a=s.map((function(a){return a.value!==e.target.value?Object(l.a)({},a):Object(l.a)(Object(l.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));c(Object(l.a)(Object(l.a)({},t),{},{tags:a}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"filter",children:"Filter by Tag"}),s.map((function(e){return Object(b.jsx)(A,{checked:e.checked,value:e.value,onChange:h},e.value)}))]})}function S(e){var a=e.searchCriteria,t=e.setSearchCriteria,c=Object(r.useState)([]),n=Object(o.a)(c,2),i=n[0],s=n[1];Object(r.useEffect)((function(){var e=["Audiobook","eBook","Physical"].map((function(e){return{value:e,checked:a.media.includes(e)}}));s(e)}),[a.media]);var u=function(e){var r=i.map((function(a){return a.value!==e.target.value?Object(l.a)({},a):Object(l.a)(Object(l.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));t(Object(l.a)(Object(l.a)({},a),{},{media:r}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:"filter",children:"Filter by Medium"}),i.map((function(e){return Object(b.jsx)(A,{checked:e.checked,value:e.value,onChange:u},e.value)}))]})}function y(e){var a=e.tags,t=e.genres,r=e.authors,c=e.searchCriteria,n=e.setSearchCriteria;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(N,{genres:t,searchCriteria:c,setSearchCriteria:n})}),Object(b.jsx)("div",{children:Object(b.jsx)(C,{tags:a,searchCriteria:c,setSearchCriteria:n})}),Object(b.jsx)("div",{children:Object(b.jsx)(S,{searchCriteria:c,setSearchCriteria:n})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"filter",children:"Search by Author"}),Object(b.jsx)("div",{className:v.a.authors,children:r.map((function(e){return Object(b.jsx)(k,{className:v.a.author,onClick:function(){return a=e,void n((function(e){return Object(l.a)(Object(l.a)({},e),{},{searchText:a})}));var a},children:e},e)}))})]})]})}t(36);var F=t(9),T=t.n(F);function P(e){var a=e.searchCriteria,t=e.setSearchCriteria;return Object(b.jsxs)("div",{className:T.a["search-control"],children:[Object(b.jsx)("i",{className:"fas fa-search"}),Object(b.jsx)("input",{type:"text",name:"Search",id:"search",className:T.a.search,placeholder:"Search...",value:a.searchText,onChange:function(e){return a=e.target.value,void t((function(e){return Object(l.a)(Object(l.a)({},e),{},{searchText:a})}));var a}})]})}function L(e){var a=e.books,t=e.searchCriteria,c=e.setSearchCriteria,n=e.tags,i=e.genres,s=e.authors,l=Object(r.useState)([]),u=Object(o.a)(l,2),h=u[0],d=u[1],j=Object(r.useState)(!1),f=Object(o.a)(j,2),g=f[0],O=f[1];return Object(r.useEffect)((function(){var e=a.filter((function(e){return function(e,a){return null===e||a.Title.toLowerCase().includes(e.toLowerCase())||a.AuthorFullName.toLowerCase().includes(e.toLowerCase())}(t.searchText,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){var r,c;return e&&(null===(r=a.Genre)||void 0===r||null===(c=r.toLowerCase())||void 0===c?void 0:c.trim())===t.toLowerCase().trim()}),!0)}(t.genres,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){return e&&a.Tags.some((function(e){return(null===e||void 0===e?void 0:e.toLowerCase().trim())===(null===t||void 0===t?void 0:t.toLowerCase().trim())}))}),!0)}(t.tags,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){switch(t){case"Audiobook":return e&&a.AudioBook;case"eBook":return e&&a.Ebook;case"Physical":return e&&a.Physical;default:throw new Error("Medium not found. Unable to search by medium ".concat(t))}}),!0)}(t.media,e)}));d(e)}),[a,t]),Object(b.jsxs)("div",{className:T.a["search-container"],children:[Object(b.jsx)("div",{className:T.a["search-bar-container"],children:Object(b.jsx)(P,{searchCriteria:t,setSearchCriteria:c})}),Object(b.jsx)("div",{className:"".concat(T.a["search-filter-container"]," ").concat(g?T.a.open:""),children:Object(b.jsx)(y,{tags:n,genres:i,authors:s,searchCriteria:t,setSearchCriteria:c})}),Object(b.jsx)("button",{onClick:function(){O((function(e){return!e}))},className:T.a["filter-button"],"aria-label":"Filter Menu Toggle",children:Object(b.jsx)("i",{className:g?"fas fa-times":"fas fa-filter"})}),Object(b.jsx)("div",{className:T.a["search-results-container"],children:Object(b.jsx)(m,{books:h})})]})}var D=t(12),B=t.n(D),I=t(15),w=t.n(I),E=t(3),G=t.p+"static/media/hero-banner.a216a5ad.jpg";function J(e){var a=e.setSearchCriteria,t=Object(E.f)();return Object(b.jsx)("div",{className:B.a["banner-container"],children:Object(b.jsxs)("div",{className:"".concat(w.a.container," ").concat(B.a.banner),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:B.a["header-text"],children:"Buy Books Directly from the Author!"}),Object(b.jsx)("hr",{className:B.a["beautiful-rule"]}),Object(b.jsx)("p",{children:"Put 90%+ straight into your favorite author's pocket."}),Object(b.jsx)("p",{children:Object(b.jsxs)(x,{onClick:function(){a({genres:[],media:[],searchText:"",tags:[]}),t.push("/search")},children:[Object(b.jsx)("i",{className:"fas fa-book"})," See What's New"]})})]}),Object(b.jsx)("img",{className:B.a["banner-image"],src:G,alt:"A formidable multi-story library"})]})})}var Y=[{Title:"Dragonia 1",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX43",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"}],z=t(10);var $=function(){var e=Object(r.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)({searchText:"",genres:[],tags:[],media:[]}),i=Object(o.a)(n,2),l=i[0],u=i[1],h=Object(r.useState)([]),m=Object(o.a)(h,2),d=m[0],j=m[1],f=Object(r.useState)([]),g=Object(o.a)(f,2),O=g[0],p=g[1],k=Object(r.useState)([]),x=Object(o.a)(k,2),_=x[0],v=x[1];function A(e){u({searchText:"",genres:[],tags:[],media:[e]})}function N(){u({searchText:"",genres:[],tags:[],media:[]})}return Object(r.useEffect)((function(){var e=Object(s.a)(Y),a=Date.now();e.sort((function(e,t){var r=Date.parse(e.DateAdded);isNaN(r)&&(r=a);var c=Date.parse(t.DateAdded);return isNaN(c)&&(c=a),r>c?-1:r<c?1:0})),c(e)}),[]),Object(r.useEffect)((function(){var e=new Set,a=new Set,r=new Set;t.forEach((function(t){return e.add(t.Genre),t.Tags.forEach((function(e){return a.add(e)})),r.add(t.AuthorFullName),e})),j(Array.from(e).sort((function(e,a){return e>a?1:e<a?-1:0}))),p(Array.from(a).sort((function(e,a){return e>a?1:e<a?-1:0}))),v(Array.from(r).sort((function(e,a){return e>a?1:e<a?-1:0})))}),[t]),Object(b.jsxs)(z.a,{basename:"/buy-books-direct",children:[Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"content container",children:[Object(b.jsx)("h1",{className:"brand",children:Object(b.jsxs)(z.b,{to:"/",onClick:N,children:["buy books direct ",Object(b.jsx)("i",{className:"fas fa-book"})]})}),Object(b.jsx)("input",{type:"checkbox",id:"nav-toggle-checkbox"}),Object(b.jsx)("label",{htmlFor:"nav-toggle-checkbox",className:"nav-toggle",children:Object(b.jsx)("i",{className:"fas fa-bars"})}),Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(z.b,{className:"nav-link",to:"/",onClick:N,children:"Home"}),Object(b.jsx)(z.b,{className:"nav-link",to:"/search",onClick:function(){return A("eBook")},children:"eBooks"}),Object(b.jsx)(z.b,{className:"nav-link",to:"/search",onClick:function(){return A("Audiobook")},children:"Audiobooks"}),Object(b.jsx)("span",{className:"nav-link",children:"Get Added to this List"}),Object(b.jsx)("span",{className:"nav-link",children:"Subscribe to this List"}),Object(b.jsxs)(z.b,{className:"nav-link pointer",to:"/search",title:"Search",children:[Object(b.jsx)("i",{className:"fas fa-search"})," ",Object(b.jsx)("span",{className:w.a["search-link-text"],children:"Search Books"})]})]})]})}),Object(b.jsx)("main",{children:Object(b.jsxs)(E.c,{children:[Object(b.jsx)(E.a,{path:"/",exact:!0,children:Object(b.jsx)(J,{setSearchCriteria:u})}),Object(b.jsx)(E.a,{path:["/search"],children:Object(b.jsx)("div",{className:w.a["search-container"],children:Object(b.jsx)(L,{books:t,searchCriteria:l,setSearchCriteria:u,tags:O,genres:d,authors:_})})})]})}),Object(b.jsx)("footer",{className:"container",children:"This is a footer \ud83e\uddb6 Craig, what're putting down here?"})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(a){var t=a.getCLS,r=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),M()},9:function(e,a,t){e.exports={"search-container":"Search_search-container__1kdQO","search-control":"Search_search-control__2WgPl",search:"Search_search__3393q","search-filter-container":"Search_search-filter-container__34UGa",open:"Search_open__2F60x","filter-button":"Search_filter-button__3CA6Z","search-bar-container":"Search_search-bar-container__-lT7K","search-results-container":"Search_search-results-container__2FxWF"}}},[[45,1,2]]]);
//# sourceMappingURL=main.a7f62a9f.chunk.js.map