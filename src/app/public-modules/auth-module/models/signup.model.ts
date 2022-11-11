export interface SignupModel {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
  communicationLang: string;
  termsAndCondition: boolean;
  privacyPolicy: boolean;
}

export const SignupFormFields = {
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  password: 'password',
  confirmPassword: 'confirmPassword',
  communicationLang: 'communicationLang',
  termsAndCondition: 'termsAndCondition',
  privacyPolicy: 'privacyPolicy'
}
