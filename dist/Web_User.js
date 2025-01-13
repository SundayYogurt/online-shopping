"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.UserState.NEW;
    }
    getId() {
        return this.login_id;
    }
    getState() {
        return this.state;
    }
    setId(state) {
        this.login_id = this.login_id;
    }
    setPassword(password) {
        this.password = password;
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return `ID = ${this.login_id} State = ${this.state}`;
    }
}
exports.WebUser = WebUser;
