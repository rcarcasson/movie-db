import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FooterProvider {
    private footerSubject: Subject<boolean> = new Subject<boolean>();
    public footerRequestObs: Observable<boolean> = this.footerSubject.asObservable();

    constructor() {}

    public getShowingIntercept() {
        return this.footerRequestObs;
    }

    public hideFooter() {
        return this.footerSubject.next(false);
    }

    public showFooter(){
        return this.footerSubject.next(true);
    }
}