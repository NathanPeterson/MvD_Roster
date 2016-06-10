$(function() {
 $.get({
   url: xternUrl,
   success: function processMutants(people) {
     $.each(people, function(i, person) {
       addXtern(person);
     });
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
