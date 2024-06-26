import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import './globals.css';
import './core-style.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-gray-50">
        <main vaul-drawer-wrapper="">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
