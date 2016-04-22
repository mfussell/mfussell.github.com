

$(document).ready(function() {
  console.log('here');
  $('#countdown_dashboard').countDown({
    targetDate: {
      'day': 		16,
      'month': 	7,
      'year': 	2015,
      'hour': 	18,
      'min': 		0,
      'sec': 		0
    }
  });
});
