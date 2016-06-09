$(document).on('click', 'button.promote', promotePerson);

function promotePerson(ev){
  ev.preventDefault();
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  promote(id, li);
}


function promote(id, li){
  $.ajax({
    url: peopleUrl + '/' + id,
    method: 'patch',
    success: function(){
      alert(asdasda);
    }
  })
}
