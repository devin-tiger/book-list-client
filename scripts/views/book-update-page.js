var app = app || {};

(module => { 

    const bookUpdatePage = {}

    const $page = $('#book-update-page')

    

    bookUpdatePage.init  = (book) => {
        $('.page').hide()
        $('#update-form-div').empty()
        $('#update-form-div').append(`<form data-id="${book.id}" id="update-form" action="submit"><input class = "form-input" id = "update-title" type="text" value="${book.title}"><br>
        <input class = "form-input" id = "update-author" type="text" value="${book.author}" required><br>
        <input class = "form-input" id="update-isbn" type="text" value="${book.isbn}" required> <br>
        <input class = "form-input" id="update-image_url" type="text" value="${book.image_url}" required><br>
        <input class = "form-input" id="update-description" type="textarea" rows="10" cols="30" value="${book.description}" required><br>  
        <button id="update-book-button" type="click">Submit</button></form>`)
        


         console.log('Update page hello')
         $('#update-book-button').one('click', (e) => {
            e.preventDefault();
            submit();
            console.log('Update button is working')
        })
        $page.show()
    }

    function submit () {
        console.log('inside of bookUpdatePage')
        let updateBook = {
            id: $('form').data('id'),
            author: $('#update-author').val(),
            title: $('#update-title').val(),
            isbn: $('#update-isbn').val(),
            image_url: $('#update-image_url').val(),
            description: $('#update-description').val(),
            
        }
        console.log(updateBook)
        app.Book.update(updateBook)
        

    }

    module.bookUpdatePage = bookUpdatePage

})(app)