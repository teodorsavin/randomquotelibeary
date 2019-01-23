import { OnInit } from '@angular/core';
import { FooLibService } from './foo-lib.service';
export declare class FooLibComponent implements OnInit {
    private fooLibService;
    randomQuote: string;
    constructor(fooLibService: FooLibService);
    ngOnInit(): void;
}
