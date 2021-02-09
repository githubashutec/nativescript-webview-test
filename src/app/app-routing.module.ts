import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { WebviewComponent } from "./webview/webview.component";
import { WebViewExtModule } from "@nota/nativescript-webview-ext/angular";
const routes: Routes = [
    { path: "", redirectTo: "/webview", pathMatch: "full" },
    { path: "webview", component: WebviewComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes), WebViewExtModule],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
