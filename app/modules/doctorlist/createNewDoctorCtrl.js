angular.module('yeomanApp')
    .controller('createNewDoctorCtrl', function($http) {
        var vm = this;
        vm.fnSaveDoctor = function(doctor) {
            var req = {
                method: 'POST',
                url: "http://localhost:3000/api/doctors",
                headers: {
                    'Content-Type': "application/json",
                    "Access-Control-Allow-Origin": "*"

                },
                data: doctor
            }

            $http(req).then(function(data) {
                vm.doctor = {};
                alert("Successfully added!");
            });
            // $http.post("http://localhost:3000/api/doctors").then(
            //     function(data) {
            //         console.log("doctor added")
            //     }
            // )
        }

        function oninit() {
            var req = {
                method: 'GET',
                url: "http://localhost:3000/api/doctors",
                headers: {
                    'Content-Type': "application/json"

                }
            }

            $http(req).then(function(data) { console.log(data) });
        }
        oninit();

    });