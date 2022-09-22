// ==UserScript==
// @name         __APP_NAME__
// @namespace    http://tampermonkey.net/
// @version      __APP_VERSION__
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.setClipboard
// @grant        GM_info
// @grant        GM.xmlHttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     IMPORTED_CSS https://unpkg.com/element-ui/lib/theme-chalk/index.css
// @require      https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js
// @require      https://unpkg.com/element-ui@2.14.1/lib/index.js
// @require      https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js
// @match        *
// ==/UserScript==
const my_css = GM_getResourceText("IMPORTED_CSS");GM_addStyle(my_css);
