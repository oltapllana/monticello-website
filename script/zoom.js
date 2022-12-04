$(function() {
$("#btn").click(function(e){
    $(".modal").css({"position":"absolute","left":"400px","top":"3560px"})
    $(".modal img").css({"width": "700px", "height": "auto"})
    $(".modal").fadeIn();
});

$('.x').click(function(e){
    $('.modal').fadeOut();
})
});


$(function() {
    $("#btn2").click(function(e){
        $(".modal2").css({"position":"absolute","left":"400px","top":"3560px"})
        $(".modal2 img").css({"width": "700px", "height": "auto"})
        $(".modal2").fadeIn();
    });
    
    $('.x1').click(function(e){
        $('.modal2').fadeOut();
    })
    });
    $(function() {
        $("#btn3").click(function(e){
            $(".modal3").css({"position":"absolute","left":"400px","top":"3560px"})
            $(".modal3 img").css({"width": "700px", "height": "auto"})
            $(".modal3").fadeIn();
        });
        
        $('.x2').click(function(e){
            $('.modal3').fadeOut();
        })
        });

        $(function() {
            $("#btn4").click(function(e){
                $(".modal4").css({"position":"absolute","left":"400px","top":"3560px"})
                $(".modal4 img").css({"width": "700px", "height": "auto"})
                $(".modal4").fadeIn();
            });
            
            $('.x3').click(function(e){
                $('.modal4').fadeOut();
            })
            });

            $(function() {
                $("#btn5").click(function(e){
                    $(".modal5").css({"position":"absolute","left":"400px","top":"3560px"})
                    $(".modal5 img").css({"width": "700px", "height": "auto"})
                    $(".modal5").fadeIn();
                });
                
                $('.x4').click(function(e){
                    $('.modal5').fadeOut();
                })
                });

