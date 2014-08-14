function CustomGoodsList(){
    this.allCustomGoodsList = JSON.parse(localStorage.getItem('customGoodsList'));
}
CustomGoodsList.prototype.getCustomItemsById = function (id){
//    var _allCustomGoodsList = this.allCustomGoodsList;
//    _allCustomItems.set
//    var item = _.find(_allCustomGoodsList, {'id': id});
//    return item;
}
CustomGoodsList.prototype.addGoodsNumber = function (id) {
    var _allCustomGoodsList = this.allCustomGoodsList;
    console.log(_allCustomGoodsList);
    var index = _.findIndex(_allCustomGoodsList, {'id': id});
    if(index !== -1){
        _allCustomGoodsList[index].number++;
    }
    else{

        var goodsList = JSON.parse(localStorage.getItem('goodsList'));
        _.find(goodsList,id);
        var item = _.find(goodsList,id);
        var customGoods = new CustomGoods(item, 1);
        _allCustomGoodsList.push(customGoods);
    }
    localStorage.setItem('customGoodsList',JSON.stringify(_allCustomGoodsList));
}