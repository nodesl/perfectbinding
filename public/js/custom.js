$(document).ready(function(){
    $('.navbar-toggler').on('click', function(e){
        //e.preventDefault();
        console.log('button clicked');
        if($("#mySidenav").css('width') != "0px") {
            closeNav();
        } else {
            openNav();
        }
    });

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        $("#mySidenav").css("width", "250px");
        $("#main").css("margin-left", "250px");
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
        $("#mySidenav").css("width", "0");
        $("#main").css("margin-left", "0");
    }
});