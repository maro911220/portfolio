import About from "./(home)/about";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Lists from "./(home)/lists";
import Skills from "./(home)/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Lists />
      <Contact />
    </main>
  );
}
