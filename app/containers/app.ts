import { Component, ViewEncapsulation, ApplicationRef, trigger, animate, state, style, transition } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    directives: [ ROUTER_DIRECTIVES ],
    pipes: [ AsyncPipe ],
    encapsulation: ViewEncapsulation.None,
    styles: [require('../styles/index.css')],
    template: require('./app.tmpl.html'),
})
export class App {

    constructor() {}

};