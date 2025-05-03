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
            ? 'text-blue-600 font-medium' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        About
      </Link>
      <Link 
        href="#experiences" 
        className={`transition-colors duration-200 ${
          activeSection === 'experiences' 
            ? 'text-blue-600 font-medium' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Experiences
      </Link>
      <Link 
        href="#projects" 
        className={`transition-colors duration-200 ${
          activeSection === 'projects' 
            ? 'text-blue-600 font-medium' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Projects
      </Link>
    </nav>
  );
}