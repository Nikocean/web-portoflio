// src/components/navigation.tsx
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'experiences', 'projects'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          });
        }, observerOptions);

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <nav className="flex flex-col gap-4">
      <Link 
        href="#about" 
        className={`transition-colors duration-200 ${
          activeSection === 'about' 
            ? 'text-sky-400 font-medium' 
            : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        About
      </Link>
      <Link 
        href="#experiences" 
        className={`transition-colors duration-200 ${
          activeSection === 'experiences' 
            ? 'text-sky-400 font-medium' 
            : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        Experiences
      </Link>
      <Link 
        href="#projects" 
        className={`transition-colors duration-200 ${
          activeSection === 'projects' 
            ? 'text-sky-400 font-medium' 
            : 'text-slate-400 hover:text-slate-700'
        }`}
      >
        Projects
      </Link>
    </nav>
  );
}