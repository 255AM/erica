 

 
$(document).ready(function(){
    // Activate Carousel
    $("portfoliocarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#portfoliocarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#portfoliocarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#portfoliocarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#portfoliocarousel").carousel(3);
    });
    $(".item5").click(function(){
        $("#portfoliocarousel").carousel(4);
    });
    $(".item6").click(function(){
        $("#portfoliocarousel").carousel(5);
    });
    $(".item7").click(function(){
        $("#portfoliocarousel").carousel(6);
    });
    $(".item8").click(function(){
        $("#portfoliocarousel").carousel(7);
    });
    $(".item9").click(function(){
        $("#portfoliocarousel").carousel(8);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#portfoliocarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#portfoliocarousel").carousel("next");
    });
});
 

 

 
 


 