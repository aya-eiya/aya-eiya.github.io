(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{8869:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),a=t(9008),s=t(1664);function l(e){var r=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"m-auto min-h-screen relative",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"AY HOUSE"}),(0,n.jsx)("meta",{name:"description",content:"AY HOUSE"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("script",{type:"text/javascript",src:"/script/chat.js"})]}),(0,n.jsxs)("header",{className:"w-full flex items-center justify-center flex-col mb-4",children:[(0,n.jsx)("div",{className:"my-4 w-9/12",children:(0,n.jsx)("h1",{className:"text-xl flex-auto",children:"AY\u5408\u540c\u4f1a\u793e"})}),(0,n.jsx)("nav",{className:"w-9/12",children:(0,n.jsxs)("ul",{className:"flex flex-col md:flex-row justify-between",children:[(0,n.jsx)("li",{className:"border-b md:border-b-0 md:border-r md:pr-16",children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"AY HOUSE\u306b\u3064\u3044\u3066"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(s.default,{href:"/house",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u30b7\u30a7\u30a2\u30cf\u30a6\u30b9\u306e\u3054\u6848\u5185"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(s.default,{href:"/company",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u4f1a\u793e\u6982\u8981"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(s.default,{href:"https://note.com/aya_eiya",children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u30d6\u30ed\u30b0"})})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:text-right md:pl-16",children:(0,n.jsx)(s.default,{href:"/inquiry",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})})]})})]}),(0,n.jsx)("main",{className:"flex flex-col pb-11",children:r}),(0,n.jsx)("footer",{className:"h-10 bg-gray-300 p-3 w-full absolute bottom-0",children:(0,n.jsx)("p",{className:"text-center font-serif text-gray-500",children:"\xa9 AY.LLC."})})]})})}},2167:function(e,r,t){"use strict";var n=t(3848);r.default=void 0;var a,s=(a=t(7294))&&a.__esModule?a:{default:a},l=t(1063),c=t(4651),o=t(7426);var i={};function d(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,a=c.useRouter(),f=s.default.useMemo((function(){var r=l.resolveHref(a,e.href,!0),t=n(r,2),s=t[0],c=t[1];return{href:s,as:e.as?l.resolveHref(a,e.as):c||s}}),[a,e.href,e.as]),u=f.href,h=f.as,x=e.children,m=e.replace,p=e.shallow,b=e.scroll,v=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var j=(r=s.default.Children.only(x))&&"object"===typeof r&&r.ref,y=o.useIntersection({rootMargin:"200px"}),g=n(y,2),N=g[0],w=g[1],_=s.default.useCallback((function(e){N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,N]);s.default.useEffect((function(){var e=w&&t&&l.isLocalURL(u),r="undefined"!==typeof v?v:a&&a.locale,n=i[u+"%"+h+(r?"%"+r:"")];e&&!n&&d(a,u,h,{locale:r})}),[h,u,w,v,t,a]);var E={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,s,c,o){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),r[a?"replace":"push"](t,n,{shallow:s,locale:o,scroll:c}))}(e,a,u,h,m,p,b,v)},onMouseEnter:function(e){l.isLocalURL(u)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),d(a,u,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof v?v:a&&a.locale,k=a&&a.isLocaleDomain&&l.getDomainLocale(h,L,a&&a.locales,a&&a.domainLocales);E.href=k||l.addBasePath(l.addLocale(h,L,a&&a.defaultLocale))}return s.default.cloneElement(r,E)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,o=a.useRef(),i=a.useState(!1),d=n(i,2),f=d[0],u=d[1],h=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,s=n.observer,l=n.elements;return l.set(e,r),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),c.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:r}))}),[t,r,f]);return a.useEffect((function(){if(!l&&!f){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=t(7294),s=t(3447),l="undefined"!==typeof IntersectionObserver;var c=new Map},556:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var n=t(5893),a=t(8869);function s(){return(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"flex pt-4 content-center flex-col w-3/4 mx-auto",children:[(0,n.jsx)("h1",{className:"text-xl text-center",children:"\u4f1a\u793e\u6982\u8981"}),(0,n.jsx)("table",{className:"table-fixed border-collapse border mt-4",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border w-32 p-3 font-normal bg-gray-100",children:"\u793e\u540d"}),(0,n.jsx)("td",{className:"border p-3",children:"AY\u5408\u540c\u4f1a\u793e \uff08\u82f1\uff1a AY.LLC.\uff09"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border w-32 p-3 font-normal bg-gray-100",children:"\u4ee3\u8868\u793e\u54e1"}),(0,n.jsx)("td",{className:"border p-3",children:"\u7dbe\u90e8 \u82f1\u4fca"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border w-32 p-3 font-normal bg-gray-100",children:"\u8a2d\u7acb"}),(0,n.jsx)("td",{className:"border p-3",children:"\u4ee4\u548c3\u5e74\uff082021\u5e74\uff09 8\u6708 4\u65e5"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border w-32 p-3 font-normal bg-gray-100",children:"\u6240\u5728\u5730"}),(0,n.jsx)("td",{className:"border p-3",children:"\u6771\u4eac\u90fd\u54c1\u5ddd\u533a\u65d7\u306e\u53f0\uff11\u4e01\u76ee\uff11\uff11\u756a\uff19\u53f7"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border w-32 p-3 font-normal bg-gray-100",children:"\u4e8b\u696d\u5185\u5bb9"}),(0,n.jsx)("td",{className:"border p-3",children:"\u30b7\u30a7\u30a2\u30cf\u30a6\u30b9 / \u6c11\u6cca\u65bd\u8a2d \u306e\u7ba1\u7406\u30fb\u904b\u55b6"})]})]})})]})})}},8799:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/company",function(){return t(556)}])},9008:function(e,r,t){e.exports=t(639)},1664:function(e,r,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=8799,e(e.s=r);var r}));var r=e.O();_N_E=r}]);