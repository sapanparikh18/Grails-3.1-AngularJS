package myapp

class User {
    String firstName
    String lastName
    String password
    Date dob
    static constraints = {
        firstName nullable: false
        lastName nullable: false
        dob nullable: true
        password nullable: false, password:true
    }
}
