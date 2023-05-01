const elPost = document.getElementById("id_post");
const elText = document.getElementById("id_text");

let windowInitHeight;
let textInitHeight;

// Called when this html file is loaded.
window.onload = function(){
  // Bring the window to the top.
  chrome.windows.getCurrent({}, w => {
    chrome.windows.update(w.id, {focused: true}, () => {});
  });
  windowInitHeight = window.innerHeight;
  textInitHeight = elText.offsetHeight;
}

// Synchronize the height of window and textarea.
window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", () => {
    const height = windowInitHeight;
    elText.style.height = (height + "px");
  });
});



elPost.onclick = () => {
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(new Blob([elText.value]));
  a.click();
}