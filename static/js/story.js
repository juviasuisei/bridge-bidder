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
  openbid = false;
  respondbid = false;
  overbid = false;
  advbid = false;
  while(bid_count > 0) {
    rebid = false;
    loop_bid = $('#bid' + i + 'a').text();
    loop_bid_key = $('#bid' + i + 'a').data('key');
    loop_bidder = $('#bid' + i + 'b').text();
    if(false == winning_bid || bids[loop_bid_key].rank > bids[winning_bid_key]) {
      winning_bid = loop_bid;
      winning_bid_key = $('#bid' + i + 'a').data('key');
    }
    if(false == opener && '0n' != loop_bid_key) {
      opener = loop_bidder;
      openbid = loop_bid_key;
      responder = getPartner(loop_bidder);
    } else if(opener == loop_bidder) {
      rebid = true;
    } else if(responder == loop_bidder) {
      respondbid = loop_bid_key;
    } else if(false == overcaller && '0n' != loop_bid_key) {
      overcaller = loop_bidder;
      overbid = loop_bid_key;
      advancer = getPartner(loop_bidder);
    } else if(advancer == loop_bidder) {
      advbid = loop_bid_key;
    }

    panel = '';
    panel += '<div class="card storybids mt-1">';
    panel += '<div class="card-header bg-secondary" id="storyacc' + i + 'h">';
    panel += '<button class="btn btn-light" data-toggle="collapse" data-target="#storyacc' + i + '" aria-expanded="true" aria-controls="storyacc' + i + '">Bid ' + i + ' (' + loop_bidder + '): <span class="' + ($('#bid' + i + 'a').hasClass('text-dark') ? 'text-dark' : 'text-danger') + '">' + loop_bid + '</span></button>';
    panel += '</div>';
    panel += '<div id="storyacc' + i + '" class="collapse" aria-labelledby="storyacc' + i + 'h" data-parent="#storyacc' + i + '">';
    panel += '<div class="card-body">';
    panel += '<ul class="list-group">';
    biddata = false;
    if(false == opener) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Non-Opening Bid</li>';
      $.each(story_library.opens, function(k,v) {
        if(k == loop_bid_key) {
          biddata = v;
          return false;
        }
      });
    } else if(loop_bidder == opener && false == rebid) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Opening Bid</li>';
      $.each(story_library.opens, function(k,v) {
        if(k == loop_bid_key) {
          biddata = v;
          return false;
        }
      });
    } else if(loop_bidder == overcaller) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Overcall Bid</li>';
      $.each(story_library.overcalls, function(k,v) {
        if(k == loop_bid_key) {
          biddata = v;
          return false;
        }
      });
    } else if(loop_bidder == advancer) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Advancing an Overcall Bid</li>';
      $.each(story_library.advances, function(k,v) {
        var litmus = true;
        if(k == loop_bid_key) {
          if(0 == v.alt || -1 == v.alt) {
            biddata = v;
            litmus = false;
          } else {
            $.each(v.alt, function(k2, v2) {
              if(k2 == overbid) {
                biddata = v2;
                litmus = false;
                return false;
              } else if('xx' == k2) {
                biddata = v2;
                litmus = false;
                return false;
              }
            });
          }
        }
        return litmus;
      });
    } else if(loop_bidder == responder) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Responder\'s Bid</li>';
      if('1c' == openbid || '1d' == openbid) {
        $.each(story_library.responses.minor, function(k,v) {
          var litmus = true;
          if(k == loop_bid_key) {
            if(0 == v.alt || -1 == v.alt) {
              biddata = v;
              litmus = false;
            } else {
              $.each(v.alt, function(k2, v2) {
                if(k2 == openbid) {
                  biddata = v2;
                  litmus = false;
                  return false;
                } else if('xx' == k2) {
                  biddata = v2;
                  litmus = false;
                  return false;
                }
              });
            }
          }
          return litmus;
        });
      } else if('1h' == openbid || '1s' == openbid) {
        $.each(story_library.responses.major, function(k,v) {
          var litmus = true;
          if(k == loop_bid_key) {
            if(0 == v.alt || -1 == v.alt) {
              biddata = v;
              litmus = false;
              return false;
            } else {
              $.each(v.alt, function(k2, v2) {
                if(k2 == openbid) {
                  biddata = v2;
                  litmus = false;
                  return false;
                } else if('xx' == k2) {
                  biddata = v2;
                  litmus = false;
                  return false;
                }
              });
            }
          }
          return litmus;
        });
      } else if('1n' == openbid || '2n' == openbid) {
        $.each(story_library.responses.nt, function(k,v) {
          var litmus = true;
          if(k == loop_bid_key) {
            if(0 == v.alt || -1 == v.alt) {
              biddata = v;
              litmus = false;
              return false;
            } else {
              $.each(v.alt, function(k2, v2) {
                if(k2 == openbid) {
                  biddata = v2;
                  litmus = false;
                  return false;
                } else if('xx' == k2) {
                  biddata = v2;
                  litmus = false;
                  return false;
                }
              });
            }
          }
          return litmus;
        });
      }
    } else if(loop_bidder == opener && true == rebid) {
      panel += '<li class="list-group-item"><strong>Designation:</strong> Opener\'s Rebid</li>';
      if(openbid.substr(1) == respondbid.substr(1)) {
        $.each(story_library.orebids.raise, function(k,v) {
          var litmus = true;
          if(k == loop_bid_key) {
            if(0 == v.alt || -1 == v.alt) {
              biddata = v;
              litmus = false;
              return false;
            } else if(-1 != v.alt) {
              $.each(v.alt, function(k2, v2) {
                if(k2 == respondbid || 'xx' == k2) {
                  if(0 == v2.alt) {
                    biddata = v2;
                    litmus = false;
                    return false;
                  } else if(-1 == v2.alt) {
                    biddata = v2;
                    litmus = false;
                    return false;
                  } else {
                    $.each(v2.alt, function(k3, v3) {
                      if(k3 == openbid) {
                        biddata = v3;
                        litmus = false;
                        return false;
                      } else if('xx' == k3) {
                        biddata = v3;
                        litmus = false;
                        return false;
                      }
                    });
                  }
                }
                return litmus;
              });
            }
          }
          return litmus;
        });
      } else {
        $.each(story_library.orebids.new, function(k,v) {
          var litmus = true;
          if(k == loop_bid_key) {
            if(0 == v.alt || -1 == v.alt) {
              biddata = v;
              litmus = false;
              return false;
            } else if(-1 != v.alt) {
              $.each(v.alt, function(k2, v2) {
                if(k2 == respondbid || 'xx' == k2) {
                  if(0 == v2.alt) {
                    biddata = v2;
                    litmus = false;
                    return false;
                  } else if(-1 == v2.alt) {
                    biddata = v2;
                    litmus = false;
                    return false;
                  } else {
                    $.each(v2.alt, function(k3, v3) {
                      if(k3 == openbid) {
                        biddata = v3;
                        litmus = false;
                        return false;
                      } else if('xx' == k3) {
                        biddata = v3;
                        litmus = false;
                        return false;
                      }
                    });
                  }
                }
                return litmus;
              });
            }
          }
          return litmus;
        });
      }
    }
    if(false != biddata && biddata.alt != -1) {
      panel += '<li class="list-group-item"><strong>Bid Type:</strong> ' + (-1 != biddata.type ? (0 == biddata.type ? 'Invitational' : (1 == biddata.type ? 'Forcing' : 'Sign-Off')) : 'N/A') + '</li>';
      panel += '<li class="list-group-item"><strong>Convention:</strong> ' + (-1 != biddata.conv ? biddata.conv : 'N/A') + '</li>';
      panel += '<li class="list-group-item"><strong>HCP + Distribution Points:</strong> ' + (-1 != biddata.hcpdi ? biddata.hcpdi : 'Unclear') + '</li>';
      panel += '<li class="list-group-item"><strong>HCP + Dummy Points:</strong> ' + (-1 != biddata.hcpdu ? biddata.hcpdu : 'Unclear') + '</li>';
      panel += '<li class="list-group-item">' + (-1 != biddata.s ? (biddata.s + (-1 != biddata.sg ? ' Good' : '')) : 'Unclear') + ' &#x2660;</li>';
      panel += '<li class="list-group-item"><span class="text-danger">' + (-1 != biddata.h ? ( biddata.h + (-1 !=biddata.hg ? ' Good' : '')) : 'Unclear') + ' &#x2665;</span></li>';
      panel += '<li class="list-group-item"><span class="text-danger">' + (-1 != biddata.d ? (biddata.d + (-1 !=biddata.dg ? ' Good' : '')) : 'Unclear') + ' &#x2666;</span></li>';
      panel += '<li class="list-group-item">' + (-1 != biddata.c ? (biddata.c + (-1 != biddata.cg ? ' Good' : '')) : 'Unclear') + ' &#x2663;</li>';
      panel += '<li class="list-group-item"><strong>Balanced Hand:</strong> ' + (-1 != biddata.bal ? (biddata.bal ? 'Yes' : 'No') : 'Unclear') + '</li>';
    } else if(-1 == biddata.alt) {
      panel += '<li class="list-group-item">HERE BE DRAGONS</li>'
    } else if(false == biddata) {
      panel += '<li class="list-group-item">W.W.A.D.</li>'
    }
    panel += '</ul>';
    panel += '</div>';
    panel += '</div>';
    panel += '</div>';
    $('#storyacc').prepend(panel);
    bid_count--;
    i++;
  }
}
