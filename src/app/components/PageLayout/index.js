import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default PageLayout;
