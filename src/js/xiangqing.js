require(["./require.config"], function () {
	require(["jquery", "fly", "head"], ($) => {

		class xiangqing {
			constructor() {
				var loaclShops = "";
				this.init();
			}
			init() {
				this.getData();
				this.flying();
				this.gotoCart();
				this.Big();
				this.saveShops();

			}
			leftChangeImg(t) {
				t.on("click", function () {
					$(this).addClass("select").siblings().removeClass("select");
					$(".showimg").attr("src", $(this).attr("src"))
				})
			}
			getData() {
				var arr = window.location.search.substring(1).split("=");
				var n = arr[1] - 0;
				var res = JSON.parse(localStorage.getItem("res"));

				var html = "";
				this.loaclShops = res.res_body[n - 1].data;
				$.each(res.res_body[n - 1].data, function (i, v) {
					html += `<img src="${v.shoplist_img}" width="55" height="55">`
				})
				$(".choose").append(html);
				$($(".choose").children()[0]).addClass("select");
				$(".showimg").attr("src", $($(".choose").children()[0]).attr("src"))
				$(".bigimg").attr("src", $($(".choose").children()[0]).attr("src"))
				$(".choose img").on("click", function () {
					$(this).addClass("select").siblings().removeClass("select");
					$(".showimg").attr("src", $(this).attr("src"))
					$(".bigimg").attr("src", $(this).attr("src"))
				})

			}
			flying() {
				var offset = $(".cart i").offset();
				$(".addcart").on("click", function (event) {
					var imgsrc = "/img/shopping_cart.gif";
					var flyer = $('<img class="flyer-img" src="' + imgsrc + '">');
					const f = flyer.fly({
						start: {
							left: event.pageX,//抛物体起点横坐标
							top: event.pageY //抛物体起点纵坐标
						},
						end: {
							left: offset.left,//抛物体终点横坐标
							top: offset.top	 //抛物体终点纵坐标
						},
						// autoPlay: false, //是否直接运动,默认true
						// speed: 1.1, //越大越快，默认1.2
						onEnd: function () {
							// this.destory();
							setTimeout(function () {
								flyer.remove();
							}, 400)
						}
					})
					// flyer.play(); //autoPlay: false后，手动调用运动
					// flyer.destroy(); //移除dom
				})
			}
			gotoCart() {
				$(".cart").on("click", function () {
					window.location.href = "/htmls/gouwuche.html"
				})
			}
			// 放大效果
			Big() {
				$(".showimg").on("mousemove", function (e) {
					var positionX = e.pageX - $(this).offset().left;
					var positionY = e.pageY - $(this).offset().top;
					$(".bigimg_box").show();
					$(".bigimg").css("left", -positionX * 3 + 200 + "px");
					$(".bigimg").css("top", -positionY * 3 + 200 + "px");
				})
				$(".showimg").on("mouseleave", function () {
					$(".bigimg_box").hide()
				})
			}

			// 存入购物车
			saveShops() {
				var _this = this;
				$(".addcart").on("click", function () {
					var shops = JSON.parse(localStorage.getItem("shops"));
					shops.push(_this.loaclShops);
					localStorage.setItem("shops", JSON.stringify(shops));
				})
			}
		}
		new xiangqing()
	})
})