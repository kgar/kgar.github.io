(this["webpackJsonpbuy-books-direct"]=this["webpackJsonpbuy-books-direct"]||[]).push([[0],{12:function(e,a,t){e.exports={"pager-button":"Pager_pager-button__1OUiw",selected:"Pager_selected__alF_A"}},13:function(e,a,t){e.exports={"banner-container":"CallToAction_banner-container__2TbN6",banner:"CallToAction_banner__2HBui","banner-image":"CallToAction_banner-image__hFOhA","beautiful-rule":"CallToAction_beautiful-rule__1x8z2","header-text":"CallToAction_header-text__93vTc"}},16:function(e,a,t){e.exports={container:"App_container__3eftW","head-spaced":"App_head-spaced__3eo94","search-container":"App_search-container__2HKO0 App_head-spaced__3eo94 App_container__3eftW","search-link-text":"App_search-link-text__3Tqgl"}},17:function(e,a,t){e.exports={authors:"Filter_authors__1fuP_",author:"Filter_author__23ppp","filter-option":"Filter_filter-option__3NwCv",checked:"Filter_checked__nPiCf"}},19:function(e,a,t){e.exports={gallery:"Books_gallery__hkYj_","book-summary":"Books_book-summary__2qF3m","image-link":"Books_image-link__1XqCf"}},22:function(e,a,t){e.exports={"hero-button":"Buttons_hero-button__3ESpX","link-button":"Buttons_link-button__jCSSF"}},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var r=t(1),i=t.n(r),c=t(26),o=t.n(c),n=(t(33),t(28)),s=t(5),m=(t(34),t(35),t(2)),h=t(19),l=t.n(h),u=t(0);function d(e){var a=e.books;return Object(u.jsx)("div",{className:l.a.gallery,children:a.map((function(e){return Object(u.jsx)(g,{book:e},e.Title+e.AuthorFullName+e.PublicationDate)}))})}function g(e){var a=e.book;return Object(u.jsxs)("article",{className:l.a["book-summary"],children:[Object(u.jsx)("a",{href:a.Link,target:"_blank",rel:"noreferrer",className:l.a["image-link"],children:Object(u.jsx)("img",{src:a.ImageSrc,alt:'Book cover of "'.concat(a.Title,'" by ').concat(a.AuthorFullName)})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:a.Title}),Object(u.jsx)("br",{}),Object(u.jsx)("i",{children:a.AuthorFullName})]})]},a.Title+a.AuthorFullName+a.PublicationDate)}var b=t(25),p=t(22),A=t.n(p),j=["children","className"],P=["children"];function k(e){var a=e.children,t=e.className,r=Object(b.a)(e,j);return Object(u.jsx)("button",Object(m.a)(Object(m.a)({className:"".concat(A.a["link-button"]," ").concat(null!==t&&void 0!==t?t:"")},r),{},{children:a}))}function S(e){e.children;var a=Object(b.a)(e,P);return Object(u.jsx)("button",Object(m.a)(Object(m.a)({className:A.a["hero-button"]},a),{},{children:e.children}))}var N=t(17),y=t.n(N);function C(e){var a=e.checked,t=e.onChange,r=e.value;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("label",{className:"".concat(y.a["filter-option"]," ").concat(a?y.a.checked:""),children:[Object(u.jsx)("input",{type:"checkbox",value:r,checked:a,onChange:t}),r]})})}function T(e){var a=e.genres,t=e.searchCriteria,i=e.setSearchCriteria,c=Object(r.useState)([]),o=Object(s.a)(c,2),n=o[0],h=o[1];Object(r.useEffect)((function(){var e=a.map((function(e){return{value:e,checked:t.genres.includes(e)}}));h(e)}),[a,t.genres]);var l=function(e){var a=n.map((function(a){return a.value!==e.target.value?Object(m.a)({},a):Object(m.a)(Object(m.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));i(Object(m.a)(Object(m.a)({},t),{},{genres:a}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"filter",children:"Filter by Genre"}),n.map((function(e){return Object(u.jsx)(C,{checked:e.checked,value:e.value,onChange:l},e.value)}))]})}function F(e){var a=e.tags,t=e.searchCriteria,i=e.setSearchCriteria,c=Object(r.useState)([]),o=Object(s.a)(c,2),n=o[0],h=o[1];Object(r.useEffect)((function(){var e=a.map((function(e){return{value:e,checked:t.tags.includes(e)}}));h(e)}),[a,t.tags]);var l=function(e){var a=n.map((function(a){return a.value!==e.target.value?Object(m.a)({},a):Object(m.a)(Object(m.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));i(Object(m.a)(Object(m.a)({},t),{},{tags:a}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"filter",children:"Filter by Tag"}),n.map((function(e){return Object(u.jsx)(C,{checked:e.checked,value:e.value,onChange:l},e.value)}))]})}function _(e){var a=e.searchCriteria,t=e.setSearchCriteria,i=Object(r.useState)([]),c=Object(s.a)(i,2),o=c[0],n=c[1];Object(r.useEffect)((function(){var e=["Audiobook","eBook","Physical"].map((function(e){return{value:e,checked:a.media.includes(e)}}));n(e)}),[a.media]);var h=function(e){var r=o.map((function(a){return a.value!==e.target.value?Object(m.a)({},a):Object(m.a)(Object(m.a)({},a),{},{checked:!a.checked})})).filter((function(e){return e.checked})).map((function(e){return e.value}));t(Object(m.a)(Object(m.a)({},a),{},{media:r}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"filter",children:"Filter by Medium"}),o.map((function(e){return Object(u.jsx)(C,{checked:e.checked,value:e.value,onChange:h},e.value)}))]})}function L(e){var a=e.tags,t=e.genres,r=e.authors,i=e.searchCriteria,c=e.setSearchCriteria;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(T,{genres:t,searchCriteria:i,setSearchCriteria:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(F,{tags:a,searchCriteria:i,setSearchCriteria:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(_,{searchCriteria:i,setSearchCriteria:c})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"filter",children:"Search by Author"}),Object(u.jsx)("div",{className:y.a.authors,children:r.map((function(e){return Object(u.jsx)(k,{className:y.a.author,onClick:function(){return a=e,void c((function(e){return Object(m.a)(Object(m.a)({},e),{},{searchText:a})}));var a},children:e},e)}))})]})]})}t(37);var O=t(9),f=t.n(O);var D=t(12),x=t.n(D);function v(e){var a,t,r,i=e.currentPage,c=e.totalPages,o=e.pageDisplayLimit,n=i-Math.floor(o/2),s=Math.max(0,c-o)+1,m=(a=1,t=n,r=s,Math.min(Math.max(a,t),r)),h=Math.min(o,c);return Array(h).fill(void 0).map((function(e,a){return a+m}))}function I(e){var a=e.pageDisplayLimit,t=e.pageSize,i=e.itemCount,c=e.currentPage,o=e.setCurrentPage,n=Object(r.useState)([]),m=Object(s.a)(n,2),h=m[0],l=m[1],d=Math.ceil(i/t),g=c===d,b=1===c;return Object(r.useEffect)((function(){var e=1===d?[]:v({currentPage:c,pageDisplayLimit:a,totalPages:d});l(e)}),[a,i,c,d]),h.length>0?Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{disabled:b,onClick:function(){o(1)},className:x.a["pager-button"],children:"\xab First"}),Object(u.jsx)("button",{disabled:b,onClick:function(){o((function(e){return e-1}))},className:x.a["pager-button"],children:"\u2039 Prev"}),h.map((function(e){return Object(u.jsx)("button",{onClick:function(){var a;(a=e)!==c&&o(a)},className:"".concat(x.a["pager-button"]," ").concat(e===c?x.a.selected:""),children:e},e)})),Object(u.jsx)("button",{disabled:g,onClick:function(){o((function(e){return e+1}))},className:x.a["pager-button"],children:"Next \u203a"}),Object(u.jsx)("button",{disabled:g,onClick:function(){o(d)},className:x.a["pager-button"],children:"Last \xbb"})]}):Object(u.jsx)(u.Fragment,{})}function B(e){var a=e.searchCriteria,t=e.setSearchCriteria;return Object(u.jsxs)("div",{className:f.a["search-control"],children:[Object(u.jsx)("i",{className:"fas fa-search"}),Object(u.jsx)("input",{type:"text",name:"Search",id:"search",className:f.a.search,placeholder:"Search...",value:a.searchText,onChange:function(e){return a=e.target.value,void t((function(e){return Object(m.a)(Object(m.a)({},e),{},{searchText:a})}));var a}})]})}function G(e){var a=e.books,t=e.searchCriteria,i=e.setSearchCriteria,c=e.tags,o=e.genres,n=e.authors,m=Object(r.useState)([]),h=Object(s.a)(m,2),l=h[0],g=h[1],b=Object(r.useState)([]),p=Object(s.a)(b,2),A=p[0],j=p[1],P=Object(r.useState)(!1),k=Object(s.a)(P,2),S=k[0],N=k[1],y=Object(r.useState)(1),C=Object(s.a)(y,2),T=C[0],F=C[1];return Object(r.useEffect)((function(){var e=a.filter((function(e){return function(e,a){return null===e||a.Title.toLowerCase().includes(e.toLowerCase())||a.AuthorFullName.toLowerCase().includes(e.toLowerCase())}(t.searchText,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){var r,i;return e&&(null===(r=a.Genre)||void 0===r||null===(i=r.toLowerCase())||void 0===i?void 0:i.trim())===t.toLowerCase().trim()}),!0)}(t.genres,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){return e&&a.Tags.some((function(e){return(null===e||void 0===e?void 0:e.toLowerCase().trim())===(null===t||void 0===t?void 0:t.toLowerCase().trim())}))}),!0)}(t.tags,e)&&function(e,a){return 0===e.length||e.reduce((function(e,t){switch(t){case"Audiobook":return e&&a.AudioBook;case"eBook":return e&&a.Ebook;case"Physical":return e&&a.Physical;default:throw new Error("Medium not found. Unable to search by medium ".concat(t))}}),!0)}(t.media,e)}));g(e)}),[a,T,t]),Object(r.useEffect)((function(){var e=20*(T-1),a=l.slice(e,e+20);j(a)}),[T,l]),Object(u.jsxs)("div",{className:f.a["search-container"],children:[Object(u.jsx)("div",{className:f.a["search-bar-container"],children:Object(u.jsx)(B,{searchCriteria:t,setSearchCriteria:i})}),Object(u.jsx)("div",{className:"".concat(f.a["search-filter-container"]," ").concat(S?f.a.open:""),children:Object(u.jsx)(L,{tags:c,genres:o,authors:n,searchCriteria:t,setSearchCriteria:i})}),Object(u.jsx)("button",{onClick:function(){N((function(e){return!e}))},className:f.a["filter-button"],"aria-label":"Filter Menu Toggle",children:Object(u.jsx)("i",{className:S?"fas fa-times":"fas fa-filter"})}),Object(u.jsxs)("div",{className:f.a["search-results-container"],children:[Object(u.jsx)("div",{className:f.a["pager-container"],children:Object(u.jsx)(I,{currentPage:T,itemCount:l.length,pageDisplayLimit:5,pageSize:20,setCurrentPage:F})}),Object(u.jsx)(d,{books:A}),Object(u.jsx)("div",{className:f.a["pager-container"],children:Object(u.jsx)(I,{currentPage:T,itemCount:l.length,pageDisplayLimit:5,pageSize:20,setCurrentPage:F})})]})]})}var E=t(13),J=t.n(E),Y=t(16),z=t.n(Y),$=t(3),w=t.p+"static/media/hero-banner.a216a5ad.jpg";function M(e){var a=e.setSearchCriteria,t=Object($.f)();return Object(u.jsx)("div",{className:J.a["banner-container"],children:Object(u.jsxs)("div",{className:"".concat(z.a.container," ").concat(J.a.banner),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:J.a["header-text"],children:"Buy Books Directly from the Author!"}),Object(u.jsx)("hr",{className:J.a["beautiful-rule"]}),Object(u.jsx)("p",{children:"Put 90%+ straight into your favorite author's pocket."}),Object(u.jsx)("p",{children:Object(u.jsxs)(S,{onClick:function(){a({genres:[],media:[],searchText:"",tags:[]}),t.push("/search")},children:[Object(u.jsx)("i",{className:"fas fa-book"})," See What's New"]})})]}),Object(u.jsx)("img",{className:J.a["banner-image"],src:w,alt:"A formidable multi-story library"})]})})}var H=[{Title:"Dragonia 1",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave 1",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX43",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 1 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX43",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe 2",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 1 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX43",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe 3",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 1 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX44",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe 4",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 1 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["High Fantasy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/516B68LM4DL._SY346_.jpg",Link:"https://payhip.com/b/SHhi",Template:"",PublicationDate:"1/2/2020",DateAdded:"1/20/2021"},{Title:"Dragonia 2 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51MCIhwNRfL._SY346_.jpg",Link:"https://payhip.com/b/6OB0",Template:"",PublicationDate:"2/2/2020",DateAdded:"2/20/2021"},{Title:"Dragonia 3 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/51OE5+LMmRL._SY346_.jpg",Link:"https://payhip.com/b/m9pB",Template:"",PublicationDate:"3/2/2020",DateAdded:"3/20/2021"},{Title:"Starlyn 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!0,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41v-ebImDbL._SY346_.jpg",Link:"https://payhip.com/b/iKBG",Template:"",PublicationDate:"4/2/2020",DateAdded:"8/4/2021"},{Title:"Ikchani 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!0,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/416Sr+n2YNL._SY346_.jpg",Link:"https://payhip.com/b/0H6i",Template:"",PublicationDate:"5/2/2020",DateAdded:"8/1/2021"},{Title:"Victoria's Grave 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41IWpY3Cs5L._SX260_.jpg",Link:"https://payhip.com/b/GX45",Template:"",PublicationDate:"6/2/2020",DateAdded:"5/30/2021"},{Title:"Crimson Claymore 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Gritty"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41n2Cxs8AKL._SY346_.jpg",Link:"https://payhip.com/b/47TM",Template:"",PublicationDate:"7/2/2020",DateAdded:"2/14/2021"},{Title:"Obsidian Arrow 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:[],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41ZTkdgA0mL._SY346_.jpg",Link:"https://payhip.com/b/MeJd",Template:"",PublicationDate:"8/2/2020",DateAdded:"1/20/2021"},{Title:"Violet Flamberge 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"Craig A. Price Jr.",Genre:"Fantasy",Tags:["Steampunk"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/41xrUHwTfFL._SY346_.jpg",Link:"https://payhip.com/b/91pl",Template:"",PublicationDate:"9/2/2020",DateAdded:"1/20/2021"},{Title:"Ghost Probe 5",AuthorLastName:"Price",AuthorFirstName:"Craig",AuthorFullName:"The Other Craig A. Price Jr.",Genre:"Sci-Fi",Tags:["Comedy"],Physical:!1,Ebook:!0,AudioBook:!1,Search:"",Price:"$3.99",ImageSrc:"https://m.media-amazon.com/images/I/4114D+Bwi8L._SY346_.jpg",Link:"https://payhip.com/b/L2DB",Template:"",PublicationDate:"10/2/2020",DateAdded:"1/20/2021"}],K=t(10);var X=function(){var e=Object(r.useState)([]),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(r.useState)({searchText:"",genres:[],tags:[],media:[]}),o=Object(s.a)(c,2),m=o[0],h=o[1],l=Object(r.useState)([]),d=Object(s.a)(l,2),g=d[0],b=d[1],p=Object(r.useState)([]),A=Object(s.a)(p,2),j=A[0],P=A[1],k=Object(r.useState)([]),S=Object(s.a)(k,2),N=S[0],y=S[1];function C(e){h({searchText:"",genres:[],tags:[],media:[e]})}function T(){h({searchText:"",genres:[],tags:[],media:[]})}return Object(r.useEffect)((function(){var e=Object(n.a)(H),a=Date.now();e.sort((function(e,t){var r=Date.parse(e.DateAdded);isNaN(r)&&(r=a);var i=Date.parse(t.DateAdded);return isNaN(i)&&(i=a),r>i?-1:r<i?1:0})),i(e)}),[]),Object(r.useEffect)((function(){var e=new Set,a=new Set,r=new Set;t.forEach((function(t){return e.add(t.Genre),t.Tags.forEach((function(e){return a.add(e)})),r.add(t.AuthorFullName),e})),b(Array.from(e).sort((function(e,a){return e>a?1:e<a?-1:0}))),P(Array.from(a).sort((function(e,a){return e>a?1:e<a?-1:0}))),y(Array.from(r).sort((function(e,a){return e>a?1:e<a?-1:0})))}),[t]),Object(u.jsxs)(K.a,{basename:"/buy-books-direct",children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("div",{className:"content container",children:[Object(u.jsx)("h1",{className:"brand",children:Object(u.jsxs)(K.b,{to:"/",onClick:T,children:["buy books direct ",Object(u.jsx)("i",{className:"fas fa-book"})]})}),Object(u.jsx)("input",{type:"checkbox",id:"nav-toggle-checkbox"}),Object(u.jsx)("label",{htmlFor:"nav-toggle-checkbox",className:"nav-toggle",children:Object(u.jsx)("i",{className:"fas fa-bars"})}),Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)(K.b,{className:"nav-link",to:"/",onClick:T,children:"Home"}),Object(u.jsx)(K.b,{className:"nav-link",to:"/search",onClick:function(){return C("eBook")},children:"eBooks"}),Object(u.jsx)(K.b,{className:"nav-link",to:"/search",onClick:function(){return C("Audiobook")},children:"Audiobooks"}),Object(u.jsx)("span",{className:"nav-link",children:"Get Added to this List"}),Object(u.jsx)("span",{className:"nav-link",children:"Subscribe to this List"}),Object(u.jsxs)(K.b,{className:"nav-link pointer",to:"/search",title:"Search",children:[Object(u.jsx)("i",{className:"fas fa-search"})," ",Object(u.jsx)("span",{className:z.a["search-link-text"],children:"Search Books"})]})]})]})}),Object(u.jsx)("main",{children:Object(u.jsxs)($.c,{children:[Object(u.jsx)($.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{setSearchCriteria:h})}),Object(u.jsx)($.a,{path:["/search"],children:Object(u.jsx)("div",{className:z.a["search-container"],children:Object(u.jsx)(G,{books:t,searchCriteria:m,setSearchCriteria:h,tags:j,genres:g,authors:N})})})]})}),Object(u.jsx)("footer",{className:"container",children:"This is a footer \ud83e\uddb6 Craig, what're putting down here?"})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(a){var t=a.getCLS,r=a.getFID,i=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),r(e),i(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),R()},9:function(e,a,t){e.exports={"search-container":"Search_search-container__1kdQO","search-control":"Search_search-control__2WgPl",search:"Search_search__3393q","search-filter-container":"Search_search-filter-container__34UGa",open:"Search_open__2F60x","filter-button":"Search_filter-button__3CA6Z","search-bar-container":"Search_search-bar-container__-lT7K","pager-container":"Search_pager-container__1Ggt4","search-results-container":"Search_search-results-container__2FxWF"}}},[[46,1,2]]]);
//# sourceMappingURL=main.7bfca07a.chunk.js.map