// $.getJSON(__API_URL__).then(results => {
//   console.log(results)
//   results.forEach(bookData => {
//     $('#book-list').append(`<p>Book Title: ${bookData.title} <br> Book Author: ${bookData.author}</p>`)
//   })

//   $('#book-count').append(`<p>Book Count: ${results.length}</p>`)
// })

var app = app || {};

(module => {

  const __API_URL__ = "https://dc-th-booklist.herokuapp.com/api/v1/books"
  // const __API_URL__ = "http://localhost:3000"

  function Book(){

  }

  function errorCallback(err){
    module.errorPage.initErrorPage(err);
  }

  Book.all = []

  Book.fetchAll = () => $.getJSON(__API_URL__).catch(errorCallback)
  Book.fetchOne = (id) => $.getJSON(__API_URL__ + '/' + id).catch(errorCallback)

  Book.deleteOne = id => {
    return $.ajax({
      url: __API_URL__ + '/' + id,
      method: 'DELETE'
    }).then(() => page('/'))
    .catch(errorCallback)
  }

  Book.update = book => {
    return $.ajax({
      url: __API_URL__ + '/' + book.id,
      method: 'PUT',
      data: book
    }).then(() => page('/'))
    .catch(errorCallback)
  }

  Book.create = book => {
    return $.post(__API_URL__, book).catch(errorCallback)
  }

  
    module.Book = Book
    
})(app)
