$(document).ready(function(){
    var divCounter = 50;
    $('#container').append('<div id="1"></div>');
    $('#container').append('<div id="2"></div>');
    $('#container').append('<div id="3"></div>');
    $('#container').append('<div id="4"></div>');
    $('#container').append('<div id="5"></div>');
    $('#container').append('<div id="6"></div>');
    $('#container').append('<div id="7"></div>');
    $('#container').append('<div id="8"></div>');
    $('#container').append('<div id="9"></div>');
    $('#container').append('<br>');
    $('#container').append('<div id="10"></div>');
    $('#container').append('<div id="11"></div>');
    $('#container').append('<div id="12"></div>');
    $('#container').append('<div id="13"></div>');
    $('#container').append('<div id="14"></div>');
    $('#container').append('<div id="15"></div>');
    $('#container').append('<div id="16"></div>');
    $('#container').append('<div id="17"></div>');
    $('#container').append('<div id="18"></div>');
    $('#container').append('<div id="19"></div>');
    $('#container').append('<br>');
    $('#container').append('<div id="20"></div>');
    $('#container').append('<div id="21"></div>');
    $('#container').append('<div id="22"></div>');
    $('#container').append('<div id="23"></div>');
    $('#container').append('<div id="24"></div>');
    $('#container').append('<div id="25"></div>');
    $('#container').append('<div id="26"></div>');
    $('#container').append('<div id="27"></div>');
    $('#container').append('<div id="28"></div>');
    $('#container').append('<div id="29"></div>');
    $('#container').append('<br>');
    $('#container').append('<div id="30"></div>');
    $('#container').append('<div id="31"></div>');
    $('#container').append('<div id="32"></div>');
    $('#container').append('<div id="33"></div>');
    $('#container').append('<div id="34"></div>');
    $('#container').append('<div id="35"></div>');
    $('#container').append('<div id="36"></div>');
    $('#container').append('<div id="37"></div>');
    $('#container').append('<div id="38"></div>');
    $('#container').append('<div id="39"></div>');
    $('#container').append('<br>');
    $('#container').append('<div id="40"></div>');
    $('#container').append('<div id="41"></div>');
    $('#container').append('<div id="42"></div>');
    $('#container').append('<div id="43"></div>');
    $('#container').append('<div id="44"></div>');
    $('#container').append('<div id="45"></div>');
    $('#container').append('<div id="46"></div>');
    $('#container').append('<div id="47"></div>');
    $('#container').append('<div id="48"></div>');
    $('#container').append('<div id="49"></div>');

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
