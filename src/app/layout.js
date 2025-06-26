// "use client";
// import '../i18n'; 
// import '../app/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./globals.css";
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from '../store/page';
// import Head from 'next/head';



// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/favicon.ico." />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//       </Head>
//       <body>
//         <Provider store={store}>
//           {children}
//         </Provider>
//       </body>
//     </html>
//   );
// }

// src/app/layout.js
// src/app/layout.js (Server Component)

// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './main.css';
import React from 'react';
import ReduxProvider from '../../src/app/components/ReduxProvider';
import InternetWrapper from '../../src/app/components/InternetWrapper'; // ✅ your new wrapper

export const metadata = {
  title: 'Bridge it',
  description: 'Your app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <InternetWrapper>
            {children}
          </InternetWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
