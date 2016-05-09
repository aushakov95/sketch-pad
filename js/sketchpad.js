$(document).ready(function(){
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
                $(this).css('background-color', "blue");
        });
    $('#newGrid').click(function(){
        $('#container').empty();
        var width = prompt("Enter the width of the grid")
        var height = prompt("Enter the height of the grid")

        var counterWidth = 0;
        var counterHeight = 0;
        while (counterHeight < height){
            for(; counterWidth < width; counterWidth++){
                $('#container').append('<div></div>');
            }
            $('#container').append('<br>');
            counterWidth = 0;
            counterHeight++;
        }
    });

});
