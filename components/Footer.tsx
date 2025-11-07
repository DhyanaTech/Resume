import { Mail, MapPin, ExternalLink, Linkedin } from 'lucide-react';
import { CONTACT_INFO, PORTFOLIO_PROJECTS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-denim text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-sunflower">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 hover:text-sunflower transition-colors"
              >
                <Mail size={18} />
                <span>{CONTACT_INFO.email}</span>
              </a>
              {CONTACT_INFO.linkedin && (
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sunflower transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              )}
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Portfolio Projects */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-sunflower">Projects</h3>
            <div className="space-y-3">
              {PORTFOLIO_PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sunflower transition-colors group"
                >
                  <span>{project.name}</span>
                  <ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-sunflower">About</h3>
            <p className="text-sm leading-relaxed">
              From masonry to software development, this is the story of a career built on
              curiosity, adaptability, and the belief that tools make the person.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Steve Dickens. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-75">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
