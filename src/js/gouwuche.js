require(["require.config"], function () {
	require(["jquery", "bootstrap", "head"], $ => {
		class cart {
			constructor() {
				this.totalPage;
				this.indexPage = 1;
				this.length = 0;
				this.allMoney = 0;
				this.n = 0;
				this.init();
			}
			init() {
				this.ajax();
				this.bindTapNav();
				this.selectAll();
			}
			// 获取数据并渲染页面
			ajax() {
				var _this = this;
				$.ajax({
					url: "http://rap2api.taobao.org/app/mock/162789/POST/fred",
					type: "post"
				}).then(function (data) {
					console.log(data.data)
					var html = "";
					_this.length = data.data.length;
					_this.totalPage = parseInt(data.data.length / 6) + 1;
					var li = `<li>
						<a class="prev" href="javascript:void(0);" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>`;
					for (var i = 0; i < _this.totalPage; i++) {
						li += `<li><a href="javascript:void(0);">${i + 1}</a></li>`
					}
					li += `<li>
							<a class="next" href="javascript:void(0);" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>`;
					$(".pagination").append(li);
					$($(".pagination").children()[0]).addClass("disabled");
					$($(".pagination").children()[1]).addClass("active");
					localStorage.setItem("gouwuche_data", JSON.stringify(data.data));
					data.data.forEach(function (val, idx) {
						html += `<tr>
						<td><input type="checkbox" name="" class="checkOne"/>选择</td>
						<td><img src="${val.shopimg}" width="100" height="100" ><span>${val.shopname}</span></td>
						<td><span class="jian">-</span> <input type="number" class="nums" value="${val.shopNum}" readonly="readonly" disabled="disabled"/> <span class="jia">+</span></td>
						<td class="price">￥${val.shopPrice}</td>
						<td>
							<button type="button" class="btn btn-warning btn_del">删除</button>
						</td>
					</tr>`
					})
					$(".allMoney").html(_this.allMoney);
					$("tbody").append(html);

					$(".btn_del").on("click", function () {
						$(this).parentsUntil("tbody").remove();
						_this.huafei();
					})

					for (var j = 0; j < data.data.length; j++) {
						if (parseInt(j / 5) + 1 == _this.indexPage) {
							$($("tbody").children()[j]).show();
						} else {
							$($("tbody").children()[j]).hide();
						}
					}
					_this.check();
					_this.huafei();
					_this.add();
					_this.reduce();
				})
			}

			// 分页导航事件委托
			bindTapNav() {
				var self = this
				// 分页
				$("nav").on("click", "ul li", function (e) {
					e = e || window.event;
					if ($(this).children()[0].className == "next") {
						$(".prev").parent().removeClass("disabled")
						if (self.indexPage == 3 || self.indexPage == 4) {
							self.indexPage = 4;
							$(".next").parent().addClass("disabled")
						} else {
							self.indexPage++;
							$(".next").parent().removeClass("disabled")
						}
					} else if ($(this).children()[0].className == "prev") {
						$(".next").parent().removeClass("disabled")
						if (self.indexPage == 2 || self.indexPage == 1) {
							self.indexPage = 1
							$(".prev").parent().addClass("disabled")
						} else {
							self.indexPage--;
							$(".prev").parent().removeClass("disabled")
						}
					} else {
						self.indexPage = $(this).children()[0].innerHTML - 0;
						if (self.indexPage == 1) {
							$(".prev").parent().addClass("disabled")
						} else if (self.indexPage == 4) {
							$(".next").parent().addClass("disabled")
						} else {
							$(".prev").parent().removeClass("disabled")
							$(".next").parent().removeClass("disabled")
						}
					}
					$($(this).parent().children()[self.indexPage]).addClass("active").siblings().removeClass("active");
					for (var j = 0; j < self.length; j++) {
						if (parseInt(j / 5) + 1 == self.indexPage) {
							$($("tbody").children()[j]).show();

						} else {
							$($("tbody").children()[j]).hide();
						}
					}
				})
			}

			// 全选
			selectAll() {
				var self = this;
				$("#checkAll").on("click", function () {
					var tr = $("tbody").children();
					self.n = $("#checkAll")[0].checked ? $(tr).length : 0;
					var _this = this
					$.each(tr, function (i, v) {
						var select = $(v).children()[0];
						var sel_input = $(select).children()[0];
						sel_input.checked = $(_this)[0].checked;
					})
					self.huafei();
				})
			}

			// 单选
			check() {
				var self = this;
				var Check = $(".checkOne");
				$.each($(".checkOne"), function (i, v) {
					v.onclick = function () {
						self.n += v.checked ? 1 : -1;
						self.huafei();
					}
				})
			}

			// 增加商品数量
			add() {
				var _this = this;
				$(".jia").on("click", function () {
					$(this).prev().val($(this).prev().val() - 0 + 1);
					var price = $(this).parent().next().text().slice(1);
					_this.huafei();
				})
			}

			// 减少商品数量
			reduce() {
				var _this = this;
				$(".jian").on("click", function () {
					$(this).next().val($(this).next().val() - 1);
					var price = $(this).parent().next().text().slice(1);
					_this.huafei();
				})
			}

			// 计算总价
			huafei() {
				var _this = this;
				_this.allMoney = 0;
				var Check = $(".checkOne");
				$.each(Check, function (i, v) {
					if ($(v)[0].checked) {
						var nums = $(v).parent().parent().find(".nums").val();
						var price = $(v).parent().parent().find(".price").text().slice(1);
						_this.allMoney += nums * price;
					}
				})
				$(".allMoney").html(_this.allMoney);
			}
		}
		new cart();
	})
})