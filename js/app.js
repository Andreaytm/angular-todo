angular.module("TodoApp", ["ngRoute", "angular-storage", "RouteControllers", "UserService", "TodoService", "TodoDirective"]);
TodoApp.constant("baseUrl", "https://andreaytm.github.io/angular-todo");

angular.module("TodoApp").config(function($locationProvider, $routeProvider){

	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	})
	.when("/accounts/register", {
		templateUrl: "templates/register.html",
		controller: "RegisterController"
	})
	.when("/accounts/login", {
		templateUrl: "templates/login.html",
		controller: "LoginController"
	})
	.when("/accounts/logout", {
		templateUrl: "templates/logout.html",
		controller: "LogoutController"
	})
	.when("/todo", {
		templateUrl: "templates/todo.html",
		controller: "TodoController"
	})
	.when("/todo/edit/:id", {
		templateUrl: "templates/edit-todo.html",
		controller: "EditTodoController"
	});
		$locationProvider.html5Mode(true);
 //Enable href routing without hashes

});
