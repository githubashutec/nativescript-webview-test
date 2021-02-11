import { Component, OnInit } from "@angular/core";
import { WebViewExt } from "@nota/nativescript-webview-ext";

@Component({
    selector: "ns-webview",
    templateUrl: "./webview.component.html"
})
export class WebviewComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }
    // used nota:WebViewExt webview extension and used executeJavaScript function to inject javascript which will remove _blank attribute from links 
    loadFinished(event) {
        const webview = event.object as WebViewExt;
        //webview.registerLocalResource('test.xjs', '~assets/js/test.xjs');
        // if(webview.src.includes("influencer-app.lifo.ai") || webview.src.includes("influencer-beta.lifo.ai")) {
        //     webview.autoLoadJavaScriptFile('test.xjs', '~/assets/js/test.xjs');
        // }
        webview.autoLoadJavaScriptFile('test.xjs', '~/assets/js/test.xjs');
        webview.on('openInExternalBrowser', (msg) => console.log('need to open in external browser',msg.data));
        webview.on('openInSameWindow', (msg) => console.log('opened in same window',msg.data));
        // webview.autoExecuteJavaScript(`
        // helloWorld();
        // `
        // ,'helloWorld');
        // setTimeout(async () => {
        //     await webview.executeJavaScript(`links = document.links;
        //     for (i = 0, length = links.length; i < length; i++) {
        //          links[i].target == '_blank' && links[i].removeAttribute('target');
        //      }`);
        // }, 1000);
    }
}
