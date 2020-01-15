# 动画帧
	关键词from..to等价于 0%..100%
	//调用动画帧
	---run 动画帧名称
	---1s 动画时长
	---2s 延时动画时间
	---liner 运动形式
	---infinite 次数
	-- forwards 停留在结束的位置
	animation: run 1s 2s linear infinite forwards;
	//定义动画帧
	@keyframes run {
		0% {
			left: 0;
			top: 0;
		}
		100% {
			left: 300px;
			top: 300px;
		}
	}
# animation-timing-function
	1> linear ---------- 匀速
	2> ease	-----------  默认,以低速开始,然后加快,在结束时变慢
	3> ease-in	--------  动画以低速开始
	4> ease-out	------  动画以低速结束
	5> ease-in-out	------- 动画以低速开始结束
	6> steps() ------  指定了时间函数中的间隔数量(步长)---就是分几步来完成动画
# 动画事件
	1>animationstart
	2>animationiteration
	3>animationend
## 奔跑的小熊
	<div class="box"></div>
	body {
	    background: #ccc;
	  }
	  .box {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 200px;
	    height: 100px;
	    background: url(bear.png) no-repeat;
	    animation: bear 1s steps(8) infinite, move 3s forwards;
	  }
	  @keyframes bear {
	    0% {
	      background-position: 0 0;
	    }
	    100% {
	      background-position: -1600px 0;
	    }
	  }
	  @keyframes move {
	    0% {
	      left: 0;
	    }
	    100% {
	      left: 50%;
	      /* margin-left: -100px; */
	      transform: translateX(-50%);
	    }
	  }
# 打字机效果
	<div class="box">我在这里等你</div>
	.box {
        width: 0;
        height: 30px;
        font-size: 20px;
        /* 让文字强制在一行内显示 */
        white-space: nowrap;
        background: pink;
        animation: move 4s steps(6) forwards;
        overflow: hidden;
      }
      @keyframes move {
        0% {
          width: 0;
        }
        100% {
          width: 120px;
        }
      }