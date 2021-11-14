import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appConfirmpsw]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmpswDirective,
    multi: true
  }]
})
export class ConfirmpswDirective implements Validator {

  @Input('appConfirmpsw') confirmpsw: string;
  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } {
    // console.log(this.confirmpsw);
    return this.confirmpsw ? comfirmPswValidator(this.confirmpsw)(control) : null;
  }
}

export function comfirmPswValidator(_confirmpsw: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!control.value) {
      return { 'required': true };
    }
    return control.value !== _confirmpsw ? { 'confirmpsw': { value: true } } : null;
  };
}