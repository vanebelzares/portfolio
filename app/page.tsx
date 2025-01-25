import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart2, Database, LineChart, Mail, MapPin, Phone } from 'lucide-react';

export const projects = [
  {
    id: "sales-analytics",
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard analyzing sales trends and patterns",
    icon: <BarChart2 className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    fullDescription: "A comprehensive sales analytics dashboard that provides real-time insights into sales performance, customer behavior, and market trends. Built using Python for data processing and Power BI for visualization.",
    tools: ["Python", "Pandas", "Power BI", "SQL"],
    outcomes: [
      "Increased sales efficiency by 25%",
      "Reduced reporting time by 40%",
      "Improved forecast accuracy by 30%"
    ],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/vanessabelzares/sales-analytics"
      },
      {
        title: "Live Dashboard",
        url: "https://powerbi.com/sales-analytics"
      },
      {
        title: "Documentation",
        url: "https://docs.sales-analytics.com"
      }
    ]
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation",
    description: "ML-based customer segmentation analysis",
    icon: <Database className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    fullDescription: "Advanced customer segmentation analysis using machine learning algorithms to identify distinct customer groups and their behavior patterns. Implemented using Python and scikit-learn.",
    tools: ["Python", "scikit-learn", "Matplotlib", "Jupyter"],
    outcomes: [
      "Identified 5 key customer segments",
      "Personalized marketing campaigns",
      "15% increase in customer retention"
    ],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/vanessabelzares/customer-segmentation"
      },
      {
        title: "Research Paper",
        url: "https://research.com/customer-segmentation"
      }
    ]
  },
  {
    id: "market-prediction",
    title: "Market Prediction Model",
    description: "Predictive analytics for market trends",
    icon: <LineChart className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=60",
    fullDescription: "Time series analysis and predictive modeling for market trends using advanced statistical methods and machine learning algorithms. Built with Python and TensorFlow.",
    tools: ["Python", "TensorFlow", "Statsmodels", "Plotly"],
    outcomes: [
      "90% prediction accuracy",
      "Automated trend detection",
      "Real-time market insights"
    ],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/vanessabelzares/market-prediction"
      },
      {
        title: "Interactive Demo",
        url: "https://market-prediction.demo.com"
      },
      {
        title: "Technical Report",
        url: "https://report.market-prediction.com"
      }
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <span className="text-5xl md:text-6xl block text-primary-foreground font-bold mb-8">Vanessa Belzares</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 relative">
                <span className="absolute text-primary-foreground" style={{
                  WebkitTextStroke: '2px var(--primary-foreground)'
                }}>
                  Data Analyst & Data Scientist
                </span>
                <span className="relative text-primary/80">
                  Data Analyst & Data Scientist
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hola, soy Vanessa Belzares. Transformo datos complejos en información útil,
                ayudando a las empresas a tomar decisiones basadas en datos.
              </p>
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <span>Ver mi trabajo</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-primary/20">
              <Image
                src="/photo.jpg"
                alt="Vanessa Belzares"
                fill
                className="object-cover scale-70"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Proyectos destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
      <section id="contact" className="py-16 px-4 bg-gradient-to-t from-primary/20 to-background scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contactame</h2>
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
                        <span>vanessa.belzares@example.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (234) 567-890</span>
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

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 focus:bg-accent/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-accent/50 focus:bg-accent/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
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