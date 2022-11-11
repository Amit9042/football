import { Validators } from "@angular/forms";

export class AuthValidationConstants {
  public static readonly PASSWORD_VALIDATION = [Validators.required, Validators.minLength(8)];
  /* Validators.pattern(AppRegexConstants.ALPHA_NUMERIC_SPECIAL_CHAR_REGEXP) */
}
