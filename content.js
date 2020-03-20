
let contents = document.getElementById("contents").children;
let tags = [].slice.call(contents);


chrome.storage.sync.get('kwlist', function (data) {
  let kwlistStats = [];

  for (let pattern of data.kwlist) {
    kwlistStats.push([pattern, 0]);
  }

  for (let tag of tags) {
    if (tag.tagName !== "ytd-rich-section-renderer".toUpperCase()) {
      let title = tag.innerText.substring(0, (tag.innerText.indexOf("\n")));

      for (let pattern of kwlistStats) {
        if (title.indexOf(pattern[0]) !== -1) {
          tag.setAttribute("style", "display:none");
          pattern[1]++;
        }
      }
    } else {
      break;
    }
  }
  console.log(kwlistStats);

  chrome.storage.local.set({kwlistStats : kwlistStats}, function() {
    console.log('Transfered statistics of keyword list');
  })
});
