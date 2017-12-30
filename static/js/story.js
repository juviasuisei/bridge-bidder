function tellStory() {
  $('#storyacc').empty();
  bid_count = $('.bids').length - 1;
  i = 1;
  while(bid_count > 0) {
    panel = '';
    panel += '<div class="panel panel-default storybids">';
    panel += '<div class="panel-heading" role="tab" id="storyacc1h">';
    panel += '<p class="panel-title">';
    panel += '<a role="button" data-toggle="collapse" data-parent="#storyacc" href="#storyacc1" aria-expanded="false" aria-controls="storyacc1">Bid ' + i + ' (' + $('#bid' + i + 'b').text() + '): </a>';
    panel += '</p>';
    panel += '</div>';
    panel += '<div id="storyacc1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="storyacc1">';
    panel += '</div>';
    panel += '</div>';
    $('#storyacc').prepend(panel);
    bid_count--;
    i++;
  }
}
