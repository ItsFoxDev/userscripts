// ==UserScript==
// @name        QLbypass
// @namespace   itsfoxdev.github.io
// @match       *://*quora.com/*
// @version     2.4
// @run-at      document-start
// @author      FoxDev
// @icon        https://raw.githubusercontent.com/ItsFoxDev/Userscripts/main/icons/QLbypass.png
// @require     https://itsfoxdev.github.io/FoxJS/latest.js
// @description Unobtrusively bypasses Quora login
// ==/UserScript==
//
// If URL contains "?share=1"
if (!window.location.href.includes("?share=1")){
  console.log('✅ Login bypassed!')
}
// If URL doesn't contain "?share=1"
if (hasNoString(window.location.href,"?share=1")){
  console.log('⛔ Page requires login. Bypassing...')
  // Sets the tab URL to the current url with "?share=1" at the end
  window.location.href = window.location.href + "?share=1";
}
