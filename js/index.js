let users=[
    {id:1,name:"ID1",age:25},
    {id:2,name:"ID2",age:35},
    {id:3,name:"ID3",age:26},
    {id:4,name:"ID4",age:20},
    {id:5,name:"ID5",age:31},
    {id:6,name:"ID6",age:21},
    {id:7,name:"ID7",age:24},
    {id:8,name:"ID8",age:20}
]
//명령형 코드
/**
 * 1.30세 이상인 user 거르고, 이름 수집
 */
let tmp_users1=[];
for(let i=0;i<users.length;i++){
    if(users[i].age>=30)
        tmp_users1.push(users[i]);
}
console.log(tmp_users1);

let names=[];
for(let i=0;i<tmp_users1.length;i++){
    names.push(tmp_users1[i].name);
}
console.log(names);
/**
 * 2. 30세 이하 user 거르고, age 수집
 */
//let tmp_users2=[];
//for(let i=0;i<users.length;i++){
  //  if(users[i].age<30)
    //    tmp_users2.push(users[i]);
//}
//console.log(tmp_users2);
//let ages=[];
//for(let i=0;i<tmp_users2.length;i++){
  //  ages.push(tmp_users2[i].age);
//}
//console.log(ages);

/**
 * 함수형을 이용해 중복 제거
 */
//function _filter(users,f){
  //  let new_list=[];
    //for(let i=0;i<users.length;i++){
      //  if(f(users[i]))
        //    new_list.push(users[i]);
    //}
    //return new_list;
//}
//console.log(_filter([1,2,3,4],function(num){
  //  return num%2;
//}))
//console.log(_filter([1,2,3,4],function(num){
  //  return !(num%2);
//}))
//function _map(list,mapper){
  //  let new_list=[];
   // for(let i=0;i<list.length;i++){
     //   new_list.push(mapper(list[i]));
    //}
    //return new_list;
//}
/*let old=_filter(users,function(user){
    return user.age>=30;
});
let o_names=_map(old,function(o){
    return o.name;
});
console.log(o_names);
let young=_filter(users,function(user){
    return user.age<30;
})
let y_names=_map(young,function(y){
    return y.name;
});
console.log(y_names);

console.log(_map(_filter(users,function(user){
    return user.age>=30;
}),function(user){
    return user.name;
}));

console.log(_map(document.querySelectorAll("*"),function(node){
    return node.nodeName;
}));

//function _curry(fn){
  //  return function(a,b){
    //    return arguments.length==2? fn(a,b):function(b){return fn(a,b);};
    //}
//}
let add=_curry(function(a,b){
    return a+b;
})
let add2=add(10);
console.log(add2(20));
console.log(add(10)(5))
console.log(add(11,22));
let sub=_curry(function(a,b){
    return a-b;
});
console.log(sub(5)(5));
console.log(sub(5,2));*/
