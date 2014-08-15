$('document').ready(function (){
    var allCustomGoodsList = getCustomGoodsList();
    var groups = _.groupBy(allCustomGoodsList,function (customGoods){
           return customGoods.goods.catagary;
    });
    _.forEach(Object.keys(groups), function(catagary) {
        showCategaryTitle(catagary);
        showCategaryContent(groups,catagary);
    })
    showSubtotal(allCustomGoodsList);

    $('.panel').on('click','button',function() {
        var action = ($(this)[0].id).split('_');
        var customGoodsService = new CustomGoodsService();
        if(action[1] === 'Add'){
            var number = customGoodsService.addGoodsNumberById(action[0]);
            $('#' + action[0] + 'number').text(number);
        }
        else if(action[1] === 'Minus'){
            var number = customGoodsService.minusGoodsNumberById(action[0]);
            if(number === 0){
                $('#' + action[0] + 'row').remove();
            }
            $('#' + action[0] + 'number').text(number);
        }
        var customGoodsService = new CustomGoodsService();
        $('#cartGoodsNumber').text(customGoodsService.countCart());
    });

    var customGoodsService = new CustomGoodsService();
    $('#cartGoodsNumber').text(customGoodsService.countCart());
});

function showCategaryTitle(catagary){
    $('.panel-body').append(
            '<div id="' + catagary+ '" class="row">' +
            '<div class=" col-lg-offset-2 col-md-2">' +
            '<p>分类:'+ catagary +'</p>' +
            '</div>' +
            '</div>'
    );
}
function showCategaryContent(groups,catagary){
    var customGoodsService = new CustomGoodsService();
    _.forEach(groups[catagary], function(customItem) {
        $('.panel-body').append(
                '<div id="' + customItem.goods.id +'row" class="row">' +
                '<div class="col-lg-offset-2 col-md-1">' + customItem.goods.name + '</div>' +
                '<div class="col-md-1" id="'+ customItem.goods.id+'number">' + customItem.number + '</div> ' +
                '<div class="col-md-1">' + customItem.goods.price + '</div>' +
                '<div class="col-md-1">' +  customGoodsService.getSubtoatl(customItem) + '</div>' +
                '<div class="col-md-1"><button id="' + customItem.goods.id +'_Add">加</button></div>' +
                '<div class="col-md-1"><button id="' + customItem.goods.id +'_Minus">减</button></div>' +
                '<div class="col-md-1"></div><div class="col-md-1"></div>' +
                '</div>'
        );
    })
}
function showSubtotal(allCustomGoodsList){
    var total = 0;
    var customGoodsService = new CustomGoodsService();
    _.forEach(allCustomGoodsList,function(customGoods){
        total += customGoodsService.getSubtoatl(customGoods);
    })
    $('.panel-body').append(
            '<div class="row">' +
            '<div class="col-lg-offset-9 col-md-2">' +
            '<div class="thumbnail">' +
            '<div class="caption">' +
            '<p class="right">' +
            '<a href="#" class="btn btn-default" role="button">' + total + '</a>' +
            '<a href="pay.html" class="btn btn-primary" role="button">PAY</a>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    );
}