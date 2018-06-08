"use strict";
{
    let shop = {
        controller: function(itemService) {
            let vm = this;
            itemService.getAllItems().then(function(response){
                vm.items = response
            });
            vm.add = function(response){
                let n = {
                    item: response.name,
                    cost: response.price                }
                console.log("testing?");
                vm.addTo = itemService.addItem(n);
                console.log(n);
            }
        },
        template: `<p>Welcome to the Store</p>
        <div ng-repeat="i in $ctrl.items">
        <p>{{i.item}}{{i.cost}}</p>
        </div>
        <input id="addField" placeholder="Add an item" type="text" ng-model="item" />
        <input id="addField" placeholder="Price your item" type="number" ng-model="cost" />
        <button ng-click="$ctrl.add()">Add</button>
        `
    }

    shop.$inject = ["itemService"];

    angular
        .module("store")
        .component("shop", shop);
}