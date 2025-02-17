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
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ibmuri.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Dekatron322/Caregiverhospital/main/public/img.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
