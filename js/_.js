function _filter(list,f){
    let new_list=[];
    _each(list,function(val){
        if(f(val))
            new_list.push(val);
    })
    return new_list;
}
function _map(list,mapper){
    let new_list=[];
    _each(list,function(val){
        new_list.push(mapper(val));
    })
    return new_list;
}

/*
* __each로 _map,_filter 중복 제거 
*/
function _each(list,iter){
    //iter을 받아서 순환
    for(let i=0;i<list.length;i++){
        iter(list[i]);
    }
    return list;
}

/**
 * 컬링 _curry,_curryr 
 */
function _curry(fn){
    return function(a,b){
        return arguments.length==2?fn(a,b):function(b){return fn(a,b);}
    }
}
let add=_curry(function(a,b){
    return a+b;
})
//let add2=add(10); <-- 표현이 이상함...
//console.log(add2(20));
//console.log(add(10,20));
//console.log(add(10)(20));

//인자가 하나씩 들어오는 경우 평가 해주는 순서만 반대로 바꿔줌
function _curryr(fn){ //인자를 오른쪽에서 부터 읽어옴
    return function(a,b){
        return arguments.length===2?fn(a,b):function(b){return fn(b,a);}
    }
}

//_get 함수로 더 쉽고 간결하게 
let _get=_curryr(function(obj,key){
    return obj==null?undefined:obj[key];
})
//console.log(users[0].name);
//console.log(_get(users[0],"name"));
//console.log(_get("name")(users[0]));

let get_name=_get("name");
//console.log(get_name(users[1]));
//console.log(get_name(users[1]));

let old=_map(_filter(users,function(user){return user.age>=30;}),_get("name")); 
let young=_map(_filter(users,function(user){return user.age<30;}),_get("name"));
//console.log(old);
//console.log(young);

/**
* _reduce 함수 : 재귀적으로 함수를 연속적으로는 실행해준 결과값을 만들어주는 함수 
**/
let slice=Array.prototype.slice;
//function add(a,b){return a+b;}
function _rest(list,num){
    return slice.call(list,num);
}
function _reduce(list,iter,memo){
    if(arguments.length==2){
        memo=list[0];
        list=_rest(list,1);
    }
     _each(list,function(val){
            memo=iter(memo,val);
    })
    return memo;
}
//console.log(_reduce([1,2,3],add,0))
//console.log(_reduce([1,2],add));

function _pipe(){
    let fns=arguments;
    return function(arg){
        return _reduce(fns,function(arg,fn){
            return fn(arg);
        },arg);
    }
}
/*let f1=_pipe(
    function(a){return a+1},
    function(a){return a*2}
);
console.log(f1(1));

function _go(arg){
    let fns=_rest(arguments,1);
    return _pipe.apply(null,fns)(arg);
}
_go(5,function(a){return a+1},
function(a){return a*2},console.log);*/


//let old=_map(_filter(users,function(user){return user.age>=30;}),_get("name")); 
/*_go(
    users,
    function(users){
        return _filter(users,function(user){
            return user.age>=30;
        });
    },
    function(users){
        return _map(users,_get("name"));
    },
    console.log
)*/

//curryr 적용하면 더 간결하게 작성 가능
//순서를 바꿔 먼저 함수를 적용, 그 다음 인자를 받아서 실행하도록    
//ex)
_map=_curryr(_map);
_filter=_curryr(_filter);
_each=_curryr(_each);

//console.log(_map(function(val){return val*2})([1,2,3]));
/*
_go(users,_filter(function(user){
    return user.age>=30;
}),_map(_get("name")),console.log);

//let young=_map(_filter(users,function(user){return user.age<30;}),_get("age"));
_go(users,
    function(users){
        return _filter(users,function(user){
            return user.age<30;
        });
    },
    function(users){
        return _map(users,_get("age"));
    },
    console.log
);
_go(users,_filter(function(user){return user.age<30}),
_map(_get("age")),console.log);*/