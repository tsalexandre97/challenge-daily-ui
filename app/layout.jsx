import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import ThemeProvider from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} ${montserrat.className} flex bg-gradient-to-tr from-[#b85ac6] to-[#3326af] h-screen items-center justify-center`}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
