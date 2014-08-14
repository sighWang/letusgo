function goodslocalStorage(){
    var sprite = new Goods('雪碧', '3', '瓶');
    var lychee = new Goods('荔枝','15.00','斤');
    var badminton = new Goods('羽毛球','4.50','个')
    localStorage.setItem('sprite',JSON.stringify(sprite));
    localStorage.setItem('lychee',JSON.stringify(lychee));
    localStorage.setItem('badminton',JSON.stringify(badminton));
}