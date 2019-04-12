require(["require.config"], function () {
	require(["jquery", "head", "foot"], function ($, head) {
		var shops = [];
		if (JSON.parse(localStorage.getItem("shops")) == null) {
			localStorage.setItem("shops", JSON.stringify(shops));
		}
	})
})