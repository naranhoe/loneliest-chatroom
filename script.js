$(function(){
  // Initialize count to 1
  var count = 1;

  // Switches author between "Me, Myself, I"
  function nameSwitch() {
    var name = "";
    switch (count) {
      case 1:
        name = "Me";
        count++;
        return name;
      case 2:
        name = "Myself";
        count++;
        return name;
      case 3:
        name = "I";
        count = 1;
        return name;
      default:
        name = "Internet";
        count = 1;
        return name;
    }
  }

  // Append message to message-body
  function appendItBruh(message_in) {
    // Get the hours and minutes
    var date = new Date($.now());
    var time = date.getHours() + ":" + date.getMinutes();

    // Constructing the message
    var char = '';

    char += '<li class="message">'
    char += '<a class="delete" href="#">Delete</a>'
    char += '<h3 class="author">'+ nameSwitch() +'</h3>'
    char += '<p class="message-body">' + message_in + '</p>'
    char += '<span class="timestamp">' + time + '</span>'
    char += '</li>'

    // Appending message to #conversation
    $('#conversation').append(char);
  }

  // When Send button is clicked...
  $('#new-message-button').click(function(evt) {

      var message = $('#new-message-body').val();

      appendItBruh(message);

      $('#new-message-body').val('');
  });


  // When user hits "enter" key...
  $("#new-message-body").keydown(function(e) {
      var message = $('#new-message-body').val();

      if (e.which === 13) {
        appendItBruh(message);
        $('#new-message-body').val('');
      }
  });

  // Delete a conversation...
  $('#conversation').on('click', '.delete', function(evt) {
    $(this).parent().closest('.message').remove()
  });

  // Chuck Norris API..
  $('#lonely').click(function(evt) {
    $.get('http://api.icndb.com/jokes/random', function(result) {
      count = 4;
      the_joke = result.value.joke;
      appendItBruh(the_joke);
    });

  });

});
