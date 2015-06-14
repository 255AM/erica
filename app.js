// link needs to open in a light box that cover all of screen

// 1-capture click event on link
var $overlay =$('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image)


$("body").append($overlay)
// 1.1-show overlay
// 1.2 update over lay with contents
$("#moreinfo a").click(function(event){
    event.preventDefault();
var imageLocation = $(this).attr("href");
    
    $image.attr("src", imageLocation);

    $overlay.show();
});
    
    
$overlay.click(function(){;
    $overlay.hide();
});
 