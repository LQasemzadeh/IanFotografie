import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Hero from "@/pages/Hero";
import Navbar from "@/pages/Navbar";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Footer from "@/pages/Footer";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>IanFotografie</title>
            </Head>

            <Navbar />
            <Hero />
            <Gallery />
            <About />
            <Footer />


        </>
    )
}
