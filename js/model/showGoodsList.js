$('document').ready(function(){
    $('#goodsList').on('click','button', function(){
        var cartService = new CartService();
        cartService.addGoodsNumberById($(this)[0].id);
        $('#cartGoodsNumber').text(cartService.countCart());
     });

    initlocalStorage();
    var cartService = new CartService();
    var goodsList = cartService.getGoodslist();
    _.forEach(goodsList, function(goods){
        $('#goodsList').append(
                '<div class="col-md-3">' +
                '<div class="thumbnail">' +
                '<div class="caption">' +
                '<h3>' + goods.name + '</h3>' +
                '<p>单价：' + goods.price + '(元) </p>' +
                '<p>' +
                    '<button id="' + goods.id + '"  class="btn btn-primary" role="button">加入购物车</button>' +
                '</p>' +
                '</div>' +
                '</div>' +
                '</div>'
        );
    })

    $('#cartGoodsNumber').text(cartService.countCart());

});