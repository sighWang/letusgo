function CartService(){
    this.customGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
    this.goodsList = JSON.parse(localStorage.getItem('goodsList'));
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
    else{
        var _goodsList = this.goodsList ;
        console.log(_goodsList);
        var item = _.find(_goodsList,{'id':id});
        var customGoods = new CustomGoods(item, 1);
        customGoodsList.push(customGoods);
        this.editCustomGoodsList(customGoodsList);
        return;
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
CartService.prototype.countCart = function (){
    var cartNumber = 0;
    var customGoodsList =  this.customGoodsList;
    _.forEach(customGoodsList, function(customGoods) {
        cartNumber += customGoods.number;
    })
    return cartNumber;
}

CartService.prototype.getSubtoatl = function (customGoods){
    return customGoods.number * customGoods.goods.price;
}

CartService.prototype.getTotal = function (){
    var _customGoodsList = this.customGoodsList;
    var total = 0;
    _.forEach(_customGoodsList, function (customGoods){
        total += customGoods.number * customGoods.goods.price;
    })
    return total;
}
CartService.prototype.getGoodslist = function() {
    return JSON.parse(localStorage.getItem('goodsList'));
}