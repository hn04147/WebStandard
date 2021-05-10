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

//갤러리
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    speed:500,
    autoplaySpeed: 1000,
    autoplay: true
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay")
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause")
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev")
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext")
});

//레이어 팝업
$("#layer .close").click(function(e){
    e.preventDefault();
    //$("#layer").hide();
    //$("#layer").css("display","none");
    //$("#layer").slideUp();
    $("#layer").fadeOut();
});
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").show();
    //$("#layer").css("display","block");
    //$("#layer").slideDown();
    $("#layer").fadeIn();
})

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션: left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen;
    window.open("popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, menubar=0, toolbar=0");
});

//라이트 박스
$(".lightgallery").lightGallery({
    speed: 500,
    thumbnnail: true,
    autoplay: true,
    pause: 2000
});
