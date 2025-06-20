import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Mayaa</title>
        <meta name="description" content="Architecture & Design by Studio Mayaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-olive-50 min-h-screen font-sans text-gray-800">
        <Navbar />
        <section className="w-full h-screen flex items-center justify-center bg-cover bg-center text-white bg-[url('/hero-placeholder.jpg')]">
          <div className="bg-black/50 p-8 rounded-xl text-center">
            <h1 className="text-5xl font-serif font-bold">Studio Mayaa</h1>
            <p className="text-lg mt-4 font-light">From Vision to Value — We Design Spaces that Breathe</p>
          </div>
        </section>
        <section className="py-20 px-6 md:px-20">
          <h2 className="text-3xl font-serif mb-8 text-olive-700">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image src="/project-placeholder.jpg" alt="Project" width={600} height={400} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold font-serif">Project Title {item}</h3>
                  <p className="text-sm text-gray-600">Location • Type • Year</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}