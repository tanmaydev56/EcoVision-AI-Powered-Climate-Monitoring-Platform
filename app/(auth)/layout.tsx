import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"

export const metadata ={
    title: 'Ecovision',
    description: 'Generated by create next app',
}
 
const inter = Inter({ subsets: ['latin'] })

export default function Rootlayout({children}: {children: React.ReactNode}) {
    return (
       <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-black`}>
             {children}   
            </body>

        </html>

       </ClerkProvider>
    )
}