
$(document).on('click', 'button.marvel-promote', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  promoteMutant(id, li);
});


function promoteMutant(id, li){
  $.ajax({
    url: mutantUrl + '/' + id,
    method: 'put',
    data: {
      mutant: {
        power: "Saves the day single-handedly",
      }
    },
    success: function(){
      alert("Saved the day single-handedly")
    }
  })
}


function promoted(person){
 alert("hey");
 var li = $('li[data-id="' + person.person.id + '"]');
 li.style.text=blue;
}
