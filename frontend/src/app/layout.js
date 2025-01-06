import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title></title>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1759816153415521"
                  crossOrigin="anonymous"></script>
      </head>
      <body>
      {children}
      <Analytics/>
      </body>
      </html>
  );
}
