define(["jquery"],$=>{
	$(".head-container").load("./htmls/head.html",function(){
		var html = `<div class="head_show">
				<div class="left">
					<ul>
						<li><a href="javascript:void(0);">短袖T恤</a></li>
						<li><a href="javascript:void(0);">短袖POLO</a></li>
						<li><a href="javascript:void(0);">短袖衬衫</a></li>
						<li><a href="javascript:void(0);">休闲上衣</a></li>
						<li><a href="javascript:void(0);">皮肤衣夹克</a></li>
						<li><a href="javascript:void(0);">牛仔九分裤</a></li>
						<li><a href="javascript:void(0);">休闲九分裤</a></li>
						<li><a href="javascript:void(0);">牛仔中裤</a></li>
						<li><a href="javascript:void(0);">休闲中裤</a></li>
					</ul>
				</div>
				<div class="right">
					<img src="./img/head_hover1.jpg" >
				</div>
			</div>`;
		
			$("header .head_bottom ul li").append(html);
	});
	
})