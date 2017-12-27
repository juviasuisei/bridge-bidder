function updateCards() {
  $('.card').each(function(k,v) {
    console.log(v.id);
    console.log(v.hasClass('active'));
  });
}
