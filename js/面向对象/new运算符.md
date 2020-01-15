# new运算符
	1> 执行函数
	2> 创建一个空对象
	3> 把空对象和this绑定
	4> 隐士返还this
# 实例
```js
function Tab() {
    this.psFor = function() {
      console.log("psFor...");
    };
    this.num = 4;
  }

  let tab1 = new Tab().num;
  console.log(tab1);
  let tab2 = new Tab().psFor();
```

