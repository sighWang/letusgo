$('document').ready(function (){
    var cartService = new CartService();
    var customGoodsList = cartService.getCustomGoodsList();
    $('.panel-body').prepend(
        '<div class="col-md-5">' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '</div>'
    );
    $('.table-body').prepend(
        '<tr>' +
        '<th>&nbsp;</th>' +
        '<th>名称：</th>' +
        '<th>数量</th>' +
        '<th>单价</th>' +
        '<th>小计</th>' +
        '<th>&nbsp;</th>' +
        '<th>&nbsp;</th>' +
        '</tr>');
    _.forEach(customGoodsList, function(customGoods){
        $('.table-body').append(
                '<tr>' +
                '<th>&nbsp;</th>' +
                '<td>' + customGoods.goods.name + '</td>' +
                '<td>' + customGoods.number + customGoods.goods.unit + '</td>' +
                '<td>' + Util.format.formarPrice(customGoods.goods.price) + '(元)</td>' +
                '<td>' + Util.format.formarPrice(cartService.getSubtoatl(customGoods))+'（元）</td>' +
                '</tr>');
    })
    $('.panel-body').append(
        '<p class="text-right">' +
            '总计：' + Util.format.formarPrice(cartService.getTotal()) + '(元)' +
            '<a class="btn btn-primary btn-lg" role="button" href="#">' +
            '立即付款' +
            '</a>' +
        '</p>'
    );
    $('#cartGoodsNumber').text(cartService.countCart());
});