(() => {
  'use strict';
  
  let currentBusyStacks = new Set();
  let tabContainer = null;
  let observer = null;
  
  // Cached class operations for performance
  const addClass = (el) => {
    el.classList.add('zen-busy');
  };
  const removeClass = (el) => {
    el.classList.remove('zen-busy');
  };
  
  function updateLoadingState() {
    // Clear all previous busy states
    currentBusyStacks.forEach(removeClass);
    currentBusyStacks.clear();
    
    // Find ALL selected busy tabs (supports split view)
    const selectedBusyTabs = document.querySelectorAll('.tabbrowser-tab[selected][busy]');
    
    for (const tab of selectedBusyTabs) {
      const panelId = tab.getAttribute('linkedpanel');
      
      if (panelId) {
        const browserStack = document.querySelector(`#${panelId} .browserStack`);
        
        if (browserStack) {
          addClass(browserStack);
          currentBusyStacks.add(browserStack);
        }
      }
    }
  }
  
  function initObserver() {
    tabContainer = document.getElementById('tabbrowser-tabbox');
    if (!tabContainer) {
      setTimeout(initObserver, 100);
      return;
    }
    
    // Single observer for all tab changes
    observer = new MutationObserver((mutations) => {
      let needsUpdate = false;
      
      // Check if any mutation affects busy/selected attributes
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'busy' || mutation.attributeName === 'selected')) {
          needsUpdate = true;
          break;
        }
      }
      
      if (needsUpdate) {
        updateLoadingState();
      }
    });
    
    // Observe with minimal scope
    observer.observe(tabContainer, {
      attributes: true,
      attributeFilter: ['busy', 'selected'],
      subtree: true
    });
    
    // Add additional event listeners for loading states
    const gBrowser = window.gBrowser;
    if (gBrowser) {
      // Listen for tab state changes
      gBrowser.addTabsProgressListener({
        onStateChange: function(aBrowser, aWebProgress, aRequest, aStateFlags, aStatus) {
          const isStart = aStateFlags & Ci.nsIWebProgressListener.STATE_START;
          const isStop = aStateFlags & Ci.nsIWebProgressListener.STATE_STOP;
          const isNetwork = aStateFlags & Ci.nsIWebProgressListener.STATE_IS_NETWORK;
          
          if ((isStart || isStop) && isNetwork) {
            setTimeout(updateLoadingState, 50); // Small delay to ensure DOM is updated
          }
        }
      });
      
      // Also listen for location changes
      gBrowser.addProgressListener({
        onLocationChange: function(aWebProgress, aRequest, aLocation, aFlags) {
          setTimeout(updateLoadingState, 50);
        },
        
        onStateChange: function(aWebProgress, aRequest, aStateFlags, aStatus) {
          const isStart = aStateFlags & Ci.nsIWebProgressListener.STATE_START;
          const isStop = aStateFlags & Ci.nsIWebProgressListener.STATE_STOP;
          const isNetwork = aStateFlags & Ci.nsIWebProgressListener.STATE_IS_NETWORK;
          
          if ((isStart || isStop) && isNetwork) {
            setTimeout(updateLoadingState, 50);
          }
        }
      });
    }
    
    // Initial state
    updateLoadingState();
  }
  
  // Cleanup on window unload
  window.addEventListener('unload', () => {
    if (observer) observer.disconnect();
    currentBusyStacks.forEach(removeClass);
    currentBusyStacks.clear();
  });
  
  // Firefox internal UI initialization
  if (document.readyState === 'complete') {
    initObserver();
  } else {
    window.addEventListener('load', () => {
      initObserver();
    });
  }
})();