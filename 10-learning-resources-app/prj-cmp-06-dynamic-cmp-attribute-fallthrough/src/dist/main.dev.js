"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _BaseCard = _interopRequireDefault(require("./components/UI/BaseCard"));

var _BaseButton = _interopRequireDefault(require("./components/UI/BaseButton"));

var _BaseDialog = _interopRequireDefault(require("./components/UI/BaseDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.component('base-card', _BaseCard["default"]);
app.component('base-button', _BaseButton["default"]);
app.component('base-dialog', _BaseDialog["default"]);
app.mount('#app');