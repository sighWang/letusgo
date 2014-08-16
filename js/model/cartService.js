function CartService(){
    this.customGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
}

CartService.prototype.getCustomGoodsList = function (){
    return this.customGoodsList;
}

CartService.prototype.editCustomGoodsList = function (customGoodsList){
    localStorage.setItem('customGoodsList',JSON.stringify(customGoodsList));
}

CartService.prototype.addGoodsNumberById = function (id){
    var index = -1;
    var customGoodsList = this.customGoodsList;
    for (var i = 0; i < customGoodsList.length; i++){
        if(_.contains(customGoodsList[i].goods, id)){
            index = i;
        }
    }
    if(index !== -1){
        customGoodsList[index].number++;
    }
    this.editCustomGoodsList(customGoodsList);
    return customGoodsList[index].number;
}

CartService.prototype.minusGoodsNumberById = function (id){
    var index = -1;
    var customGoodsList = this.customGoodsList;
    for (var i = 0; i < customGoodsList.length; i++){
        if(_.contains(customGoodsList[i].goods, id)){
            index = i;
        }
    }

    if(index !== -1 && customGoodsList[index].number > 0){
        customGoodsList[index].number--;
    }
    else{
        return -1;
    }

    this.editCustomGoodsList(customGoodsList);

    return customGoodsList[index].number;
}

CartService.prototype.getGoodsNumberById = function (id){
    var _customGoodsList = this.customGoodsList;
    var index = -1;
    for (var i = 0; i < _customGoodsList.length; i++){
        if(_.contains(_customGoodsList[i].goods, id)){
            index = i;
        }
    }
}

CartService.prototype.countCart = function (){
    var cartNumber = 0;
    var customGoodsList =  this.customGoodsList;
    _.forEach(customGoodsList, function(customGoods) {
        cartNumber += customGoods.number;
    })
    return cartNumber;
}

CartService.prototype.getSubtoatl =function (customGoods){
    return customGoods.number * customGoods.goods.price;
}