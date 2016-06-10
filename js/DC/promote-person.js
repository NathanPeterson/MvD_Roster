$(document).on('click', 'button.promote', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  promote(id, li);
});


function promote(id, li){
  $.ajax({
    url: xternUrl + '/' + id,
    method: 'put',
    data: {
      person: {
        promoted: true,
      }
    },
    success: function(){
      alert("Promoted")
    }
  })
}


function promoted(person){
 alert("hey");
 var li = $('li[data-id="' + person.person.id + '"]');
 li.style.text=blue;
}
