
					window.onload = function() {


						var container = document.getElementById('container'); //获取容器id
						var list = document.getElementById('list'); //获取img容器
						var buttons = document.getElementById('buttons').getElementsByTagName('span'); //获取点
						var prev = document.getElementById('prev'); //左按钮
						var next = document.getElementById('next'); //右按钮
						var animated = false;
						var index = 1; //小圆点
						var timer; //定时器


						//小圆点
						function showButton() {
							//对点点循环，去除已经有的on
							for (var i = 0; i < buttons.length; i++) {
								if (buttons[i].className == 'on') {
									buttons[i].className = ''
									break //退出循环
								}
							}
							buttons[index - 1].className = 'on'
						}

						function animate(offset) {
							//            快速点击时，会出现小圆点和图片不对应的情况，解决方案是当图片处于动画状态时，直接屏蔽掉点击事件
							animated = true // 快速点击时，会出现小圆点和图片不对应的情况，解决方案是当图片处于动画状态时，直接屏蔽掉点击事件
							var newLeft = parseInt(list.style.left) + offset

							//焦点图轮播
							var time = 200; //位移总时间
							var interval = 8; //位移间隔时间
							var speed = offset / (time / interval) //每次位移量
							function go() {
								if (speed < 0 && parseInt(list.style.left) > newLeft || (speed > 0 && parseInt(list.style.left) < newLeft)) {
									list.style.left = parseInt(list.style.left) + speed + 'px'
									setTimeout(go, interval)
								} else {
									animated = false; // 快速点击时，会出现小圆点和图片不对应的情况，解决方案是当图片处于动画状态时，直接屏蔽掉点击事件
									list.style.left = newLeft + 'px' //转成数字1000
									//判断是否l滚动到辅助图,图片滚动在-960和-3840之间,解决空白问题
									if (newLeft > 0) {
										list.style.left =-3840 + 'px'
									}
									if (newLeft <-3840) {
										list.style.left = 0 + 'px'
									}
								}
							}
							go()

						}
						//自动切换
						function play() {
							timer = setInterval(function() {
								next.onclick()
							}, 3840);
						}
						//停止切换
						function stop() {
							clearInterval(timer)
						}
						//右箭头
						next.onclick = function() {

							index += 1;
							index = index > 6 ? 1 : index;
							showButton()

							if (!animated) {
								animate(-960)
							}
						}
						//左箭头
						prev.onclick = function() {

							index -= 1;
							index = index < 1 ? 6 : index;
							showButton()

							if (!animated) {
								animate(960)
							}
						}
						//小圆点加事件
						for (var i = 0; i < buttons.length; i++) {
							buttons[i].onclick = function() {

								var myIndex = parseInt(this.getAttribute('index')) //获取当前点点的index

								var offset = -960 * (myIndex - index) //移动的距离：当前的index-之前的index

								//恢复小圆点位置
								index = myIndex
								showButton()
								if (!animated) {

									animate(offset)
								}
							}
						}
						//鼠标移上去，触发自动切换事件
						container.onmouseover = stop; //不要加括号，
						container.onmouseout = play
						//自动切换
						play()
					}
