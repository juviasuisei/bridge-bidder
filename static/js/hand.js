$('body').on('click', '.plcard', function(event) {
  event.stopPropagation(); // prevent default bootstrap behavior
  if(13 > $('.plcard.active').length || true == $(this).hasClass('active')) {
      $(this).toggleClass('active');
  }
  hcp = 0;
  dip = 0;
  dup = 0;
  s = 0;
  h = 0;
  c = 0;
  d = 0;
  bal = true;
  $('.plcard').each(function(k,v) {
    if($(v).hasClass('active')) {
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
  } else if(s == 1) {
    dup += 3;
  } else if(s == 2) {
    dup += 1;
    litmus++;
  }
  if(h == 0) {
    dup += 5;
  } else if(h == 1) {
    dup += 3;
  } else if(h == 2) {
    dup += 1;
    litmus++;
  }
  if(d == 0) {
    dup += 5;
  } else if(d == 1) {
    dup += 3;
  } else if(d == 2) {
    dup += 1;
    litmus++;
  }
  if(c == 0) {
    dup += 5;
  } else if(c == 1) {
    dup += 3;
  } else if(c == 2) {
    dup += 1;
    litmus++;
  }
  if(litmus > 1 || s < 2 || h < 2 || d < 2 || c < 2) {
    bal = false;
  }
  $('#hcp').text(hcp);
  $('#dip').text(dip);
  $('#dup').text(dup);
  $('#bal').text(bal ? 'Y' : 'N');
});
