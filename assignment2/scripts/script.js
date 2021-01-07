/* 
    Name: Nupur Shah
    SWE 642 : Homework 2
    Custom JS File
*/

/* Cookie and Greetings Implementation */ 
function greeting() {
    var now = new Date();
    var hour = now.getHours();
    var name;
    var greet_msg;
    var greetings = document.getElementById("greetings");

    if (hour < 12)
        greet_msg = '<h2>Good Morning ';
    else if (hour < 18)
        greet_msg = '<h2>Good Afternoon ';
    else
        greet_msg = '<h2>Good Evening ';

    // Check if there is a cookie
    if(document.cookie) {
        var cookievalue = unescape(document.cookie);
        var cookiepart = cookievalue.split("=");
        name = cookiepart[1];
    }
    else {        
        // If no cookie then ask for name and set cookie
        name = window.prompt("Please enter your name", "John");
        // Set cookie expiry after 2 days
        var date = new Date();
        date.setDate(date.getDate + 2);
        document.cookie = "name=" + escape(name) + "; expires=" + date;
    }

    greet_msg += name + ", welcome to SWE642 Survey</h2>";
    greet_msg += "Click " + "<a href = 'javascript:wrongname()'>here</a> " + " if you are not " + name + ". ";
    greetings.innerHTML = greet_msg;
}

function wrongname() {
    document.cookie = "name=null;" + " expires=Thu, 01-Jan-94 00:00:01 GMT";
    location.reload();
}

/* Average & Maximum Computation */
function calculate(data) {
    var errormsg = document.getElementById("error");
    errormsg.innerHTML = "";
    document.getElementById("average").innerHTML = "";
    document.getElementById("maximum").innerHTML = "";
    data = data.split(",");

    var sum = 0;
    var count = 0;
    var avg = 0;
    var max = 0;    
    var i;

    // If number count is less than 10
    if(data.length !== 10) {
        errormsg.innerHTML = "Please enter 10 numbers";
        return false;
    }

    for(i of data) {
        // Check there is a value between two ,
        if(i == "") {
            errormsg.innerHTML = "Please enter 10 numbers";
            return false;
        }
        i = i - "0";
        // Check the number is in the range 1-100 or not
        if (i < 1 || i > 100) {
            errormsg.innerHTML = "Please enter values between 1 and 100 (inclusive)";
            return false;
        }
        else {
            count ++;
            sum += i;

            // Maximum of all the numbers
            if(i > max) {
                max = i;
            }
        }
    }
    // Average of all the numbers
    avg = sum / count;
    // Print average and maximum
    document.getElementById("average").innerHTML = avg;
    document.getElementById("maximum").innerHTML = max;
}

/* Form Validation Event Handling */ 
$('form').on('submit', function(e) {
    var alphabets = /^[A-Za-z]+$/;
    var alphanumeric = /^[A-Za-z0-9]+$/;
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

    /* Make sure at least two checkboxes are checked. */
    var likedabtcampus = $("input[name='likedabtcampus']:checked");
    if (likedabtcampus.length < 2) {
        errorMessage += "<ul><li>Please check at least 2 things you like about the campus.</li></ul>";
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

/* When a user enters a zipcode, populate the city and state fields automatically based on the zip entered, using Ajax. */
function validatezip(zip) {
    try {
        var asyncRequest = new XMLHttpRequest();
        asyncRequest.onreadystatechange = function () { 
            callback(zip, asyncRequest); 
        };
        asyncRequest.open("GET", "http://mason.gmu.edu/~nshah23/assignments/assignment2/zipcodes.json", true);
        asyncRequest.withCredentials = true;
        asyncRequest.send();
    }
    catch (exception) {
        alert("Request failed.");
    }
}

function callback(zip, asyncRequest) {
    document.getElementById("zip-error").innerHTML = "Checking zipcode..";
    document.getElementById("city").innerHTML = "";
    document.getElementById("state").innerHTML = "";
    if (asyncRequest.readyState == 4) {
        if (asyncRequest.status == 200) {
            // parse JSON data
            var result = JSON.parse(asyncRequest.responseText);
            data = validzip(zip, result)
            if (data.valid) {
                document.getElementById("zip-error").innerHTML = "";
                document.getElementById("city").innerHTML = data.city;
                document.getElementById("state").innerHTML = data.state;
            } else {
                document.getElementById("zip-error").innerHTML="An invalid zip.";
            }
        }
    }
}

function validzip(zip, result) {
    var zipcodes = result.zipcodes;
    for (var zipcode of zipcodes) {
        if(zipcode.zip === zip) {
            return {
                valid: true,
                city: zipcode.city,
                state: zipcode.state
            };
        }
    }
    return {
        valid: false
    };
}

/* Implement tabs and slider using jQuery UI */
$( function() {
    $("#tabs").tabs();
    // slider in volgenau tab
    $("#slider").slider({
            animate: "fast",
            disabled: true,
            min: 0,
            max: 4,
            step: 1,
            change: function(event, ui) {
              if (ui.value == 1) {
                $('#slides').attr('src', 'images/covid-slider-image-edited.jpg');
              } 
              if (ui.value == 2) {
                $('#slides').attr('src', 'images/help.jpg');
              };
              if (ui.value == 3) {
                $('#slides').attr('src', 'images/fee_waive.jpg');
              };
              if (ui.value == 4) {
                $('#slides').attr('src', 'images/elise.jpg');
              };
              if (ui.value == 5) {
                $('#slides').attr('src', 'images/rsz.jpg');
              };
            }
          });
          $(function AutoSlider() {
        setTimeout(function () {
            $("#slider").slider("value", $('#slider').slider("value") + 1);
        }, 2000);
        setTimeout(AutoSlider, 2000);
    });
  } );