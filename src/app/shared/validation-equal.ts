import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";
import { OnChanges, Input, Directive, SimpleChanges, forwardRef } from "@angular/core";

export function equal(item: any): ValidatorFn {
    return (control: AbstractControl):{[key:string]:any} => {
        if(item === control.value) {
            return null;
        }
        return {'equal': control.value};
    }
}
@Directive({
    selector: '[equal]',
    providers: [{provide: NG_VALIDATORS, useExisting:forwardRef(() =>EqualValidator),multi:true}]
})
export class EqualValidator implements Validator, OnChanges {
    @Input('equal')
    item;
    valFn:Function = equal(this.item);

    ngOnChanges(changes): void {
        if(changes.item) {
            this.valFn = equal(this.item);
        }    
    }

    validate(c: AbstractControl): { [key: string]: any; } {
        return this.valFn(c);
    }


}