function tellStory() {
  bid_count = $('.bids').length
  while(bid_count > 0) {
    panel = '';
    panel += '<div class="panel panel-default storybids">';
    panel += '<div class="panel-heading" role="tab" id="storyacc1h">';
    panel += '<p class="panel-title">';
    panel += '<a role="button" data-toggle="collapse" data-parent="#storyacc" href="#storyacc1" aria-expanded="false" aria-controls="storyacc1">Bid 1 (' + bidder + '): </a>';
    panel += '</p>';
    panel += '</div>';
    panel += '<div id="storyacc1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="storyacc1">';
    panel += '</div>';
    panel += '</div>';
    $('#storyacc').prepend(panel);
    bid_count--;
  }
}
