var app = angular.module('leaderboard', ['firebase', 'parking']);

app.constant('FIREBASE_URI', 'https://hackorama.firebaseio.com/');

app.controller('MainCtrl', function (GaragesService, Map) {
    var main = this;
    main.newContestant = {lane: '', name: '', score: ''};
    main.currentContestant = null;
    main.garages = GaragesService.getGarages();
    // main.garageList = Map.geoQueryGarages;

    Map.start(main);
/*
    main.addContestant = function () {
        ContestantsService.addContestant(angular.copy(main.newContestant));
        main.newContestant = {lane: '', name: '', score: ''};
    };

    main.updateContestant = function (contestant) {
        ContestantsService.updateContestant(contestant);
    };

    main.removeContestant = function (contestant) {
        ContestantsService.removeContestant(contestant);
    };

    main.incrementScore = function () {
        main.currentContestant.score = parseInt(main.currentContestant.score, 10) + 1;
        main.updateContestant(main.currentContestant);
    };

    main.decrementScore = function () {
        main.currentContestant.score = parseInt(main.currentContestant.score, 10) - 1;
        main.updateContestant(main.currentContestant);
    };
    */
});

app.service('GaragesService', function ($firebaseArray, FIREBASE_URI) {
    var service = this;
    var ref = new Firebase('https://publicdata-parking.firebaseio.com/san_francisco/garages');
    var garages = $firebaseArray(ref);

    service.getGarages = function () {
        console.log (garages);
        return garages;
    };

    service.addContestant = function (contestant) {
        contestants.$add(contestant);
    };

    service.updateContestant = function (contestant) {
        contestants.$save(contestant);
    };

    service.removeContestant = function (contestant) {
        contestants.$remove(contestant);
    };
});
