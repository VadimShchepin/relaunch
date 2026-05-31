import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KI-Sichtbarkeit für Ärzte & Praxen: HWG-konform in ChatGPT & Co. | aiseo.hamburg',
    description: 'Wie Arztpraxen in ChatGPT, Perplexity und Google AI empfohlen werden, ohne gegen das Heilmittelwerbegesetz zu verstoßen. Mit HWG-Formulierungstabelle, KI-Vertrauensleiter und MedicalClinic-Schema.',
    keywords: [
        'ki sichtbarkeit ärzte',
        'ai seo praxis',
        'chatgpt arzt empfehlung',
        'arztpraxis ki sichtbarkeit',
        'hwg konforme werbung praxis',
        'jameda doctolib ki',
        'medicalclinic schema arzt',
        'chatgpt arzt hamburg',
    ],
    openGraph: {
        title: 'KI-Sichtbarkeit für Ärzte & Praxen | HWG-konform in ChatGPT & Co.',
        description: 'Wie Arztpraxen in ChatGPT, Perplexity und Google AI empfohlen werden, ohne gegen das HWG zu verstoßen. Mit Formulierungstabelle, KI-Vertrauensleiter und MedicalClinic-Schema.',
        url: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
        siteName: 'aiseo.hamburg',
        locale: 'de_DE',
        type: 'article',
        images: ['https://aiseo.hamburg/photo/wissen_assets/medical-authority-ladder.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KI-Sichtbarkeit für Ärzte & Praxen | HWG-konform in ChatGPT & Co.',
        description: 'Wie Arztpraxen in ChatGPT, Perplexity und Google AI empfohlen werden, ohne gegen das HWG zu verstoßen.',
        images: ['https://aiseo.hamburg/photo/wissen_assets/medical-authority-ladder.webp'],
    },
    alternates: {
        canonical: 'https://aiseo.hamburg/wissen/ki-sichtbarkeit-aerzte',
        languages: {
            'de': '/wissen/ki-sichtbarkeit-aerzte',
            'x-default': '/wissen/ki-sichtbarkeit-aerzte',
        },
    },
    other: {
        'geo.region': 'DE-HH',
        'geo.placename': 'Hamburg',
        'geo.position': '53.5511;9.9937',
        'ICBM': '53.5511, 9.9937',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
