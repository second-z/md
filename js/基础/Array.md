# 基础添加删除(会改变原数组)

#### 1>arr.push(1,2)

​	x添加到末尾,可以添加多个

#### 2> arr.pop(1)

​	在末尾删除x,一次只能删除一个

#### 3> arr.unshfit(1,2)

​	x添加到开头,可以添加多个

#### 4> arr.shift(1)

​	在开头删除x,一次只能删除一个

## 删除,添加,替换方法(splice)(改变原数组)

#### 1>arr.splice(start[,num,[item1,item2]])

​	-start-删除的起始位置(包含起始位置)

​	-num-删除的结束位置(包含结束位置)

​	-item1, item2- 替换删除的元素(可以是多个)

​	删除: arr.splice(1,3);

​	添加: arr.splice(arr.length,0,11)

​	替换：arr.splice(1,2,11,122);

## 数组排序(改变原数组)

#### 1> arr.sort()

 --如果不提供任何的参数,则根据sort默认排序规则来排序(根据unicode来进行排序)

#### 从小到大 : arr.sort((a,b)=>a-b);

#### 从大到小: arr.sort((a,b)=>b-a);

## 常用方法

#### 1>arr.concat(arr1,arr2)

 合并数组(返回一个新的数组)

#### 2>let str = arr.join(" ");

将数组转换成一个字符串

#### 3>arr.revese()

反转,将数组中的所有的元素颠倒,并返回该数组

#### 4>arr.indexOf(searchValue[,fromIndex]);

​	返回数组中指定元素第一次出现的索引,如果不存在,则返回-1

#### 5> arr.lastIndexOf(searchValue[,fromIndex])

​	返回数组中指定元素最后一次出现的索引,如果不存在,则返回-1

#### 6>arr.slice(begin[,end])

​	截取begin开始,到end结束位置的数据,并作为一个新的数组返回

​	包含begin,不包含end

​	let newArr = arr.slice(2,3);

## 数组新增方法

#### 	1>arr.forEach(callback[,thisArg])

​			循环每一项,类似for循环

		arr.forEach((item,index)=>{console.log(item)},document)

​		callback 函数---没有返回值

​		thisArg 可以改变this指向

#### 	2>let newArr = arr.filter(callback[,thisArg])

​			筛选出符合函数中条件的元素,并作为一个新数组返回

			let newArr = arr.filter((item,index)=>item>5,document)

​			有返回值

#### 	3> let newArr = arr.map(callback[,thisArg])

​			映射---有返回值

​		         let newArr = arr.map((item,index)=>item*10,document);

#### 	4> let sum = arr.reduce(callback[,initValue]);

​			累计--返回一个结果

​			let sum = arr.reduce((result,ele,index)=>result+ele);

​			result------两个数相加得到的结果(第一次会把result=arr[0]+arr[1])---以后都是result + arr[2+n];

​			ele-----第一个

​			--initValue 初始result为0; -----result += arr[0];(比不设置初始化多一步,结果一样)

#### 	5> let boolen = arr.some(callback[,thisArg]);

​			some--至少一个 返回true/false

​			let newArr = arr.some((item,index)=>)

#### 	6>let boolen  = arr.every(callback[,thisArg]);

​			every---每个 返回true/false

​		let boolen = arr.every((item,index)=>item.checked)

### 类数组转成真数组
	1> Array.from()
		Array.from(lis) -----转换成真数组arrList(新)
	2> ...
		[...lis] -----------把里边的元素展开到数组中

