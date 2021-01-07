/* 
    Name: Nupur Shah
    SWE 642 : Homework 3
    Custom JS File
*/

/* Form Validation Event Handling */ 
$('form').on('submit', function(e) {
    var alphabets = /^[A-Za-z\s\r\n\t\f\v]+$/;
    var alphanumeric = /^[A-Za-z0-9\s\r\n\t\f\v]+$/;
    var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var errorMessage = "";

    /* The Name text box should contain only Alphabets. */
    if (!($("#username").val().match(alphabets))) {
        errorMessage += "<ul><li>Please enter only the alphabets in the username.</li></ul>";
        $('#username').val("");
    }

    /* The Address text boxes should contain only appropriate numeric, alphabet or alphanumeric characters. */
    if (!($("#street").val().match(alphanumeric))) {
        errorMessage += "<ul><li>Please enter appropriate numeric, alphabet, or alphanumeric characters in street Address.</li></ul>";
        $("#street").val("");
    }

    /* Make sure a radio button option is selected. */
    var intrestinuni = $("input[name='intrestinuni']:checked");
    if (intrestinuni.length < 1) {
        errorMessage += "<ul><li>Please select an option you are interested in the university.</li></ul>";
    }

    /* The Email address format should be valid. */
    if (!($("#mail").val().match(email))) {
        errorMessage += "<ul><li>Please enter a valid email id.</li></ul>";
        $("#mail").val("");
    }

    if (errorMessage !== "") {
        e.preventDefault();
        $('<div></div>').html(errorMessage).dialog({
            modal: true,
            title: 'Alert!',
            buttons: [
            {
                text: "Close",
                click: function() {
                $( this ).dialog( "close" );
                }
            }],
            open : function(event, ui) { 
                $('html').attr('data-scrollTop', $(document).scrollTop(0)).css('overflow', 'hidden');
                $(this).dialog('option','position',{ my: 'center', at: 'center', of: window });
            },
            close : function(event, ui) { 
                var scrollTop = $('html').css('overflow', 'auto').attr('data-scrollTop') || 0;
                if( scrollTop ) $('html').scrollTop( scrollTop ).attr('data-scrollTop','');
            }
        });
        return false;
    } else { 
        return true;
    }
});