function webComponentsLoaded(){window.webComponentsReady=!0}!function(e){"use strict";window.addEventListener("WebComponentsReady",function(){console.log("WebComponents Ready!")}),window.addEventListener("load",function(){function t(t){if("BODY"===e.activeElement.tagName)for(var n=0;n<o.length;n++){var d=o[n];d.keyCode!==t.keyCode||"up"!==d.buttonState&&"init"!==d.buttonState||(d.buttonState="down")}}function n(t){if("BODY"===e.activeElement.tagName)for(var n=0;n<o.length;n++){var d=o[n];d.keyCode===t.keyCode&&"down"===d.buttonState&&(d.buttonState="up")}}var o=e.querySelectorAll("sound-button");e.addEventListener("keydown",t),e.addEventListener("keyup",n)})}(document);var webComponentsSupported="registerElement"in document&&"import"in document.createElement("link")&&"content"in document.createElement("template");if(webComponentsSupported){console.log("WebComponents Supported");var readyEvent=new Event("WebComponentsReady");window.dispatchEvent(readyEvent),webComponentsLoaded()}else{var script=document.createElement("script");script.async=!0,script.src="/bower_components/webcomponentsjs/webcomponents-lite.min.js",script.onload=webComponentsLoaded,document.head.appendChild(script)}