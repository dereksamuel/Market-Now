import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/components/index.less';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </div>
  );
}
