$('#class_form').on('submit', createPerson);

function createPerson(ev){
  ev.preventDefault();
  var name = ev.currentTarget.name.value;
  $.post({
    url: peopleUrl,
    data: {
      person: {
        name: name,
        promoted: false,
      }
    },
    success: addPerson
  });
}


function addPerson(person){
  var li = $('li.person-template')
      .clone()
      .removeClass('template')
      .attr('data-id', person.id);

  li.find('.person-name')
    .html(person.name);

  $('#people').append(li);
}
