import type { Metadata} from "next";
import {Trirong} from 'next/font/google'
import {Martel_Sans} from 'next/font/google'
import {Ubuntu_Mono} from 'next/font/google'
import './styles/global.scss';


import Header from '../components/Header/Header';
import React from "react";

const ubuntu_mono = Ubuntu_Mono({
    subsets: ['latin'],
    variable: "--font-ubuntu-mono",
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

const martel_sans = Martel_Sans({
    variable: "--font-martel-sans",
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '800', '900'],
});

const trirong = Trirong({
    variable: "--font-trirong",
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: "Rémy LAFAYE",
    description: "Développeur web front-end.",
    openGraph: {
        title : "Rémy LAFAYE",
        description: "Développeur web front-end.",
        url : "https://remylafaye.fr",
        type: "website",
        images : [
            {
                url: "https://remylafaye.fr/public/favicons/android-chrome-512x512.png",
            },
        ],
    },
other: {
    'application/ld+json': JSON.stringify({
        '@context': "https://schema.org",
        '@type': "Person",
        name: "Rémy LAFAYE",
        url: "https://remylafaye.fr",
        address: {
            '@type': "PostalAddress",
            addressLocality: "Orléans",
            postalCode: "45000",
        },
        sameAs: [
            "https://www.linkedin.com/in/remylafaye/",
            "https://github.com/RKL715",
        ],
        knowsAbout: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "TypeScript",
            "SEO",
            "Swagger",
            "API REST",
            "Next.js",
        ],
        email: "remycontact@pm.me",
        }),
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${ubuntu_mono.className} ${trirong.className} ${martel_sans.className}`}>
        <body>
        <div className='frame'>
            <Header />
            <div id="root">{children}
            </div>
        </div>
        </body>

        </html>
    )
        ;
}
