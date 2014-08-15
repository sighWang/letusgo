$('document').ready(function (){
    var allCustomGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
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
    _.forEach(allCustomGoodsList, function(customGoods){
        $('.table-body').append(
                '<tr>' +
                '<td>' + customGoods.goods.name + '</td>' +
                '<td>' + customGoods.number + '</td>' +
                '<td>' + customGoods.goods.price + '</td>' +
                '<td>' + '小计'+'</td>' +
                '</tr>');
    })
});