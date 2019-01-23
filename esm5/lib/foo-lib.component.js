/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FooLibService } from './foo-lib.service';
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
export { FooLibComponent };
if (false) {
    /** @type {?} */
    FooLibComponent.prototype.randomQuote;
    /**
     * @type {?}
     * @private
     */
    FooLibComponent.prototype.fooLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb28tbGliLyIsInNvdXJjZXMiOlsibGliL2Zvby1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRDtJQVdFLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7Ozs7SUFFcEQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3JELENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGdEQUlUO2lCQUVGOzs7O2dCQVZRLGFBQWE7O0lBbUJ0QixzQkFBQztDQUFBLEFBakJELElBaUJDO1NBUlksZUFBZTs7O0lBQzFCLHNDQUFrQjs7Ozs7SUFDTix3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9vTGliU2VydmljZSB9IGZyb20gJy4vZm9vLWxpYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9vLWZvby1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAge3tyYW5kb21RdW90ZX19XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZvb0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJhbmRvbVF1b3RlOnN0cmluZ1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvb0xpYlNlcnZpY2U6IEZvb0xpYlNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yYW5kb21RdW90ZSA9IHRoaXMuZm9vTGliU2VydmljZS5yYW5kb21RdW90ZSgpXG4gIH1cblxufVxuIl19