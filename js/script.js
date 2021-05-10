//배너
//html 마크업 세팅 -> css 연동 -> jQuery 연동 -> jQuery 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
});

//버튼을 클릭하면 전체 메뉴 보이게 하기.
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display", "block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $("this").toggleClass("on");
});

//탭메뉴
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();
function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    /*
    $this.parent("li").addClass("active");
    $this.parent().siblings("li").removeClass("active");
    $this.next("ul").show();
    $this.parent().siblings("li").find(">ul").hide();
    */
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
