var a = 10;

var o = {
    v1:'v1',
    v2:'v2',
    f1:function(){
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    },
    f3:()=>{
        console.log(a);
    }
}
//람다식 사용하면 this 사용시 undefined 뜬다

o.f1();
o.f2();
o.f3();
