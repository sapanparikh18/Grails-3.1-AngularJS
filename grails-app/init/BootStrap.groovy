import myapp.User

class BootStrap {

    def init = { servletContext ->
        def user = new User(lastName: "Parikh",dob: new Date(),firstName: "Sapan",password: "test")
        user.save(failOnError:true)

    }
    def destroy = {
    }
}
