import { About, Contact, Education, Experience, Hero, Navbar, Skills } from '@/components/sections'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
