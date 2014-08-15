$('document').ready(function (){
    var allCustomGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
    console.log(allCustomGoodsList);
    var groups = _.groupBy(allCustomGoodsList,function (customGoods){
           return customGoods.goods.catagary;
    });
    _.forEach(Object.keys(groups), function(catagary) {
        console.log(catagary);
        $('.panel-body').append(
                '<div class="row">' +
                '<div class=" col-lg-offset-2 col-md-2">' +
                '<p>分类:'+ catagary +'</p>' +
                '</div>' +
                '</div>'
        );
        _.forEach(groups[catagary], function(customItem) {
            console.log(customItem.goods.name,customItem.number);
            $('.panel-body').append(
                '<div class="row">' +
                    '<div class="col-lg-offset-2 col-md-1">' + customItem.goods.name + '</div>' +
                    ' <div class="col-md-1">' + customItem.number + '</div> ' +
                    '<div class="col-md-1">' + customItem.goods.price + '</div>' +
                    '<div class="col-md-1">' +  customItem.number * customItem.goods.price+ '</div>' +
                    '<div class="col-md-1"><button>加</button></div>' +
                    '<div class="col-md-1"><button>减</button></div>' +
                    '<div class="col-md-1"></div><div class="col-md-1"></div>' +
                '</div>'
            );
        })

    });
    $('.panel-body').append(
    '<div class="row">' +
            '<div class="col-lg-offset-9 col-md-2">' +
        '<div class="thumbnail">' +
        '<div class="caption">' +
        '<p class="right">' +
        '<a href="#" class="btn btn-default" role="button">' + '总计' + '</a>' +
        '<a href="pay.html" class="btn btn-primary" role="button">PAY</a>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
});