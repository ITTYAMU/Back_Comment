let Data = {"URL": ""}
let text = document.getElementById('test').innerText;

chrome.tabs.query({
    active: true,
    currentWindow: true,
},tabs=>{
    const tab = tabs[0]
    Data.URL = tab.url;
    console.log(`URL: ${Data.URL}`);

    
    var url_text = String(`URL: ${Data.URL}`);
    document.getElementById('test').innerText = url_text;
});




window.addEventListener('load',()=>{
    const txtBox = document.querySelector('input');
    document.querySelector('button.url').addEventListener('click',()=>{
        txtBox.value = Data.URL;
    });
})