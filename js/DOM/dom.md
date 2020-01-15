# DOM 文档对象模型
	简单来说 就是定义了对文档相关操作
# DOM关系
	1> childNodes 子节点
	2> children 子元素
	3> firstChild 第0个子节点
	4> firstElementChild 第0个子元素
	5> lastChild 最后一个子节点
	6> lastElementChild 最后一个子元素
	7> nextSibling 下一个兄弟节点
	8> nextElementSibling 下一个兄弟元素
	9> previousSibling 上一个兄弟节点
	10> previousElementSibling 上一个兄弟元素
	11> parentNode 父节点
	12> offsetParent 定位父节
	13> parentElement 父元素
### 元素节点 2-4-6-8-10-11-12-13
#### 节点类型 -- li.nodeType
	1> text ---文本节点 ---- 3
	2> comment ---注释节点 --- 8
	3> li --- 元素节点 ---- 1
	4> 标签名-----属性节点-----2
	5> document----文档节点--------9
	6> 文档声明----10
#### let li =  document. createElement("li");---------创建一个li元素
#### list.appendChild(li)---------在list中添加一个子元素li
#### table特殊DOM操作-表格
	1> table.tHead;
	2> table.tBodies;
	3> table.tBodies[0].rows;
	4> table.tBodies[0].rows[0].cells;
#### item.checked = this.checked;------全选

### 创建节点
    语法：element document.createElement("tagName"); 创建一个节点
    参数：tagName 标签名称
    返回值：创建好的节点
#### DOM删除元素
	1> node.remove(); ----从DOM中删除掉元素自己
	2> parent.removeChild(node)-----从parent下删除node自己
#### DOM添加元素
	1> parent.appendChild(node)  在元素的末尾添加一个子级
	2> parent.insertBefore(newNode,oldNode) 在 oldNode 前边添加入 newNode 
	在使用 appendChild 和 insertBefore时，如果添加是一个页面上已经存在的节点，会先从原位置删除，然后在添加到新的位置去。如果oldNode不存在,就会把newNode放入到parent内容最末尾
#### 替换节点
	parent.replaceChild(newNode,oldNode) 替换子元素
#### 克隆节点
	node.cloneNode(deep)
		deep: 默认为false
		deep 为 true, 克隆元素及属性，以及元素的内容和后代
		deep 为 false, 只克隆元素本身，及它的属性
#### DOM 属性操作
	. 和 [] 都是ECMAScript中,对象的属性操作,对象属性的值会被存在内存中,想要直接获取存在文档中属性,或者想把一个属性设置在文档中我们需要使用DOM的属性操作
	1> el.attributes----元素所有的属性集合
	2> el.getAttribute("attr")  获取属性
	3> el.setAttribute("attr","val") 设置属性
	4> el.removeAttribute("attr") 移除属性
	5> el.hasAttribute("attr") 判断是否有这个属性
	只要操作了innerHTML元素的所有子元素上,存在内存中的事件和相关的属性都会丢失,如果希望元素的某些属性在操作了父节的innerHTML之后,还存在这个属性加在DOM中
#### data 自定义属性---------h5新增
	在标签中定义data自定义属性: data-key="value";
	在js操作该元素的data自定义属性: el.dataset
		获取: el.dataset.key
		设置: el.dataset.key = "value";
#### 元素的尺寸获取
	offset
		- offsetWidth 可视宽度 = width + padding + border
		- offsetHeight 可视高度 = height + padding + border
		- offsetLeft 距离定位父级的left坐标 
		- offsetTop 距离定位父级的top坐标
	client
		- clientWidth 可视宽度 = width + padding
		- clientHeight 可视高度 = height + padding
		- clientTop 上边框宽度 = border	
		- clientLeft 左边框宽度 = border
	scroll ---- onscroll事件
		- scrollWidth 内容宽度-如果内容宽度比元素宽度宽,则是内容宽度,否则是元素宽度
	    - scrollHeight 内容高度-如果内容高度比元素高度高,则是内容高度,否则是元素高度
	    - scrollLeft 左右滚动条距离左侧的距离
	    - scrollTop 上下滚动条距离顶部的距离
	getBoundingClientRect()
		- left  元素左侧距离可视区左侧距离
		- top	元素顶部距离可视区顶部近距离
		- right	元素右侧距离可视区右侧距离
		- bottom	元素底部距离可视区底部距离
		- width		可视宽度
		- height	可视高度

## 其他
    - createDocumentFragment
    - NodeList 和 HTMLCollection 