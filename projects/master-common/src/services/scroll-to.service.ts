import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollToService {

    private $scrollTrigger: BehaviorSubject<ElementRef> = new BehaviorSubject<ElementRef>(null);

    constructor() {
        // watch for trigger
        // wait for 1/10th second
        // scroll to element
        this.$scrollTrigger.pipe(debounceTime(100)).subscribe((element: ElementRef) => {
            if (element) {
                element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        });
    }


    scrollTo(element: ElementRef): void {
        this.$scrollTrigger.next(element);
    }

}

