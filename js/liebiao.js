require(["require.config"],function(){
	require(["jquery","head"],$=>{
		$(".jian").on("click",function(){
			$(this).css("background-position") == "-15px 228px"? 
			$(this).css("background-position","-30px 228px") : 
			$(this).css("background-position","-15px 228px")
		})
		$(".jian1").on("click",function(){
			$(this).css("background-position") == "-15px 228px"? 
			$(".ul22").show() : 
			$(".ul22").hide()
		})
		$(".jian2").on("click",function(){
			$(this).css("background-position") == "-15px 228px"? 
			$(".ul3").show() : 
			$(".ul3").hide()
		})
		
		$(".choose img").on("click",function(){
			$(this).addClass("select").siblings().removeClass("select");
			$(".showimg").attr("src",$(this).attr("src"))
		})
		$(".shoplist li .n").on("click",function(){
			window.location.href = "./xiangqing.html"
		})
	})
})