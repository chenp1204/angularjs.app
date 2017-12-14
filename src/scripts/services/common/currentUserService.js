"use strict";

var loginUser;
var json = sessionStorage.getItem('loginUser');
if (json && typeof json != 'undefined') {
    loginUser = JSON.parse(json);
}

export default function() {
    return loginUser;
};