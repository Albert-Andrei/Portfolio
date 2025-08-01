import { Metadata } from 'next';

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL('https://aamoldovanu.com'),
  generator: 'Albert-Andrei Moldovanu',
  applicationName: 'Albert-Andrei Moldovanu',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Portfolio',
    'Albert',
    'Moldovanu',
    'Albert-Andrei Moldovanu',
    'Albert Moldovanu',
    'Andrei Moldovanu',
  ],
  authors: [
    { name: 'Albert-Andrei Moldovanu', url: 'https://aamoldovanu.com' },
  ],
  creator: 'Albert-Andrei Moldovanu',
  publisher: 'Albert-Andrei Moldovanu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: 'Albert-Andrei Moldovanu',
  description:
    'This website is my portfolio, here I share my projects, skills, contact information, and a lot of other useful stuff. Feel free to take a look :D',
  openGraph: {
    title: 'Albert-Andrei Moldovanu',
    description:
      'This website is my portfolio, here I share my projects, skills, contact information, and a lot of other useful stuff. Feel free to take a look :D',
    type: 'website',
    url: 'https://aamoldovanu.com',
    images: 'https://aamoldovanu.com/preview.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albert-Andrei Moldovanu',
    description:
      'This website is my portfolio, here I share my projects, skills, contact information, and a lot of other useful stuff. Feel free to take a look :D',
    images: 'https://aamoldovanu.com/preview.jpg',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        href: 'https://aamoldovanu.com/favicon.ico',
      },
      {
        url: '/favicon.png',
        sizes: '48x48',
        type: 'image/x-icon',
        href: 'https://aamoldovanu.com/favicon.png',
      },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
      {
        url: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        href: 'https://aamoldovanu.com/favicon.ico',
      },
      { url: '/favicon.png' },
      { url: '/favicon.png', sizes: '48x48', type: 'png', href: '#' },
      {
        url: '/favicon.png',
        sizes: '48x48',
        type: 'image/x-icon',
        href: 'https://aamoldovanu.com/favicon.png',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
