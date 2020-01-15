
### 同步: 做一件事,在没有拿到结果前,就一直等着,一直等到有结果,才开始做下一件事情
### 异步: 做一件事,不用等待结果,就可以做下一件事情,有了结果后,再通过状态来通知,或者通过回调函数来处理
-----------------------------------------------------
### js中 同步阻塞 异步非阻塞
-------------------------------------------------------
### 回调函数-------在程序特定的条件下执行的函数
-------------------------------------------------------
# Promise
	1>在构建时,会接受接收一个参数,参数的类型是个函数,可以在这个函数中书写异步的操作
	2>这个函数会在Promise构造时,立即将执行了
	3>Promise中有三个不同的状态,它本身通过这个状态来判断我们异步执行的结果,promise中的状态,由我们定义改变,默认时pending,当调用了Resolve函数后,状态就变为resolved,当调用了reject函数,状态就变为Rejected------只会存在一种状态
		[[PromiseStatus]]
			1>pending---异步操作正在执行中---默认
			2>Fulfilled(标准)||Resolved--执行成功
			3>Rejected 执行失败
	4>then方法,代表了Promise中异步的操作执行完成了,then方法有两个参数,第一个参数代表了resolve之后,要做的事情,第二个参数代表了reject之后要做的事情---

--------------------------------------------------------
# then方法本身会返回一个新的Promise对象,但是状态会有几种情况
	1>then的回调函数中没有返回值,then就会返回一个状态为:resolved的promise对象
	2>then的回调函数是一个非 promise 的值,会返回一个状态为: resolved的promise对象,另外会把返回值,传递给下一个then
	3>then的回调函数返回值是一个Promise对象,then就直接返回这个Promise对象,具体状态有我们自己定义
	4>catch方法一样也会返回一个Promise,具体的规则参考then方法
	{
	  let promise = new Promise((resolve, reject) => {
	    // console.log(1);
	    resolve(1);
	  }).then(
	    data => {
	      console.log("请求成功之后要做的事情", data);
	    },
	    error => {
	      console.log("请求失败之后要做的事情", error);
	    }
	  ).catch((error)=>{
	  	console.log(error);
	  })
	}
--------------------------------------------------------
# async await
{
  async function fn() {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("aaa");
          resolve();
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bbb");
        resolve();
      }, 1000);
    });
  }
  console.log(222);
  fn();
}

# --------------------------------------------------------
# Promise下其他的方法
	1> let p = Promise.reject();---返回一个状态为rejected的Promise对象
	2> let p2 = Promise.resolve();--返回一个状态为resolved的Promise对象
	3> let p4 = Promise.all([p,p2,p3]);---当传入的Promise的状态都返回为resolve,它自身就会变成resolve,参数是一个数组[p,p2,p3],有一个不成功,则不成功,类似数组的方法array.every();
	4> let p5 = Promise.race([p,p2,p3]);---当传入的Promise有一个返回了完成状态,他就会返回完成状态,具体是resolve还是reject,就需要根据最早返回的这个Promise,参数是一个数组[p,p2,p3],
--------------------------------------------------------
​	
# try{}catch(error){}---------错误捕获语句
	1> 如果整体包起来,有一个出错,则下面的代码不会执行
	2> 每个单独包起来,有一个出错,不会影响下面的代码执行
	async function fn(){
		try{
			await new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log(1);
					resolve();
				},1000)
			})
		}catch(error){
			console.log(error);
		}
		try{
			await new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log(2);
					reject("出错了");
				},1000)
			})
		}catch(error){
			console.log(error);
		}
		try{
			await new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log(3);
					resolve();
				},1000)
			})
		}catch(error){
			console.log(error);
		}
		try{
			await new Promise((resolve,reject)=>{
				setTimeout(()=>{
					console.log(4);
					resolve();
				},1000)
			})
		}catch(error){
			console.log(error);
		}
	}
# 改写
	async function fn(){
		arr.forEach(item=>{
            try{
            	await item;
            }catch(error){
            	console.log(error);
            }
        })
	}
	
