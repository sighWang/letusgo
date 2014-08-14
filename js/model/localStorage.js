function goodslocalStorage(){
    var goodsList = [];
    var cocacola =new Goods('ITEM000000', '可口可乐', '瓶', 3.00, 'drink');
    var sprite = new Goods('ITEM000001', '雪碧', '瓶', 3.00,  'drink');
    var lychee = new Goods('ITEM000002', '荔枝','斤', 15.00, 'fruit');
    var badminton = new Goods('ITEM000003', '羽毛球','个',4.50, 'sport');
    goodsList.push(cocacola, sprite, lychee, badminton);
    localStorage.setItem('goodsList', JSON.stringify(goodsList));

    var customItemList = [];
    localStorage.setItem('customGoodsList', JSON.stringify(customItemList));
}