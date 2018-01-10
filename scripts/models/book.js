let __API_URL__ = "https://dc-th-booklist.herokuapp.com/api/v1/books"
// let __API_URL__ = "http://localhost:3000/api/v1/books"

function Book(){

}

Book.all = []

Book.fetchAll = () => $.getJSON(__API_URL__)
Book.fetchOne = (id) => $.getJSON(__API_URL__, 'id')







$.getJSON(__API_URL__).then(results => {
  console.log(results)
  results.forEach(bookData => {
    $('#book-list').append(`<p>Book Title: ${bookData.title} <br> Book Author: ${bookData.author}</p>`)
  })

  $('#book-count').append(`<p>Book Count: ${results.length}</p>`)
})