$('document').ready(function (){
    var cartService = new CartService();
    var customGoodsList = cartService.getCustomGoodsList();
    $('.table').prepend(
        '<div class="col-md-5">' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '</div>'
    );

    $('.table-body').prepend(
        '<tr>' +
        '<th>名称：</th>' +
        '<th>数量</th>' +
        '<th>单价</th>' +
        '<th>小计</th>' +
        '</tr>');

    _.forEach(customGoodsList, function(customGoods){
        $('.table-body').append(
                '<tr>' +
                '<td>' + customGoods.goods.name + '</td>' +
                '<td>' + customGoods.number + '</td>' +
                '<td>' + customGoods.goods.price + '</td>' +
                '<td>' + cartService.getSubtoatl(customGoods)+'</td>' +
                '</tr>');
    })
    $('.panel-body').append(
        '<p class="text-right">' +
            '总计：45.00(元)' +
            '<a class="btn btn-primary btn-lg" role="button" href="#">' +
            '立即付款' +
            '</a>' +
        '</p>'
    );
    $('#cartGoodsNumber').text(cartService.countCart());
});