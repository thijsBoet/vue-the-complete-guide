"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _BaseBadge = _interopRequireDefault(require("./components/UI/BaseBadge.vue"));

var _BaseCard = _interopRequireDefault(require("./components/UI/BaseCard.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]); // Global component registration

app.component('base-badge', _BaseBadge["default"]);
app.component('base-card', _BaseCard["default"]);
app.mount('#app');