function updateMutant(ev) {
  ev.preventDefault();
  var f = ev.currentTarget;
  var name = f.name.value;
  var id = f.id.value;
  $.ajax({
    url: peopleUrl + '/' + id,
    method: 'put',
    data: {
      person: {
        name: name,
      }
    },
    success: function(person) {
      var li = $('li[data-id="' + person.id + '"]');
      var span = li.find('.person-name');
      span.text(person.name);
    }
  });
};
