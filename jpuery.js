// JavaScript Document
$(function(){
	$('.drops0').animate({top:'2.96vw',
						left:'6.34vw',
						width:'9.14vw'},
						400,'easeOutBack',
						function(){
		$('.drops7').animate({top:'22.52vw',
							left:'74.86vw',
							width:'9.14vw'},
						400,'easeOutBack',
						function(){
		$('.drops8').animate({top:'42.98vw',
							left:'4.82vw',
							width:'9.14vw'},
						350,'easeOutBack',
						function(){
		$('.drops2').animate({top:'-1.59vw',
							left:'39.66vw',
							width:'9.14vw'},
							400,'easeOutBack')
		$('.drops11').animate({top:'40.28vw',
							left:'82.76vw',
							width:'9.14vw'},
							300,'easeOutBack',
							function(){
		$('.drops6').animate({top:'30vw',
							left:'16.21vw',
							width:'9.14vw'},
							350,'easeOutBack')
		$('.drops10').animate({top:'39.09vw',
							left:'56.61vw',
							width:'9.14vw'},
						440,'easeOutBack',
							function(){
		$('.drops5').animate({top:'20.12vw',
							left:'1.93vw',
							width:'9.14vw'},
							400,'easeOutBack')
		$('.drops9').animate({top:'42.45vw',
							left:'29.56vw',
							width:'9.14vw'},
							350,'easeOutBack')
		$('.drops3').animate({top:'9.38vw',
							left:'59.39vw',
							width:'9.14vw'},
							300,'easeOutBack',
							function(){
		$('.drops1').animate({top:'8.46vw',
							left:'23.9vw',
							width:'9.14vw'},
							300,'easeOutBack')
		$('.drops4').animate({top:'3.79vw',
							left:'84.14vw',
							width:'9.14vw'},
							300,'easeOutBack',
							function(){
		$('.drops0,.drops1,.drops2,.drops3,.drops4,.drops5,.drops6,.drops7,.drops8,.drops9,.drops10,.drops11,.drops12')
					.animate({top:'50%',
							left:'50%',
							width:0},
							600,
							function(){
		$('.drops12').animate({width:'13.79vw',
							top:'30%',
							left:'42%'},
							1000,'easeOutBounce',
							function(){
				setTimeout(function(){
		$('header,.topfix').animate({opacity:1},
							1000);
							},500);
		
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});


$(function(){
$('a[href^="#"]').click(function(){
	var speed = 1000;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top-120;
	$("html, body").animate({scrollTop:position}, speed, "swing");
  });
});

$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});
