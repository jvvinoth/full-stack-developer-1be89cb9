import { siteContent } from '../lib/siteContent';

export default function ProcessSection() {
  const { process } = siteContent;

  return (
    <section id="process" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {process.heading}
          </h2>
          <p className="text-xl text-text-muted">
            {process.subtext}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/20" style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />

          {process.steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative"
            >
              {/* Number Badge */}
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3 capitalize">
                {step.title}
              </h3>

              <p className="text-text-muted leading-relaxed mb-4 text-sm">
                {step.description}
              </p>

              <div className="inline-block px-3 py-1 bg-surface rounded-lg text-sm font-medium text-text-muted">
                {step.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-l-4 border-accent">
          <p className="text-text-muted leading-relaxed">
            <span className="font-semibold text-primary">Transparent pricing:</span> All projects are quoted with a fixed price after the discovery phase. No hourly billing surprises, no scope creep — you'll know exactly what you're paying before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
