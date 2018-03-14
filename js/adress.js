$(function(){
	$(".nav ul li a").click(function(){
		$(this).addClass("hovBor").parent("li").siblings().children("a").removeClass("hovBor");
	})
	//地图
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);
	// 创建地址解析器实例
	var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上,并调整地图视野
	myGeo.getPoint("杭州市西湖区莫干山路593号", function(point){
		if (point) {
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point));
		}else{
			alert("您选择地址没有解析到结果!");
		}
	}, "杭州市");
	
	//获取屏幕高度
//	var conHight = $(window).height();
//	conHight = conHight-75;
//	$(".banner .carousel-inner .item img").css('height',conHight);
//	$(".banner").css('height',conHight);
})
