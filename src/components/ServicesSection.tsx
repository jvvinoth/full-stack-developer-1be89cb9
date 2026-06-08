import { Code2, Layers, ShoppingCart, RefreshCw, Shield } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Code2,
  Layers,
  ShoppingCart,
  RefreshCw,
  Shield,
};

export default function ServicesSection() {
  const { services } = siteContent;

  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {services.heading}
          </h2>
          <p className="text-xl text-text-muted">
            {services.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isFirst = index === 0;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  isFirst ? 'md:col-span-2' : ''
                }`}
              >
                <div className={isFirst ? 'grid md:grid-cols-2 gap-8 items-start' : ''}>
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-text leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-text-muted italic">
                      {service.useCase}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
