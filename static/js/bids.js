$('body').on('click', '#bidacc0 .bid', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $('#bidacc0 .bid').removeClass('active');
  $(this).toggleClass('active');
  dealer = false;
  dealerString = '';
  switch($('#bidacc0 .active').attr('id')) {
    case 'dealern':
      dealer = 'n';
      dealerString = 'North (Partner)';
      break;
    case 'dealere':
      dealer = 'e';
      dealerString = 'East';
      break;
    case 'dealers':
      dealer = 's';
      dealerString = 'South (You)';
      break;
    case 'dealerw':
      dealer = 'w';
      dealerString = 'West';
      break;
  }
  $('#bidacc0h a').text('Dealer: ' + dealerString);
});
