function add() {

	var second = document.getElementById("second");
	second.value = Number(second.value) - 1;

	if(second.value == 0) {
		var minute = document.getElementById("minute") //获取分钟的数值
		minute.value = Number(minute.value) - 1; //分钟在秒数为0 的时候在原来的基础上减一
		second.value = 59; //秒变59
		if(minute.value == 0) {
			var hour = document.getElementById("hour"); //获取小时的数值
			hour.value = Number(hour.value) - 1; //小时在分数为0 的时候在原来的基础上减一
			minute.value = 59; //分变59
			if(hour.value < 0) {
				//								var hour = document.getElementById("hour"); //获取小时的数值
				hour.value = 24;
			}
		}
	}
}

var time = setInterval("add()", 1000);