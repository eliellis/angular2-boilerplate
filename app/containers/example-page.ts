import { Component, ViewEncapsulation, ApplicationRef, trigger, animate, state, style, transition } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'example-page',
    pipes: [ AsyncPipe ],
    encapsulation: ViewEncapsulation.None,
    template: require('./example-page.tmpl.html'),
})
export class ExamplePage {

    constructor() {}

};