(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b348ac96"],{4127:function(t,e,r){"use strict";var a=r("d233"),i=r("b313"),n={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,r,i,n,o,l,c,u,p,d,f,m){var v=e;if("function"===typeof c)v=c(r,v);else if(v instanceof Date)v=d(v);else if(null===v){if(n)return l&&!m?l(r,s.encoder):r;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||a.isBuffer(v)){if(l){var y=m?r:l(r,s.encoder);return[f(y)+"="+f(l(v,s.encoder))]}return[f(r)+"="+f(String(v))]}var g,h=[];if("undefined"===typeof v)return h;if(Array.isArray(c))g=c;else{var b=Object.keys(v);g=u?b.sort(u):b}for(var w=0;w<g.length;++w){var C=g[w];o&&null===v[C]||(h=Array.isArray(v)?h.concat(t(v[C],i(r,C),i,n,o,l,c,u,p,d,f,m)):h.concat(t(v[C],r+(p?"."+C:"["+C+"]"),i,n,o,l,c,u,p,d,f,m)))}return h};t.exports=function(t,e){var r=t,o=e?a.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof o.delimiter?s.delimiter:o.delimiter,u="boolean"===typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,p="boolean"===typeof o.skipNulls?o.skipNulls:s.skipNulls,d="boolean"===typeof o.encode?o.encode:s.encode,f="function"===typeof o.encoder?o.encoder:s.encoder,m="function"===typeof o.sort?o.sort:null,v="undefined"!==typeof o.allowDots&&o.allowDots,y="function"===typeof o.serializeDate?o.serializeDate:s.serializeDate,g="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof o.format)o.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,o.format))throw new TypeError("Unknown format option provided.");var h,b,w=i.formatters[o.format];"function"===typeof o.filter?(b=o.filter,r=b("",r)):Array.isArray(o.filter)&&(b=o.filter,h=b);var C,A=[];if("object"!==typeof r||null===r)return"";C=o.arrayFormat in n?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var O=n[C];h||(h=Object.keys(r)),m&&h.sort(m);for(var x=0;x<h.length;++x){var j=h[x];p&&null===r[j]||(A=A.concat(l(r[j],j,O,u,p,d?f:null,b,m,v,y,w,g)))}var N=A.join(c),E=!0===o.addQueryPrefix?"?":"";return N.length>0?E+N:""}},4328:function(t,e,r){"use strict";var a=r("4127"),i=r("9e6a"),n=r("b313");t.exports={formats:n,parse:i,stringify:a}},"5a91":function(t,e,r){"use strict";r("967e")},"639b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[t._m(0),r("div",{staticClass:"header-name"},[t._v("硅酸钠")]),r("div",{staticClass:"backHome",on:{click:t.backHome}},[t._v("返回")])]),r("div",{staticClass:"line"}),r("div",{staticClass:"product-mess"},[r("div",{staticClass:"form-group",attrs:{id:"name1"}},[r("div",{staticClass:"form-title"},[t._v("产品名称")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"请输入产品名称"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"form-group",attrs:{id:""}},[r("div",{staticClass:"form-title"},[t._v("产品序号")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.xh,expression:"xh"}],attrs:{type:"text",name:"id",placeholder:"请输入产品序号"},domProps:{value:t.xh},on:{input:function(e){e.target.composing||(t.xh=e.target.value)}}})])]),r("div",{staticClass:"params1"},[t._v("参数配置")]),r("div",{staticClass:"params"},[r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("模数")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.ms,expression:"par.ms"}],attrs:{type:"text"},domProps:{value:t.par.ms},on:{input:function(e){e.target.composing||t.$set(t.par,"ms",e.target.value)}}})]),r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("比重")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.bz,expression:"par.bz"}],attrs:{type:"text"},domProps:{value:t.par.bz},on:{input:function(e){e.target.composing||t.$set(t.par,"bz",e.target.value)}}})]),r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("浓度")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.nd,expression:"par.nd"}],attrs:{type:"text"},domProps:{value:t.par.nd},on:{input:function(e){e.target.composing||t.$set(t.par,"nd",e.target.value)}}})]),r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("说明")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.show,expression:"par.show"}],attrs:{type:"text"},domProps:{value:t.par.show},on:{input:function(e){e.target.composing||t.$set(t.par,"show",e.target.value)}}})]),r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("分子式")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.fzs,expression:"par.fzs"}],attrs:{type:"text"},domProps:{value:t.par.fzs},on:{input:function(e){e.target.composing||t.$set(t.par,"fzs",e.target.value)}}})]),r("div",{staticClass:"param-item"},[r("div",{staticClass:"param-title"},[t._v("外观")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.par.wg,expression:"par.wg"}],attrs:{type:"text"},domProps:{value:t.par.wg},on:{input:function(e){e.target.composing||t.$set(t.par,"wg",e.target.value)}}})])]),r("div",{staticClass:"img1"},[t._v("添加图片")]),r("div",{staticClass:"h"},[r("div",{staticClass:"layui-btn; btn2",attrs:{type:"button",id:"test9"},on:{click:function(e){return t.subbmit()}}},[t._v(" 发布 ")]),r("div",{staticClass:"btn2",on:{click:function(e){return t.backHome()}}},[t._v("取消")])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo2"},[a("img",{attrs:{src:r("8cc9"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img3"},[r("fieldset",{staticClass:"layui-elem-field layui-field-title",staticStyle:{"margin-top":"30px"}}),r("div",{staticClass:"layui-upload"},[r("button",{staticClass:"layui-btn layui-btn-normal",attrs:{type:"button",id:"test8"}},[t._v(" 选择文件 ")])])])}],n=(r("c975"),r("b0c0"),r("bc3a")),o=r.n(n),s=(r("4328"),r("ec26")),l={data:function(){return{name:"",xh:"",p:"",form1:[],elId:"",par:{ms:"",fzs:"",wg:"",show:"",nd:"",bz:""},file:"",imgUrl:"",resData:{id:""},liulan:"",disabled:!1}},props:{},inject:["reload"],created:function(){var t=this,e=this.myBrowser();"IE"==e&&(this.liulan="IE"),"FF"==e&&(this.liulan="Firefox"),"Chrome"==e&&(this.liulan="Chrome"),"Opera"==e&&(this.liulan="Opera"),"Safari"==e&&(this.liulan="Safari"),console.log(this.liulan),this.elId=Object(s["a"])(),this.resData.id=this.elId;var r=this.elId;layui.use("upload",(function(){var e=layui.upload;e.render({elem:"#test8",url:"http://122.114.162.87:8080/system/api/upload",data:{id:r,exType:t.liulan},auto:!1,bindAction:"#test9",done:function(e){layer.msg("上传成功"),t.$router.push("/backstage/product"),window.location.reload(),console.log(e)}})}))},methods:{backHome:function(){this.$router.push("/backstage/product"),window.location.reload()},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},add:function(){""===this.p?alert("请输入内容"):(this.form1.push({name:this.name2,canshu:this.p}),this.p="")},myBrowser:function(){var t=navigator.userAgent,e=t.indexOf("Opera")>-1;return e?"Opera":t.indexOf("Firefox")>-1?"FF":t.indexOf("Chrome")>-1?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1&&!e?"IE":void 0},subbmit:function(){var t,e,r,a,i,n=this,s=new Date,l=s.getFullYear(),c=s.getMonth()+1;t=c<10?"0"+c:c;var u=s.getDate();e=u<10?"0"+u:u;var p=s.getHours();r=p<10?"0"+p:p;var d=s.getMinutes();a=d<10?"0"+d:d;var f=s.getSeconds();i=f<10?"0"+f:f;var m=l+"-"+t+"-"+e+" "+r+":"+a+":"+i;o.a.post("http://122.114.162.87:8080/system/api/jscpzxadd",{id:this.elId,name:this.name,xh:this.xh,jgTime:m,fzs:this.par.fzs,wg:this.par.wg,show:this.par.show,ms:this.par.ms,nd:this.par.nd,bz:this.par.bz,type:"0"}).then((function(t){console.log(t),alert("添加成功"),n.$router.push("/backstage/product"),window.location.reload()})).catch((function(t){console.log(t)})),this.reload()}}},c=l,u=(r("5a91"),r("2877")),p=Object(u["a"])(c,a,i,!1,null,"35c86655",null);e["default"]=p.exports},"8cc9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACR0lEQVRYR+2Wv4sTQRTHv2+zl8svDzw9LWwFCxs1CccV6i0IHlgE1+NKD5MI/hNKWi0DV1yRtbEKJKBVEgzaiZdNguHsrFQQ1IsWJ1x0d59sZCWa3ewmWUiTKXffm+9nvvPezBBmPGjG+pgD+OrA+Z1iLBISayCsMfBdYKzvZeQ3o7Z5CCChlB4SUdQxyWBigZrqHVkZjDHFw+HAcwKtWt+9QAwBJJUyeylM0dBOvMpudc3Yc4Wnx5ZIrwNI2uR+0xhS28GJiQE0aKfa6a0vq/knS0YsWgc4MQLcEWIqgGAw1tN/Hr0g4JIH17q6bkitu5udwdipAEQsVAG+6EHcCunqgYDU2k79hZgYQIexEYBQGUO8H8rAMzUtp6y8iQGMX0crQjBUAuPKGBBf2YCkZuX9qQHMIgzFcKgdilUAlz1ADImbORM7YHXBWrEY1n6IFRcnbMWnAuiJON25LX82J+lDODvhKO4E8AlAeLSl/Db6fvnqy5ykWXEOECPFbQE87KVjSHx3NyIsrJidYdbEARtYHyw4u0RfLyNT4Gw+v3g8ciajQ6y1sql3bguyuYzKZtLoLWDsqx86N5DLacnHpfvMdO+f0425B0KQQf35CcwAPWqk5fz/QBN3gVWESaXcBnDBbaVg1BsZ+ZpvAFYbJpWyCiDuBsCMmpqRr88B5g7MHfDNAQrg5N62fJBQSk0CeXiSUbWRvrnhBeAB058TzHEYxkc1c6tg/o8XShIJguujhFmvNNObr10B3A4Uv//7fhmNCzhzgN+fwVgwAu3+BgAAAABJRU5ErkJggg=="},"967e":function(t,e,r){},"9e6a":function(t,e,r){"use strict";var a=r("d233"),i=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e){for(var r={},a=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,s=a.split(e.delimiter,o),l=0;l<s.length;++l){var c,u,p=s[l],d=p.indexOf("]="),f=-1===d?p.indexOf("="):d+1;-1===f?(c=e.decoder(p,n.decoder),u=e.strictNullHandling?null:""):(c=e.decoder(p.slice(0,f),n.decoder),u=e.decoder(p.slice(f+1),n.decoder)),i.call(r,c)?r[c]=[].concat(r[c]).concat(u):r[c]=u}return r},s=function(t,e,r){for(var a=e,i=t.length-1;i>=0;--i){var n,o=t[i];if("[]"===o)n=[],n=n.concat(a);else{n=r.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,l=parseInt(s,10);!isNaN(l)&&o!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=a):n[s]=a}a=n}return a},l=function(t,e,r){if(t){var a=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,l=n.exec(a),c=l?a.slice(0,l.index):a,u=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}var p=0;while(null!==(l=o.exec(a))&&p<r.depth){if(p+=1,!r.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+a.slice(l.index)+"]"),s(u,e,r)}};t.exports=function(t,e){var r=e?a.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"===typeof r.depth?r.depth:n.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===t||null===t||"undefined"===typeof t)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof t?o(t,r):t,s=r.plainObjects?Object.create(null):{},c=Object.keys(i),u=0;u<c.length;++u){var p=c[u],d=l(p,i[p],r);s=a.merge(s,d,r)}return a.compact(s)}},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var a=r("83ab"),i=r("d039"),n=r("5135"),o=Object.defineProperty,s={},l=function(t){throw t};t.exports=function(t,e){if(n(s,t))return s[t];e||(e={});var r=[][t],c=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:l,p=n(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(c&&!a)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,r.call(t,u,p)}))}},b0c0:function(t,e,r){var a=r("83ab"),i=r("9bf2").f,n=Function.prototype,o=n.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in n)&&i(n,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b313:function(t,e,r){"use strict";var a=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return a.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c975:function(t,e,r){"use strict";var a=r("23e7"),i=r("4d64").indexOf,n=r("a640"),o=r("ae40"),s=[].indexOf,l=!!s&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d233:function(t,e,r){"use strict";var a=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t){var e;while(t.length){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)"undefined"!==typeof e[i]&&a.push(e[i]);r.obj[r.prop]=a}}return e},o=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},a=0;a<t.length;++a)"undefined"!==typeof t[a]&&(r[a]=t[a]);return r},s=function t(e,r,i){if(!r)return e;if("object"!==typeof r){if(Array.isArray(e))e.push(r);else{if("object"!==typeof e)return[e,r];(i.plainObjects||i.allowPrototypes||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!==typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=o(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,n){a.call(e,n)?e[n]&&"object"===typeof e[n]?e[n]=t(e[n],r,i):e.push(r):e[n]=r})),e):Object.keys(r).reduce((function(e,n){var o=r[n];return a.call(e,n)?e[n]=t(e[n],o,i):e[n]=o,e}),n)},l=function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},c=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),r="",a=0;a<e.length;++a){var n=e.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=e.charAt(a):n<128?r+=i[n]:n<2048?r+=i[192|n>>6]+i[128|63&n]:n<55296||n>=57344?r+=i[224|n>>12]+i[128|n>>6&63]+i[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(a)),r+=i[240|n>>18]+i[128|n>>12&63]+i[128|n>>6&63]+i[128|63&n])}return r},p=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],a=0;a<e.length;++a)for(var i=e[a],o=i.obj[i.prop],s=Object.keys(o),l=0;l<s.length;++l){var c=s[l],u=o[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:o,prop:c}),r.push(u))}return n(e)},d=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},f=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:o,assign:l,compact:p,decode:c,encode:u,isBuffer:f,isRegExp:d,merge:s}},ec26:function(t,e,r){"use strict";var a,i=new Uint8Array(16);function n(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(t){return"string"===typeof t&&o.test(t)}for(var l=s,c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!l(r))throw TypeError("Stringified UUID is invalid");return r}var d=p;function f(t,e,r){t=t||{};var a=t.random||(t.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=a[i];return e}return d(a)}e["a"]=f}}]);
//# sourceMappingURL=chunk-b348ac96.e60b0323.js.map