function updateCards() {
  hcp = 0;
  dip = 0;
  dup = 0;
  s = 0;
  h = 0;
  c = 0;
  d = 0;
  bal = TRUE;
  $('.card').each(function(k,v) {
    if($(k).hasClass('active')) {
      rank = v.id.substring(0,1);
      suit = v.id.substring(1);
      switch(rank) {
        case 'j':
          hcp++;
          break;
        case 'q':
          hcp += 2;
          break;
        case 'k':
          hcp += 3;
          break;
        case 'a':
          hcp += 4;
          break;
      }
      switch(suit) {
        case 's':
          s++;
          break;
        case 'h':
          h++;
          break;
        case 'd':
          d++;
          break;
        case 'c':
          c++;
          break;
      }
    }
  });
  if(s > 4) {
    dip += s - 4;
  }
  if(h > 4) {
    dip += h - 4;
  }
  if(d > 4) {
    dip += d - 4;
  }
  if(c > 4) {
    dip += c - 4;
  }
  litmus = 0;
  if(s == 0) {
    dup += 5;
  } elseif(s == 1) {
    dup += 3;
  } elseif(s == 2) {
    dup += 1;
    litmus++;
  }
  if(h == 0) {
    dup += 5;
  } elseif(h == 1) {
    dup += 3;
  } elseif(h == 2) {
    dup += 1;
    litmus++;
  }
  if(d == 0) {
    dup += 5;
  } elseif(d == 1) {
    dup += 3;
  } elseif(d == 2) {
    dup += 1;
    litmus++;
  }
  if(c == 0) {
    dup += 5;
  } elseif(c == 1) {
    dup += 3;
  } elseif(c == 2) {
    dup += 1;
    litmus++;
  }
  if(litmus > 1 || s < 2 || h < 2 || d < 2 || c < 2) {
    balance = FALSE;
  }
  $('#hcp').text(hcp);
  $('#dip').text(hcp);
  $('#dup').text(hcp);
  $('#bal').text(balance ? 'Y' : 'N');
}
