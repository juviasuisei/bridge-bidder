bids = {
  '0n' : { 'rank' : 0, 'name' : 'P', 'color' : 'text-dark' },
  '1c' : { 'rank' : 1, 'name' : '1&#x2663;', 'color' : 'text-dark' },
  '1d' : { 'rank' : 2, 'name' : '1&#x2666;', 'color' : 'text-danger' },
  '1h' : { 'rank' : 3, 'name' : '1&#x2665;', 'color' : 'text-danger' },
  '1s' : { 'rank' : 4, 'name' : '1&#x2660;', 'color' : 'text-dark' },
  '1n' : { 'rank' : 5, 'name' : '1NT', 'color' : 'text-dark' },
  '2c' : { 'rank' : 6, 'name' : '2&#x2663;', 'color' : 'text-dark' },
  '2d' : { 'rank' : 7, 'name' : '2&#x2666;', 'color' : 'text-danger' },
  '2h' : { 'rank' : 8, 'name' : '2&#x2665;', 'color' : 'text-danger' },
  '2s' : { 'rank' : 9, 'name' : '2&#x2660;', 'color' : 'text-dark' },
  '2n' : { 'rank' : 10, 'name' : '2NT', 'color' : 'text-dark' },
  '3c' : { 'rank' : 11, 'name' : '3&#x2663;', 'color' : 'text-dark' },
  '3d' : { 'rank' : 12, 'name' : '3&#x2666;', 'color' : 'text-danger' },
  '3h' : { 'rank' : 13, 'name' : '3&#x2665;', 'color' : 'text-danger' },
  '3s' : { 'rank' : 14, 'name' : '3&#x2660;', 'color' : 'text-dark' },
  '3n' : { 'rank' : 15, 'name' : '3NT', 'color' : 'text-dark' },
  '4c' : { 'rank' : 16, 'name' : '4&#x2663;', 'color' : 'text-dark' },
  '4d' : { 'rank' : 17, 'name' : '4&#x2666;', 'color' : 'text-danger' },
  '4h' : { 'rank' : 18, 'name' : '4&#x2665;', 'color' : 'text-danger' },
  '4s' : { 'rank' : 19, 'name' : '4&#x2660;', 'color' : 'text-dark' },
  '4n' : { 'rank' : 20, 'name' : '4NT', 'color' : 'text-dark' },
  '5c' : { 'rank' : 21, 'name' : '5&#x2663;', 'color' : 'text-dark' },
  '5d' : { 'rank' : 22, 'name' : '5&#x2666;', 'color' : 'text-danger' },
  '5h' : { 'rank' : 23, 'name' : '5&#x2665;', 'color' : 'text-danger' },
  '5s' : { 'rank' : 24, 'name' : '5&#x2660;', 'color' : 'text-dark' },
  '5n' : { 'rank' : 25, 'name' : '5NT', 'color' : 'text-dark' },
  '6c' : { 'rank' : 26, 'name' : '6&#x2663;', 'color' : 'text-dark' },
  '6d' : { 'rank' : 27, 'name' : '6&#x2666;', 'color' : 'text-danger' },
  '6h' : { 'rank' : 28, 'name' : '6&#x2665;', 'color' : 'text-danger' },
  '6s' : { 'rank' : 29, 'name' : '6&#x2660;', 'color' : 'text-dark' },
  '6n' : { 'rank' : 30, 'name' : '6NT', 'color' : 'text-dark' },
  '7c' : { 'rank' : 31, 'name' : '7&#x2663;', 'color' : 'text-dark' },
  '7d' : { 'rank' : 32, 'name' : '7&#x2666;', 'color' : 'text-danger' },
  '7h' : { 'rank' : 33, 'name' : '7&#x2665;', 'color' : 'text-danger' },
  '7s' : { 'rank' : 34, 'name' : '7&#x2660;', 'color' : 'text-dark' },
  '7n' : { 'rank' : 35, 'name' : '7NT', 'color' : 'text-dark' }
}

function getBidder(x) {
  switch(x) {
    case 'N':
      return 'E';
      break;
    case 'E':
      return 'S';
      break;
    case 'S':
      return 'W';
      break;
    case 'W':
      return 'N';
      break;
  }
}

$('body').on('click', '#bidacc0 .bid', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $('#bidacc0 .bid').removeClass('active');
  $('.bids').remove();
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
  $('#bidacc0h button').text('Dealer: ' + dealerString);
  bidder = dealer.toUpperCase();
  panel = '';
  panel += '<div class="card bids mt-3">';
  panel += '<div class="card-header bg-secondary" id="bidacc1h">';
  panel += '<button class="btn btn-light" data-toggle="collapse" data-target="#bidacc1" aria-expanded="true" aria-controls="bidacc1">Bid 1 (<span id="bid1b">' + bidder + '</span>): <span data-key="_" id="bid1a">____</span></button>';
  panel += '</div>';
  panel += '<div id="bidacc1" class="collapse show" aria-labelledby="bidacc1h" data-parent="#bidacc1">';
  panel += '<div class="card-body">';
  $.each(bids, function(k,v) {
    panel += '<button id="bid01' + k + '" type="button" class="bid' + ('P' == v.name ? ' andrew' : '') + ' btn btn-muted ' + v.color + ' mb-1" data-toggle="button" aria-pressed="false" autocomplete="off">' + ('P' == v.name ? 'Andrew' : v.name) + '</button>';
    if(k.substr(1) == 'n') {
      panel += '<br />';
    }
  });
  panel += '</div>';
  panel += '</div>';
  panel += '</div>';
  $('#bid-acc').prepend(panel);
  $('#bidacc0').collapse('hide');
});

$('body').on('click', '#bid-acc .bids .bid', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $(this).parent().children().removeClass('active');
  $(this).toggleClass('active');
  newbid = $(this).attr('id').substr(5);
  bidno = parseInt($(this).parent().parent().attr('id').substr(6));
  if(typeof bid == 'undefined') {
    bid = newbid;
  } else if('0n' != newbid) {
    bid = newbid;
  } else if('0n' == newbid && 1 == bidno) {
    bid = newbid;
  } else if('0n' == newbid && $('#bid' + (bidno + 1) + 'a')) {
    i = bidno - 1;
    while(i > 0) {
      if('0n' != $('#bid' + i + 'a').data('key')) {
        bid = $('#bid' + i + 'a').data('key');
        break;
      }
      i--
    }
    if(0 == i) {
        bid = $('#bid1a').data('key');
    }
  }
  $('#bid' + bidno + 'a').data('key', newbid);
  i = 50;
  while(i > bidno) {
    $('#bidacc' + i).parent().remove();
    i--;
  }
  $('#bid' + bidno + 'a').text($(this).text()).removeClass('text-dark text-danger').addClass(bids[newbid].color);
  newbidno = bidno + 1;
  bidder = getBidder($('#bid' + bidno + 'b').text());
  panel = '';
  panel += '<div class="card bids mt-3">';
  panel += '<div class="card-header bg-secondary" id="bidacc' + newbidno + 'h">';
  panel += '<button class="btn btn-light" data-toggle="collapse" data-target="#bidacc' + newbidno + '" aria-expanded="true" aria-controls="bidacc' + newbidno + '">Bid ' + newbidno + ' (<span id="bid' + newbidno + 'b">' + bidder + '</span>): <span data-key="_" id="bid' + newbidno + 'a">____</span></button>';
  panel += '</div>';
  panel += '<div id="bidacc' + newbidno + '" class="collapse show" aria-labelledby="bidacc' + newbidno + 'h" data-parent="#bidacc' + newbidno + '">';
  panel += '<div class="card-body">';
  bidrank = bids[bid].rank;
  $.each(bids, function(k,v) {
    if(0 == v.rank || v.rank > bidrank) {
      panel += '<button id="bid' + (newbidno < 10 ? '0' + newbidno : newbidno) + k + '" type="button" class="bid btn btn-muted mb-1 ' + v.color + '" data-toggle="button" aria-pressed="false" autocomplete="off">' + v.name + '</button>';
      if(k.substr(1) == 'n') {
        panel += '<br />';
      }
    }
  });
  panel += '</div>';
  panel += '</div>';
  panel += '</div>';
  $('#bid-acc').prepend(panel);
  $('#bidacc' + bidno).collapse('hide');
  tellStory();
  settleScore();
});
