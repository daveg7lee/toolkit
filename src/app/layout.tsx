import { Metadata } from "next";
import { Providers } from "./providers";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Equipage",
  description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  openGraph: {
    type: "website",
    url: "https://equipage.vercel.app",
    title: "Equipage",
    description: "Discover Your Ultimate Real-Life Toolkit - All in One Place!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="ga4_init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname
          });
        `,
          }}
        />
      </body>
    </html>
  );
}
