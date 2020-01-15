# json

    json中不可以写入注释
    
    JSON对象为了方便操作JSON的数据,所以js中才专门准备了这样的一个对象
    
    let  _json = "{"name": "张三"}";
    
    let _json2 = '[1,2,3]';
    
    let arr = [1,2,3];

#### 1> let obj = JSON.parse(_json);  //{name: '张三'}  

#### 	let arr = JSON.parse(_json2); // [1,2,3]

#### 2> let c = JSON.stringify(obj)  // "{"name": "张三"}"

#### 	let d = JSON.stringify(arr) //  "[1,2,3]"

