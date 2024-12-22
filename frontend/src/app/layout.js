import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title></title>
      </head>
      <body>
          {children}
          <Analytics/>
      </body>
      </html>
  );
}
