$('document').ready(function (){
    $('.panel').on('click','button',function() {
        var action = ($(this)[0].id).split('_');
        var cartService = new CartService();

        if(action[1] === 'Add'){
            var number = cartService.addGoodsNumberById(action[0]);
            $('#' + action[0] + 'number').text(number);
        }

        else if(action[1] === 'Minus'){
            var number = cartService.minusGoodsNumberById(action[0]);
            if(number === 0){
                doRemove(action);
            }
            $('#' + action[0] + 'number').text(number);
        }
        $('#cartGoodsNumber').text(cartService.countCart());
        var customItem = cartService.getCustomGoodsById(action[0]);
        var subtotal = Util.format.formarPrice(cartService.getSubtoatl(customItem));
        var total = Util.format.formarPrice(cartService.getTotal());
        $('#subtotal'+action[0]).text(subtotal);
        $('#total').text(total);
    });

    var cartService = new CartService();
    var allCustomGoodsList = cartService.getCustomGoodsList();
    var groups = _.groupBy(allCustomGoodsList,function (customGoods){
        return customGoods.goods.catagary;
    });
    _.forEach(Object.keys(groups), function(catagary) {
        showCategaryTitle(catagary);
        showCategaryContent(groups,catagary);
    })
    showSubtotal(allCustomGoodsList);
    $('#cartGoodsNumber').text(cartService.countCart());

});

function showCategaryTitle(catagary){
    $('.panel-body').append(
            '<div id="' + catagary+ 'row" class="row">' +
            '<div class=" col-lg-offset-2 col-md-2">' +
            '<p>分类:'+ catagary +'</p>' +
            '</div>'
    );
}

function showCategaryContent(groups,catagary){
    var cartService = new CartService();
    _.forEach(groups[catagary], function(customItem) {
        $('.panel-body').append(
                '<div id="' + customItem.goods.id +'row" class="row">' +
                '<div class="col-lg-offset-2 col-md-1">' + customItem.goods.name + '</div>' +
                '<div class="col-md-1" id="'+ customItem.goods.id+'number">' + customItem.number + customItem.goods.unit + '</div> ' +
                '<div class="col-md-1">' + Util.format.formarPrice(customItem.goods.price) + '元/' + customItem.goods.unit + '</div>' +
                '<div class="col-md-2">共<span id="subtotal' + customItem.goods.id + '">' +  Util.format.formarPrice(cartService.getSubtoatl(customItem)) + ' </span> 元</div>' +
                '<div class="col-md-1"><button id="' + customItem.goods.id +'_Add_' + catagary + '">加</button></div>' +
                '<div class="col-md-1"><button id="' + customItem.goods.id +'_Minus_' + catagary + '">减</button></div>' +
                '<div class="col-md-1"></div><div class="col-md-1"></div>' +
                '</div>'
        );
    })
}

function showSubtotal(allCustomGoodsList){
    var total = 0;
    var cartService = new CartService();
    _.forEach(allCustomGoodsList,function(customGoods){
        total += cartService.getSubtoatl(customGoods);
    })
    $('.panel-body').append(
            '<div class="row">' +
            '<div class="col-lg-offset-9 col-md-2">' +
            '<div class="thumbnail">' +
            '<div class="caption">' +
            '<span class="right">' +
            '总计<a id="total" href="#" class="btn btn-default" role="button">' +
             Util.format.formarPrice(cartService.getTotal()) + '</a>  元' + '<a href="pay.html" class="btn btn-primary btn-lg" role="button">PAY</a>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    );
}
function doRemove(action){
    $('#' + action[0] + 'row').remove();
    if($('#' + action[2] + 'row').length === 1){
        $('#' + action[2] + 'row').remove();
    }
}