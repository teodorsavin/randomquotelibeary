import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibService = /** @class */ (function () {
    function FooLibService() {
    }
    /**
     * @return {?}
     */
    FooLibService.prototype.randomQuote = /**
     * @return {?}
     */
    function () {
        return QUOTES[Math.floor(Math.random() * QUOTES.length)];
    };
    FooLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FooLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ FooLibService.ngInjectableDef = defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });
    return FooLibService;
}());
/** @type {?} */
var QUOTES = [
    "The difference between ordinary and extraordinary is that little extra.",
    "Experience is simply the name we give our mistakes.",
    "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.",
    "Why fit in when you were born to stand out?",
    "Always make a total effort, even when the odds are against you."
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibComponent = /** @class */ (function () {
    function FooLibComponent(fooLibService) {
        this.fooLibService = fooLibService;
    }
    /**
     * @return {?}
     */
    FooLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.randomQuote = this.fooLibService.randomQuote();
    };
    FooLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'foo-foo-lib',
                    template: "\n    <p>\n      {{randomQuote}}\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    FooLibComponent.ctorParameters = function () { return [
        { type: FooLibService }
    ]; };
    return FooLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooLibModule = /** @class */ (function () {
    function FooLibModule() {
    }
    FooLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FooLibComponent],
                    imports: [],
                    exports: [FooLibComponent]
                },] }
    ];
    return FooLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooLibService, FooLibComponent, FooLibModule };

//# sourceMappingURL=foo-lib.js.map