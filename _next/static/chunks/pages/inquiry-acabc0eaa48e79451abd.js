(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{4520:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893);function a(e){var r=e.children,t=e.background;return(0,n.jsx)("div",{className:"h-28 flex items-center justify-center bg-gray-300 w-full",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,n.jsx)("div",{className:"w-9/12",children:(0,n.jsx)("h1",{className:"text-2xl p-3 inline-block bg-gray-50",children:r})})})}},8869:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893),a=t(9008),c=t(1664);function s(e){var r=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"m-auto min-h-screen relative",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"AY HOUSE"}),(0,n.jsx)("meta",{name:"description",content:"AY HOUSE"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("script",{type:"text/javascript",src:"/script/chat.js"})]}),(0,n.jsxs)("header",{className:"w-full flex items-center justify-center flex-col mb-4",children:[(0,n.jsx)("div",{className:"my-4 w-9/12",children:(0,n.jsx)("h1",{className:"text-xl flex-auto",children:"AY\u5408\u540c\u4f1a\u793e"})}),(0,n.jsx)("nav",{className:"w-9/12",children:(0,n.jsxs)("ul",{className:"flex flex-col md:flex-row justify-between",children:[(0,n.jsx)("li",{className:"border-b md:border-b-0 md:border-r md:pr-16",children:(0,n.jsx)(c.default,{href:"/",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"AY HOUSE\u306b\u3064\u3044\u3066"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(c.default,{href:"/house",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u30b7\u30a7\u30a2\u30cf\u30a6\u30b9\u306e\u3054\u6848\u5185"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(c.default,{href:"/company",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u4f1a\u793e\u6982\u8981"})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:flex-1 md:text-center md:border-r",children:(0,n.jsx)(c.default,{href:"https://note.com/aya_eiya",children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u30d6\u30ed\u30b0"})})})}),(0,n.jsx)("li",{className:"border-b md:border-b-0 md:text-right md:pl-16",children:(0,n.jsx)(c.default,{href:"/inquiry",children:(0,n.jsx)("div",{className:"h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer",children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})})]})})]}),(0,n.jsx)("main",{className:"flex flex-col pb-11",children:r}),(0,n.jsx)("footer",{className:"h-10 bg-gray-300 p-3 w-full absolute bottom-0",children:(0,n.jsx)("p",{className:"text-center font-serif text-gray-500",children:"\xa9 AY.LLC."})})]})})}},2167:function(e,r,t){"use strict";var n=t(3848);r.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},s=t(1063),l=t(4651),o=t(7426);var i={};function d(e,r,t,n){if(e&&s.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var r,t=!1!==e.prefetch,a=l.useRouter(),u=c.default.useMemo((function(){var r=s.resolveHref(a,e.href,!0),t=n(r,2),c=t[0],l=t[1];return{href:c,as:e.as?s.resolveHref(a,e.as):l||c}}),[a,e.href,e.as]),f=u.href,h=u.as,x=e.children,m=e.replace,p=e.shallow,v=e.scroll,b=e.locale;"string"===typeof x&&(x=c.default.createElement("a",null,x));var j=(r=c.default.Children.only(x))&&"object"===typeof r&&r.ref,y=o.useIntersection({rootMargin:"200px"}),g=n(y,2),N=g[0],w=g[1],k=c.default.useCallback((function(e){N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,N]);c.default.useEffect((function(){var e=w&&t&&s.isLocalURL(f),r="undefined"!==typeof b?b:a&&a.locale,n=i[f+"%"+h+(r?"%"+r:"")];e&&!n&&d(a,f,h,{locale:r})}),[h,f,w,b,t,a]);var _={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,c,l,o){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[a?"replace":"push"](t,n,{shallow:c,locale:o,scroll:l}))}(e,a,f,h,m,p,v,b)},onMouseEnter:function(e){s.isLocalURL(f)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),d(a,f,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof b?b:a&&a.locale,L=a&&a.isLocaleDomain&&s.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);_.href=L||s.addBasePath(s.addLocale(h,E,a&&a.defaultLocale))}return c.default.cloneElement(r,_)};r.default=u},7426:function(e,r,t){"use strict";var n=t(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,o=a.useRef(),i=a.useState(!1),d=n(i,2),u=d[0],f=d[1],h=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,c=n.observer,s=n.elements;return s.set(e,r),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return a.useEffect((function(){if(!s&&!u){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[h,u]};var a=t(7294),c=t(3447),s="undefined"!==typeof IntersectionObserver;var l=new Map},1088:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(5893),a=t(1664),c=t(4520),s=t(8869);function l(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{background:"",children:"\u304a\u554f\u3044\u5408\u308f\u305b"}),(0,n.jsxs)("div",{className:"w-9/12 mx-auto mt-4",children:[(0,n.jsxs)("p",{className:"mb-4",children:["\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3001Twitter DM\u3001Facebook\u30da\u30fc\u30b8",(0,n.jsx)("br",{}),"\u304a\u3088\u3073\u30da\u30fc\u30b8\u4e0b\u90e8\u306e\u30c1\u30e3\u30c3\u30c8\u306b\u3066\u53d7\u3051\u4ed8\u3051\u3066\u304a\u308a\u307e\u3059\u3002"]}),(0,n.jsxs)("div",{className:"grid grid-cols-6 w-1/2 gap-2",children:[(0,n.jsx)("div",{className:"col-span-2",children:"Twitter:"}),(0,n.jsx)("div",{className:"col-span-4 font-bold",children:(0,n.jsx)(a.default,{href:"https://twitter.com/hatano_ay",children:(0,n.jsx)("a",{target:"_blank",children:"@hatano_ay"})})}),(0,n.jsx)("div",{className:"col-span-2",children:"Facebook:"}),(0,n.jsx)("div",{className:"col-span-4 font-bold",children:(0,n.jsx)(a.default,{href:"https://www.facebook.com/hatano.ay",children:(0,n.jsx)("a",{target:"_blank",children:"https://www.facebook.com/hatano.ay"})})}),(0,n.jsx)("div",{className:"col-span-2",children:"Instagram:"}),(0,n.jsx)("div",{className:"col-span- font-bold",children:(0,n.jsx)(a.default,{href:"https://www.instagram.com/hatano_ay/",children:(0,n.jsx)("a",{target:"_blank",children:"@hatano_ay"})})})]})]})]})}},8605:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inquiry",function(){return t(1088)}])},9008:function(e,r,t){e.exports=t(639)},1664:function(e,r,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=8605,e(e.s=r);var r}));var r=e.O();_N_E=r}]);