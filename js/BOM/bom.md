# BOM
	BOM(browers object model)浏览器对象模型(没有标准)

# 获取滚动条位置
	1> document.body.scrollTop || document.documentElement.scrollTop
	2> window.scrollX window.scrollY 不兼容
	3> window.scrollTo(x,y)---设置滚动条位置
# onscroll
	window.onscroll事件,当滚动条发生滚动时触发
# 获取尺寸的相关方法
### 获取可视区尺寸
	1> document.documentElement.clientWidth / document.documentElement.clientHeight
	2> window.innerWidth / window.innerHeight
	1 和 2 的区别是: client包含滚动条,inner不包含滚动条,pc端滚动条占位,移动端不占位
### 获取页面尺寸
	document.body.scrollWidth / document.body.scrollHeight
### 获取屏幕尺寸
	window.screen.width / window.screen.height
------------------------------------------------------------------------------
	// 获取元素距离页面的一个绝对坐标
	
	//方法1
	function getPageOffset(el) {
	  let l = el.offsetLeft;
	  let t = el.offsetTop;
	  while (el.offsetParent) {
	    el = el.offsetParent;
	    l += el.offsetLeft + el.clientLeft;
	    t += el.offsetTop + el.clientTop;
	  }
	  return {
	    left: l,
	    top: t
	  };
	}
	
	//方法2
	function getPageOffset(el) {
	  let { left, top } = el.getBoundingClientRect();
	  let scrollL = window.scrollX;
	  let scrollT = window.scrollY;
	  return {
	    left: left + scrollL,
	    top: top + scrollT
	  };
	}
### hash

    location 对象
    hash 哈希值
    onhashchange
    hash 路由
    
    BOM (browers object model) 浏览器对象模型 
    
    ### history
    
    - pushState(state,title[,url])
    
      state: 状态对象state是一个JavaScript对象，通过pushState () 创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate事件就会被触发，且该事件的state属性包含该历史记录条目状态对象的副本。
    
      title: Firefox 目前忽略这个参数，但未来可能会用到。在此处传一个空字符串应该可以安全的防范未来这个方法的更改。或者，你可以为跳转的state传递一个短标题。
    
      URL: 该参数定义了新的历史URL记录。注意，调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。新URL必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前URL。
    
    - popstate
      pushState 修改历史记录不会触发 popstate
    
    - state 
      history.state 获取存入的信息
