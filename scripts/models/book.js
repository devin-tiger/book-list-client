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

/////
var app = app || {};
const _API_URL_ = localStorage

function Book () {

}

book.all =[]
book.fetchAll = () => $getJSON(_API_URL_)
book.fetchON =(id) => $getJSON(_API_URL_ + '/' + id)
 
module.Book = Book

(app)