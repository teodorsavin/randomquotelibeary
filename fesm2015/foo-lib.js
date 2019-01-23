import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooLibService {
    constructor() { }
    /**
     * @return {?}
     */
    randomQuote() {
        return QUOTES[Math.floor(Math.random() * QUOTES.length)];
    }
}
FooLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FooLibService.ctorParameters = () => [];
/** @nocollapse */ FooLibService.ngInjectableDef = defineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });
/** @type {?} */
const QUOTES = [
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
class FooLibComponent {
    /**
     * @param {?} fooLibService
     */
    constructor(fooLibService) {
        this.fooLibService = fooLibService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.randomQuote = this.fooLibService.randomQuote();
    }
}
FooLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'foo-foo-lib',
                template: `
    <p>
      {{randomQuote}}
    </p>
  `
            }] }
];
/** @nocollapse */
FooLibComponent.ctorParameters = () => [
    { type: FooLibService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooLibModule {
}
FooLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FooLibComponent],
                imports: [],
                exports: [FooLibComponent]
            },] }
];

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