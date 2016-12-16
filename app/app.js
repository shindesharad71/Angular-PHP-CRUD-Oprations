var app = angular.module("crudapp", []);

app.controller('AppController', function() {

    this.dataArray = [{ id: 1599, name: "ABC", email: "A@b.com", password: "qwerfdff" },
        { id: 1599, name: "ABC", email: "A@b.com", password: "qwerfdff" },
        { id: 1599, name: "ABC", email: "A@b.com", password: "qwerfdff" },
        { id: 1599, name: "ABC", email: "A@b.com", password: "qwerfdff" }
    ];
});
