$('document').ready(function(){
    $('#spriteAdd').on('click', function(){
    console.log('enter jquery');
    var cartGoodsNumber = $('#cartGoodsNumber').text();
    cartGoodsNumber++;
    $('#cartGoodsNumber').text(cartGoodsNumber);
    });
    var cartGoodsNumber = $('#cartGoodsNumber').text();
    cartGoodsNumber++;
    $('#cartGoodsNumber').text(cartGoodsNumber);
    $('#goodsList').append(
         '<div class="col-md-3">' +
            '<div class="thumbnail">' +
                '<div class="caption">' +
                     '<h3>' + +'</h3>' +
                     '<p>单价：' + +' </p>' +
                     '<p><button id="AddCart"  class="btn btn-primary" role="button">加入购物车</button></p>' +
                '</div>' +
           '</div>' +
         '</div>'
    );
});