window.onload = function(){
  const createDate = {
    url: "notePad.html",
    type: "popup",
    width: 400,
    height:1200
  };
  chrome.windows.create(createDate, () => {});
}

