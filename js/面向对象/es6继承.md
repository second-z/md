# es6继承---不涉及传址问题
	
      class Person {
        //静态属性
        static height = "178px";
        constructor(name) {
          this.name = name;
        }
        hobby() {
          console.log("篮球");
        }
        // 静态方法
        static getName() {
          console.log(this.height);
        }
      }

      //继承 : extends
      class Worker extends Person {
        constructor(name) {
          //继承必须调用super,父类的构造函数,constructor
          super(name);
        }
        hobby() {
          console.log("是否变化");
        }
      }

      let zz = new Person("张三");

      let bb = new Worker("李四");
      bb.hobby();
      zz.hobby();