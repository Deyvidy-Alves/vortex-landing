import { Users, CircleCheck } from 'lucide-react';

export function About() {
  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '5+', label: 'Anos de Inovação' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '30+', label: 'Parceiros Ativos' }
  ];

  const features = [
    'Equipe altamente qualificada do Instituto Federal',
    'Metodologias ágeis de desenvolvimento',
    'Suporte técnico especializado',
    'Tecnologias de ponta do mercado'
  ];

  return (
    <section id="sobre" className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#FFFCF7] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Excelência Técnica e{' '}
                <span className="bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] bg-clip-text text-transparent">
                  Inovação
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Vortex Technologies é uma Empresa Júnior vinculada ao Instituto Federal, 
                combinando rigor acadêmico com a dinâmica do mercado. Desenvolvemos soluções 
                tecnológicas que impulsionam negócios, sempre com foco em qualidade e inovação.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#0000FF] to-[#9E5EFF] flex items-center justify-center">
                    <CircleCheck className="text-white" size={16} />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3">
                <Users size={20} />
                Conheça Nossa Equipe
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
