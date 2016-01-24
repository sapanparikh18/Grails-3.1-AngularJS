<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Grails Angular Profile Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <asset:stylesheet href="materialize/css/materialize.min.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>
</head>
<body ng-app="myapp">
<ul id="dropdown1" class="dropdown-content">
    <li><a href="#user/create">Create</a></li>
    <li><a href="#user">List</a></li>
    <li class="divider"></li>
    <li><a href="#index">Home</a></li>
</ul>
<nav>
    <div class="container">
    <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Grails</a>
        <ul class="right hide-on-med-and-down">
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-button" href="#!" data-activates="dropdown1">User<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    </div>
    </div>
</nav>
<div class="container">
    <div ng-view></div>
</div>
    <div class="footer" role="contentinfo"></div>
    <asset:javascript src="jquery/jquery.js"></asset:javascript>
    <asset:javascript src="materialize/js/materialize.min.js"></asset:javascript>
    <asset:javascript src="myapp/app" />

<script>
    $(function(){
        $(".dropdown-button").dropdown();
    })
</script>
</body>
</html>
