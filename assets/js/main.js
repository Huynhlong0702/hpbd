

var options = {
    strings: [
        "<p>Hi,</p><p>Chào mừng công túa đã đến với website này. Không biết nó có hữu ích gì hay đem lại niềm vui hay gì gì đó hay không? Hãy dành một tí thời gian và thử nghiệm nó nhé. </p><div><button class='btn-continue'>Ok. Xem thử thôi</button><button class='btn-continue no'>Không nhé</button></div>",
    ],
    typeSpeed: 40,
};

var typed = new Typed(".text-box", options);

$(document).on("click", ".no", function () {
    window.location.href = "https://www.google.com.vn/";
});

jQuery(document).ready(function ($) {
    setTimeout(() => {
        $("#intro").get(0).play();
    }, 4000)
})

$(document).on("click", ".btn-continue", function () {

    $(".section0").fadeOut(1000, function () {
        function section1() {
            $(".section1").fadeIn(100, function () {

                $('.home').fadeIn('500', () => {
                    $('.company').fadeIn('500', () => {
                        $('.sun').fadeIn('slow', () => {
                            $('.ship').show().addClass('run');
                            setTimeout(() => {
                                $('.nhanhang').show('slow');
                                setTimeout(() => {
                                    $('.ship, .nhanhang').fadeOut('100', () => {
                                        $(".chayxe").show().addClass("run");
                                        setTimeout(() => { section2(); }, 5000)
                                    });
                                }, 4000)
                            }, 4000)
                        });
                    });
                });
            })
        }
        section1();

        function section2() {
            $(".section1").fadeOut('100', () => {
                $('.section').show('100', () => {
                    $(".lamviec").fadeIn(1000, () => {
                        $('.popup1').fadeIn(1500, () => {
                            setTimeout(() => {
                                $('.popup1').fadeOut('1000');
                                $(".lamviec").fadeOut('1500', () => {
                                    $(".chuphinh").fadeIn(100, function () {
                                        $('.popup1').fadeIn().html('<p>Seo phì cái đã rồi làm sau nak.</p>');
                                        setTimeout(() => {
                                            $(".chuphinh").fadeOut();
                                            $(".chuphinh1").show('slow', () => {
                                                $('.images').html('<img src="assets/images/nhay.gif" alt="" style="width: 440px;bottom: -58px;display:block;" class="nhay" />')
                                                $('.popup1').html('<p>Đứng yên ta chụp không ta đá cho phát giờ</p>');
                                                setTimeout(() => {
                                                    $('.popup1').html('<p>1...2...3</p>');
                                                    $('.images').html('<img src="assets/images/ok.gif" alt="" style="width: 400px;bottom: -18px;display: block;" class="ok" />')
                                                    setTimeout(() => {
                                                        $('.popup1').hide().html('');
                                                        $('.images').html('<img src="assets/images/tim.gif" alt="" style="width: 400px;display: block;" class="tim" />')
                                                        setTimeout(() => {
                                                            $('.popup1').show().html('<p>Quý sờ tộc quá</p>');
                                                            $('.images').html('<img src="assets/images/7452cf8b0fe4de6c44ebf8a7d9301d58.gif" alt="" style="width: 346px;display: block;" />')
                                                            setTimeout(() => {
                                                                $('.popup1').html('<p>Đúng là Idol</p>');
                                                                $('.images').html('<img src="assets/images/bc8f7b33c1ac6c3a833830b5f593a90b.gif" alt="" style="width: 346px;display: block;" />')
                                                                setTimeout(() => {
                                                                    $('.popup1').hide().html('');
                                                                    $('.images').html('<img src="assets/images/AS003580_20.gif" alt="" style="width: 346px;display: block;" />')
                                                                    setTimeout(() => {
                                                                        $('.popup1').html('');
                                                                        $('.images').html('<img src="assets/images/AS003580_02.gif" alt="" style="width: 346px;display: block;" />')
                                                                        setTimeout(() => {
                                                                            $('.popup1').show().html('<p>Ôi... Dễ thương quá à</p>');
                                                                            $('.images').html('<img src="assets/images/ebe232e697f55c14139dd44475aecca8.gif" alt="" style="width: 346px;display: block;" />')
                                                                            setTimeout(() => {
                                                                                $('.popup1').html('<p>Một thời gian sau...</p>');
                                                                                $('.section img').hide();
                                                                                setTimeout(() => {
                                                                                    $(".section").hide();
                                                                                    section3();
                                                                                }, 1000)
                                                                            }, 3000)
                                                                        }, 3000)
                                                                    }, 3000)
                                                                }, 3000)
                                                            }, 3000)
                                                        }, 3000)
                                                    }, 3000)
                                                }, 3000)
                                            });

                                        }, 5000)
                                    });
                                });
                            }, 2000);
                        });
                    });
                })
            });
        }

        function section3() {
            // setTimeout(() => {
            $(".section").fadeOut(100, () => {
                $("#intro").get(0).pause();
                $(".section2").fadeIn(100, () => {
                    $("#automp3").get(0).play();
                    $('.traobanh').addClass('active');
                    setTimeout(() => {
                        $('.phao-hoa').show();
                        setTimeout(() => {
                            $('.section2').hide();
                            $('.section3').show();
                            setTimeout(() => {
                                $('#wowslider-container1').hide();
                                $('.the-end').show();
                            }, 70000);
                        }, 10000);

                    }, 5000);
                });
            });
            // }, 3000)
        }
    });
});

