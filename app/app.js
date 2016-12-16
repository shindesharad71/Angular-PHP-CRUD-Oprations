var app = angular.module("crudapp", []);

app.controller('AppController', function() {

    this.dataArray = [{ name: "ABC", email: "A@b.com", password: "qwerfdff" }, ];

    this.SubmitForm = function() {
        this.dataArray.push({ name: this.item.name, email: this.item.email, password: this.item.password });

        this.item.name = "";
        this.item.email = "";
        this.item.password = "";
    }
});
