bids = {
  '0n' : { 'rank' : 0, 'name' : 'P', 'color' : 'black' },
  '1c' : { 'rank' : 1, 'name' : '1&#x2663;', 'color' : 'black' },
  '1d' : { 'rank' : 2, 'name' : '1&#x2666;', 'color' : 'red' },
  '1h' : { 'rank' : 3, 'name' : '1&#x2665;', 'color' : 'red' },
  '1s' : { 'rank' : 4, 'name' : '1&#x2660;', 'color' : 'black' },
  '1n' : { 'rank' : 5, 'name' : '1NT', 'color' : 'black' },
  '2c' : { 'rank' : 6, 'name' : '2&#x2663;', 'color' : 'black' },
  '2d' : { 'rank' : 7, 'name' : '2&#x2666;', 'color' : 'red' },
  '2h' : { 'rank' : 8, 'name' : '2&#x2665;', 'color' : 'red' },
  '2s' : { 'rank' : 9, 'name' : '2&#x2660;', 'color' : 'black' },
  '2n' : { 'rank' : 10, 'name' : '2NT', 'color' : 'black' },
  '3c' : { 'rank' : 11, 'name' : '3&#x2663;', 'color' : 'black' },
  '3d' : { 'rank' : 12, 'name' : '3&#x2666;', 'color' : 'red' },
  '3h' : { 'rank' : 13, 'name' : '3&#x2665;', 'color' : 'red' },
  '3s' : { 'rank' : 14, 'name' : '3&#x2660;', 'color' : 'black' },
  '3n' : { 'rank' : 15, 'name' : '3NT', 'color' : 'black' },
  '4c' : { 'rank' : 16, 'name' : '4&#x2663;', 'color' : 'black' },
  '4d' : { 'rank' : 17, 'name' : '4&#x2666;', 'color' : 'red' },
  '4h' : { 'rank' : 18, 'name' : '4&#x2665;', 'color' : 'red' },
  '4s' : { 'rank' : 19, 'name' : '4&#x2660;', 'color' : 'black' },
  '4n' : { 'rank' : 20, 'name' : '4NT', 'color' : 'black' },
  '5c' : { 'rank' : 21, 'name' : '5&#x2663;', 'color' : 'black' },
  '5d' : { 'rank' : 22, 'name' : '5&#x2666;', 'color' : 'red' },
  '5h' : { 'rank' : 23, 'name' : '5&#x2665;', 'color' : 'red' },
  '5s' : { 'rank' : 24, 'name' : '5&#x2660;', 'color' : 'black' },
  '5n' : { 'rank' : 25, 'name' : '5NT', 'color' : 'black' },
  '6c' : { 'rank' : 26, 'name' : '6&#x2663;', 'color' : 'black' },
  '6d' : { 'rank' : 27, 'name' : '6&#x2666;', 'color' : 'red' },
  '6h' : { 'rank' : 28, 'name' : '6&#x2665;', 'color' : 'red' },
  '6s' : { 'rank' : 29, 'name' : '6&#x2660;', 'color' : 'black' },
  '6n' : { 'rank' : 30, 'name' : '6NT', 'color' : 'black' },
  '7c' : { 'rank' : 31, 'name' : '7&#x2663;', 'color' : 'black' },
  '7d' : { 'rank' : 32, 'name' : '7&#x2666;', 'color' : 'red' },
  '7h' : { 'rank' : 33, 'name' : '7&#x2665;', 'color' : 'red' },
  '7s' : { 'rank' : 34, 'name' : '7&#x2660;', 'color' : 'black' },
  '7n' : { 'rank' : 35, 'name' : '7NT', 'color' : 'black' }
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
  $('#bidacc0h a').text('Dealer: ' + dealerString);
  bidder = dealer.toUpperCase();
  panel = '';
  panel += '<div class="panel panel-default bids">';
  panel += '<div class="panel-heading" role="tab" id="bidacc1h">';
  panel += '<p class="panel-title">';
  panel += '<a role="button" data-toggle="collapse" data-parent="#bidacc" href="#bidacc1" aria-expanded="true" aria-controls="bidacc1">Bid 1 (<span id="bid1b">' + bidder + '</span>): <span id="bid1a">____</span></a>';
  panel += '</p>';
  panel += '</div>';
  panel += '<div id="bidacc1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="bidacc1">';
  $.each(bids, function(k,v) {
    panel += '<button id="bid01' + k + '" type="button" class="bid btn btn-muted ' + v.color + '" data-toggle="button" aria-pressed="false" autocomplete="off">' + v.name + '</button>';
    if(k.substr(1) == 'n') {
      panel += '<br />';
    }
  });
  panel += '</div>';
  panel += '</div>';
  $('#bidacc').prepend(panel);
  $('#bidacc0').collapse('hide');
});

$('body').on('click', '#bidacc .bids .bid', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $(this).parent().children().removeClass('active');
  $(this).toggleClass('active');
  newbid = $(this).attr('id').substr(5);
  bid = '0n' == newbid ? (undefined != bid ? bid : newbid) : newbid;
  bidno = parseInt($(this).parent().attr('id').substr(6));
  i = 50;
  while(i > bidno) {
    $('#bidacc' + i).parent().remove();
    i--;
  }
  $('#bid' + bidno + 'a').text($(this).text()).removeClass('black red').addClass(bids[bid].color);
  newbidno = bidno + 1;
  bidder = getBidder($('#bid' + bidno + 'b').text());
  panel = '';
  panel += '<div class="panel panel-default bids">';
  panel += '<div class="panel-heading" role="tab" id="bidacc' + newbidno + 'h">';
  panel += '<p class="panel-title">';
  panel += '<a role="button" data-toggle="collapse" data-parent="#bidacc" href="#bidacc' + newbidno + '" aria-expanded="true" aria-controls="bidacc' + newbidno + '">Bid ' + newbidno + ' (<span id="bid' + newbidno + 'b">' + bidder + '</span>): <span id="bid' + newbidno + 'a">____</span></a>';
  panel += '</p>';
  panel += '</div>';
  panel += '<div id="bidacc' + newbidno + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="bidacc' + newbidno + '">';
  bidrank = bids[bid].rank;
  $.each(bids, function(k,v) {
    if(0 == v.rank || v.rank > bidrank) {
      panel += '<button id="bid' + (newbidno < 10 ? '0' + newbidno : newbidno) + k + '" type="button" class="bid btn btn-muted ' + v.color + '" data-toggle="button" aria-pressed="false" autocomplete="off">' + v.name + '</button>';
      if(k.substr(1) == 'n') {
        panel += '<br />';
      }
    }
  });
  panel += '</div>';
  panel += '</div>';
  $('#bidacc').prepend(panel);
  $('#bidacc' + bidno).collapse('hide');
  tellStory();
});
