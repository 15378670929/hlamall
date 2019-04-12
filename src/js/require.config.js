require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-3.2.1",
		"head": "js/head",
		"foot": "js/foot",
		"fly": "libs/jquery.fly.min",
		"swiper": "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper",
		"bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min"
	},
	shim: {
		"fly": {
			deps: ["jquery"]
		},
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})