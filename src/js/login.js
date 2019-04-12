require(["require.config"], function () {
	require(["jquery", "head"], function ($, head) {
		$(".submits").on("click", function () {
			$.ajax({
				url: "http://localhost/api/v1/login.php",
				method: "post",
				data: {
					username: $('#username').val(),
					pwd: $('#password').val()
				},
				success: function (res) {
					console.log(res);
					if (res != "1") {
						alert("登录失败");
						localStorage.removeItem("username")
					} else if (res == "1") {
						window.location.href = "/index.html"
						localStorage.setItem("username", $("#username").val())
					}
				}
			})

			return false;
		})
	})
})