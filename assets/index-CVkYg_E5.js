(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var q,v,ve,S,re,me,z,Q,K,G,U={},ye=[],Ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V=Array.isArray;function C(_,e){for(var t in e)_[t]=e[t];return _}function ge(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function xe(_,e,t){var o,r,i,u={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:u[i]=e[i];if(arguments.length>2&&(u.children=arguments.length>3?q.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(i in _.defaultProps)u[i]===void 0&&(u[i]=_.defaultProps[i]);return D(_,u,o,r,null)}function D(_,e,t,o,r){var i={type:_,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++ve,__i:-1,__u:0};return r==null&&v.vnode!=null&&v.vnode(i),i}function I(_){return _.children}function A(_,e){this.props=_,this.context=e}function L(_,e){if(e==null)return _.__?L(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?L(_):null}function ke(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ke(_)}}function oe(_){(!_.__d&&(_.__d=!0)&&S.push(_)&&!j.__r++||re!==v.debounceRendering)&&((re=v.debounceRendering)||me)(j)}function j(){var _,e,t,o,r,i,u,l;for(S.sort(z);_=S.shift();)_.__d&&(e=S.length,o=void 0,i=(r=(t=_).__v).__e,u=[],l=[],t.__P&&((o=C({},r)).__v=r.__v+1,v.vnode&&v.vnode(o),ee(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[i]:null,u,i??L(r),!!(32&r.__u),l),o.__v=r.__v,o.__.__k[o.__i]=o,we(u,o,l),o.__e!=i&&ke(o)),S.length>e&&S.sort(z));j.__r=0}function be(_,e,t,o,r,i,u,l,s,c,f){var n,p,a,g,E,b=o&&o.__k||ye,h=e.length;for(t.__d=s,Se(t,e,b),s=t.__d,n=0;n<h;n++)(a=t.__k[n])!=null&&(p=a.__i===-1?U:b[a.__i]||U,a.__i=n,ee(_,a,p,r,i,u,l,s,c,f),g=a.__e,a.ref&&p.ref!=a.ref&&(p.ref&&_e(p.ref,null,a),f.push(a.ref,a.__c||g,a)),E==null&&g!=null&&(E=g),65536&a.__u||p.__k===a.__k?s=Ne(a,s,_):typeof a.type=="function"&&a.__d!==void 0?s=a.__d:g&&(s=g.nextSibling),a.__d=void 0,a.__u&=-196609);t.__d=s,t.__e=E}function Se(_,e,t){var o,r,i,u,l,s=e.length,c=t.length,f=c,n=0;for(_.__k=[],o=0;o<s;o++)(r=e[o])!=null&&typeof r!="boolean"&&typeof r!="function"?(u=o+n,(r=_.__k[o]=typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?D(null,r,null,null,null):V(r)?D(I,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?D(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=_,r.__b=_.__b+1,i=null,(l=r.__i=Ie(r,t,u,f))!==-1&&(f--,(i=t[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&n--,typeof r.type!="function"&&(r.__u|=65536)):l!==u&&(l==u-1?n--:l==u+1?n++:(l>u?n--:n++,r.__u|=65536))):r=_.__k[o]=null;if(f)for(o=0;o<c;o++)(i=t[o])!=null&&!(131072&i.__u)&&(i.__e==_.__d&&(_.__d=L(i)),Ee(i,i))}function Ne(_,e,t){var o,r;if(typeof _.type=="function"){for(o=_.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=_,e=Ne(o[r],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=L(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ie(_,e,t,o){var r=_.key,i=_.type,u=t-1,l=t+1,s=e[t];if(s===null||s&&r==s.key&&i===s.type&&!(131072&s.__u))return t;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;u>=0||l<e.length;){if(u>=0){if((s=e[u])&&!(131072&s.__u)&&r==s.key&&i===s.type)return u;u--}if(l<e.length){if((s=e[l])&&!(131072&s.__u)&&r==s.key&&i===s.type)return l;l++}}return-1}function ie(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||Ce.test(e)?t:t+"px"}function P(_,e,t,o,r){var i;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)t&&e in t||ie(_.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||ie(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+i]=t,t?o?t.u=o.u:(t.u=Q,_.addEventListener(e,i?G:K,i)):_.removeEventListener(e,i?G:K,i);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function le(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=Q++;else if(e.t<t.u)return;return t(v.event?v.event(e):e)}}}function ee(_,e,t,o,r,i,u,l,s,c){var f,n,p,a,g,E,b,h,y,m,H,w,$,ne,R,B,T=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),i=[l=e.__e=t.__e]),(f=v.__b)&&f(e);e:if(typeof T=="function")try{if(h=e.props,y="prototype"in T&&T.prototype.render,m=(f=T.contextType)&&o[f.__c],H=f?m?m.props.value:f.__:o,t.__c?b=(n=e.__c=t.__c).__=n.__E:(y?e.__c=n=new T(h,H):(e.__c=n=new A(h,H),n.constructor=T,n.render=Oe),m&&m.sub(n),n.props=h,n.state||(n.state={}),n.context=H,n.__n=o,p=n.__d=!0,n.__h=[],n._sb=[]),y&&n.__s==null&&(n.__s=n.state),y&&T.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=C({},n.__s)),C(n.__s,T.getDerivedStateFromProps(h,n.__s))),a=n.props,g=n.state,n.__v=e,p)y&&T.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),y&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(y&&T.getDerivedStateFromProps==null&&h!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(h,H),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(h,n.__s,H)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=h,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(F){F&&(F.__=e)}),w=0;w<n._sb.length;w++)n.__h.push(n._sb[w]);n._sb=[],n.__h.length&&u.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(h,n.__s,H),y&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,g,E)})}if(n.context=H,n.props=h,n.__P=_,n.__e=!1,$=v.__r,ne=0,y){for(n.state=n.__s,n.__d=!1,$&&$(e),f=n.render(n.props,n.state,n.context),R=0;R<n._sb.length;R++)n.__h.push(n._sb[R]);n._sb=[]}else do n.__d=!1,$&&$(e),f=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++ne<25);n.state=n.__s,n.getChildContext!=null&&(o=C(C({},o),n.getChildContext())),y&&!p&&n.getSnapshotBeforeUpdate!=null&&(E=n.getSnapshotBeforeUpdate(a,g)),be(_,V(B=f!=null&&f.type===I&&f.key==null?f.props.children:f)?B:[B],e,t,o,r,i,u,l,s,c),n.base=e.__e,e.__u&=-161,n.__h.length&&u.push(n),b&&(n.__E=n.__=null)}catch(F){if(e.__v=null,s||i!=null){for(e.__u|=s?160:32;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,e.__e=l}else e.__e=t.__e,e.__k=t.__k;v.__e(F,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Le(t.__e,e,t,o,r,i,u,s,c);(f=v.diffed)&&f(e)}function we(_,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)_e(t[o],t[++o],t[++o]);v.__c&&v.__c(e,_),_.some(function(r){try{_=r.__h,r.__h=[],_.some(function(i){i.call(r)})}catch(i){v.__e(i,r.__v)}})}function Le(_,e,t,o,r,i,u,l,s){var c,f,n,p,a,g,E,b=t.props,h=e.props,y=e.type;if(y==="svg"?r="http://www.w3.org/2000/svg":y==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((a=i[c])&&"setAttribute"in a==!!y&&(y?a.localName===y:a.nodeType===3)){_=a,i[c]=null;break}}if(_==null){if(y===null)return document.createTextNode(h);_=document.createElementNS(r,y,h.is&&h),l&&(v.__m&&v.__m(e,i),l=!1),i=null}if(y===null)b===h||l&&_.data===h||(_.data=h);else{if(i=i&&q.call(_.childNodes),b=t.props||U,!l&&i!=null)for(b={},c=0;c<_.attributes.length;c++)b[(a=_.attributes[c]).name]=a.value;for(c in b)if(a=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")n=a;else if(!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;P(_,c,null,a,r)}}for(c in h)a=h[c],c=="children"?p=a:c=="dangerouslySetInnerHTML"?f=a:c=="value"?g=a:c=="checked"?E=a:l&&typeof a!="function"||b[c]===a||P(_,c,a,b[c],r);if(f)l||n&&(f.__html===n.__html||f.__html===_.innerHTML)||(_.innerHTML=f.__html),e.__k=[];else if(n&&(_.innerHTML=""),be(_,V(p)?p:[p],e,t,o,y==="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,u,i?i[0]:t.__k&&L(t,0),l,s),i!=null)for(c=i.length;c--;)ge(i[c]);l||(c="value",y==="progress"&&g==null?_.removeAttribute("value"):g!==void 0&&(g!==_[c]||y==="progress"&&!g||y==="option"&&g!==b[c])&&P(_,c,g,b[c],r),c="checked",E!==void 0&&E!==_[c]&&P(_,c,E,b[c],r))}return _}function _e(_,e,t){try{if(typeof _=="function"){var o=typeof _.__u=="function";o&&_.__u(),o&&e==null||(_.__u=_(e))}else _.current=e}catch(r){v.__e(r,t)}}function Ee(_,e,t){var o,r;if(v.unmount&&v.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||_e(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){v.__e(i,e)}o.base=o.__P=null}if(o=_.__k)for(r=0;r<o.length;r++)o[r]&&Ee(o[r],e,t||typeof _.type!="function");t||ge(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function Oe(_,e,t){return this.constructor(_,t)}function Ue(_,e,t){var o,r,i,u;v.__&&v.__(_,e),r=(o=typeof t=="function")?null:e.__k,i=[],u=[],ee(e,_=(!o&&t||e).__k=xe(I,null,[_]),r||U,U,e.namespaceURI,!o&&t?[t]:r?null:e.firstChild?q.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o,u),we(i,_,u)}q=ye.slice,v={__e:function(_,e,t,o){for(var r,i,u;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(_)),u=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(_,o||{}),u=r.__d),u)return r.__E=r}catch(l){_=l}throw _}},ve=0,A.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof _=="function"&&(_=_(C({},t),this.props)),_&&C(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},A.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),oe(this))},A.prototype.render=I,S=[],me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(_,e){return _.__v.__b-e.__v.__b},j.__r=0,Q=0,K=le(!1),G=le(!0);var Me=0;function d(_,e,t,o,r,i){e||(e={});var u,l,s=e;if("ref"in s)for(l in s={},e)l=="ref"?u=e[l]:s[l]=e[l];var c={type:_,props:s,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Me,__i:-1,__u:0,__source:r,__self:i};if(typeof _=="function"&&(u=_.defaultProps))for(l in u)s[l]===void 0&&(s[l]=u[l]);return v.vnode&&v.vnode(c),c}var M,k,Y,ce,X=0,He=[],N=v,se=N.__b,ue=N.__r,ae=N.diffed,fe=N.__c,pe=N.unmount,de=N.__;function te(_,e){N.__h&&N.__h(k,_,X||e),X=0;var t=k.__H||(k.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function O(_){return X=1,Re(Te,_)}function Re(_,e,t){var o=te(M++,2);if(o.t=_,!o.__c&&(o.__=[Te(void 0,e),function(l){var s=o.__N?o.__N[0]:o.__[0],c=o.t(s,l);s!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=k,!k.u)){var r=function(l,s,c){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!i||i.call(this,l,s,c);var n=!1;return f.forEach(function(p){if(p.__N){var a=p.__[0];p.__=p.__N,p.__N=void 0,a!==p.__[0]&&(n=!0)}}),!(!n&&o.__c.props===l)&&(!i||i.call(this,l,s,c))};k.u=!0;var i=k.shouldComponentUpdate,u=k.componentWillUpdate;k.componentWillUpdate=function(l,s,c){if(this.__e){var f=i;i=void 0,r(l,s,c),i=f}u&&u.call(this,l,s,c)},k.shouldComponentUpdate=r}return o.__N||o.__}function Fe(_,e){var t=te(M++,3);!N.__s&&$e(t.__H,e)&&(t.__=_,t.i=e,k.__H.__h.push(t))}function x(_,e){var t=te(M++,7);return $e(t.__H,e)&&(t.__=_(),t.__H=e,t.__h=_),t.__}function Pe(){for(var _;_=He.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(W),_.__H.__h.forEach(Z),_.__H.__h=[]}catch(e){_.__H.__h=[],N.__e(e,_.__v)}}N.__b=function(_){k=null,se&&se(_)},N.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),de&&de(_,e)},N.__r=function(_){ue&&ue(_),M=0;var e=(k=_.__c).__H;e&&(Y===k?(e.__h=[],k.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(W),e.__h.forEach(Z),e.__h=[],M=0)),Y=k},N.diffed=function(_){ae&&ae(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(He.push(e)!==1&&ce===N.requestAnimationFrame||((ce=N.requestAnimationFrame)||De)(Pe)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Y=k=null},N.__c=function(_,e){e.some(function(t){try{t.__h.forEach(W),t.__h=t.__h.filter(function(o){return!o.__||Z(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],N.__e(o,t.__v)}}),fe&&fe(_,e)},N.unmount=function(_){pe&&pe(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{W(o)}catch(r){e=r}}),t.__H=void 0,e&&N.__e(e,t.__v))};var he=typeof requestAnimationFrame=="function";function De(_){var e,t=function(){clearTimeout(o),he&&cancelAnimationFrame(e),setTimeout(_)},o=setTimeout(t,100);he&&(e=requestAnimationFrame(t))}function W(_){var e=k,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),k=e}function Z(_){var e=k;_.__c=_.__(),k=e}function $e(_,e){return!_||_.length!==e.length||e.some(function(t,o){return t!==_[o]})}function Te(_,e){return typeof e=="function"?e(_):e}var J=(_=>(_.ZERO="0",_.ONE="1",_.TWO="2",_.THREE="3",_.FIVE="5",_.EIGHT="8",_.THIRTEEN="13",_.TWENTY="20",_.FORTY="40",_.SIXTY="60",_.HUNDRED="100",_.UNKNOWN="?",_.NONE="-",_))(J||{});async function Ae(){const _=await fetch("https://lk.dequ.org/");return!_||!_.ok?(console.error("failed to get rooms",_),{}):await _.json()}function We(){const[_,e]=O(""),[t,o]=O(""),[r,i]=O({}),[u,l]=O(null),[s,c]=O(null);Fe(()=>{Ae().then(m=>{i(m),console.log(m)})},[]);const f=async()=>{},n=x(()=>r[u||0],[r,u]),p=x(()=>!n||!s?null:n.players[s],[n,s]),a=x(()=>{const m=[];if(n)for(const[H,w]of Object.entries(n.players))m.push([w.name,w.card.toString()]);return m},[n]),g=x(()=>n&&s?n.players[s].card.toString():"-",[n,s]),[E,b]=x(()=>{const m=Math.ceil(a.reduce((w,[,$])=>$==="?"?w:w+parseInt($),0)/a.length);if(isNaN(m))return["-","-"];const H=Object.keys(J).reduce((w,$)=>$==="?"?w:Math.abs(parseInt($)-m)<=Math.abs(parseInt(w)-m)?$:w,"-");return[m,H]},[a]),h=x(()=>Object.keys(J).map(m=>d("button",{className:[m===g?"selected":"",m===b?"median":""].join(" "),onClick:()=>{},children:m})),[n,g,b]),y=x(()=>{const m=a.map(([H,w])=>d("div",{className:"votes",children:[d("b",{children:[H,":"]})," ",d("button",{className:"vote",children:n!=null&&n.flipped?w:"V"})]}));return d(I,{children:[m,d("div",{className:"votes",style:{opacity:.5},children:[d("b",{children:"average:"})," ",d("button",{className:"vote",children:n!=null&&n.flipped?E:"V"})]})]})},[a,E,n==null?void 0:n.flipped]);return d(I,{children:[!n&&d("div",{className:"room-panel",children:[d("h1",{children:"pok-er"}),d("div",{className:"controls",children:[d("input",{type:"text",placeholder:"Your name",onInput:m=>e(m.currentTarget.value),value:_}),d("input",{type:"text",placeholder:"Room name",onInput:m=>o(m.currentTarget.value),value:t}),d("button",{className:"success",onClick:()=>f(),children:"connect"})]})]}),n&&d(I,{children:[d("div",{className:"title-panel",children:[d("h1",{children:n.id}),p&&d("h2",{children:p.name})]}),d("div",{className:"room-panel",children:d("div",{className:"controls",children:[d("button",{className:"error",onClick:()=>{},children:"disconnect"}),d("button",{className:"success",onClick:()=>{navigator.clipboard.writeText(`${window.location.origin}/?r=${t}`)},children:"copy room"})]})}),d("div",{class:"cards-panel",children:h}),d("div",{class:"vote-panel",children:[d("div",{className:"controls",children:[d("button",{className:"error",children:"reset [r]"}),d("button",{className:"success",onClick:()=>{},children:"flip [f]"})]}),y]})]})]})}Ue(d(We,{}),document.getElementById("app"));
