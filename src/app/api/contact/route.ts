import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Log the submission (simulate backend processing)
    console.log('📧 Nouveau message de contact:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    // TODO: Integrate with your email service
    // Examples:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Brevo: https://brevo.com
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL || 'contact@takamoa.com',
    //   subject: `Nouveau message de ${validatedData.name}`,
    //   html: `<p><strong>Nom:</strong> ${validatedData.name}</p>
    //          <p><strong>Email:</strong> ${validatedData.email}</p>
    //          <p><strong>Téléphone:</strong> ${validatedData.phone || 'Non fourni'}</p>
    //          <p><strong>Sujet:</strong> ${validatedData.subject}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${validatedData.message}</p>`,
    // });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message:
          'Votre message a été envoyé avec succès. Nous vous recontacterons sous 24h.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}
