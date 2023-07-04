<?php
//「CORS」を許可するためのレスポンスヘッダー
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

// 自分自身のレスポンスデータ用
header('Content-type: application/json; charset=UTF-8');

// 読み込み専用のストリームから、リクエストbody部の生データを読み込む
$raw = file_get_contents('php://input');

// 読み込み結果に応じたレスポンス
if ($raw === FALSE) {
    // リクエストbody部の生データ読み込みに失敗
    $response_data = [
        'raw' => 'ナシ',
        'message' => 'リクエストボディの読み込みに失敗'
    ];
} else {
    // json文字列が送られてきているはずなので、
    // 連想配列の形式にデコード
    $receive_data = json_decode($raw, true);

    // デコード失敗？
    if ($receive_data === NULL) {
        $response_data = [
            'raw' => $raw,
            'message' => 'json形式からのデコードに失敗'
        ];
    } else {
        // デコード成功
        $response_data = [
            'raw' => $raw,
            'received' => $receive_data,
            'message' => 'デコード成功'
        ];
    }
}

// json形式で応答
echo json_encode($response_data);
?>
