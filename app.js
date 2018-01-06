$.get('https://dc-th-booklist.herokuapp.com/test')
  .done(function (){
    console.log('Success');
  })
  .fail(function(err){
    console.log('error:', err);
  })
  .always(function(){
    console.log('Always Run');
  });