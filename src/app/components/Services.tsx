import { Code, Wrench, Stethoscope } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web & Sites',
      description: 'Sites modernos, responsivos e otimizados para conversão. Do design à implementação, criamos experiências digitais que impulsionam seu negócio.',
      color: '#0000FF',
      gradient: 'from-[#0000FF] to-[#0000CC]'
    },
    {
      icon: Wrench,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para automatizar processos e otimizar sua operação. Sistemas robustos desenvolvidos com as melhores tecnologias do mercado.',
      color: '#9E5EFF',
      gradient: 'from-[#9E5EFF] to-[#610287]'
    },
    {
      icon: Stethoscope,
      title: 'V-Clinic',
      description: 'O sistema definitivo para gestão de clínicas. Controle de pacientes, agendamentos, prontuários e muito mais em uma plataforma intuitiva e segura.',
      color: '#610287',
      gradient: 'from-[#610287] to-[#9E5EFF]',
      featured: true
    }
  ];

  return (
    <section id="solucoes" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme sua visão em realidade com nossas soluções tecnológicas de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                  service.featured 
                    ? 'border-[#9E5EFF] ring-2 ring-[#9E5EFF]/20' 
                    : 'border-gray-100'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9E5EFF] to-[#610287] text-white px-4 py-1 rounded-full text-sm">
                    Destaque
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a 
                    href={service.featured ? "#vclinic" : "#contato"}
                    className={`inline-flex items-center gap-2 transition-colors`}
                    style={{ color: service.color }}
                  >
                    Saiba mais
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
