let contents = document.getElementById("contents").children;
let tags = [].slice.call(contents);

for(let tag of tags) {
    if (tag.tagName !== "ytd-rich-section-renderer".toUpperCase()) {
        tag.setAttribute("style","display:none");
      console.log(tag.innerText.substring(0,(tag.innerText.indexOf("\n"))));
    } else {
      break;
    }
}