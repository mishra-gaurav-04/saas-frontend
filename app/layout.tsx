import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Provider from '@/app/context/client-provider';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';



import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Personalized SaaS',
  description: 'Personalized Saas Companion',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
      <html lang="en">
        <body className={poppins.variable}>
          <Provider session={session}>
          {children}
          </Provider>
        </body>
      </html>
  )
}