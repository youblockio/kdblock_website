!function(){function e(){this.galleries=[],this.findAndSetupNewGalleries()}function t(e){this.gallery=e,this.addCaptionEvents(),this.resize(),this.gallery.classList.remove("tiled-gallery-unresized")}e.prototype.findAndSetupNewGalleries=function(){var e=this,r=document.querySelectorAll(".tiled-gallery.tiled-gallery-unresized");Array.prototype.forEach.call(r,(function(r){e.galleries.push(new t(r))}))},e.prototype.resizeAll=function(){Array.prototype.forEach.call(this.galleries,(function(e){e.resize()}))},t.prototype.resizeableElementsSelector=".gallery-row, .gallery-group, .tiled-gallery-item img",t.prototype.addCaptionEvents=function(){var e=this.gallery.querySelectorAll(".tiled-gallery-caption");Array.prototype.forEach.call(e,(function(e){e.style.display="none"}));var t=function(e){var t=e.target.closest(".tiled-gallery-item"),r="mouseover"===e.type?"block":"none";if(t){var i=t.querySelector(".tiled-gallery-caption");i&&(i.style.display=r)}};this.gallery.addEventListener("mouseover",t),this.gallery.addEventListener("mouseout",t)},t.prototype.getExtraDimension=function(e,t,r){if("horizontal"===r){var i="border"===t?"borderLeftWidth":t+"Left",n="border"===t?"borderRightWidth":t+"Right";return(parseInt(e.style[i],10)||0)+(parseInt(e.style[n],10)||0)}if("vertical"===r){var o="border"===t?"borderTopWidth":t+"Top",a="border"===t?"borderBottomWidth":t+"Bottom";return(parseInt(e.style[o],10)||0)+(parseInt(e.style[a],10)||0)}return 0},t.prototype.resize=function(){var e=parseInt(this.gallery.dataset.originalWidth,10),t=parseFloat(getComputedStyle(this.gallery.parentNode,null).width.replace("px","")),r=Math.min(1,t/e),i=this,n=this.gallery.querySelectorAll(this.resizeableElementsSelector);Array.prototype.forEach.call(n,(function(e){var t=i.getExtraDimension(e,"margin","horizontal"),n=i.getExtraDimension(e,"margin","vertical"),o=i.getExtraDimension(e,"padding","horizontal"),a=i.getExtraDimension(e,"padding","vertical"),l=i.getExtraDimension(e,"border","horizontal"),s=i.getExtraDimension(e,"border","vertical"),d=parseInt(e.dataset.originalWidth,10)+o+l+t,c=parseInt(e.dataset.originalHeight,10)+a+s+n;e.style.width=Math.floor(r*d)-t+"px",e.style.height=Math.floor(r*c)-n+"px"}))};var r,i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;r=function(){var t=new e;document.body.addEventListener("is.post-load",(function(){t.findAndSetupNewGalleries()})),"function"==typeof jQuery&&jQuery(document).on("page-rendered.wpcom-newdash",(function(){t.findAndSetupNewGalleries()})),window.chrome&&i?function(e){var t=!1,r=null;function n(){e.resizeAll(),t&&i(n)}window.addEventListener("resize",(function(){clearTimeout(r),t||i(n),t=!0,r=setTimeout((function(){t=!1}),15)}))}(t):function(e){window.addEventListener("resize",(function(){e.resizeAll()}))}(t),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(e){wp.isJetpackWidgetPlaced(e,"gallery")&&t.findAndSetupNewGalleries()}))},"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r)}();