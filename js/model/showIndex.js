$('document').ready(function() {
    var customGoodsService = new CustomGoodsService();
    $('#cartGoodsNumber').text(customGoodsService.countCart());
});