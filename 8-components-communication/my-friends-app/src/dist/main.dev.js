"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _FriendContact = _interopRequireDefault(require("./components/FriendContact.vue"));

var _NewFriend = _interopRequireDefault(require("./components/NewFriend.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.component('friend-contact', _FriendContact["default"]);
app.component('new-friend', _NewFriend["default"]);
app.mount('#app');