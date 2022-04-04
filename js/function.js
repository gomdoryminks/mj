/**
 * @author minks
 */

var lastScrollTop = 0, delta = 5;

$(function() {
    headerScroll();
	
	//리사이즈시
	$(window).resize(function() {
		//headerScroll();
		
		if ($(".sat_pro_area").length > 0) {
			$(".sat_pro_area .sat_pro_step li .sat_pro_step_con .sat_pro_step_txt").each(function() {
				$(this).height($(this).width());
			});
		}
	});
	
	//상위 메뉴 밑의 하위 메뉴 보이기&숨기기
	$('nav').on("mouseover", function(evt) {
		evt.preventDefault();
		$('nav').addClass("top_sub_menu_area");
		$('nav .top_menu>li .top_sub_menu').css("display","block");
		$('nav .top_menu_logo').css("display","block");
		$('nav .top_menu_etc').css("display","block");
	});
	
	$('nav').on("mouseleave", function(evt) {
		evt.preventDefault();
		$('nav').removeClass("top_sub_menu_area");
		$('nav .top_menu>li .top_sub_menu').css("display","none");
		$('nav .top_menu_logo').css("display","none");
		$('nav .top_menu_etc').css("display","none");
	});
	
	$('.mb_area .top_menu>li .top_menu_tit').click(function() {
		if ($(this).next('ul').css("display") == "block") {
			$(this).parent().children('.top_sub_menu').slideUp();
			$(this).css({"background-image":"url('img/select_arrow.png')"});
			return false;
		} else {
			$('.top_sub_menu').slideUp();
            $('.mb_area .top_menu>li .top_menu_tit').css({"background-image":"url('img/select_arrow.png')"});
			$(this).parent().children('.top_sub_menu').slideDown();		
			$(this).css({"background-image":"url('img/select_arrow2.png')"});	
			return false;
		}
	});
	
	//모바일 슬라이드 메뉴 보이기&숨기기
	$('.mb_btn').click(function() {
		if ($('.mb_menu').css("display") == "none") {
			$('.mb_menu').css('display','block');
			$('.mb_menu').css('z-index','999');
			$('.mb_box').css('left','0px');
			$('.mb_box h2').css('left','0px');
			$('.line1').addClass('line11');
			$('.line2').addClass('line22');
			$('.line3').addClass('line33');
			$('body').css('overflow','hidden');
		} else {
			$('.mb_menu').css('display','none');
			$('.mb_menu').css('z-index','-1');
			$('.mb_box').css('left','-100%');
			$('.mb_box h2').css('left','-100%');
			$('.line1').removeClass('line11');
			$('.line2').removeClass('line22');
			$('.line3').removeClass('line33');
			$('body').css('overflow','scroll');
		}
	});
	
	//swiper 이미지 슬라이드
	$(".swiper-container").each(function(index, element) {
		var $this = $(this);
		$this.addClass('instance-' + index);
		
		var swiper = new Swiper('.instance-' + index, {
			observer: true,
			observeParents: true,
			slidesPerView : 1,
			navigation: {
				prevEl: $('.instance-' + index).siblings('.slide_prev'),
				nextEl: $('.instance-' + index).siblings('.slide_next'),
			},
			watchOverflow: true
		});
	});
	
	//SAT 원형 높이 설정
	if ($(".sat_pro_area").length > 0) {
		$(".sat_pro_area .sat_pro_step li .sat_pro_step_con .sat_pro_step_txt").each(function() {
			$(this).height($(this).width());
		});
	}
});

//스크롤시 헤더 보이기&숨기기
function headerScroll() {
    $(window).scroll(function() {
        var win_width = $(window).width();
        var hd_height = $("header").outerHeight();
        var mb_height = $(".mb_area").outerHeight();
		var st = $(this).scrollTop();
		
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}
		
		if ((st > lastScrollTop) && (lastScrollTop > 0)) {
			//스크롤 내릴때
			if (win_width > 900) {
				if (hd_height < 100) $(".pc_area").css({"top":"-" + hd_height + "px"});
				else $(".pc_area").css({"top":"-100px"});
			} else {
				$(".mb_area").css({"top":"-" + mb_height + "px"});
			}
		} else {
			//스크롤 올릴때
			if (win_width > 900) {
				$(".pc_area").css({"top":"0px"});
			} else {
				$(".mb_area").css({"top":"0px"});
			}
		}
        
        lastScrollTop = st;
	});
}

