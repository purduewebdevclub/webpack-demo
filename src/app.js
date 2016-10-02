import "bootstrap/dist/css/bootstrap.css";
import 'babel-polyfill';
import angular from 'angular';
class MyController {
    constructor() {
    }
}
angular.module('myApp', [])
    .controller("MyController", MyController);

