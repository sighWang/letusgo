$('document').ready(function(){
    $('#goodsList').on('click','button', function(){
        console.log('enter jquery');
        console.log($(this)[0].id);
        var customGoodsList = new CustomGoodsList();
        customGoodsList.addGoodsNumber($(this)[0].id);

    var cartGoodsNumber = $('#cartGoodsNumber').text();
    cartGoodsNumber++;
    $('#cartGoodsNumber').text(cartGoodsNumber);
    });

    var cartGoodsNumber = $('#cartGoodsNumber').text();
    cartGoodsNumber++;
    goodslocalStorage();
    var goodsList = JSON.parse(localStorage.getItem('goodsList'));
    $('#cartGoodsNumber').text(cartGoodsNumber);
    _.forEach(goodsList, function(goods){
        $('#goodsList').append(
                '<div class="col-md-3">' +
                '<div class="thumbnail">' +
                '<div class="caption">' +
                '<h3>' + goods.name + '</h3>' +
                '<p>单价：' + goods.price + '(元) </p>' +
                '<p><button id="' + goods.id + '"  class="btn btn-primary" role="button">加入购物车</button></p>' +
                '</div>' +
                '</div>' +
                '</div>'
        );
    })
    var cartNumber = 0;
    var customGoodsList =  JSON.parse(localStorage.getItem('customGoodsList'));
    _.forEach(customGoodsList, function(customGoods) {
        cartNumber += customGoods.number;
    })
    $('#cartGoodsNumber').text(cartNumber);

});