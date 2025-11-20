import Header from "../components/Header";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Services from "../components/Service";
import AboutUs from "../components/AboutUs";
import Partners from "../components/Partners";
import News from "../components/News";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-base text-brand-ink">
            <Header />
            <Hero />
            <AboutUs/>
            <Partners/>
            <Services/>
            <News/>
            <Footer />
        </div>
    )
}
