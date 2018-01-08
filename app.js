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

  function getDogs(){
    $.getJSON('/books').then(results => {
      showBooks(results);
    });
  }

  function showBooks(books){
    var $ul = $('#books-list')
    $ul.empty()
    books.forEach(books =>{
        $ul.append(`<li> ${books.author}, ${books.title}, ${books.isbn}, ${books.img_url}</li>`)
    })
}