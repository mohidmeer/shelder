import { Children } from "react";
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({children}){
    return(
        <main className={`p-24 ${inter.className}`}>
            {children}
            <Footer/>
        </main>
    )
}