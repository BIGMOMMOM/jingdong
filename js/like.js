/* function show1(name) {
   	var box = document.getElementsByClassName(name);
   	if (name == "jingxuan") {
   		var perMenu = document.getElementById("jingxuan1"); //获取当前显示的列表
   		perMenu.removeAttribute("hidden");
   		var perMenu1 = document.getElementById("xianfeng1");
   		perMenu1.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu2 = document.getElementById("jujia 1");
   		perMenu2.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu3 = document.getElementById("baihuo1");
   		perMenu3.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu4 = document.getElementById("shishang1");
   		perMenu4.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   	} else if (name == "xianfeng") {
   		var perMenu2 = document.getElementById("xianfeng1"); //获取智能列表
   		perMenu2.removeAttribute("hidden");
   		var perMenu = document.getElementById("jingxuan1"); //获取当前显示的列表
   		perMenu.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu5 = document.getElementById("jujia1");
   		perMenu5.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu3 = document.getElementById("baihuo1");
   		perMenu3.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu4 = document.getElementById("shishang1");
   		perMenu4.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   	} else if (name == "jujia") {
   		var perMenu = document.getElementById("jujia1"); //获取居家列表
   		perMenu.removeAttribute("hidden");
   		var perMenu1 = document.getElementById("xianfeng1");
   		perMenu1.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu2 = document.getElementById("jingxuan1"); //获取当前显示的列表
   		perMenu2.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu3 = document.getElementById("baihuo1");
   		perMenu3.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu4 = document.getElementById("shishang1");
   		perMenu4.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   	} else if (name == "baihuo") {
   		var perMenu = document.getElementById("baihuo1"); //获取百货列表
   		perMenu.removeAttribute("hidden");
   		var perMenu3 = document.getElementById("jujia1"); //获取居家列表
   		perMenu3.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu1 = document.getElementById("xianfeng1");
   		perMenu1.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu2 = document.getElementById("jingxuan1"); //获取当前显示的列表
   		perMenu2.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu4 = document.getElementById("shishang1");
   		perMenu4.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   	} else if (name == "shishang") {
   		var perMenu = document.getElementById("shishang1"); //获取时尚列表
   		perMenu.removeAttribute("hidden");
   		var perMenu4 = document.getElementById("baihuo1"); //获取百货列表
   		perMenu4.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu3 = document.getElementById("jujia1"); //获取居家列表
   		perMenu3.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu1 = document.getElementById("xianfeng1");
   		perMenu1.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   		var perMenu2 = document.getElementById("jingxuan1"); //获取当前显示的列表
   		perMenu2.setAttribute("hidden", "hidden"); //当前旧的列表隐藏
   	}
   } */
   
   function show2(number,name){
	   // console.log(name)
	   var list=document.getElementsByClassName(name);
	   // console.log(list)
	   for(var i in list){
		   if(i==number){
			   list[i].removeAttribute("hidden");
		   }
		   else{
			   console.log(list[i])
			   list[i].setAttribute("hidden", "hidden");
		   }
	   }
   }

