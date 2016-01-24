package myapp

class User {
    String firstName
    String lastName
    String passowrd
    Date dob
    static constraints = {
        firstName nullable: false
        lastName nullable: false
        dob nullable: true
        passowrd nullable: false, passowrd:true
    }
}
