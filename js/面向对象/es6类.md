# es6类
	 class Person {  
	    constructor(name) {
	      this.name = name;
	    }
	    hobby() {
	      console.log("篮球");
	    }
	    
	    //静态属性
	    static height = "178px";
	    // 静态方法
	    static getName() {
	      console.log(this.height);
	    }
	  }
	  //静态属性
	  Person.age = 20;
	
	  let zz = new Person("张三");
	  console.log(zz.name);
	
	  //静态属性与静态方法,不需要实例化就可以调用
	  Person.height;
	  Person.getName();
## 静态属性与静态方法,不需要实例化就可以调用