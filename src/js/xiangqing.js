require(["require.config"],function(){
	require(["jquery","head"],$=>{
		$(".choose img").on("click",function(){
			$(this).addClass("select").siblings().removeClass("select");
			$(".showimg").attr("src",$(this).attr("src"))
		})
	})
})