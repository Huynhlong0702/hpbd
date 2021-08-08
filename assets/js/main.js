




var options = {
    strings: [
        "<p>Chào cậu,</p><p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><div><button class='btn-continue'>Ok. Tới luôn</button><button class='btn-continue no'>Không nhé</button></div>",
    ],
    typeSpeed: 40,
};

var typed = new Typed(".text-box", options);


var a = new Typed(".the-end .text", {
    strings: [
        "<p>Cuối cùng, Chúc cậu sinh nhật vui vẻ, mạnh khỏe, luôn vui vẻ, luôn miễm cười thật tươi và hạnh phúc.</p>",
    ],
    typeSpeed: 40,
});


$(document).on("click", ".no", function () {
    window.location.href = "https://www.google.com.vn/";
});

$(document).on("click", ".btn-continue", function () {
    $(".section0").fadeOut(1000, function () {
        function section1() {
            $(".section").show();
            $(".lamviec").fadeIn(1000, () => {
                $('.popup1').fadeIn(1500, () => {
                    setTimeout(() => {
                        $('.popup1').fadeOut('1000');
                        $(".lamviec").fadeOut('1500', () => {
                            $(".chuphinh").fadeIn(100, function () {
                                $('.popup1').fadeIn().html('<p>Chụp hình</p>');
                                setTimeout(() => {
                                    $(".chuphinh, .popup1").fadeOut();
                                    $(".chuphinh1, .nhay").show('slow', () => {
                                        setTimeout(() => {
                                            $(".nhay").fadeOut();
                                            $(".ok").fadeIn('slow', () => {
                                                setTimeout(() => {
                                                    $(".ok").hide();
                                                    section2();
                                                }, 3000)
                                            });
                                        }, 3000)
                                    });

                                }, 5000)
                            });
                        });
                    }, 2000);
                });
            });
        }
        section1();

        function section2() {
            $(".section").fadeOut('slow', () => {
                $(".section1").fadeIn(100, function () {
                    $('.goodnight').fadeIn();
                    setTimeout(() => {
                        $('.goodnight').fadeOut('slow', () => {
                            $('.home').fadeIn('500', () => {
                                $('.company').fadeIn('500', () => {
                                    $('.sun').fadeIn('slow', () => {
                                        $('.ship').show().addClass('run');
                                        setTimeout(() => {
                                            $('.nhanhang').show('slow');
                                            setTimeout(() => {
                                                $('.ship, .nhanhang').fadeOut('100', () => {
                                                    $(".chayxe").show().addClass("run");
                                                    section3();
                                                });
                                            }, 4000)
                                        }, 4000)
                                    });
                                });
                            });
                        });
                    }, 1000);
                })
            });
        }

        function section3() {
            setTimeout(() => {
                $(".section1").fadeOut(100, () => {
                    $(".section2").fadeIn(1000, () => {
                        $("#automp3").get(0).play();
                        setTimeout(() => {
                            $('.section2').hide();
                            $('.section3').show();
                            setTimeout(() => {
                                $('.section3').hide();
                                $("#loichuc").get(0).play();
                            }, 80000);
                        }, 5000);
                    });
                });
            }, 3000)
        }
    });
});

