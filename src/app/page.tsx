import Cardhome from "./components/card/cardHome";
import Footer from "./components/footer/footer";
import Navbar from "./components/nav/navbar";
import GridPattern from "./components/ui/animated-grid-pattern";

export default function Home() {
  return (
<div className="relative bg-blue-200 min-h-screen">
  <div className="z-40 relative">
    
    <Navbar />
  </div>


  <div className="bg-blue-900 relative z-20">
  <GridPattern className="z-10" />
    <section className="relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        {/* Conteneur avec flou */}
        <div className="space-y-5 w-full mx-auto text-center bg-white/5 backdrop-blur-lg p-2 rounded-3xl">
              <p className="text-white font-extrabold mx-auto md:text-5xl w-full">
                Forgez un espace de travail avec LinkSpace
              </p>
              <h3 className="text-4xl max-w-2xl mx-auto text-gray-200">
                La productivité de votre entreprise va accroître grâce au confort de LinkSpace
              </h3>
            </div>
        <div className="p-6"></div>
        <Cardhome />
      </div>
    </section>
  </div>
  <Footer/>
</div>

  );
}
