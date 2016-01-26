import myapp.User

class BootStrap {

    def init = { servletContext ->
        def user = new User(lastName: "Doe",dob: new Date(),firstName: "John",password: "test")
        user.save(failOnError:true)

    }
    def destroy = {
    }
}
