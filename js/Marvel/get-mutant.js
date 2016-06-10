$(function() {
 $.get({
   url: mutantUrl,
   success: function processMutants(people) {
     index=0;
     $.each(people, function(i, person) {
       index++;
       addMutant(person);
     });
     $('.marvel_count').append(index);
   }
 });
});

function addMutant(person) {
 var li = $('li.marvel-template')
   .clone()
   .removeClass('marvel-template')
   .attr('data-id', person.id);

 li.find('.person-name')
   .html(person.mutant_name);

 $('#people').append(li);
}
