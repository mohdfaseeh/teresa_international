import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Teresa International',
  description: "India's best interior design company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
