$.get('https://dc-th-booklist.herokuapp.com')
  .done(function (){
    console.log('Success');
  })
  .fail(function(err){
    console.log('error:', err);
  })
  .always(function(){
    console.log('Always Run');
  });

