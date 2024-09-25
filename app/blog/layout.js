// app/layout.js

import '../globals.css';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import Layout from '../../components/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Skysung Blog',
  description: 'Skysung 的個人部落格',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
