$(function(){
	
	//备案时间
	var myDate = new Date();
	$('.time').text(myDate.getFullYear());
	//页面屏幕高度和宽度
	var conHight = $(window).height();
	var conWidth = $(window).width();
	//首页
	$(".imgText").css('height',conHight);
	//智能硬件
	$('.minImg').click(function(){
		$(this).addClass('ImgActive').parent('.leftImg').siblings().children('.minImg').removeClass('ImgActive');
		var imgSrc = $(this).children('img').attr('data-src');
		var dataNum = $(this).attr('data');
		changeImg(imgSrc,dataNum);
	})
	$('.leftImg span').click(function(){
		var _this = $(this).prev('.minImg');
		_this.addClass('ImgActive').parent('.leftImg').siblings().children('.minImg').removeClass('ImgActive');
		var imgSrc = _this.children('img').attr('data-src');
		var dataNum = _this.attr('data');
		changeImg(imgSrc,dataNum);
	})

	function changeImg(imgSrc,num){
		var conWidth = $(window).width();
		if(imgSrc == 'img/b.png'){
			$('.maxImg').css('padding-top','9%');
			dataNum(num);
		}else if(conWidth > 1600 || conWidth == 1600){
			$('.maxImg').css('padding-top','3.2%');
			dataNum(num);
		}else if(conWidth < 1600){
			$('.maxImg').css('padding-top','0');
			$('.maxImg').css('margin-top','-10px');
			dataNum(num);
		}
	}
	function dataNum(num){
		num = num - 1;
		$('.maxImg img').eq(num).removeClass('hidden').siblings().addClass('hidden');
	}
		//满屏插件调用
		$('#dowebok').fullpage({
			//5694fb
			sectionsColor: ['#fff', '#fff', '#5694fb', '#fff', '#fff', '#fff'],
			anchors: ['home', 'OneOs', 'appMarket', 'open','hardware','aboutMe'],
	//		离开页面加载函数
			onLeave:function(anchorLink, index){ 
				if(index == 1){
					pageA();
				}else if(index == 2){
					pageB();
				}else if(index == 3){
					pageC();
				}else if(index == 4){
					pageD();
				}else if(index == 5){
					pageE();
				}else if(index == 6){
					pageF();
				}
			},
			menu: '#menu'
		});
		//联系我们
		$('.aboutImg,.teamImg').hover(function(){
			$(this).addClass('tada').removeClass('fadeInRightTop').removeClass('fadeInLeftBom');
		},function(){
			$(this).removeClass('tada');
		})
		$('.abCon img').hover(function(){
			$(this).addClass('tada').removeClass('fadeBig');
		},function(){
			$(this).removeClass('tada');
		})
		
	//页面跳动样式
		function pageA(){
			$('.hearder').removeClass('hidden');
			conB();
			conC();
			conD();
			conE();
			conF();
		}
		function pageB(){
			$('.phoneImg a').addClass('phoneAnimat');
			$('.OneOS').addClass('titeAmo');
			$('.one').addClass('oneAmo');
			$('.conWord').addClass('conAmo');
			conA();
			conC();
			conD();
			conE();
			conF();
		}
		function pageC(){
			$('.markwor').addClass('titeAmo');
			$('.markWord').addClass('wordAmo');
			conA();
			conB();
			conD();
			conE();
			conF();
		}
		function pageD(){
			$('.openwor').addClass('titeAmo');
			$('.openWord').addClass('wordAmo');
			$('.imgGrap img').addClass('bottomIn');
			conA();
			conB();
			conC();
			conE();
			conF();
		}
		function pageE(){
			$('.leftImg,.maxImg img').addClass('phoneAnimat');
			$('.widImg').addClass('titeAmo');
			$('.wareWord').addClass('wordAmo');
			conA();
			conB();
			conC();
			conD();
			conF();
		}
		function pageF(){
			conA();
			conB();
			conC();
			conD();
			conE();
			$('.abCon').addClass('fadeBig');
			$('.abouL').addClass('fadeInLeftTop');
			$('.aboutImg').addClass('fadeInLeftBom');
			$('.teamImg').addClass('fadeInRightTop');
			$('.abouR').addClass('fadeInRightBom');
		}
		function conA(){
			$('.hearder').addClass('hidden');
		}
		function conB(){
			$('.one').removeClass('oneAmo');
			$('.conWord').removeClass('conAmo');
			$('.OneOS').removeClass('titeAmo');
			$('.phoneImg a').removeClass('phoneAnimat');
		}
		function conC(){
			$('.markwor').removeClass('titeAmo');
			$('.markWord').removeClass('wordAmo');
		}
		function conD(){
			$('.openwor').removeClass('titeAmo');
			$('.openWord').removeClass('wordAmo');
			$('.imgGrap img').removeClass('bottomIn');
		}
		function conE(){
			$('.widImg').removeClass('titeAmo');
			$('.wareWord').removeClass('wordAmo');
			$('.leftImg,.maxImg img').removeClass('phoneAnimat');
		}
		function conF(){
			$('.abCon').removeClass('fadeBig');
			$('.abouL').removeClass('fadeInLeftTop');
			$('.aboutImg').removeClass('fadeInLeftBom');
			$('.teamImg').removeClass('fadeInRightTop');
			$('.abouR').removeClass('fadeInRightBom');
		}
		
	
});