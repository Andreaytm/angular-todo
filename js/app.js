angular.module("TodoApp", ["ngRoute", "angular-storage", "RouteControllers", "UserService", "TodoService", "TodoDirective"]);

angular.module("TodoApp").config(function($locationProvider, $routeProvider){

	$routeProvider.when("/", {
		templateUrl: "assets/templates/home.html",
		controller: "HomeController"   	    
	})
	.when("/accounts/register", {
		templateUrl: "assets/templates/register.html",
		controller: "RegisterController"
	})
	.when("/accounts/login", {
		templateUrl: "assets/templates/login.html",
		controller: "LoginController"
	})
	.when("/accounts/logout", {
		templateUrl: "assets/templates/logout.html",
		controller: "LogoutController"
	})
	.when("/todo", {
		templateUrl: "assets/templates/todo.html",
		controller: "TodoController"
	})
	.when("/todo/edit/:id", {
		templateUrl: "assets/templates/edit-todo.html",
		controller: "EditTodoController"
	})
		$locationProvider.html5Mode(true);
 //Enable href routing without hashes
   
});