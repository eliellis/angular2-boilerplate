import {
  describe,
  expect,
  it,
  injectAsync,
  inject,
  async,
  beforeEachProviders
} from '@angular/core/testing';

import { routes } from "../routes/";
import { APP_ROUTER_PROVIDERS } from '../routes/';
import { Router, ActivatedRoute } from '@angular/router';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { provide } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { App } from './app';

class MockRouter extends Router { }
class MockActivatedRoute extends ActivatedRoute { }

// describe("testing app container instantiation", () => {
//     beforeEach(() => {
//         return [
//             APP_ROUTER_PROVIDERS,
//             NgRedux,
//             CVDActions,
//             CoreRodActions
//         ];
//     });

//     // it("checking that NgRedux is not null", injectAsync([TestComponentBuilder], (tcb) => {
//     //   console.log('got here')
//     //     // return tcb.createAsync(App).then((fixture) => {
//     //     //     fixture.detectChanges();
//     //     //     expect(fixture).not.to.be(null);
//     //     // });
//     // }));
// });