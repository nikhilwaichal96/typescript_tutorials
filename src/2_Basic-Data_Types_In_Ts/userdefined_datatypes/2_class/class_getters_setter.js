"use strict";
class person {
    constructor() {
        this._name = "N/A";
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
let p1 = new person();
p1.name = "nikhil";
p1.name;
