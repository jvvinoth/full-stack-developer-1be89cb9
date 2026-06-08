import { siteContent } from '../lib/siteContent';

export default function ProjectsSection() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {projects.heading}
          </h2>
          <p className="text-xl text-text-muted">
            {projects.subtext}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.items.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div
                    className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                  />
                </div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-lg mb-4">
                    Case Study
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                        Problem
                      </div>
                      <p className="text-text-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                        Solution
                      </div>
                      <p className="text-text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                        Results
                      </div>
                      <p className="text-primary font-semibold leading-relaxed">
                        {project.results}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-surface border border-slate-200 rounded-lg text-sm text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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
