$('document').ready(function() {
    var customGoodsService = new CustomGoodsService();
    console.log(customGoodsService.countCart());
    $('#cartGoodsNumber').text(customGoodsService.countCart());
});