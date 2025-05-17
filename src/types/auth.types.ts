export type UserRegistrationFormData = {
  email: string;
  password: string;
  password_confirmation: string;
};

export type UserLoginFormData = {
  email: string;
  password: string;
};

export type ForgotPasswordFormData = {
  email: string;
};

export type UserResetPasswordFormData = {
  token: string;
  password: string;
  password_confirmation: string;
};