- 事件监听
target.addEventListener(type, listener[, options|useCapture]) 添加事件监听
参数：
   type 事件类型 (click、mouseover等，注意这里不加on)
   listener 事件处理函数

可选参数：
    options 配置对象
        capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
        once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
        passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
    useCapture Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
    第三个参数不设置时，默认执行的是 useCapture 为 false 也就是在冒泡阶段执行

- 取消事件监听
    removeEventListener(type, listener[, options|useCapture])

- 事件绑定与事件监听的区别

- 事件流
![事件流](./事件流.png)
事件捕获：当事件发生时，最先得到通知的是window，然后是document，由上至下逐级依次而入，直到真正触发事件的那个元素(目标元素)为止，这个过程就是捕获。
事件冒泡：接下来，事件会从目标元素开始起泡，由下至上逐级依次传播，直到window对象为止，这个过程就是冒泡。


- mouseenter和mouseleave 事件
    - mouseover 事件 和 mouseout 事件的问题

- 事件对象
    事件对象中包含了事件的详细信息，如果键盘按键，鼠标滚动方向，鼠标按键等事件详细信息
    - 兼容的事件对象获取方法
    - e.bubbles 是否冒泡
    - e.stopPropagation() 和 e.cancelBubble
    - 完整版：自定义下拉菜单

- 事件代理(事件委托)  
    - e.target 事件源
    事件代理(事件委托)：利用冒泡机制将事件统一委托在父级上执行，在通过事件源获取到相关元素
    - 优点：1)减少事件注册，节省内存; 2)可以给将来的元素添加事件
    - 缺点：1)建议就近委托，否则会导致浏览器频繁的调用处理函数;2)容易出现误判，所以写好相应判断

- 右键菜单事件 - contextmenu
- 默认行为和阻止默认行为
    - e.preventDefault()、return false
    - addEventListener 的 options
        options 配置对象
        capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
        once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
        passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
- 获取鼠标位置
    - e.clientX/e.clientY、e.pageX/e.pageY

- 滚轮事件
    - mousewheel 和 DOMMouseScroll 事件
    - e.wheelDelta 和 e.detail 滚轮方向
    - 滚轮处理兼容
- 自定义滚动条添加滚轮处理   
- 键盘事件
    - keydown、keyup
    - event.keyCode
    - event.ctrlKey、event.altKey、event.shiftKey
    - event.button
    - 组合键

- 常用表单事件汇总：
    focus、blur、change、input、submit
- 常用表单方法汇总：
    focus()、blur()、select()、submit()
- 案例：自定义提示信息

- 自定义事件：
new Event(typeArg, eventInit)
    typeArg 事件名称
    eventInit
        "bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
dispatchEvent(event)

## 总结
- 事件监听
    target.addEventListener(type, listener[, options|useCapture]) 添加事件监听
    type 事件类型 (click、mouseover等，注意这里不加on)
    listener 事件处理函数
    可选参数：
        options 配置对象
            capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
            once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
            passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
        useCapture Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
- 取消事件监听 removeEventListener(type, listener[, options|useCapture])
- 常用事件汇总：
    - 鼠标事件：mouseover、mouseout、mouseenter、mouseleave、mousedown、mouseup、mousemove、click、dblclick、mousewheel、DOMMouseScroll
    - 键盘事件：keydown、keyup
    - 表单事件：change、input、focus、blur、submit
    - 其他事件：load、resize、selectstart、scroll、contextmenu
- 事件流：事件捕获 --> 事件源 --> 事件冒泡
- 默认事件（默认行为）
- 事件对象
    - e.target 事件源
    - e.clientX/e.clientY、e.pageX/e.pageY 鼠标位置获取
    - e.preventDefault() 阻止默认事件
    - e.stopPagation() 阻止冒泡
    - e.keyCode 获取按键
    - e.ctrlKey、e.shiftKey、e.altKey 
    - e.button 获取鼠标按键
    - e.wheelDelta 和 e.detail
- 事件代理
- 拖拽
- 自定义滚动条   
    - 滚动滑块的高度比例换算：
        滚动滑块的高度/滚动条轨道 == 内容的可见高度/内容高度
        滚动滑块的高度 = 滚动条轨道 * (内容的可见高度/内容高度)
    - 内容滑动距离比例换算:
        滑块移动距离/滑块移动最大距离 == -内容移动距离/内容移动最大距离
        内容移动距离 = -内容移动最大距离* (滑块移动距离/滑块移动最大距离)
