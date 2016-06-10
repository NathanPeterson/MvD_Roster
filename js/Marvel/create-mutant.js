$('#marvel_form').on('submit', createPerson);

function createPerson(ev){
  ev.preventDefault();
  var name = ev.currentTarget.name.value;
  $.post({
    url: mutantUrl,
    data: {
      mutant: {
        mutant_name: name,
      }
    },
    success: function(){
      alert("something")//addMutant
    }
  });
}


function addMutant(mutant){
  var li = $('li.people-template')
      .clone()
      .removeClass('people-template')
      .attr('data-id', mutant.id);

  li.find('.person-name')
    .html(mutant.mutant_name);

  $('#people').append(li);
}
