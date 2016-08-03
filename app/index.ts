'use strict';
import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS }  from './routes/';
import { APP_BASE_HREF } from '@angular/common/index';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgRedux } from 'ng2-redux';

import { App } from './containers/app.ts';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
    enableProdMode();
} else {
    require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
    bootstrap(App, [
        HTTP_PROVIDERS,
        APP_ROUTER_PROVIDERS,
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]);
}
