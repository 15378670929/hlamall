require(["require.config"], function () {
	require(["jquery", "swiper", "head"], $ => {
		window.onload = function () {
			console.log("sad")
		}
		class liebiao {
			constructor() {
				this.init();
			}
			init() {

				this.navToggle();
				this.getData();
				this.bindTap();
			}
			navToggle() {
				$(".jian").on("click", function () {
					$(this).css("background-position") == "-15px 228px" ?
						$(this).css("background-position", "-30px 228px") :
						$(this).css("background-position", "-15px 228px")
				})
				$(".jian1").on("click", function () {
					$(this).css("background-position") == "-15px 228px" ?
						$(".ul22").show() :
						$(".ul22").hide()
				})
				$(".jian2").on("click", function () {
					$(this).css("background-position") == "-15px 228px" ?
						$(".ul3").show() :
						$(".ul3").hide()
				})
				$(".shoplist li .n").on("click", function () {
					window.location.href = "./xiangqing.html"
				})

			}
			getData() {
				$.ajax({
					url: "http://rap2api.taobao.org/app/mock/162789/POST/hlamall",
					type: "post"
				}).then(function (res) {
					localStorage.setItem("res", JSON.stringify(res));
					var swip = "";
					console.log(res);
					var totalPages = parseInt(res.res_body.length / 20) + 1;
					for (var i = 0; i < totalPages; i++) {
						swip += `<div class="swiper-slide num${i} swiper-no-swiping">`
						res.res_body.forEach(function (val, idx) {
							if (i == parseInt(idx / 20)) {
								swip += `<li data-id="${val.res_id}">
						<img class="showimg n" src="${val.data[0].shoplist_img}" width="180" height="180">
						<div class="choose">
						${val.data.map((_val, _idx) =>
									`<img src="${_val.shoplist_img}" width="30" height="30" >`
								).join("")}
						</div>
						<div class="price n">￥${val.data[0].shoplist_price}</div>
						<p class="n">${val.data[0].shoplist_title}</p>
						<div class="xiaoliang n">总销量：<span>0</span></div>
					</li>`
							}

						})
						swip += `</div>`;
					}
					$(".swiper-wrapper").append(swip);
					$.each($(".choose"), function (i, v) {
						$(v.children[0]).addClass("select");
					})
					var mySwiper = new Swiper('.swiper-container', {
						noSwiping: true,
						prevButton: '.swiper-button-prev',
						nextButton: '.swiper-button-next',
						pagination: '.swiper-pagination',
						paginationType: 'fraction',
					})
				})
			}
			bindTap() {
				$(".shoplist").on("click", "li", function (e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					var _this = $(this);
					$.each($(this).find(".choose img"), function (i, v) {
						if (target == v) {
							$(v).addClass("select").siblings().removeClass("select");
							_this.find(".showimg").attr("src", $(target).attr("src"));
						}
					})
					$.each(_this.find(".n"), function (i, v) {
						if (target == v) {
							window.location.href = "/htmls/xiangqing.html?id=" + _this.data("id");
						}
					})
				});
			}
		}
		new liebiao();
	})
})
