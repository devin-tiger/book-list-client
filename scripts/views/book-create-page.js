var app = app || {};

(module => { 

    const bookCreatePage = {}

    const $page = $('#book-create-page')

    

    bookCreatePage.init  = () => {
        $page.show()
         console.log('create page hello')
    } 

    module.bookCreatePage = bookCreatePage

})(app)