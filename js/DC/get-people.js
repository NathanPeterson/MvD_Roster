$(function() {
 $.get({
   url: xternUrl,
   success: function processMutants(people) {
     $.each(people, function(i, person) {
       dc_count++;
       addXtern(person);
     });
     $('.dc_count').html("Hero Count: "+dc_count);
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
