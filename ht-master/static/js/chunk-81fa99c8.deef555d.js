(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81fa99c8"],{"25eb":function(t,i,A){"use strict";A.r(i);var s=function(){var t=this,i=t.$createElement,A=t._self._c||i;return A("div",{attrs:{id:"app"}},[A("div",{staticClass:"tabbarx"},[A("div",{staticClass:"logo",on:{click:t.toMain}},[t._v("宏盛科技")]),A("div",{staticClass:"row"},[t._v("|")]),t._m(0)]),A("div",{staticClass:"sidebar"},[A("div",{staticClass:"side-item",class:{active:0===t.currentIndex},on:{click:function(i){t.btnclick(0),t.topro()}}},[t._m(1),A("div",{staticClass:"word"},[t._v(" 产品中心 ")])]),A("div",{staticClass:"side-item",class:{active:1===t.currentIndex},on:{click:function(i){t.btnclick(1),t.tonew()}}},[t._m(2),A("div",{staticClass:"word"},[t._v(" 新闻中心 ")])]),A("div",{staticClass:"side-item",class:{active:2===t.currentIndex},on:{click:function(i){t.btnclick(2),t.tomess()}}},[t._m(3),A("div",{staticClass:"word"},[t._v(" 留言中心 ")])])]),t.isRouterAlive?A("router-view",{staticClass:"main"}):t._e()],1)},c=[function(){var t=this,i=t.$createElement,A=t._self._c||i;return A("div",{staticClass:"toMain"},[A("a",{staticClass:"back",attrs:{href:"/index.html"}},[t._v("进入网站")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"logo1"},[s("img",{attrs:{src:A("8cc9"),alt:""}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"logo1"},[s("img",{attrs:{src:A("cd65"),alt:""}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"logo1"},[s("img",{attrs:{src:A("6ae1"),alt:""}})])}],e={name:"app",provide:function(){return{reload:this.reload}},data:function(){return{currentIndex:0,isRouterAlive:!0}},methods:{toMain:function(){},btnclick:function(t){this.currentIndex=t},reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))},topro:function(){this.$router.push("/backstage/product")},tonew:function(){this.$router.push("/backstage/news")},tomess:function(){this.$router.push("/backstage/message")}}},n=e,a=(A("71f7"),A("2877")),r=Object(a["a"])(n,s,c,!1,null,null,null);i["default"]=r.exports},"354e":function(t,i,A){},"6ae1":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+UlEQVRYR+2XP0gcQRjF3zc7F4ukUxMb4SBNYqWekoM0YmGlcNmohYXiqSnEToQUsQgp0sVWIq6iYCF616QIFpJCCDk9BUUrGy3VIwgq/tmZT9bzwnm3FrdeuML9qmF35r03v92Z2SWUuKjE/vAD5BEITcZbBPEcgPIiP56UZtWV7OtYytbNC9BoxY7+g3nGM3X2zA5ud3aeZC64BeAiz/yOnIYOJ6Ptf0oWgA16s9bzLuEH8AkURoBoX2t7QJDxCsA3AIYjwEyzRPY4sxghokhalK/A4oM29KHQNAngRfYy8PQSEmE40Ws6xmiYiq0Q463TpjNUJIbMVGg6/lJo3r01+rEaNducdqO1+AWgTw8OwOB1xZdtkmSQIZcI/DRNgD+zrcZEIDAK8HAaAI41cbPWSElBPwE41P6VJwK3o1UG/R1BQBMgXDYv9/7+PuATePQENEQ4GY3cfxw3WIsnBLpZ58UuBp9enJdVbw22/r13Kw5ZCz0C4juAJ0UOcMmMgbU+cyZb1/WruHYqHpSKwzAokBuCnHOA+SuAqpx7BwA+MpGdF1zxlQL/3uh/v+eiV/g86ydirw0DvwA8T+++fKhgNG1EIzuFqnn+L6iz5msk5LJjaEM0ezG/OdAKTZzdv86ar1RS0ma36eD3VA8K4MkxZ5AfoOQErgEHF/Ah/2nW1AAAAABJRU5ErkJggg=="},"71f7":function(t,i,A){"use strict";A("354e")},"8cc9":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACR0lEQVRYR+2Wv4sTQRTHv2+zl8svDzw9LWwFCxs1CccV6i0IHlgE1+NKD5MI/hNKWi0DV1yRtbEKJKBVEgzaiZdNguHsrFQQ1IsWJ1x0d59sZCWa3ewmWUiTKXffm+9nvvPezBBmPGjG+pgD+OrA+Z1iLBISayCsMfBdYKzvZeQ3o7Z5CCChlB4SUdQxyWBigZrqHVkZjDHFw+HAcwKtWt+9QAwBJJUyeylM0dBOvMpudc3Yc4Wnx5ZIrwNI2uR+0xhS28GJiQE0aKfa6a0vq/knS0YsWgc4MQLcEWIqgGAw1tN/Hr0g4JIH17q6bkitu5udwdipAEQsVAG+6EHcCunqgYDU2k79hZgYQIexEYBQGUO8H8rAMzUtp6y8iQGMX0crQjBUAuPKGBBf2YCkZuX9qQHMIgzFcKgdilUAlz1ADImbORM7YHXBWrEY1n6IFRcnbMWnAuiJON25LX82J+lDODvhKO4E8AlAeLSl/Db6fvnqy5ykWXEOECPFbQE87KVjSHx3NyIsrJidYdbEARtYHyw4u0RfLyNT4Gw+v3g8ciajQ6y1sql3bguyuYzKZtLoLWDsqx86N5DLacnHpfvMdO+f0425B0KQQf35CcwAPWqk5fz/QBN3gVWESaXcBnDBbaVg1BsZ+ZpvAFYbJpWyCiDuBsCMmpqRr88B5g7MHfDNAQrg5N62fJBQSk0CeXiSUbWRvrnhBeAB058TzHEYxkc1c6tg/o8XShIJguujhFmvNNObr10B3A4Uv//7fhmNCzhzgN+fwVgwAu3+BgAAAABJRU5ErkJggg=="},cd65:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/klEQVRYR+2XW2wUZRTHf2dmt61U0KjgXVFrRI0k2FZUrCAUGksT6RTxQY3ZaY3GxBffefPBF02IPoix28iT2dhtTOVSICmUi9FZowmURNFaVARbLhptpe7OHDOzLdlbd7drYn3we9pJznfOb/7n/31zVpjnJfNcn/8OQEN3/E0RXstQ5HfgoKKfCOxz7I6Ruaj14PuxOtMw1oPRCqwGFs7sV5HuRKS9y3++rEBjtPcUyG1FihwHGcBgd61efeRA5IlLmbHLdwzUViUnHxfRFoUNAvfOmks553Rai3MA4j8Ct5T5loE6pFJbXQlNmSbbQB4FrS1z/wXHtq7NBfgBuLXMBEGYKi+IMuarMpd9wHnHtq77xwAoz3nIuCE6MEeAc46d14KSHsivUSlAIQ80ROOjArdPVzmh6AeCrAEey3RwFkVpAFdVh0H2C1KD6CtB62A8YVtLclvwPbA0HSCvJuz2d/zfj7wVuyJ1TXUj6jWj2gzUA1VpE+S3QOGUwCFFdpmud+izFzt+8kP9U1KdmrgIhBUdT9gdOQA9fSOo3jH9hpNAHGUPYgw59ib/hARrRTS2OEQoCrRlA+iEerQkuqyjIOrHrukZrJnQiyuBtcBm4L7pNGOObV2frUB37wgiMwCZSvvJhlVk0HC9gaThfh4i/DboM5kACn+YpFZ6KaowzXUY0oyyapb2FQCIxr8D7izpZhFFNX2B5bfAA4ySOZRfnE7rhlwPfAvcVXJztjaVHcNCAA3RvpOC1v0rAOhZx+64MUuBhu7ekyKSBhDpR9iG639EdK0KDQLVeXClj+GowpCot1NEFinyXvD9Ec44Eeum3BZ8A9ydLiKvO3b71pmC9dtjV5nhUJMnskHQtSj3F/SA6m+IHFRlryupwS/tLSdmcjzc07fUVfXbbKKccTqLAgTbjvvOF2TfparQ4WPPtvlnOFgPRePvKryUY8LzSZG6ryLtv/oxT8di5uhE+AEfWJVmhSaBK9Pe5eeEbd1cRIE8sacQEorsV4+jIt4bgqzIuQeSKvKyobgKrQhNKEGfc1clAIW9WdoDs3n6tGNbwaf/8kCSZcJyj0KlAMJpJ5ID0NjTl0DVv+fLX5UCwNeObS3LUaDvSRH9EFhUNkFlAJMIzzsRK54F4D8s3xFfUv2XbhbD2Kh4q0GKj1jlA0yqcFiUnUh1zIlsPDvzkrOO5fXb+xeY4akmD2kTZD1wTwE7F7uKR/xp2jW0v8YNDR3pfMqfI/NW2f8L6ns+WmZgtijaKhoMKQuCmdBgDGW3KlMifCrCHhdj1xeRTcfKaWXZAJnJVnV/vDCpyXWijKTC5oSktPFPUnuHu7ZcKKdoZkxFAHMtUiz+f4B5V+BvSN3aMDNl0kQAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-81fa99c8.deef555d.js.map