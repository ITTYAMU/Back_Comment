let Data = {"URL": ""}
let text = document.getElementById('test').innerText;

var xhr = new XMLHttpRequest();

chrome.tabs.query({
    active: true,
    currentWindow: true,
},tabs=>{
    const tab = tabs[0]
    Data.URL = tab.url;
    console.log(`URL: ${Data.URL}`);
    


    var url_text = String(`URL: ${Data.URL}`);
    document.getElementById('test').innerText = url_text
});

xhr.open('POST','http://52.194.67.163', true);
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.send('url=ハッサンのおちんちん')

//ここからPOSTがおくれないなぞすぎる