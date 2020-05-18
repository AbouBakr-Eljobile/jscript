//var name ="bekoo";
//console.log(name);

//var age = 12;
//var Age = 21;

//console.log("age="+age);
//console.log("Age="+Age);
//console.log(typeof name);


//alert ("Age= \n"+Age);
// الدرس الاول 

//var Age = 21;

//document.getElementById("value").innerHTML ="Age= \n"+ Age ;
// a = "I\'m A";
//function myFun(){
  //  window.b = "I\'m B";
    //var c = "I\'m C";
//}
//myFun(); 
//alert(a); //متغير  عام بستخدم في اي مكان الفرق الوحيد الي هوا موضح في المتغير C علاش مخدمش 
//alert(b); // متغير عام تستخدم في اي مكان 
//alert(c); // var متغير عام بس لو حطيته ضمن دالة متقدرش تستعمله خارجها 
//في المثال السابق .. المتغير a هو متغير عام يمكن الوصول إليه في أي مكان .. لكن المتغير b هو متغير خاص .. أي مقتصر على النطاق الذي تم تعريفه به .. في هذه الحالة هو الدالة myFun فلا يمكن استخدامه خارجها وهذا السبب الذي يجعل ال alert الثانية لا تعمل وتظهر خطأ في ال console
//ومما سبق يمكننا القوم .. أن استخدام كلمة var في النطاق العام .. ﻻ يفرق عن عدم استخدامها بمعنى أن الطرق الثالثة التالية متساوية طالما انها ليست داخل نطاق محدد انما هي بشكل عام
//function testLet(){
  //  let x = "Hello, World!";
    //console.log(x);
  //}
//testLet(); // Hello, World!
//console.log(x); // Error
//في المثال السابق المتغير x لا يمكن استخدامه الا داخل الدالة testLet
//حسنا السؤال هنا ما الفرق بين let و var إذا تم استخدامها داخل نفس الدالة
function testVarLet(){        

// var

for( let i = 0; i < 3; i++ ){
console.log("i = " + i) 
}
console.log(i) // 3

}

// let
for(let x = 0; x < 3; x++){
console.log("x =" + x)
}
console.log(x) //Error
