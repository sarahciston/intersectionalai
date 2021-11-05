$(document).ready(function() {
  $('body').bind('pageLoadComplete',function() {
    // Change tagged by text

    $('.has_tags').prev().text('keywords:'); //has the following tags
    $('.tag_of').prev().text('also on these related pages:'); //this tag is linked to these pages

     $('.path-nav.left > img').attr('src', 'https://scalar.usc.edu/works/gsem-100-project/media/left-nav.png');
	$('.path-nav.right > img').attr('src', 'https://scalar.usc.edu/works/gsem-100-project/media/right-nav.png');
	$('.path-nav.info').attr('src', 'https://scalar.usc.edu/works/gsem-100-project/media/context-nav.png');

    
    $("#searchIcon").addClass("material-icons")
    $("#helpIcon").addClass("material-icons")
    $("#wayfindingIcon").addClass("material-icons")
    $(".headerIcon").addClass("material-icons")
     $("#searchIcon").text("search")
     $("#helpIcon").text("help")
     $("#wayfindingIcon").text("explore")
     $(".mainMenu a.headerIcon").text("menu_book")


  });
});