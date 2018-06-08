"use strict";
{
    function itemService($http) {
        let vm = this;
        let items = [];
        const getAllItems = () => {
            return $http({
                method: "GET",
                url: "/items"
            }).then(function(response){
                items = response.data;
                return items;
            });
            
        };
        const addItem = () => {
            return $http({
                method: "POST",
                url: "/items"
            }).then(function(newItem){
                let cost = "";
                let item = "";
                vm.newItem = {item, cost};
                items.push(newItem);

                console.log(newItem);
        });
    }

        return{
            getAllItems,
            addItem
        };
    }

    itemService.$inject = ["$http"];
    
    angular
        .module("store")
        .factory("itemService", itemService);
}