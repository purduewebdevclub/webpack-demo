import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `<div> Welcome to the {{title}} app!</div>`
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = "Hello World";
    }
}
