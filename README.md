# Grails-3.1-AngularJS
Example project for grails 3.1 with angularjs profile. Shows simple demo of routing with controller
 
You can download this project from right withing the intellij using `file->new->project from version control->git` Once the project is opened as gradle project run bowerRefersh task in gradle pane to download the needed javascripts and then you can run the project.

The project demonstrates creating Grails domain class and then generate-all on that class.
Once a class+controller+views are created in the project we create ng-controller, ng-service and template for the domain class User

See the project commit history for reference

Following are the key js files

1. grails-app\assets\javascripts\myapp\core\services\DomainServiceFactory.js
2. grails-app\assets\javascripts\myapp\user\services\userDataFactoryService.js
3. grails-app\assets\javascripts\myapp\user\controllers\userController.js
4. grails-app\assets\javascripts\myapp\user\routes.js


######Landing page
![Landing Page](https://tinypng.com/site/output/4f9a8i9lk3v10ofo.png/1.png)
######List Page
![List Page](https://tinypng.com/site/output/joo75k1hu4jli4be.png/2.png)
######Show page
![List Page](https://tinypng.com/site/output/9tqrv8s70i5khp31.png/3.png)
######Create page
![List Page](https://tinypng.com/site/output/nqr349gun5grt47f.png/4.png)
