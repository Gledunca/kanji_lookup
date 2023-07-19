chrome.contextMenus.create({
  id: "1",
  title: "Lookup \"%s\"",
  contexts: ["selection"],  // ContextType
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  var baseUrl = "https://jisho.org/word/"
  var lookup = baseUrl + info.selectionText

  chrome.tabs.create({ url: lookup });

})