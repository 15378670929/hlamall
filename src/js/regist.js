require(["require.config"], function () {
	require(["jquery", "head"], function ($, head) {
		console.log($("#regi"))
		$("#regi").on("click", function () {
			$.ajax({
				url: "http://localhost/api/v1/regist.php",
				method: "post",
				data: {
					username: $("#username").val(),
					password: $("#password").val()
				},
				success: function (res) {
					console.log(res)
					if (confirm("是否现在登录？")) {
						window.location.href = "/htmls/login.html"
					}
				}
			})
			return false;
		})


	})
})