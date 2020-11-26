"use strict";

var _vue = require("vue");

var _AddUser = _interopRequireDefault(require("./components/AddUser.vue"));

var _ListUsers = _interopRequireDefault(require("./components/ListUsers.vue"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.component('list-user', _ListUsers["default"]);
app.component('add-user', _AddUser["default"]);
app.mount('#app');