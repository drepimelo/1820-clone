import Hero from "./components/Hero";
import OverlaySection from "./components/OverlaySection";

export default function Home() {
  return (
    <main>
        <Hero />
        <OverlaySection title="Work"
          headline="We listen. We craft. We deliver."
          buttonText="Explore Our Work"
          buttonHref="#"
          backgroundImage="https://assets.teenvogue.com/photos/65b7dbffb239029c147012bf/16:9/w_2560%2Cc_limit/cropped-keke-tnv-wm-selects-2.jpg"
        />
        <OverlaySection title="Services"
          headline="Stylish production. Seamless execution."
          buttonText="Stuff we're really good at"
          buttonHref="#"
          backgroundImage="https://s.studiobinder.com/wp-content/uploads/2025/09/Ground-Level-Shot-Example-Ground-level-camera-angle-from-Kill-Bill-Vol-1.jpg"
        />
        <OverlaySection title="About Us"
          headline="We're not a cult. But people do keep coming back."
          buttonText="Learn More About Us"
          buttonHref="#"
          backgroundImage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCvW5iwlp_J0nPRivfCo9qVxtIqg9a2mh-KhYIg-ZIGSgr0PwIrWcoALS_eaaCkCRreZO14v1pOQyFNv8UGH4KO4dRc-H4EMqb9AhT70q0Zyg4pEumWcVVYMe3biKfM8f4ZvNBYh8r3Dh1i_mjFuFMiONmSiHrWUxKM64PwF2VtChRORoc9Clt4Pd3ethY/s2532/ca%C3%A7adores%20de%20emo%C3%A7%C3%A3o%20-%201991%20-%20mestreryu.webp"
        />
        <section className="h-screen bg-zinc-900" /> {/* Seção vazia para teste de scroll */}
    </main>
  );
}