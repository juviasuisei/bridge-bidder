function buildScoreBoard(s,id) { // A LOT COULD BE MADE BETTER HERE; LOTS OF OVER-LOOPING THROUGH THINGS REDUNDANTLY JUST BECAUSE IT WAS QUICK TO BUILD; COULD LIKELY BE OPTIMIZED IF THIS HAD TO OPERATE AT SCALE
  var p = []; // players array
  var pd = {}; // player data dictionary for season total
  $.each(s[0], function(k,v) { // fill out player and player data
    if('key' == k) { return true; } // skip the key item
    p.push(k); // populate the players array
    pd[k] = 0; // create default total per player
  });
  var w = 100/(p.length + 1); // equal width of columns
  var t = ''; // table string to be inserted
  t += '<table id="' + id + '" class="table table-sm table-bordered mt-5 text-center">'; // need a unique ID for each table
  t += '<thead><tr>'; // header row
  t += '<th style="width:' + w + '%;">' + s[0].key + '</th>'; // first column uses the season key item
  $.each(p, function(k,v) { // create th for every player
    t += '<th id="' + id + 'head' + v + '" style="width:' + w + '%;" scope="col">' + s[0][v] + '</th>';
  });
  t += '</tr></thead>';
  t += '<tbody>';
  $.each(s, function(k,v) { // loop through each week in the season
    if(0 == k) { return true; } // skip the first set of data since that's meta data
    t += '<tr>';
    t += '<th scope="row">' + v.key + '</th>'; // first column is the key for the week
    $.each(p, function(k2,v2) { // loop through players
      var score = v[v2]; // retrieve this week's score for the given player
      t += '<td class="table-';
      if('X' == score) { // someone who didn't play that week
        t += 'secondary">&#x2014;';
      } else if(0 > score) { // winner
        t += 'danger">' + score;
      } else if(0 < score) { // loser
        t += 'success">+' + score;
      } else { // weird 0 night use case
        t += '">' + score;
      }
      t += '</td>';
      if('X' != score) { // add their weekly score to their running total if they were present that week
        pd[v2] += score;
      }
    });
    t += '</tr>';
  });
  t += '<tr class="table-secondary"><td colspan="' + (p.length + 1) + '"></td></tr>'; // blank row before total
  t += '<tr>'; // total row
  t += '<th scope="row">Total</th>';
  var low = 0; // initialize a couple litmuses to help identify top and worst running scores
  var high = 0;
  $.each(p, function(k,v) { // loop through all players looking for best and worst scores
    t += '<td id="' + id + 'total' + v + '">' + pd[v] + '</td>';
    if(pd[v] > high) { // better than the current high litmus
      high = pd[v];
    } else if(pd[v] < low) { // worse than the current low litmus
      low = pd[v];
    }
  });
  t += '</tr>';
  t += '</tbody></table>';
  $('#scoreboard').append(t); // add the table to the view
  $.each(p, function(k,v) { // loop through the newly created table marking the best and worst players
    if(pd[v] == high) { // best player(s)
      $('#' + id + ' #' + id + 'total' + v).addClass('table-success'); // total line
      $('#' + id + ' #' + id + 'head' + v).addClass('table-success'); // table head line
    } else if(pd[v] == low) { // worst player(s)
      $('#' + id + ' #' + id + 'total' + v).addClass('table-danger'); // total line
      $('#' + id + ' #' + id + 'head' + v).addClass('table-danger'); // table head line
    }
  })
}

buildScoreBoard(s2, 's2'); // generate score for S2
buildScoreBoard(s1, 's1'); // generate score for S1
