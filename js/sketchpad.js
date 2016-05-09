$(document).ready(function(){
    var divCounter = 52;
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<br>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<br>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<br>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<br>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');
    $('#container').append('<div></div>');

    $(document).on('mouseenter', '#container > div', function() {
            $(this).css('background-color', "black");
        });
    $(document).on('click', '#container > div', function() {
                $(this).fadeTo( "slow" , 0);
        });
    $('#newGrid').click(function(){
        $('#container').empty();
        var width = prompt("Enter the width of the grid")
        var height = prompt("Enter the height of the grid")

        counter = 0;
        var counterWidth = 0;
        var counterHeight = 0;
        while (counterHeight < height){
            for(; counterWidth < width; counterWidth++){
                $('#container').append('<div id="0"></div>');
                divCounter++;
            }
            $('#container').append('<br>');
            counterWidth = 0;
            counterHeight++;
        }
    });
    $('#colorReset').click(function(){
        for (var i = 0; i < divCounter; i++){
            $('#container > div#' + i).css('background-color', "blue");
        }
    });

});
