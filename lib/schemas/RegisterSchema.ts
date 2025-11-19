import { z } from 'zod';
import { errorMessages } from '../constants/TextMessage';

export const registerSchema = z
  .object({
    email: z.string().email({ message: errorMessages.email }),
    password: z
      .string()
      .min(6, { message: errorMessages.password.min })
      .regex(/\d/, { message: errorMessages.password.number })
      .regex(/[A-Z]/, { message: errorMessages.password.uppercase })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: errorMessages.password.special,
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  });

export type RegisterData = z.infer<typeof registerSchema>;
