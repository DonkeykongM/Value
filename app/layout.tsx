import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AssetAlyze - Snap. Know. Decide. | AI Asset Valuation',
  description: 'Get instant AI-powered valuations of your jewelry, watches, collectibles and more. Take 3 photos, get accurate price estimates in seconds. GDPR compliant and trusted by 25,000+ users.',
  keywords: 'asset valuation, AI valuation, jewelry appraisal, watch valuation, collectibles pricing, instant estimate',
  openGraph: {
    title: 'AssetAlyze - AI Asset Valuation',
    description: 'Your stuff is a hidden treasure chest—open it with three quick photos. Our AI returns accurate price estimates in seconds.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssetAlyze - Snap. Know. Decide.',
    description: 'Get instant AI-powered valuations of your valuable items. Take 3 photos, get accurate estimates.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}