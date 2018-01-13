var app = app || {};

(module => { 

    const bookCreatePage = {}

    const $page = $('#book-create-page')

    

    bookCreatePage.init  = () => {
        $page.show()
         console.log('create page hello')
         $('#new-book-button').one('click', (e) => {
            e.preventDefault();
            submit();
            console.log('button is working')
        })

    } 

    function submit () {
        console.log('inside of bookCreatePage')
        let newBook = {
            author: $('#new-author').val(),
            title: $('#new-title').val(),
            isbn: $('#new-isbn').val(),
            image_url: $('#new-image_url').val(),
            description: $('#new-description').val(),
            
        }
        console.log(newBook)
        app.Book.create(newBook)
        .then(() => page('/'))

    }

    module.bookCreatePage = bookCreatePage

})(app)