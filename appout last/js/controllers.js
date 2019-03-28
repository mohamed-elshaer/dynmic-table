var app = angular.module('myApp', []);

    app.controller('myController', function($scope) {
        $scope.data =[
            {
                "Name": "mohamed",
                "age": 25,
                "salary": 1000,
                "city": "tanta",
                "id": 12
            },
            {
                "Name": "ahmed",
                "age": 36,
                "salary": 2000,
                "city": "alex",
                "id": 10
            },
            {
                "Name": "mahmoud",
                "age": 22,
                "salary": 3000,
                "city": "basyoun",
                "id": 14
            },
            {
                "Name": "ola",
                "age": 34,
                "salary": 4000,
                "city": "santa",
                "id": 18
            },
            {
                "Name": "nour",
                "age": 28,
                "salary": 5000,
                "city": "zefta",
                "id": 16
            },
            {
                "Name": "sara",
                "age": 27,
                "salary": 6000,
                "city": "byhera",
                "id": 19
            },
            {
                "Name": "reda",
                "age": 32,
                "salary": 7000,
                "city": "shbeen el-kom",
                "id": 122
            },
            {
                "Name": "hassan",
                "age": 42,
                "salary": 8000,
                "city": "fayoum",
                "id": 145
            },
            {
                "Name": "tamer",
                "age": 23,
                "salary": 9000,
                "city": "giza",
                "id": 105
            },
            {
                "Name": "saeed",
                "age": 35,
                "salary": 10000,
                "city": "cairo",
                "id": 104
            }
        ];
        $scope.addData =function() {
            $scope.data.push({'Name':$scope.Name, 'age':$scope.age, 'salary':$scope.salary, 'city':$scope.city, 'id':$scope.id});
            $scope.Name='';
            $scope.age='';
            $scope.salary='';
            $scope.city='';
            $scope.id='';
        };



      });
     