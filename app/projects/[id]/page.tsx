import { projects } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver a proyectos</span>
        </Link>

        <div className="bg-card rounded-xl overflow-hidden border">
          <div className="relative h-[400px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="mb-6 text-primary">{project.icon}</div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {project.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Herramientas & Tecnologías</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold mb-4 mt-8">Links del proyecto</h2>
                <div className="space-y-2">
                  {project.links?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Resultados clave</h2>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}