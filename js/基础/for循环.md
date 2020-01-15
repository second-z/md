# for in-------一般用在循环对象Object
	 let obj = {
	    x: 30,
	    y: 20,
	    z: 2
	  };
	  
	  for (let i in obj) {
	    console.log(i); // x y z
	  }
-------------------------------------------------------
      let arr = [1, 3, 5, 22];
      for (let i of arr) {
        console.log(i); // 1, 3, 5, 22
      }
      for (let i in arr) {
        console.log(i); // 0 1 2 3
      }