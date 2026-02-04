'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { CheckCircle2, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>(
    {}
  );
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.data),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Card className="border-green-500/50">
        <CardContent className="p-4 sm:p-6 pt-6">
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Message envoyé !</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Merci de nous avoir contacté. Nous vous revenons sous 24h avec une
              réponse personnalisée.
            </p>
            <Button
              className="mt-4 sm:mt-6"
              variant="outline"
              onClick={() => setStatus('idle')}
            >
              Envoyer un autre message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Envoyez-nous un message</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="name" className="text-sm">
                Nom complet <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Votre nom"
                value={formData.name || ''}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className="h-10"
              />
              {errors.name && (
                <p className="text-xs sm:text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email || ''}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className="h-10"
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-sm">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+261 34 00 000 00"
                value={formData.phone || ''}
                onChange={handleChange}
                className="h-10"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="subject" className="text-sm">
                Sujet <span className="text-destructive">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="De quoi souhaitez-vous parler ?"
                value={formData.subject || ''}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                className="h-10"
              />
              {errors.subject && (
                <p className="text-xs sm:text-sm text-destructive">{errors.subject}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="message" className="text-sm">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet, vos objectifs, vos délais..."
              rows={4}
              value={formData.message || ''}
              onChange={handleChange}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs sm:text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox
                id="consent"
                checked={formData.consent || false}
                onCheckedChange={handleCheckboxChange}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-xs sm:text-sm font-normal leading-normal">
                J&apos;accepte que mes données soient traitées pour être recontacté(e)
                au sujet de ma demande.{' '}
                <span className="text-destructive">*</span>
              </Label>
            </div>
            {errors.consent && (
              <p className="text-xs sm:text-sm text-destructive">{errors.consent}</p>
            )}
          </div>

          {status === 'error' && (
            <p className="text-xs sm:text-sm text-destructive">
              Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter
              directement par email.
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              'Envoyer le message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
