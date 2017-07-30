angular.module('yeomanApp')
    .component('doctorComponent', {
        templateUrl: "modules/mainlist/doctorComponentView.html",
        bindings: {
            doctorDetails: "="
        },
        controller: function($state) {
            var vm = this;
            vm.fnDoctorDetailList = function(doctorId) {
                $state.go("doctordetail", { id: doctorId })
            }
            this.products = [

                { name: 'iPhone', price: 500.00 },
                { name: 'iPad', price: 800.00 },
                { name: 'Macbook', price: 1200.00 }
            ];

            this.selectedProduct = this.products[0];
        },
        controllerAs: "vm"

    });