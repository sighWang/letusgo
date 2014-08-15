function CustomGoodsService(){
}
CustomGoodsService.prototype.getCustomGoodsList = function (){
    return JSON.parse(localStorage.getItem('customGoodsList'));
}
CustomGoodsService.prototype.editCustomGoodsList = function (customGoodsList){
    localStorage.setItem('customGoodsList',JSON.stringify(customGoodsList));
}
CustomGoodsService.prototype.addGoodsNumberById = function (id){
    
}