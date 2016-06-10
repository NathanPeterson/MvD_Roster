$(document).on('click', 'button.marvel-delete', function(ev) {
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
        marvel_count--;
        $('.marvel_count').html("Hero Count: "+marvel_count);
      }
    }
  })
}
