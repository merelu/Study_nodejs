//array, object

var f = function(){
    console.log(1+1);
    console.log(1+2);
}

var a =[];

a[1] = f;

var b = {
    func : f
}

b.func();   