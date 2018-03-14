$(function(){
	var t,tr,ot;
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
	$('#dowebok').fullpage({
		sectionsColor: ['#fff', '#fff', '#5694fb', '#fff', '#fff', '#fff'],
		anchors: ['home', 'OneOs', 'appMarket', 'open','hardware','aboutMe'],
//		离开页面加载函数
		onLeave:function(index,nextIndex,direction){ 
			page(index,direction);
			nextPage(nextIndex,direction);
		},
		menu: '#menu'
	});
	//离开的页面
	function page(index,direction){
		if(index == 1){
			$('.hearder').addClass('hidden');
		}else if(index == 2){
			outOneOs();
		}else if(index == 3){
			//应用市场
			//上划
			if(direction=='up'){
				$('.marketCon').animate({
					top:'-20%',
					opacity: 0
				},200);
				//下划
			}else{
				$('.marketCon').animate({
					top:'100%',
					opacity: 0
				},200);
			}
		}else if(index == 4){
			//开放平台
			outOpen(direction);
		}else if(index == 5){
			outHard();
		}else if(index == 6){
			outMe();
		}
	}
	//滚动到页面
   function nextPage(nextIndex,direction){
   	
   		if(nextIndex == 1){
				$('.hearder').removeClass('hidden');
		}else if(nextIndex == 2){
			oneOs();
		}else if(nextIndex == 3){
			//应用市场
			$('.marketCon').animate({
				top:'15%',
				opacity: 1
			},700);
		}else if(nextIndex == 4){
			//开放平台
			openAm();
		}else if(nextIndex == 5){
			hardware();
		}
		else if(nextIndex == 6){
			aboutMe();
		}
   }
   //oneOS
   function oneOs(){
	   	ot = setTimeout(function(){
	   		inOneOs('.phonea img','100%');
		},400);
		ot = setTimeout(function(){
	   		inOneOs('.phoneb img','100%');
		},800);
		ot = setTimeout(function(){
	   		inOneOs('.phonec img','100%');
		},1400);
		ot = setTimeout(function(){
	   		inOneOs('.phoned img','100%');
		},1800);
   }
    function inOneOs(obj,wid){
    	$(obj).animate({
			'width':wid
		},800);
   		
   }
   function outOneOs(){
   	clearTimeout(ot);
   	ot = setTimeout(function(){
   		$('.phoneImg a img').animate({
			'width':0
		},200);
   	},200)
   		
   }
   //开放平台
   function openAm(){
   		//图1
// 		 	clearTimeout(tr);
		tr = setTimeout(function(){
			$('.opimga').animate({
				bottom:'0'
			},800);
			$('.grapd .redImg').animate({
				bottom:'55%'
			},750);
			$('.grapd .radi').animate({
				bottom:'70%'
			},750);
		},500);
		//图2
		tr = setTimeout(function(){
			$('.opimgc').animate({
				bottom:'0'
			},800);
			$('.grapc .redImg').animate({
				bottom:'62%'
			},700);
			$('.grapc .radi').animate({
				bottom:'75%'
			},700);
		},1100);
		tr = setTimeout(function(){
			$('.opimgb').animate({
				bottom:'0'
			},800);
			$('.grapb .redImg').animate({
				bottom:'57%'
			},700);
			$('.grapb .radi').animate({
				bottom:'75%'
			},700);
		},1700);
		tr = setTimeout(function(){
			$('.opimgd').animate({
				bottom:'0'
			},600);
			$('.hs').animate({
				bottom:'50%'
			},500);
			$('.game').animate({
				bottom:'65%'
			},500);
		},2200);
		tr = setTimeout(function(){
			$('.openCon').animate({
				top:'17%',
				opacity: 1
			},600);
		},2500);
   }
   function outOpen(direction){
   	clearTimeout(tr);
	tr = setTimeout(function(){
		$('.opimga,.opimgc,.opimgb,.opimgd').animate({
		bottom:'-80%'
		},200);
		$('.redImg,.radi,.hs,.game').animate({
			bottom:'-35%'
		},200);
		if(direction=='up'){
				$('.openCon').animate({
					top:'-23%',
					opacity: 0
				},200);
			
			//下划
		}else{
			$('.openCon').animate({
				top:'100%',
				opacity: 0
			},300);
		}
	},200);
			
   }
   //智能硬件动画
   function hardware(){
// 	clearTimeout(t);
	   	t = setTimeout(function(){
	   		inHard('.imgA .minImg,.ImgActive');
		},400);
		t = setTimeout(function(){
	   		inHard('.imgB .minImg');
		},800);
		t = setTimeout(function(){
	   		inHard('.imgC .minImg');
		},1400);
		t = setTimeout(function(){
	   		inHard('.imgD .minImg');
		},1800);
   }
   function inHard(obj){
   		$(obj).animate({
			'height':'150px',
			'width':'240px',
			'opacity': 1,
			'line-height':'150px'
		},800,function(){
			$(obj).next('span').removeClass('hidden');
		});
   }
   function outHard(){
   	clearTimeout(t);
   		t = setTimeout(function(){
   			$('.minImg,.ImgActive').animate({
				'height':'0',
				'width':'0',
				'opacity': 0,
				'line-height':'0'
			},200,function(){
				$('.minImg').next('span').addClass('hidden');
			});
		},200);
   }
   //联系我们
   function aboutMe(){
   		
	}
   function outMe(){
   		
   }
});