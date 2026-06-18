import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Darul Haya — Online School',
  description: 'A structured, faith-centered Grades 3–8 education with live classes and a homeschooling portal.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-beige min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
