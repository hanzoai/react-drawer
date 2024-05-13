import { Hero } from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Drawer',
  description: 'Drawer component for React.',
  openGraph: {
    title: 'React Drawer',
    description: 'Drawer component for React.',
    url: 'https://drawer.ui.hanzo.ai',
    siteName: 'React Drawer',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'React Drawer',
    card: 'summary_large_image',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <div className="antialiased">
      <Hero />
    </div>
  );
}
