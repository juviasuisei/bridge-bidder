$('body').on('click', '#bidacc0 .btn', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $(this).toggleClass('active');
  dealer = false;
  dealerString = '';
  switch($('#bidacc0 .active input').id) {
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
  $('#bidacc0 .panel-heading a).text('Dealer: ' + dealerString);
});
