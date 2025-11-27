import Hero from "../components/main/Hero.main";
import Services from "../components/main/Service.main";
import AboutUs from "../components/main/AboutUs.main";
import Partners from "../components/main/Partners.main";
import News from "../components/main/News.main";
import Product from "../components/main/Product.main";
import ProductSale from "../components/main/ProductSale.main";
import ProductNew from "../components/main/ProductNew.main";
import Catalog from "../components/main/Catalog.main";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-brand-ink">
            <Hero />
            <AboutUs/>
            <Catalog/>
            <Product />
            <ProductNew />
            <ProductSale/>
            <Partners/>
            <Services/>
            <News/>
        </div>
    )
}
