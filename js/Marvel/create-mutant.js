$('#marvel_form').on('submit', createMutant);

function createMutant(ev){
  ev.preventDefault();
  var marvelname = ev.currentTarget.name.value;
  $.post({
    url: mutantUrl,
    data: {
      mutant: {
        mutant_name: marvelname,
        real_name: "Tom Brady",
        power: "being useless"
      }
    },
    success: addMutant
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
