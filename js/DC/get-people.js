$(function() {
 $.get({
   url: xternUrl,
   success: function processMutants(people) {
     var index = 0;
     $.each(people, function(i, person) {
       index++;
       addXtern(person);
     });
     $('.dc_count').append(index);
   }
 });
});

function addXtern(person) {
 var li = $('li.people-template')
   .clone()
   .removeClass('people-template')
   .attr('data-id', person.id);

 li.find('.person-name')
   .html(person.name);

 $('#Rivals').append(li);
}
