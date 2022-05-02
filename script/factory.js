(function($){



    var factory = {

        inti: function(){
            this.header();
            this.section1();
            this.section2();
            this.footer();

        },

        header: function(){
            
            $('.main-btn').on({

                mouseenter: function(){
                    $('.sub').stop().slideDown(300);
                    $('.sub-bg').stop().slideDown(300);

                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },

                focusin: function(){
                    $('.sub').slideDown(300);
                    $('.sub-bg').slideDown(300);

                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
            });


            $('#nav').on({

                mouseleave: function(){
                    $('.sub').stop().slideUp(200);
                    $('.sub-bg').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                },

                focsuin: function(){
                    $('.sub').stop().slideUp(200);
                    $('.sub-bg').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }



            });
            
            
            
            },

        section1: function(){

           let cnt = 0;

            //1. 메인

            function mainSlide(){
                $('.slide-wrap').stop().animate({left: `${-100*cnt}%`},600, function(){
                    cnt>2 ? cnt=0:cnt;
                    cnt<0 ? cnt=2:cnt;
                    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`},0);
                });
            }

           //2. 카운트

           function nextCount(){
               cnt++;
               mainSlide();
           }
           function prevCount(){
               cnt--;
               mainSlide();
           }

           //3. 타이머
           
           function autoTimer(){
               setInterval(nextCount, 3000);
           }
           autoTimer();
        },

        section2: function(){
            
            $('.link-btn').on({
                click: function(){
                    $('#modal').stop().fadeIn(300);
                },
                focusin: function(){
                    $('#modal').stop().fadeIn(300);
                },
                
            });
            $('.close-btn').on({
                click: function(){
                    $('#modal').stop().fadeOut(200);
                },
                foucsin: function(){
                    $('#modal').stop().fadeOut(200);
                }
            });


        },

        footer: function(){

        },
    }

    factory.inti();





})(jQuery);