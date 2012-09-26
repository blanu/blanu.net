function initBlanu()
{
    $( function() {
        $.vegas({
            src:'images/background4.jpg'
        });
        $.vegas('overlay', {
            src:'overlays/13.png'
        });
    });

    $('#nav').accordion();    
    $('ul').sortable();
}

$(document).ready(initBlanu);