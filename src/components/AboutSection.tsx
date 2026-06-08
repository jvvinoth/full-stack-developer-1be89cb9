import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {about.heading}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Narrative */}
          <div className="space-y-6">
            {about.narrative.map((paragraph, index) => (
              <p key={index} className="text-lg text-text leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-8">
            {/* Core Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {about.expertise.core.title}
              </h3>
              <ul className="space-y-3">
                {about.expertise.core.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {about.expertise.specializations.title}
              </h3>
              <ul className="space-y-3">
                {about.expertise.specializations.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {about.expertise.experience.title}
              </h3>
              <ul className="space-y-3">
                {about.expertise.experience.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
            alt="Developer workspace with code on screen"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
