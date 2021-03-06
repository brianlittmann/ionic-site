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
import * as import101 from '../components/content/content';
import * as import102 from '../components/content/content.ngfactory';
import * as import103 from '../components/button/button';
import * as import104 from '../components/button/button.ngfactory';
import * as import105 from '../components/list/list.ngfactory';
import * as import106 from '../components/item/item';
import * as import107 from '../components/item/item.ngfactory';
import * as import108 from '../components/list/list-header.ngfactory';
import * as import109 from '@angular/core/src/linker/query_list';
import * as import110 from '../components/label/label.ngfactory';
import * as import111 from '../components/select/select';
import * as import112 from '../components/select/select.ngfactory';
import * as import113 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import114 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import115 from '../components/option/option.ngfactory';
import * as import128 from '../components/toolbar/toolbar-item.ngfactory';
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
export declare class Wrapper_ModalFirstPage {
    _eventHandler: Function;
    context: import1.ModalFirstPage;
    _changed: boolean;
    constructor(p0: any);
    ngOnDetach(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import83.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import83.AppView<any>, componentView: import83.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import83.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ModalContentPage {
    _eventHandler: Function;
    context: import1.ModalContentPage;
    _changed: boolean;
    constructor(p0: any, p1: any);
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
export declare const ModalFirstPageNgFactory: import89.ComponentFactory<import1.ModalFirstPage>;
export declare class View_ModalFirstPage0 extends import83.AppView<import1.ModalFirstPage> {
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
    _text_8: any;
    _el_9: any;
    compView_9: import83.AppView<import101.Content>;
    _Content_9_3: import102.Wrapper_Content;
    _text_10: any;
    _el_11: any;
    _text_12: any;
    _el_13: any;
    compView_13: import83.AppView<import103.Button>;
    _Button_13_3: import104.Wrapper_Button;
    _text_14: any;
    _text_15: any;
    _text_16: any;
    _el_17: any;
    _List_17_3: import105.Wrapper_List;
    _text_18: any;
    _el_19: any;
    compView_19: import83.AppView<import106.Item>;
    _Item_19_3: import107.Wrapper_Item;
    _ListHeader_19_4: import108.Wrapper_ListHeader;
    _query_Label_19_0: import109.QueryList<any>;
    _query_Button_19_1: import109.QueryList<any>;
    _query_Icon_19_2: import109.QueryList<any>;
    _text_20: any;
    _text_21: any;
    _el_22: any;
    compView_22: import83.AppView<import106.Item>;
    _Item_22_3: import107.Wrapper_Item;
    _ItemContent_22_4: import107.Wrapper_ItemContent;
    _query_Label_22_0: import109.QueryList<any>;
    _query_Button_22_1: import109.QueryList<any>;
    _query_Icon_22_2: import109.QueryList<any>;
    _text_23: any;
    _el_24: any;
    _Label_24_3: import110.Wrapper_Label;
    _text_25: any;
    _text_26: any;
    _el_27: any;
    compView_27: import83.AppView<import111.Select>;
    _Select_27_3: import112.Wrapper_Select;
    _NG_VALUE_ACCESSOR_27_4: any[];
    _NgModel_27_5: import113.Wrapper_NgModel;
    _NgControl_27_6: any;
    _NgControlStatus_27_7: import114.Wrapper_NgControlStatus;
    _query_Option_27_0: import109.QueryList<any>;
    _text_28: any;
    _el_29: any;
    _Option_29_3: import115.Wrapper_Option;
    _text_30: any;
    _text_31: any;
    _el_32: any;
    _Option_32_3: import115.Wrapper_Option;
    _text_33: any;
    _text_34: any;
    _el_35: any;
    _Option_35_3: import115.Wrapper_Option;
    _text_36: any;
    _text_37: any;
    _el_38: any;
    _Option_38_3: import115.Wrapper_Option;
    _text_39: any;
    _text_40: any;
    _el_41: any;
    _Option_41_3: import115.Wrapper_Option;
    _text_42: any;
    _text_43: any;
    _el_44: any;
    _Option_44_3: import115.Wrapper_Option;
    _text_45: any;
    _text_46: any;
    _text_47: any;
    _text_48: any;
    _text_49: any;
    _el_50: any;
    _text_51: any;
    _el_52: any;
    compView_52: import83.AppView<import103.Button>;
    _Button_52_3: import104.Wrapper_Button;
    _text_53: any;
    _text_54: any;
    _text_55: any;
    _text_56: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_13(eventName: string, $event: any): boolean;
    handleEvent_27(eventName: string, $event: any): boolean;
    handleEvent_52(eventName: string, $event: any): boolean;
}
export declare const ModalContentPageNgFactory: import89.ComponentFactory<import1.ModalContentPage>;
export declare class View_ModalContentPage0 extends import83.AppView<import1.ModalContentPage> {
    _el_0: any;
    _Header_0_3: import96.Wrapper_Header;
    _text_1: any;
    _el_2: any;
    compView_2: import83.AppView<import97.Navbar>;
    _Navbar_2_3: import98.Wrapper_Navbar;
    _text_3: any;
    _el_4: any;
    _ToolbarItem_4_3: import128.Wrapper_ToolbarItem;
    _query_Button_4_0: import109.QueryList<any>;
    _text_5: any;
    _el_6: any;
    compView_6: import83.AppView<import103.Button>;
    _Button_6_3: import104.Wrapper_Button;
    _text_7: any;
    _text_8: any;
    _text_9: any;
    _el_10: any;
    compView_10: import83.AppView<import99.ToolbarTitle>;
    _ToolbarTitle_10_3: import100.Wrapper_ToolbarTitle;
    _text_11: any;
    _text_12: any;
    _text_13: any;
    _text_14: any;
    _el_15: any;
    compView_15: import83.AppView<import101.Content>;
    _Content_15_3: import102.Wrapper_Content;
    _text_16: any;
    _el_17: any;
    _text_18: any;
    _el_19: any;
    _text_20: any;
    _text_21: any;
    _el_22: any;
    _text_23: any;
    _text_24: any;
    _text_25: any;
    _el_26: any;
    _text_27: any;
    _el_28: any;
    _text_29: any;
    _text_30: any;
    _text_31: any;
    _el_32: any;
    compView_32: import83.AppView<import103.Button>;
    _Button_32_3: import104.Wrapper_Button;
    _text_33: any;
    _text_34: any;
    _text_35: any;
    _expr_49: any;
    _expr_50: any;
    _expr_51: any;
    constructor(viewUtils: import85.ViewUtils, parentView: import83.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import89.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    handleEvent_6(eventName: string, $event: any): boolean;
    handleEvent_32(eventName: string, $event: any): boolean;
}
