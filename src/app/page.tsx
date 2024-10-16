import Cardhome from "./components/card/cardHome";
import Navbar from "./components/nav/navbar";
import BorderShineHome from "./components/shineBorder/borderShineHome";

export default function Home() {
  return (
    <div className="bg-blue-200 min-h-screen">

      <div className="z-10 bg-red-600">
     
      </div>
      
      <Navbar />
      <div className="bg-blue-900">
        <section className="relative">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 w-full mx-auto text-center">
              <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                Forgez un espace de travail pour votre Entreprise
              </h2>
              <h3 className=" text-4xl max-w-2xl mx-auto text-gray-200">
                La productivité de votre entreprise va accroître grâce au confort de LinkSpace
              </h3>
              <Cardhome />
              <BorderShineHome/>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(14, 165, 233, 0.41) 15.74%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
      </div>
    </div>
  );
}
