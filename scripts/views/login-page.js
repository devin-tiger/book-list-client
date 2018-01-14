var app = app || {};

(module => { 

    const loginPage = {}

    const $page = $('#login-Page')

    loginPage.init = () => {
        $page.show()
        $('#invalid-pass').hide()
         console.log('log page')
         $('#pass-button').one('click', (e) => {
            e.preventDefault();
            submit();
            console.log('login button is working')
        })

    } 
        function submit () {
        console.log('inside of login page')
        let realPass = '1234'
        let userPass = $('#password').val()
        console.log(userPass)
        function testPassword (userPass){
            if (userPass === realPass){
                storePassword(userPass)
                console.log('passed')
                page('/')
                }else{
                    loginPage.init()
                    $('#invalid-pass').show()
                    
                }
            }
            testPassword(userPass)

    }

    function storePassword (userPass){
        localStorage.setItem('Token', JSON.stringify(userPass))
    }





    module.loginPage = loginPage

})(app)