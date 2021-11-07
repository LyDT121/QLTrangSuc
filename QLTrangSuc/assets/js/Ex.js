// chay slide
var i=1;
var N=6;

function Next(){
	if(i<N)
	{
		i +=1;
		
	}
	else
	{
		i=1;	
	}
	document.getElementById("slide").setAttribute('src','/assets/images/img'+i+'.jpg')
}
function Back(){
	if(i>1)
		i -=1;
	else
	{
		i=N;
		
	}
	document.getElementById("slide").setAttribute('src','/assets/images/img'+i+'.jpg')
}

    setInterval(Next, 3000);



//đưa sp vào giỏ hàng
$(document).ready(function () {
    var amount =  JSON.parse("["+sessionStorage.getItem("orders")+"]").length;
    $(".count_shopping_cart").text(amount);
    $(".product .btn-buy").click(function () { 
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
        
        var curent = Number($(".count_shopping_cart").text());
        curent += 1;
        $(".count_shopping_cart").text(curent);
    });
   
});

//sp được đặt hàng hiện trong giỏ hàng
$(document).ready(function () {
    var orders = sessionStorage.getItem("orders");
    orders = "["+orders+"]";
    var data = JSON.parse(orders);
    $(".count_shopping_cart").text(data.length);
    var content = "";
    for (let i = 0; i < data.length; i++) {
        var cartItem = `<div  class=" order-detail">
						<div class="order-img">
							<img src="${data[i].img_link}"/>	
						</div>	
						<div class="order-description">
							<label class="order-product-name">${data[i].name}</label>
							<label class="order-delete">Xóa</label>
							<label class="order-later">Để mua sau</label>
						</div>	
						<div class="order-price">
							<label >${data[i].price}</label>	
						</div> 
						<div class="order-amount">
							<input onclick='subAmount("txt`+i+`")' class="btn-sub" type="button" value="-" />
						<input id = "txt`+i+`" class="txt-amount" type="text" value="1" />
						<input onclick='plusAmount("txt`+i+`")' class="btn-plus" type="button" value="+" />
						</div>
					</div>`;
        content+= cartItem;
    }
    $(".thongtin").html(content);
});
// tang giam so luong  
function plusAmount(a){
	//document.getElementById();
	var x = document.getElementById(a).value; //(Lấy dữ liệu) -1
	document.getElementById(a).value=Number(x)+1;
    
        for(var i=0; $($('.order-detail')).length; i++){
        giathanh=$($('.order-detail')[i]).find('.order-price').text().trim();
        gia1=giathanh.substring(0,2)
        gia2=giathanh.substring(3,6)
        gia3=giathanh.substring(7,10)
        tong=gia1+gia2+gia3
        thanhtien=parseInt(tong)*parseInt($($('.order-detail')[i]).find('.txt-amount')[0].value);
        $('.total-price').text(thanhtien);
    }
}

function subAmount(a){
	//document.getElementById();
	var x = document.getElementById(a).value;
	if(Number(x)>1)
		document.getElementById(a).value=Number(x)-1;
    for(var i=0; $($('.order-detail')).length; i++){
    giathanh=$($('.order-detail')[i]).find('.order-price').text().trim();
    gia1=giathanh.substring(0,2)
    gia2=giathanh.substring(3,6)
    gia3=giathanh.substring(7,10)
    tong=gia1+gia2+gia3
    thanhtien=parseInt(tong)*parseInt($($('.order-detail')[i]).find('.txt-amount')[0].value);
    $('.total-price').text(thanhtien);
}
}


//sap xep
$("#sort-price").on('change',function(){
    var products=$('.product')
    var data = []; 
    for(var i =0; i<products.length;i++) {
        var imglink = $(products[i]).find('.product-img').attr('src');
        var productName =  $(products[i]).find('.product-name').text();
        var price = $(products[i]).find('.price').text();
        var product = {
        'imglink':imglink,
        'name':productName,
        "price": price
        }
      data.push(product)
    }
    if($(this().val()==1)){
        console.log(data)
        data.sort(sort_price_increase('price'));

    }
    if($(this().val()==2))
         data.sort(sort_price_decrease('price'));
    var content=''
    for(var i=0;data.length;i++){
        content+=create_product(data[i].imglink,data[i].productName,data[i].old_price,data[i].new_price)+'\n'
    }
    $('list-product'.html(content))
});
function sort_price_increase(att){
    return function(a,b){
        if(a[att]>b[att])
            return 1
        else if(a[att]<b[att])
            return -1
        return 0
    }
    
}
function sort_price_decrease(att){
    return function(a,b){
        if(a[att]>b[att])
            return -1
        else if(a[att]<b[att])
            return 1
        return 0
    }
    
}
function create_product(imglink,productname,old_price,new_price){
    var product=
`<div  id="1" class="spnoibat col-3 col-m-3 col-s-6">
                    <img class="product-img" src="${data[i].imglink}" alt=""><br />
                    <a href="Chitietspnoibat.html" class="product-name">${data[i].name}<br /> DJR3095</a>
                    <label class="price">${data[i].price}</label>
                    <input type="button" class="btn_buy" value="CHỌN MUA"></input>

                  </div>`;
return product
}
//dung vong for vao day /// $($('.order-detail')[0]).find('.order-price').text().trim() // che bien ra thanh tien xong * so luong /// $($('.order-detail')[0]).find('.txt-amount')[0].value
//$('.total-price').text() -- xong nhet vao day

