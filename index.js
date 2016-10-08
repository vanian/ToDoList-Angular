function TodoCtrl($scope) {
  
  $scope.todos = [  ];
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  $scope.addTodo = function () {
  $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
    $scope.clearCompleted = function () {
   $scope.todos = [ ];
    };
}

document.getElementById("checking").style.color = (document.main.lists.checked) ? "gray" : "black";