#### **let** **str=**"**kaikeba**";

如果字符串进行比较,则比较的是Unicode编码的大小(逐位进行比较)

# 查找类

#### **1**> **str.charAt(index);**

#### 	-----**根据下标查找某一位**

​		-index:字符串的索引值(下标),如果不写,默认为0,,如果>str.length&&<0,则会返回一个空字符串

#### 2>**str.charCodeAt(index)**;

#### ---根据下标将字符串转成unicode编码格式



#### 3> **String.fromCharCode(num1, num2, num3)**;

####     ---根据Unicode编码反编译出原本的字符串

##### 	-num1, num2, num3 Unicode编码fromIndex

#### 4>**str.indexOf(search[,fromIndex])**;

####      --可以用于查找是否有对应的字符串,如果有则返回第一次出现的位置,如果没有,则返        回-1(从前往后查找)

​    --fromIndex 默认为0(从哪开始)

#### 5>**str.lastIndexOf(search[,fromIndex]);**

#### --用于查找返回的指定值对应的索引,从后往前进行搜索(从后往前查找)

--fromIndex默认为str.length-1(从哪开始)

# 截取类

#### 1>**str.slice(begin,end)**

​	--用于截取字符串,返回的是截取的字符串 **let  newStr = str.slice(2)**

​	begin默认为0,end默认str.length

​	begin从哪位开始 end到哪位结束(包括begin,不包括end)

#### 2>str.substr(start[,length])

#### 	let newStr = str.substr(2,3);

​	--用于截取从start位置开始的字符

​	start截取的起始位置

​	length截取字符的个数,默认str.length

#### 3>str.substring(begin,end)

####     let newStr = str.substring();

​	begin截取的起始位置(默认为0)

​	end截取的结束位置(默认为str.length)

​	包含begin不包含end

## 其他常用方法

#### 	1>str.split(separator[,num]);

​		let arr = str.split()

​		以separator分割成一个数组

​		num 决定分割的数组中的个数

#### 	2>str1.concat(str2);

​		let str3 = str1.concat(str2,str4)

​		合并字符串,返回一个新的字符串

#### 	3>str.toLowerCase()

​			let str2 = str.toLowerCase();

​			把字符串转成小写

#### 	4>str.toUpperCase()

​			let str2 = str.toUpperCase();

​			把字符串转成大写

#### 	5>str.trim()

​			let str2 = str.trim()

​			去除首位空格