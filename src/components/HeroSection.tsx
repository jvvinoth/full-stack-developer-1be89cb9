import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-surface overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-2xl">
              {hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                {hero.ctaPrimary}
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-secondary px-8 py-4 rounded-xl text-lg font-semibold hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right Column - Tech Stack Badges */}
          <div className="lg:justify-self-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 max-w-md">
              {hero.techStack.map((tech) => (
                <div
                  key={tech}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-medium text-center shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credibility Proof */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-text-muted">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-text-muted">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
