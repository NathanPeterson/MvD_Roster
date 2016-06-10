$(function() {
 $.get({
   url: mutantUrl,
   success: function processMutants(people) {
     $.each(people, function(i, person) {
       marvel_count++;
       addMutant(person);
     });
     $('.marvel_count').html("Hero Count: "+marvel_count);
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
