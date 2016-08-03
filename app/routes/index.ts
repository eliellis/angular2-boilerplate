import { provideRouter, RouterConfig } from '@angular/router';
import { ExamplePage } from '../containers/example-page';

export let routes: RouterConfig = [
    { path: '', component: ExamplePage }
];

export let APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];