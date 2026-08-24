import React from 'react';
import { ConfirmationPage } from '@/components/ui/ConfirmationPage';

export default function NewsletterConfirmedPage() {
    return (
        <ConfirmationPage
            breadcrumb="Newsletter bestätigt"
            eyebrow="Anmeldung bestätigt"
            title="Newsletter bestätigt!"
            lead="Danke für deine Anmeldung. Du erhältst bald die erste Mail mit wertvollen Insights zur KI-Sichtbarkeit."
            links={[
                { href: '/', label: 'Zurück zur Startseite', primary: true },
                { href: '/wissen', label: 'Guides lesen' },
            ]}
        />
    );
}
