<?php
session_start();
date_default_timezone_set('Europe/Kiev');
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

$tg_token       = '6363807686:AAEVAo6VdnQZzyaqE0Gka2vFxVv0fIf9Dms';
$tg_chatid      = '-921616216';
$mail           = 'о';

$crm_token      = '57725ddb6f27154fce5d6471c23687b4';
$crm_adress     = 'http://kriveshko.lp-crm.biz';
$product_id     = '6';
$product_price  = '449';
$product_title  = 'SWAB';

$name           = $_POST['name'];
$phone          = preg_replace('/[^0-9]/', '', $_POST['phone']);;
$comment        = '';



if (!empty($phone) and !empty($tg_token)) {

    if ($crm_token != '') {
        $products_list = array(
            0 => array(
                'product_id' => $product_id,
                'price'      => $product_price,
                'count'      => '1',
                'subs'       => array(
                    0  => array(
                        'sub_id' => "6",
                        'count'  => '1'
                    ),
                )
            ),
        );
        $products = urlencode(serialize($products_list));
        $sender = urlencode(serialize($_SERVER));
        $data = array(
            'key'             => $crm_token,
            'order_id'        => number_format(round(microtime(true) * 10), 0, '.', ''),
            'country'         => 'UA',                         // Географическое направление заказа
            'office'          => '1',                          // Офис (id в CRM)
            'products'        => $products,                    // массив с товарами в заказе
            'bayer_name'      => $_REQUEST['name'],            // покупатель (Ф.И.О)
            'phone'           => $phone,                        // телефон
            'email'           => $_REQUEST['email'],           // электронка
            'comment'         => $comment,                           // комментарий
            'delivery'        => $_REQUEST['delivery'],        // способ доставки (id в CRM)
            'delivery_adress' => $_REQUEST['delivery_adress'], // адрес доставки
            'payment'         => '',                           // вариант оплаты (id в CRM)
            'sender'          => $sender,
            // 'sender'          =>'176.39.34.57',
            'utm_source'      => $_SESSION['utms']['utm_source'],  // utm_source
            'utm_medium'      => $_SESSION['utms']['utm_medium'],  // utm_medium
            'utm_term'        => $_SESSION['utms']['utm_term'],    // utm_term
            'utm_content'     => $_SESSION['utms']['utm_content'], // utm_content
            'utm_campaign'    => $_SESSION['utms']['utm_campaign'], // utm_campaign
            'additional_1'    => '',                               // Дополнительное поле 1
            'additional_2'    => '',                               // Дополнительное поле 2
            'additional_3'    => '',                               // Дополнительное поле 3
            'additional_4'    => ''                                // Дополнительное поле 4
        );

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $crm_adress . '/api/addNewOrder.html');
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        $out = curl_exec($curl);
        curl_close($curl);

        // echo "<pre>";
        // print_r(json_decode($out, true));
        // echo "</pre>";
    }

    $arr = array(
        'New order:'            => '',
        'Name: '                => $name,
        'Phone: '               => $phone,
        'Product: '             => $product_title,
        'Order date: '          => date("Y-m-d H:i:s"),
        'Client IP-adress: '    => $_SERVER['REMOTE_ADDR'],
        'Site: '                => $_SERVER['SERVER_NAME'],
    );

    if ($_COOKIE['fbid']) {
        $arr['FbID: '] = $_COOKIE['fbid'];
    }
    if ($product_id) {
        $arr['Product ID: '] = $product_id;
    }

    if (!empty($tg_token)) {
        $txt;

        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
        };

        $sendToTelegram = fopen("https://api.telegram.org/bot{$tg_token}/sendMessage?chat_id={$tg_chatid}&parse_mode=html&text={$txt}", "r");
    }

    if (!empty($mail)) {
        $mail_txt = '';

        foreach ($arr as $key => $value) {
            $mail_txt .= "<b>" . $key . "</b> " . $value . "<br>";
        };

        $tema_r = 'New order';
        $from = "New order <noreply@{$_SERVER['HTTP_HOST']}>";
        $subject = "=?utf-8?B?" . base64_encode("$tema_r") . "?=";
        $header = "From: $from";
        $header .= "\nContent-type: text/html; charset=\"utf-8\"";
        $msg = $mail_txt;
        mail($mail, $subject, $msg, $header);
    }
}
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://i.ibb.co/KwXbcKf/favicon-32x32.png" type="image/x-icon">
    <title>
        <?php if ($_POST['phone']) {
            echo 'Дякуємо за замовлення!';
        } else {
            echo 'Якась проблема...';
        } ?>
    </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" />

    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '976362250145172');
      fbq('track', 'PageView');
      fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=976362250145172&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->

</head>

<body>
    <div class="main">
        <div class="container">
            <div class="order-info">
                <?php if ($_POST['phone']) : ?>
                    <h2>Дякуємо за замовлення!</h2>
                    <h4>
                        Наш менеджер скоро зв'яжеться з Вами!
                        <br>
                        очікуйте дзвінок
                    </h4>
                    <a href="javascript:history.back()" class="btn btn-primary">Повернутися назад</a>

                <?php else : ?>
                    <h4 style="color: darkred;">Що щось пішло не так, і форма не була відправлена...</h4>
                    <h2 style="font-weight: 700; color: green">Будь ласка, заповніть форму ще раз!</h2>
                    <a href="javascript:history.back()" class="btn btn-success" style="text-transform: uppercase;">Заповнити форму ще раз</a>
                <?php endif; ?>

            </div>
        </div>
    </div>
    <style>
        body {
            background-image: url('https://i.ibb.co/gmNVzPD/photo-1560264280-88b68371db39.jpg');
            background-size: cover;
            background-repeat: no-repeat
        }

        .main {
            width: 100%;
            height: 100vh;
            background-color: rgba(195, 195, 195, .7);
            padding: 10%
        }

        .order-info {
            padding: 20px;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center
        }

        .order-info h2 {
            font-weight: 700;
            margin-bottom: 30px
        }

        .order-info a {
            margin-top: 40px
        }

        .sale_text {
            font-weight: 700;
            margin: 30px 0 10px
        }

        .sale_link {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 20px;
            color: #0d6efd
        }
    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>

</html>
