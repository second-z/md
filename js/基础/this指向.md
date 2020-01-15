# this
	1> function fn(){
		console.log(this)
		} //window
	2> document.onclick = function(){
			console.log(this)
		}; //#document 是哪个元素的事件,则this指向这个元素
	3> document.addEventListener("click",()=>{
			console.log(this)
		});//在其所在作用域的this就是为它的this

# call(this,n1,n2) --------立即执行
	1> 第一个参数,this指向
	2> 第二个参数,要传递的参数(第三个及往后的参数)
	function fn(){
		console.log(arguments);
		console.log(this);
	}
	fn.call(document,12,1,2); // 12,1,2 document
# apply(this,[n1,n2])----------立即执行
	1> 第一个参数,this指向
	2> 第二个参数,要传递的参数-----是数组(以后的参数依次加入数组)
	function fn(){
		console.log(arguments);
		cosnole.log(this);
	}
	fn.apply(document,[12,2,4]); //12,2,4 document
# bind(this)(n1,n2,n3)--------不会立即执行函数,会返回一个新的函数体
	1> 第一个参数,this指向---let newFn = fn.bind(document);
	2> 在新的函数内写要传递的参数----newFn(1,2,3)
	function fn(){
		console.log(arguments);
		console.log(this);
	}
	let newFn = fn.bind(document); //会返回一个新的函数,bind会将新的函数下的this指向改变,而不会改变原来函数的this指向
	newFn(1,2,3); //真正的执行函数
	 === fn.bind(document)(1,2,3);
	这两种写法都可以
# bind 与 (call & applay) 的区别
	1> bind是一个方法,执行完毕,并会返回一个新函数
	2> call/apply 会立即调用函数本身
	3> bind返回的是一个新的函数,改变的是新函数下的this指向
