// ==UserScript==
// @name           deta-loading-bar.uc.js
// @description    A simple loading bar on top of the page similar to the one used in Deta Surf browser. Currently only works on Zen Browser.
// @author         rasyidrafi
// @version        v1.0.2
// @include        main
// @grant          none
// ==/UserScript==

(function() {
  'use strict';

  const browserStack = document.querySelector('.browserStack');
  if (!browserStack) return;

  // Listen for tab loading events
  function handleLoadingStart() {
    browserStack.classList.add('loading');
  }

  function handleLoadingStop() {
    browserStack.classList.remove('loading');
  }

  // Listen for various loading events
  const tabContainer = gBrowser.tabContainer;
  
  tabContainer.addEventListener('TabAttrModified', function(event) {
    const tab = event.target;
    if (event.detail.changed.has('busy')) {
      if (tab.hasAttribute('busy')) {
        handleLoadingStart();
      } else {
        handleLoadingStop();
      }
    }
  });

  // Also listen for progress events
  const progressListener = {
    onStateChange: function(webProgress, request, stateFlags, status) {
      if (stateFlags & Ci.nsIWebProgressListener.STATE_START) {
        handleLoadingStart();
      } else if (stateFlags & Ci.nsIWebProgressListener.STATE_STOP) {
        handleLoadingStop();
      }
    }
  };

  gBrowser.addProgressListener(progressListener);

  // Cleanup on unload
  window.addEventListener('unload', function() {
    gBrowser.removeProgressListener(progressListener);
  });
})();
