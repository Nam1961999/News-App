"use strict";
class TodoTask {
    constructor(title) {
        this.title = title;
        this.checked = false;
    }

    check() {
        this.checked = true;
    }

    unCheck() {
        this.checked = false;
    }
}