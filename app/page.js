"use client"
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";

export default function Home() {
  return (
    <div>
        <Hero/>
        <div id="products">
          <ProductSection />
        </div>  
    </div>
  );
}
