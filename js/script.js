jQuery(document).ready(function() {
    /*top slider*/
    $('.owl-carousel').owlCarousel({
                // items: 3,
                loop: true,
                autoplay: true,
                nav:false,
                dots:false,
                autoplayTimeout: 2000,
                responsive: {
                    0:{
                    items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            });
    /*my checkbox style*/
        $(".checkboxStyle i").click(function() {
            $(this).toggleClass("active");
        });

    // PopUp show
    function PopUpShow(e){
        e.preventDefault();
        $("#bigCertificatePopup").show();
    }
    //PopUp hide
    function PopUpHide(){
        $("#bigCertificatePopup").hide();
    }
    //PopUp show mobile
    function PopUpShowM(e){
        e.preventDefault();
        $("#bigCertificatePopupM").show();
    }
    //PopUp show mobile
    function PopUpHideM(){
        $("#bigCertificatePopupM").hide();
    }


    $('.popup-container').on('click', PopUpShow);
    $('.closePopup').on('click', PopUpHide);
    $('.popup-containerM').on('click', PopUpShowM);
    $('.closePopupM').on('click', PopUpHideM);

/*my slider*/
function changeImg() {
    var $slides = $('.item', '#Slider');
    if ($(this).is('.next')) {
        for (var i = 0; i < $slides.length; i++) {
            if ($($slides[i]).hasClass('active')) {
                $($slides[i]).removeClass('active');
                if ((i + 1) === $slides.length) {
                    $($slides[0]).addClass('active');
                    break;
                } else {
                    $($slides[i + 1]).addClass('active');
                    break;
                }
            }
        }
    } else {
        for (var i = 0; i < $slides.length; i++) {
            if ($($slides[i]).hasClass('active')) {
                $($slides[i]).removeClass('active');
                if (i === 0) {
                    $($slides[$slides.length - 1]).addClass('active');
                    break;
                } else {
                    $($slides[i - 1]).addClass('active');
                    break;
                }
            }
        }
    }
}
/*second slider*/
function changeImgM() {
    var $slides = $('.item', '#SliderM');
    if ($(this).is('.next')) {
        for (var i = 0; i < $slides.length; i++) {
            if ($($slides[i]).hasClass('active')) {
                $($slides[i]).removeClass('active');
                if ((i + 1) === $slides.length) {
                    $($slides[0]).addClass('active');
                    break;
                } else {
                    $($slides[i + 1]).addClass('active');
                    break;
                }
            }
        }
    } else {
        for (var i = 0; i < $slides.length; i++) {
            if ($($slides[i]).hasClass('active')) {
                $($slides[i]).removeClass('active');
                if (i === 0) {
                    $($slides[$slides.length - 1]).addClass('active');
                    break;
                } else {
                    $($slides[i - 1]).addClass('active');
                    break;
                }
            }
        }
    }
}
$('.next', '#Slider').on('click', changeImg);
$('.prev', '#Slider').on('click', changeImg);
$('.next', '#SliderM').on('click', changeImgM);
$('.prev', '#SliderM').on('click', changeImgM);

/*my customer tabs*/

    $(".customerTabs ul li.customerTab").click(function() {
    	var id = $(this).find("a").attr("href");
    	$("li.customerTab, .customerLogoTab").removeClass("active");
    	$(this).addClass("active");
        $(id).addClass("active");
    });

/*accordeon*/
    $(".mobileCustomerTab").click(function() {
    	$(".mobileButtonTab, .mobileCustomerLogoTab").removeClass("active");
        $(".openAccordeon").removeClass("fa-chevron-up");
        $(".openAccordeon").addClass("fa-chevron-down");
        $(".openAccordeon", $(this)).removeClass("fa-chevron-down");
        $(".openAccordeon", $(this)).addClass("fa-chevron-up");
        $(this).find(".mobileButtonTab").toggleClass("active");
        $(this).find(".mobileCustomerLogoTab").toggleClass("active");
    });
});