$(document).ready(function() {

    /* MENU TOGGLE */
    $('#menutoggle').click(function() {
        $('#dropdownmenu').toggleClass('menuactive');
        $('#body').toggleClass('overflow');
    });



    /* SEARCH TOGGLE */
    $('#searchicon').click(function() {
        $('#searchinput').addClass('searchactive');
        $('#searchclose').addClass('closeactive');
    });
    $('#searchclose').click(function() {
        $('#searchinput').removeClass('searchactive');
        $('#searchclose').removeClass('closeactive');
    });

});