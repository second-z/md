# 动画帧------requestAnimationFrame(fn)
	1> 不需要传递间隔时间
	2> 相当于setTimerout 一次性的
	3> 如果想要连续执行
	4> 停止 cancelAnimationFrame(timer)
	5> 速度是由计算机显示器的渲染速度决定的-----屏幕分辨率----------          1000/16=16.6666666...
	6> 渲染时机和计算机显示器的渲染时机是一致的
	{
	    let box = document.querySelector(".box");
	    let l = 0;
	    timer = null;
	    function run() {
	      l += 5;
	      box.style.left = l + "px";
	      l == 300 ? cancelAnimationFrame(timer) : requestAnimationFrame(run);
	    }
	    document.addEventListener("click", () => {
	      timer = requestAnimationFrame(run);
	    });
	  }

