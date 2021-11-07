$(document).ready(function () {
    $(".spnoibat .btn_buy").click(function () { 
        var product =  $( this ).parent();
        var imgLink = product.find('.product-img').attr('src');
        var name = product.find('.product-name').text();
        var price = product.find('.price').text();
        var order = {
            "img_link": imgLink,
            "name": name,
            "price": price
        };
        var currentProduct = window.sessionStorage.getItem("orders");
        var newOrders = "";
        if(currentProduct!=null)
           newOrders =  currentProduct+","+JSON.stringify(order);
        else
            newOrders = JSON.stringify(order);
        window.sessionStorage.setItem("orders", newOrders);
        curent=0;
        var curent = Number($(".count_shopping_cart").text());
        curent += 1;
        $(".count_shopping_cart").text(curent);
    });
});

