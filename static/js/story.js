function getPartner(x) {
  switch(x) {
    case 'N':
      return 'S';
      break;
    case 'E':
      return 'W';
      break;
    case 'S':
      return 'N';
      break;
    case 'W':
      return 'E';
      break;
  }
}

function tellStory() {
  $('#storyacc').empty();
  bid_count = $('.bids').length - 1;
  i = 1;
  winning_bid = false;
  opener = false;
  responder = false;
  overcaller = false;
  advancer = false;
  nbid = false;
  ebid = false;
  sbid = false;
  wbid = false;
  while(bid_count > 0) {
    loop_bid = $('#bid' + i + 'a').text();
    loop_bid_key = $('#bid' + i + 'a').data('key');
    loop_bidder = $('#bid' + i + 'b').text();
    if(false == winning_bid || bids[loop_bid_key].rank > bids[winning_bid_key]) {
      winning_bid = loop_bid;
      winning_bid_key = $('#bid' + i + 'a').data('key');
    }
    switch(loop_bidder) {
      case 'N':
        nbid = loop_bid;
        break;
      case 'E':
        ebid = loop_bid;
        break;
      case 'S':
        sbid = loop_bid;
        break;
      case 'W':
        sbid = loop_bid;
        break;
    }
    if((false == opener || false == overcaller) && '0n' != loop_bid) {
      if(false == opener) {
        opener = loop_bidder;
        responder = getPartner(loop_bidder);
      } else if(false == overcaller) {
        overcaller = loop_bidder;
        advancer = getPartner(loop_bidder);
      }
    }
    panel = '';
    panel += '<div class="panel panel-default storybids">';
    panel += '<div class="panel-heading" role="tab" id="storyacc' + i + 'h">';
    panel += '<p class="panel-title">';
    panel += '<a role="button" data-toggle="collapse" data-parent="#storyacc" href="#storyacc' + i + '" aria-expanded="false" aria-controls="storyacc' + i + '">Bid ' + i + ' (' + loop_bidder + '): <span class="' + ($('#bid' + i + 'a').hasClass('black') ? 'black' : 'red') + '">' + loop_bid + '</span></a>';
    panel += '</p>';
    panel += '</div>';
    panel += '<div id="storyacc' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="storyacc' + i + '">';
    panel += '</div>';
    panel += '</div>';
    $('#storyacc').prepend(panel);
    bid_count--;
    i++;
  }
}
