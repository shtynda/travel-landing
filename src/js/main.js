$(document).ready(function () {
    $(".header-burger").click(function (event) {
        $(".header-burger,.menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $(".rev-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: "40px 0px 70px",
        dots: true,
        dotsClass: "slick-dots",
        nextArrow: `                        <div class="next-arrow">
                            <img src="img/Vector 3.svg" />
                        </div>`,
        prevArrow: `                        <div class="prev-arrow">
                            <img src="img/Vector 3.svg" />
                        </div>`,
    });
    $(".partners").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px 20px 20px 20px",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "10px",
                    autoplay: true,
                    autoplaySpeed: 1500,
                    speed: 500,
                },
            },
        ],
    });
    $(".bottom-right").click(function () {
        $(".card-mini").toggleClass("active");
        $(".bottom-right > img").css("animation", "none");
        if ($(".card-mini").hasClass("active")) {
            $(".stat-number").each(function () {
                $(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            },
                        }
                    );
            });
            $(".four-stat").width("0%").animate(
                {
                    width: "40%",
                },
                {
                    duration: 2000,
                    easing: "swing",
                }
            );
        }
    });
});
