// ==UserScript==
// @name         YLoader
// @namespace    https://bit.ly/itsfoxdev
// @version      2.3
// @description  Makes the download button actually work
// @author       FoxDev
// @run-at       document-end
// @match        https://www.youtube.com/watch?v=*
// @icon         https://raw.githubusercontent.com/ItsFoxDev/Userscripts/main/YLoader/icon.png
// @grant        none
// ==/UserScript==

// Hides the premium popup
document.head.insertAdjacentHTML("beforeend", `<style>body > ytd-app > ytd-popup-container > tp-yt-paper-dialog{display:none;}tp-yt-iron-overlay-backdrop{display:none !important}</style>`)
// Makes the downlod button work
setTimeout(function(){document.querySelector('ytd-button-renderer.ytd-download-button-renderer yt-button-shape button').addEventListener("click", function(){ window.open("https://projectlounge.pw/ytdl/download?url=" + window.location.href, "_blank");focus();});}, 1000);
