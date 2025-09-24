import "styles/tailwind.css"
import { Metadata } from "next"
import ThemeProviders from "components/ProvidersComponents/ThemeProviders"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ibrahim Muritala",
  description:
    "Ibrahim Muritala is a multidisciplinary software engineer (frontend heavy) with 5+ years of experience and a degree in physics.",
  icons: {
    icon: [
      {
        url: "/avatar.svg",
        sizes: "any",
      },
      {
        url: "/avatar.svg",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/avatar.svg",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/avatar.svg",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/avatar.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/avatar.svg",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/avatar.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ibrahim Muritala",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ibmuri.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/avatar.svg",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
