<?php
if(_SERVER["REQUEST_METHOD" == "POST"]){
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $to = 'savelas22@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>'; //Текст нашего сообщения можно использовать HTML теги
        $headers  = 'MIME-Version: 1.0' . "\r\n"; //Кодировка письма
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; //Кодировка письма
        $headers .= 'From: Отправитель <admin@ltech.site>' . "\r\n"; //Наименование и почта отправителя
        $headers .= 'CC: <igorlukichev@lmail.ru>' . "\r\n"; //Наименование и почта отправителя
        $success = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
​
        if($success){
        //код 200
        http_response_code(200);
        echo "Письмо отправлено";
        } else {
        //ошибка 500
        http_response_code(500);
        echo "письмо не отправлено";
        }
} else {
    //если GET
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
?>