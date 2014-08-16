$('document').ready(function() {
    var cartService = new CartService();
    $('#cartGoodsNumber').text(cartService.countCart());
});