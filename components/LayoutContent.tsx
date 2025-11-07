'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Check if we're on desktop
  useEffect(() => {
    setIsMounted(true);

    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Listen for sidebar state changes
  useEffect(() => {
    const savedState = localStorage.getItem('sidebar-open');
    if (savedState !== null) {
      setIsDesktopOpen(savedState === 'true');
    }

    // Listen for storage events (cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sidebar-open' && e.newValue !== null) {
        setIsDesktopOpen(e.newValue === 'true');
      }
    };

    // Listen for custom events within the same tab
    const handleSidebarToggle = ((e: CustomEvent) => {
      setIsDesktopOpen(e.detail.isOpen);
    }) as EventListener;

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('sidebar-toggle', handleSidebarToggle);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sidebar-toggle', handleSidebarToggle);
    };
  }, []);

  // Calculate margin only after mounting to avoid hydration mismatch
  const marginLeft = isMounted && isDesktop && isDesktopOpen ? '12.5rem' : '0';

  return (
    <div
      className="flex-1 flex flex-col transition-all duration-300 ease-in-out"
      style={isMounted ? { marginLeft } : undefined}
    >
      <main className="flex-1 pt-6 md:pt-8 lg:pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
