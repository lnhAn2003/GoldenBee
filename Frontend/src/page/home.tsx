import Header from "../components/Header";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Services from "../components/Service";
import AboutUs from "../components/AboutUs";
import Partners from "../components/Partners";
import News from "../components/News";
import Product from "../components/Product";
import ProductSale from "../components/ProductSale";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-brand-ink">
            <Header />
            <Hero />
            <AboutUs/>
            <Product />
            <ProductSale/>
            <Partners/>
            <Services/>
            <News/>
            <Footer />
        </div>
    )
}
