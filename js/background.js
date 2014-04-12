chrome.browserAction.onClicked.addListener(function(tab) {
  if (get_option('enabled')) {
    chrome.browserAction.setIcon({
      path: {
      "38": "icons/icon38-disabled.png",
      "19": "icons/icon19-disabled.png"
      }
    });
    set_option('enabled', false);
  }
  else {
    chrome.browserAction.setIcon({
      path: {
      "38": "icons/icon38.png",
      "19": "icons/icon19.png"
      }
    });
    set_option('enabled', true);
  }
});

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {

    if(get_option('enabled')) {
        sendResponse({farewell: "run"});
    }
    else {
        sendResponse({farewell: "don't"});
    }
});