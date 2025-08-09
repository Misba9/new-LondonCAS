import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'London College of Advanced Studies | Learn. Advance. Succeed.',
  description: 'High-quality, career-focused education in Health and Social Care. Approved centre for Highfield Qualifications in East London.',
  keywords: 'education, college, London, health and social care, qualifications, courses, adult learning',
  authors: [{ name: 'London College of Advanced Studies' }],
  openGraph: {
    title: 'London College of Advanced Studies',
    description: 'Learn. Advance. Succeed. - Career-focused education in East London',
    url: 'https://londoncas.co.uk',
    siteName: 'London College of Advanced Studies',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://londoncas.co.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "name": "London College of Advanced Studies",
              "alternateName": "LCAS",
              "url": "https://londoncas.co.uk",
              "logo": "https://londoncas.co.uk/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-20-XXXX-XXXX",
                "contactType": "customer service",
                "email": "info@londoncas.co.uk"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9 New Road",
                "addressLocality": "London",
                "postalCode": "E1 1HE",
                "addressCountry": "GB"
              },
              "foundingDate": "2025",
              "description": "Dynamic and inclusive private college delivering high-quality, career-focused education in Health and Social Care."
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}