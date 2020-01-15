ECMAScript 6 基础
## ECMAScript 6 简介
- JavaScript 三大组成部分
    - ECMAScript 
    - DOM
    - BOM 
- ECMAScript 发展历史 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Resources
- ECMAScript 包含内容：JS 中的数据类型及相关操作，流程控制，运算符及相关运算……
## ECMAScript 6 
- let 和 const
    - let 和 var 的差异
        - let 允许声明一个在作用域限制在块级中的变量、语句或者表达式
            - 块级作用域
        - var 声明的变量只能是全局或者整个函数块的
        - let 不能重复声明
        - let 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let
    - const 常量
        - 常量不能重新赋值
        - 不能重复声明
        - 块级作用域
        - const 不会被预解析
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const
- 解构赋值
    - 对象的解构赋值
    - 数组的解构赋值
    - 字符串的解构赋值
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- 展开运算符
    - 对象展开
    - 数组展开
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Set 对象    
    - Set 对象的数据结构
    - Set 相关属性与方法
        - size 属性
        - clear()、delete()、get()、has()、add()    
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
- Map 对象
    - Map 对象的数据结构
    - Map 相关属性与方法
    - size 属性
    - clear()、delete()、get()、has()、set()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
    
- 函数新增扩展
    - 箭头函数
        - 箭头函数的各种写法
        - 箭头函数的 this 问题
        - 箭头函数的不定参问题
        - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    - rest 参数设置
    - 参数默认值设置
- 新增数组扩展
    - Array.from()、Array.of() 
    - find()、findIndex()、includes()
    - flat()、flatMap()
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
- 新增字符串扩展
    - includes(), startsWith(), endsWith()
    - repeat()
    - 模版字符串   
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
- 新增对象扩展
    - 属性简洁表示法
    - 属性名表达式
    - 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
- babel 使用
    - Babel 是一个 JavaScript 编译器
    - 手册地址：https://www.babeljs.cn/
    - Babel 基本是否方法

### 预解析机制（变量和函数提升）
在 JS 中，代码执行前，JS 本身会先执行一个预解析的过程，具体规则如下：
1. 预解析时，如果碰到 var 关键字,就会把这个声明提升 script 标签或者其所在作用域的最前边
2. 预解析时，如果解析到函数体，一般情况下会把函数体整体提升到 script 标签或者其所在作用域的最前边。但是 函数体是声明在一些流程控制语句中，就只会把声明提升到前边去
3. 预解析时，注意 var 是提升到最前边去的，然后才是我们的 function
4. 预解析之后，JS 才会从上到下一步一步执行我们的代码 

### 作用域与作用域链
- 作用域：一条数据起作用的范围
    - 全局作用域：声明在全局的数据，在全局任意地方都可以修改和使用
    - 局部作用域(函数作用域)：只能在其声明的函数内部进行使用和修改
- 作用域链：调用数据时的查找规则，先在当前作用域查找，如果找不到的话，就向上找父作用域,一直找到全局作用域，如果还找不到就报错

### this 指向
- 在绝大多数情况下，函数的调用方式决定了this的值。
    1. 函数作为对象的方法调用时，this 指向当前对象。(事件处理函数，this 指向当前事件的元素)
    2. 其他情况下的函数调用，this 指向 window (函数直接调用，定期器调用，动画帧调用)
- 自定义 this 指向
    1. call 和 apply 在调用时，修改本次调用的 this 指向
    2. bind 在创建时，绑定改函数的 this 指向