
   
$(document).ready(function(){
    $("#search").on("click", function() {
      var value = $("#keywords").val().toLowerCase();
      var data = []; 
      var content ="<h2>Sản phẩm muốn tìm</h2>";
      var s = 0; 
      var l = 11;
      for(var i =0; i<l;i++) {
        $("#"+i+"").filter(function() {
        if($("#"+i+" .product-name").text().toLowerCase().indexOf(value) > -1){
            var imglink = $("#"+i+"").find('.product-img').attr('src');
            var productName = $("#"+i+"").find('.product-name').text();
            var price = $("#"+i+"").find('.price').text();
            var order = {
            'imglink':imglink,
            'name':productName,
            'price':price
            }
            $(data[s] = order);
            s++;
        }
        }); 
        }
        if(data.length>0)
        {
        for(let i = 0; i < data.length; i++){
            var cartItem =`<div  id="0" class="spnoibat col-3 col-m-3 col-s-6">
                    <img class="product-img" src="${data[i].imglink}" alt=""><br />
                    <a href="Chitietspnoibat.html" class="product-name">${data[i].name}<br /> DJR3095</a>
                    <label class="price">${data[i].price}</label>
                    <input type="button" class="btn_buy" value="CHỌN MUA"></input>

                  </div>`;
        content += cartItem;
        }
    }
    else {
        content +="<h3>Không tìm thấy sản phẩm nào";
    }
        console.log(content);
        $("#search-re").html(content);
        document.getElementById("main").style.display = "none";
    });
  });
// $(document).ready(function(){
//     $("#btn-sort").on("click", function(){
//     var s = 0; 
//     var l = 11;
//     var data = []; 
//     var content ="";
//     for(var i =0; i<l;i++) {
//     $("#"+i+"").filter(function() {
//         var imglink = $("#"+i+"").find('.product-img').attr('src');
//         var productName = $("#"+i+"").find('.product-name').text();
//         var a = $("#"+i+"").find('.price').text();
//         var price = UpdatePrice(a);
//         var order = {
//             'imglink':imglink,
//             'name':productName,
//             'price':price
//         }
//         $(data[s] = order);
//         s++;
//         })}
//     var product = data[0];
//     data.sort(function(a,b){
//         return a.price - b.price;
//     });
//     for(var i =0; i<l;i++)
//     {
//         var cartItem =`
//             <div class="col-3 col-m-4 col-s-6">
//             <div id="0" class="product">
//                 <img class="product-img" src="${data[i].imglink}" />
//                 <label class="product-name">${data[i].name}</label><br />
//                 <label><s>50.000 đ</s></label><label class="product-price">${data[i].price}</label>
//                 <input class="btn-buy" type="button" value="ĐẶT MUA" />
//                 
//             </div>
//         </div>`
//         content += cartItem;
       
//     } 
//     $("#search-re").html(content);
//     document.getElementById("main").style.display = "none";
//     })
// });
function UpdatePrice(spr)
{
    var data = spr;
    data = data.replace('.','');
    data = data.replace("đ","");
    data = data.replace(" ","");
    console.log(data);
    return parseInt(data);
    $('.total-price').text(a(totalPrice.toString()));
    $('.tmp-price').text(a(totalPrice.toString()));
    console.log(a(totalPrice.toString())); 
}
function a(totalPrice)
{   
    var str = "";
    for(var i = 0;i<totalPrice.length;i++)
    {
        if(i %3==0 && i!=0)
            str +=('.'+totalPrice[i]);
        else
            str = str+totalPrice[i];
    }
    str+='đ';
    return str;
}