$(document).on('click', 'button.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deleteMutant(id, li);
});


function deleteMutant(id, li){
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
