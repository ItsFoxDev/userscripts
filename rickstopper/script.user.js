// ==UserScript==
// @name         RickStopper
// @namespace    https://itsfoxdev.github.io
// @version      3.4
// @description  Blocks rickrolls
// @author       FoxDev
// @run-at       document-start
// @match        https://www.youtube.com/watch?v=dQw4w9WgXcQ
// @icon         https://raw.githubusercontent.com/ItsFoxDev/userscripts/main/rickstopper/icon.png
// @grant        none
// ==/UserScript==

// If the URL does not contain "?rsaccept=true" //
if (document.location.href.indexOf('?rsaccept=true') === -1){
    console.log('⚠️ Rickroll detected, redirecting...');
    // Redirect to block page //
    location.replace('https://itsfoxdev.github.io/userscripts/rickstopper/');
}
