function tellStory() {
  $('#storyacc').empty();
  bid_count = $('.bids').length - 1;
  i = 1;
  while(bid_count > 0) {
    panel = '';
    panel += '<div class="panel panel-default storybids">';
    panel += '<div class="panel-heading" role="tab" id="storyacc' + i + 'h">';
    panel += '<p class="panel-title">';
    panel += '<a role="button" data-toggle="collapse" data-parent="#storyacc" href="#storyacc' + i + '" aria-expanded="false" aria-controls="storyacc' + i + '">Bid ' + i + ' (' + $('#bid' + i + 'b').text() + '): <span class="' + ($('#bid' + i + 'a').hasClass('black') ? 'black' : 'red') + '">' + $('#bid' + i + 'a').text() + '</span></a>';
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
