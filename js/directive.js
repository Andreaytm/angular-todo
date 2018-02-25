angular.module("TodoDirective", []).directive("todoTable", function() {
	return {
		restrict: "AE", //AE-->Attribute/Element
		templateUrl: "templates/directives/todo-table.html"
	};
});