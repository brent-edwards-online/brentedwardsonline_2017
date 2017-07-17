'use strict';

var editorModule = angular.module('ngEditor', [])

editorModule.controller('editorCtrl', ['$scope', 'crudEventService', function ($scope, crudEventService) {
  $scope.message = 'What the';
  $scope.events = crudEventService.getEvents();
  $scope.states = crudEventService.getStates();
}]);

editorModule.constant("baseurl", "http://localhost:3000/")
  .service('crudEventService', ['$http', 'baseurl', function ($http, baseurl) {

    this.getStates = function() {
      return [
        'ACT',
        'WA',
        'NSW',
        'NT',
        'QLD',
        'TAZ',
        'VIC'
      ];
    }

    this.getEvents = function () {

      var events = [
        {
          name: "Event 1",
          shortname: 'E1',
          phonenumber: '0405215485',
          state: 'QLD',
          voteoptions: [
            {
              id: 1,
              name: ''
            }
          ]
        },
        {
          name: "Event 2",
          shortname: 'E2',
          phonenumber: '021614343',
          state: 'NT',
          voteoptions: [
            {
              id: 1,
              name: ''
            }
          ]
        }
      ];
      return events;

      //return $resource(baseurl + "event/", null, { 'update': { method: 'GET' } });
    };

    /*
    this.getEvent = function (event) {
      var id = event.id;
      return this.getEventById(id);
    };

    this.getEventById = function (id) {
      return $resource(baseurl + "event/:id", null, { 'update': { method: 'GET' } });
    };

    this.addEvent = function (event) {
      //return $http.get($baseurl+"dishes");
      return $resource(baseurl + "event/", null, { 'update': { method: 'POST' } });
    };

    this.updateEvent = function (event) {
      return $resource(baseurl + "event/", null, { 'update': { method: 'PUT' } });
    };

    this.deleteEvent = function (event) {
      var id = event.id;
      return this.deleteEventById(id);
    };

    this.deleteEventById = function (id) {
      return $resource(baseurl + "event/:id", null, { 'update': { method: 'DELETE' } });
    };
    */

  }]);


