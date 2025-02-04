'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart2, Database, LineChart, Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { projects } from './data/projects';

export default function Home() {
  const [status, setStatus] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const letters = "Vanessa Belzares".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form fields
    const form = e.currentTarget;
    const name = form.from_name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validate required fields
    if (!name || !email || !message) {
      toast.error('Por favor completa todos los campos requeridos.');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      setStatus('success');
      form.reset();
      toast.success('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error(error);
      setStatus('error');
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-52 pb-16 px-4  w-full flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-primary/60"
      
      >
         <div className="text-center">
          {/* Animated Studio Text */}
          <h1 className="relative inline-block">
            <div className="flex justify-center overflow-hidden">
              {letters.map((letter, index) => (
               <span
               key={index}
               className={`text-[6vw] text-[#28003C]
                00 leading-none font-bold tracking-tight inline-block transform transition-all duration-[1000ms] ease-in-out hover:text-purple-300 hover:animate-float
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100vh] opacity-0'}`}
               style={{ 
                 transitionDelay: `${index * 80}ms`,
                 transitionTimingFunction: 'ease-in-out'
               }}
             >
                {letter === ' ' ? '\u00A0' : letter}
             </span>
              ))}
            </div>
          </h1>

          {/* Content Below */}
          <div 
            className={`mt-8 transform transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transitionDelay: '1200ms'
            }}
          >
            <h2 className="text-6xl font-bold text-purple-900 mb-4">
              Data Analyst & Data Scientist
            </h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformando datos en decisiones estratégicas.
            </p>
           

            <Link
                href="#projects"
                className=" group inline-flex items-center gap-2 space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Ver mi trabajo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
          </div>
        </div>

       
      </section>

      {/* Sobre mí Section */}
      <section id="about" className="pt-16 flex items-center justify-center pb-16 px-4 bg-gradient-to-b from-background to-primary/20 min-h-screen">
        <div className="container mx-auto max-w-6xl h-full">
          <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">Sobre mí</h2>
              <p className="text-lg text-muted-foreground mb-6">
              Soy ingeniero químico de profesión y actualmente me estoy formando como analista de datos. Me apasiona transformar datos en soluciones prácticas, tengo experiencia en análisis y entrenamiento de modelos predictivos. Siempre busco aprender y aplicar nuevas tecnologías para mejorar la eficiencia organizacional. Además, valoro la comunicación y el trabajo en equipo para desarrollar soluciones alineadas con los objetivos de las empresas.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contáctame
              </Link>
            </div>
            {/* Puedes agregar una imagen o cualquier otro detalle aquí */}
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="/photo.jpg"
                alt="Foto de Vanessa Belzares"
                className="w-96 h-96 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-8 px-4 scroll-mt-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-8xl">
          <h2 className="text-3xl font-bold text-center mb-12">Proyectos destacados</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 text-primary">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-primary-foreground font-medium inline-flex items-center space-x-1 group-hover:space-x-2 transition-all"
                  >
                    <span>Más información</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 px-4 bg-gradient-to-t from-primary/20 to-background scroll-mt-20 min-h-screen flex items-start justify-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctame</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:vanessa.belzares@example.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>belzaresv@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Santiago de Chile, Chile</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Conectemos</h3>
                <p className="text-muted-foreground">
                  Estoy siempre interesada en nuevos proyectos de análisis de datos y oportunidades.
                  Si necesitas ayuda con visualización de datos, modelos predictivos,
                  o inteligencia empresarial, estoy aquí para ayudarte a transformar tus datos en
                  información valiosa.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 focus:bg-accent/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 focus:bg-accent/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 focus:bg-accent/50 transition-colors"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}