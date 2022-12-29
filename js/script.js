$(".nav-btn").click(function(){
    $(".mb-nav").fadeToggle().show();
});

$(window).resize(function(){ 
    if (window.innerWidth > 769) {
    
        const tabItem = document.querySelectorAll('.tab-item')
        const tabInner = document.querySelectorAll('.tab-inner')

        tabItem.forEach((tab, idx)=> {
            tab.addEventListener('click', function(){
                tabInner.forEach((inner)=> {
                    inner.classList.remove('active')
                });

                tabItem.forEach((item)=> {
                    item.classList.remove('active')
                });

                tabItem[idx].classList.add('active')
                tabInner[idx].classList.add('active')
            });
        });
    
    } else {
    
        $(".tab-contents").not(':first').hide();

        $("select#tabmenu").on("change",function(){
            var select_link = $("select#tabmenu").val();
            var select_num = $(this).prop('selectedIndex');
            $(".tab-contents").hide();
            $(select_link).show();
        });
    
    }
    
    }).resize(); 

// 컨텐츠 로드
$(function(){
    $(".lists__item").slice(0, 6).show(); // 초기갯수
    $(".load").click(function(e){ // 클릭시 more
        e.preventDefault();
        $(".lists__item:hidden").slice(0, 6).show(); // 클릭시 more 갯수 지저정
        if($(".lists__item:hidden").length === 0){ // 컨텐츠 남아있는지 확인
            $(".load").hide() // 컨텐츠 없을시 버튼 없앰
        }
    });
});

// 산학연계 교육콘텐츠 메인탭 엑티브
$(".cont-btn .cont-btn-wrap:first-child").addClass("active-color");

$(".cont-btn .cont-btn-wrap").click(function(){
    $(".cont-btn .cont-btn-wrap").removeClass("active-color");
    $(this).addClass("active-color");
});

// 산학연계 교육콘텐츠 메인탭
$(function(){
    let btn1 = $(".cont-btn .cont-btn-wrap:first-child");
    let btn2 = $(".cont-btn .cont-btn-wrap:last-child");

    btn1.click(function(){
        $(".select .select-tab option:nth-of-type(-n + 2)").show();
        $(".select .select-tab option:nth-of-type(n + 3)").hide();
        $(".manu.cont-menu > .tab > .tab-item:nth-of-type(-n + 2)").show()
        $(".manu.cont-menu > .tab > .tab-item:nth-of-type(n + 3)").hide();
    });

    btn2.click(function(){
        $(".select .select-tab option:nth-of-type(n + 3)").show();
        $(".select .select-tab option:nth-of-type(-n + 2)").hide();
        $(".manu.cont-menu > .tab > .tab-item:nth-of-type(n + 3)").show();
        $(".manu.cont-menu > .tab > .tab-item:nth-of-type(-n + 2)").hide();
    });
});

// 스와이퍼
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
// 팝업
function openModal(modalname) {
    document.get
    $("." + modalname).css("display", "block");
}
$('.close-btn').click(function() {
    $(".modal").css("display", "none");
});

$(document).mouseup(function (e){
    var LayerPopup = $(".modal");
    if(LayerPopup.has(e.target).length === 0){
      LayerPopup.css("display", "none");
    }
  });

