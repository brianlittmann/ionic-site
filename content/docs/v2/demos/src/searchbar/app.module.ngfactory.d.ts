/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import83 from '@angular/core/src/linker/view';
import * as import85 from '@angular/core/src/linker/view_utils';
import * as import89 from '@angular/core/src/linker/component_factory';
import * as import90 from '../components/nav/nav';
import * as import91 from '../components/nav/nav.ngfactory';
import * as import96 from '../components/toolbar/toolbar.ngfactory';
import * as import97 from '../components/navbar/navbar';
import * as import98 from '../components/navbar/navbar.ngfactory';
import * as import99 from '../components/toolbar/toolbar-title';
import * as import100 from '../components/toolbar/toolbar-title.ngfactory';
import * as import101 from '../components/toolbar/toolbar';
import * as import102 from '../components/searchbar/searchbar';
import * as import103 from '../components/searchbar/searchbar.ngfactory';
import * as import104 from '../components/content/content';
import * as import105 from '../components/content/content.ngfactory';
import * as import106 from '../components/list/list.ngfactory';
import * as import107 from '@angular/core/src/linker/view_container';
import * as import108 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
export declare const AppModuleNgFactory: import0.NgModuleFactory<import1.AppModule>;
export declare class Wrapper_ApiDemoApp {
    _eventHandler: Function;
    context: import1.ApiDemoApp;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import83.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import83.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ApiDemoPage {
    _eventHandler: Function;
    context: import1.ApiDemoPage;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import83.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import83.AppView<any>, _eventHandler: any): void;
}
export declare const ApiDemoAppNgFactory: import89.ComponentFactory<import1.ApiDemoApp>;
export declare class View_ApiDemoApp0 extends import83.AppView<import1.ApiDemoApp> {
    _el_0: any;
    compView_0: import83.AppView<import90.Nav>;
    _Nav_0_3: import91.Wrapper_Nav;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}
export declare const ApiDemoPageNgFactory: import89.ComponentFactory<import1.ApiDemoPage>;
export declare class View_ApiDemoPage0 extends import83.AppView<import1.ApiDemoPage> {
    _el_0: any;
    _Header_0_3: import96.Wrapper_Header;
    _text_1: any;
    _el_2: any;
    compView_2: import83.AppView<import97.Navbar>;
    _Navbar_2_3: import98.Wrapper_Navbar;
    _text_3: any;
    _el_4: any;
    compView_4: import83.AppView<import99.ToolbarTitle>;
    _ToolbarTitle_4_3: import100.Wrapper_ToolbarTitle;
    _text_5: any;
    _text_6: any;
    _text_7: any;
    _el_8: any;
    compView_8: import83.AppView<import101.Toolbar>;
    _Toolbar_8_3: import96.Wrapper_Toolbar;
    _text_9: any;
    _el_10: any;
    compView_10: import83.AppView<import102.Searchbar>;
    _Searchbar_10_3: import103.Wrapper_Searchbar;
    _text_11: any;
    _text_12: any;
    _text_13: any;
    _el_14: any;
    compView_14: import83.AppView<import104.Content>;
    _Content_14_3: import105.Wrapper_Content;
    _text_15: any;
    _el_16: any;
    compView_16: import83.AppView<import102.Searchbar>;
    _Searchbar_16_3: import103.Wrapper_Searchbar;
    _text_17: any;
    _el_18: any;
    _text_19: any;
    _text_20: any;
    _el_21: any;
    _List_21_3: import106.Wrapper_List;
    _text_22: any;
    _anchor_23: any;
    _vc_23: import107.ViewContainer;
    _TemplateRef_23_5: any;
    _NgFor_23_6: import108.Wrapper_NgFor;
    _text_24: any;
    _text_25: any;
    _text_26: any;
    _el_27: any;
    _Footer_27_3: import96.Wrapper_Footer;
    _text_28: any;
    _el_29: any;
    compView_29: import83.AppView<import101.Toolbar>;
    _Toolbar_29_3: import96.Wrapper_Toolbar;
    _text_30: any;
    _el_31: any;
    compView_31: import83.AppView<import102.Searchbar>;
    _Searchbar_31_3: import103.Wrapper_Searchbar;
    _text_32: any;
    _text_33: any;
    _text_34: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    createEmbeddedViewInternal(nodeIndex: number): import83.AppView<any>;
    handleEvent_10(eventName: string, $event: any): boolean;
    handleEvent_16(eventName: string, $event: any): boolean;
    handleEvent_31(eventName: string, $event: any): boolean;
}
