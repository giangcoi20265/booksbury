<?php
include "header.php";

if(isset($_GET['act'])){
    $act = $_GET['act'];
    switch($act){
        case 'category':
            include "category/list.php";


        

            default: include "body.php";
            break;
    }
}


include "footer.php";
?>
<!-- 
    users
category
author
publish
books
voucher
users
 -->