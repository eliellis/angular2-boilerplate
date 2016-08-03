import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/jasmine-patch';

import 'ts-helpers';

import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import {setBaseTestProviders} from '@angular/core/testing';

import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

var testContext = (<{ context?: Function }>require).context('../app', true, /\.spec\.ts/);

/*
 * get all the files
 * for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

// requires and returns all modules that match
var modules = requireAll(testContext);