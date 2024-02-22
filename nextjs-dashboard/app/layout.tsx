import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* apply font & Tailwind style antialiased */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
