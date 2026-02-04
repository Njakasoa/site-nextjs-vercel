import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val.replace(/\s/g, '')),
      'Veuillez entrer un numéro de téléphone valide'
    ),
  subject: z
    .string()
    .min(5, 'Le sujet doit contenir au moins 5 caractères')
    .max(200, 'Le sujet est trop long'),
  message: z
    .string()
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(5000, 'Le message est trop long'),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      'Vous devez accepter le traitement de vos données'
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
