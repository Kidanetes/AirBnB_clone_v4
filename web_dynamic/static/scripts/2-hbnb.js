$('document').ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  
  obj = {}
  $('input#check1').change(function () {
    if($(this).prop('checked')) {
      obj[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete obj[$(this).attr('data-id')];
    }
    if (Object.keys(obj).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(obj).join(', '));	   
    }
  });
});
