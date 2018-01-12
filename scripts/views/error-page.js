var app = app || {};

(module => { 

    const errorPage = {}

    const $page = $('#book-error-page')

    

    errorPage.init  = () => {
        $page.show()
         console.log('create page hello')
    } 

    module.errorPage = errorPage

})(app)