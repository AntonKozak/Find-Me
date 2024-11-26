import { z } from 'zod';

export const memberEditSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is to short' })
    .max(255, { message: 'Name is too long' }),
  city: z.string().min(3, { message: 'City is to short' }),
  country: z.string().min(3, { message: 'Country is to short' }),
  description: z.string().min(3, { message: 'Description is to short' }),
});

export type MemberEditSchema = z.infer<typeof memberEditSchema>;
