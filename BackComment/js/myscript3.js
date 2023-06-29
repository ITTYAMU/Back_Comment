let Data = {"URL": ""}
let text = document.getElementById('test').innerText;

//var xhr = new XMLHttpRequest();

chrome.tabs.query({
    active: true,
    currentWindow: true,
},tabs=>{
    const tab = tabs[0]
    Data.URL = tab.url;
    console.log(`URL: ${Data.URL}`);
    
    var url_text = String(`URL: ${Data.URL}`);
    document.getElementById('test').innerText = url_text
    

    //let url_text_URL = JSON.parse(JSON.stringify(`URL ${Data.URL}`))
    //var url_text = String(`URL ${Data.URL}`);
    const data_q = (`URL: ${Data.URL}`); // 渡したいデータ（配列やオブジェクトでも可）

    fetch('http://52.194.67.163/BackComment/notePad5.php', { // 第1引数に送り先
        method: 'POST', // メソッド指定
        headers: { 'Content-Type': 'application/json' }, // jsonを指定
        body: JSON.stringify(data_q) // json形式に変換して添付
    })
    //    .then(response => response.json()) // 返ってきたレスポンスをjsonで受け取って次のthenへ渡す
    //    .then(res => {
    //        console.log(res); // やりたい処理
    //    })
    //    .catch(error => {
    //        console.log(error); // エラー表示
    //});
});
