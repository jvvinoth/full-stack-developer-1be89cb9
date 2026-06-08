import { Github, Linkedin, Twitter } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          {/* Left - Brand */}
          <div>
            <div className="text-2xl font-bold mb-2">Full Stack Developer</div>
            <p className="text-slate-400 max-w-md">
              {footer.tagline}
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col md:items-end gap-4">
            <nav className="flex flex-wrap gap-6">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-accent transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left">
          <p className="text-slate-400 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
