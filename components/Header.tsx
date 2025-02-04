"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Mail, FolderKanban, User } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4" onClick={closeMenu}>
            <div className="h-20 w-20 relative overflow-hidden">
              <Image
                src="/logo_vb.png"
                alt="Vanessa Belzares"
                width={100}
                height={100}
                className="object-contain scale-100 transition-transform duration-200"
                priority
              />
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/#about" icon={<User size={18} />} text="Sobre mí" /> {/* Nuevo enlace "Sobre mí" */}
            <NavLink href="/#contact" icon={<Mail size={18} />} text="Contacto" />
            <a
              href="/Vanessa_Belzares_CV.pdf"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <FileText size={18} />
              <span>CV</span>
            </a>

            <NavLink href="/#projects" icon={<FolderKanban size={18} />} text="Portafolio" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
            <MobileNavLink
                href="/#about"
                icon={<User size={18} />}
                text="Sobre mí"
                onClick={closeMenu}
              /> {/* Nuevo enlace "Sobre mí" */}
              <MobileNavLink
                href="/#contact"
                icon={<Mail size={18} />}
                text="Contacto"
                onClick={closeMenu}
              />
              <MobileNavLink
                href="/Vanessa_Belzares_CV.pdf"
                icon={<FileText size={18} />}
                text="CV"
                download
                onClick={closeMenu}
              />
              <MobileNavLink
                href="/#projects"
                icon={<FolderKanban size={18} />}
                text="Portafolio"
                onClick={closeMenu}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  icon,
  text,
  download
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
      download={download}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({
  href,
  icon,
  text,
  download,
  onClick
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 px-2 py-1 text-gray-700 hover:text-black transition-colors"
      download={download}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}