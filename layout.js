import './globals.css';

// Font variables are injected via CSS @import in globals.css for build compatibility.
// When deploying to Vercel with internet access, you can optionally switch back to
// next/font/google for optimal performance (font files served from Vercel CDN).
const cormorant = { variable: '--font-cormorant' };
const dmSans = { variable: '--font-dm-sans' };

export const metadata = {
  title: 'Graded Interiors | Transitional Interior Design — Plymouth, UK',
  description:
    'Crafted and character-driven interiors by Kimber. Designing for heritage homes and individuals seeking a meaningful, soul connection with their spaces. Based in Plymouth, serving the UK and beyond.',
  keywords:
    'interior design, heritage interiors, transitional design, Plymouth interior designer, period homes, colour consultation, space planning',
  openGraph: {
    title: 'Graded Interiors | Heritage Interior Design',
    description:
      'Crafted and character-driven interiors for heritage homes and individuals seeking a meaningful soul connection with their spaces.',
    url: 'https://www.gradedinteriors.co.uk',
    siteName: 'Graded Interiors',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
