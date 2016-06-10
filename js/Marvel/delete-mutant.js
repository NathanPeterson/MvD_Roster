$(document).on('click', 'button.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deletePerson(id, li);
});


function deletePerson(id, li){
  $.ajax({
    url: mutantUrl + '/' + id,
    method: 'delete',
    success: function(){
      if(li){
        li.remove();
      }
    }
  })
}
