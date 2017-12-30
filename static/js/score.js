sets = {
  'safe' : {
    'reg' : { 1 : 50, 2 : 100, 3: 150, 4: 200, 5: 250, 6: 300, 7: 350 },
    'dub' : { 1 : 100, 2 : 300, 3: 500, 4: 700, 5: 900, 6: 1100, 7: 1300 }
  },
  'vuln' : {
    'reg' : { 1 : 100, 2 : 200, 3: 300, 4: 400, 5: 500, 6: 600, 7: 700 },
    'dub' : { 1 : 200, 2 : 500, 3: 800, 4: 1100, 5: 1400, 6: 1700, 7: 2000 }
  }
}

function settleScore() {
  vuln = $('#vuln').hasClass('active');
  dub = $('#double').hasClass('active');
  redub = $('#redouble').hasClass('active');
  score_bid = bids[bid];
  score_rank = bid.substr(0,1);
  score_suit = bid.substr(1);
  score_value = ('c' == score_suit || 'd' == score_suit) ? 20 : 30;
  below = ((score_rank * score_value) + ('n' == score_suit ? 10 : 0)) * (dub ? 2 : (redub ? 4 : 1));
  above = (dub ? (vuln ? 200 : 100) : (redub ? (vuln ? 400 : 200) : score_value));
  list = '';
  list += '<li><strong>Current Bid:</strong> <span class="' + score_bid.color + '">' + score_bid.name + '</span></li>';
  list += '<li><strong>Value Below the Line:</strong> ' + below + '</li>';
  list += '<li><strong>Value Per Overtrick:</strong> ' + above + '</li>';
  list += '<li><strong>Penalty For 1 Undertrick:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][1] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 2 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][2] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 3 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][3] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 4 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][4] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 5 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][5] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 6 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][6] * (redub ? 2 : 1)) + '</li>';
  list += '<li><strong>Penalty For 7 Undertricks:</strong> ' + (sets[(vuln ? 'vuln' : 'safe')][(dub ? 'dub' : 'reg')][7] * (redub ? 2 : 1)) + '</li>';
  $('#scoreexpl').empty().append(list);
}

$('body').on('click', '#score .vars', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  $(this).toggleClass('active');
  
  settleScore();
});
