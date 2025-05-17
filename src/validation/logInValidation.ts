import * as yup from "yup"

import { UserLoginFormData, UserRegistrationFormData } from "../types/auth.types";
import { validateRequiredEmail, validateRequiredPassword, validateRequiredPasswordConfirmation, validateRequiredString } from "./validation.services";

export const signUpSchema: yup.ObjectSchema<UserRegistrationFormData> = yup.object({
  email: validateRequiredEmail('E-mail'),
  password: validateRequiredPassword('Password'),
  password_confirmation: validateRequiredPasswordConfirmation('Confirm Password', 'password'),
});

export const loginSchema: yup.ObjectSchema<UserLoginFormData> = yup.object({
  email: validateRequiredEmail('E-mail'),
  password: validateRequiredString('Password'),
});
