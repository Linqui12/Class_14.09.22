'use strict'

//создать пользователя бимя фамилия,мыло,возраст,статус логина

// function userProto(firstName,lastName,age){
//   firstName:firstName;
//   lastName:lastName;
//   age:age;
//   onlineStatus:false;
// }
// const User={
  
//  showData:function(){
//   return this.firstName+this.lastName+this.age+this.onlineStatus;
//  },
//   isLogin : function(){
//     return this.onlineStatus;
//   },
//   autorization : function(){
//     if(this.onlineStatus){
//       this.onlineStatus =false;
//       return "Bye";
//     }
//     else{
//       this.onlineStatus=true;
//       return "Welcome";
//     }
//   },
// };

//   const user1 = new userProto('test','testovich',28);



//globalObject//////////////
// const str1 ='tastes';
// const str2 =str1 +' oy';

// const str1='test test net web';
// function toJadenCas(str1){
//   const word=str1.split(' ');
  
// }
///15.09.22

// const num1 = Math.sqrt(4);//ккорень квадратного числа
// const num2 = Math.cbrt(4);//ккорень кубического числа
//детерменируемая функция
// function sum(num1,num2){
//   return num1+num2;
// };
// function sum2(num1,num2){
//   return num1+num2;
// };
// //стрелочные функции
// const arrowSum=(num1,num2)=>num1+num2;
// const squereArr=(n)=>n*n;
// const test=()=>'test';
// const setsFunc=()=>this;
// //
// const newspaper ={
//   name:'Tеленеделя',
//   articles:[
//     {name:'article 1',text:'abababa',author:'Mark'},
//     {name:'article 2',text:'abaawwwa',author:'Bob'},
//     {name:'article 3',text:'abavcvca',author:'Liza'},
//     {name:'article 4',text:'afga',author:'Petro'},
//     {name:'article 5',text:'ghbaba',author:'Mark'},
//   ],
//   showArticles1:function(){
//     this.articles.forEach(function(article){
//       console.log(`Newspaper: ${this.name}Article: ${article.name} Author: ${article.author}`);
//     });
//   },
//   showArticles2:function(){//костыль
//     const that=this;
//     this.articles.forEach(function(article){
//       console.log(`Newspaper: ${that.name}Article: ${article.name} Author: ${article.author}`);
//     });
//   },
// };



// //functional expression
// const getSumOfTwo = function(num1,num2){
//   //тело функции

// }

// // function number (num1,num2){
// //   console.log(num1,',',num2)
// // if(num1<num2){
// //   number(num1+1,num2);
// // }
// // else if(num1>num2){
// //   number(num1-1,num2);
// // }
// // return 'Done';

// // }
// //    number (10,5);
// //    ' '
// //    number (3,12);
  //  ++++++++++++++++++++++++++++++++

class Worker{
  constructor(name,surname,payment=0,workDays=216){
    if(typeof name!=='string'||name.trim()===''){
      throw new TypeError('Name err')
    }
    if(typeof surname!=='string'||surname.trim()===''){
      throw new TypeError('Sur err')
    }
    this.name=name;
    this.surname=surname;
    this.payment=payment;
    this.workDays=workDays;

  }
  salary(){
    return this.payment*this.workDays ;
  }
}

const bob =new Worker('Bob', 'Spunch',6500,10);
console.log(bob.salary());
