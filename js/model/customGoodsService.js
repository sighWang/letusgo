function CustomGoodsService(){
    this.customGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
}
CustomGoodsService.prototype.getCustomGoodsList = function (){
    return this.customGoodsList;
}
CustomGoodsService.prototype.editCustomGoodsList = function (customGoodsList){
    localStorage.setItem('customGoodsList',JSON.stringify(customGoodsList));
}
CustomGoodsService.prototype.addGoodsNumberById = function (id){
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
CustomGoodsService.prototype.minusGoodsNumberById = function (id){
    var index = -1;
    var customGoodsList = this.customGoodsList;
    for (var i = 0; i < customGoodsList.length; i++){
        if(_.contains(customGoodsList[i].goods, id)){
            index = i;
        }
    }
    if(index !== -1){
        customGoodsList[index].number--;
    }
    this.editCustomGoodsList(customGoodsList);

    return customGoodsList[index].number;
}
CustomGoodsService.prototype.getGoodsNumberById = function (id){
    var _customGoodsList = this.customGoodsList;
    var index = -1;
    for (var i = 0; i < _customGoodsList.length; i++){
        if(_.contains(_customGoodsList[i].goods, id)){
            index = i;
        }
    }
}
