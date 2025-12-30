import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 pt-28 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transformamos sua Empresa com{' '}
                <span className="bg-gradient-to-r from-[#0000FF] to-[#9E5EFF] bg-clip-text text-transparent">
                  Tecnologia de Ponta
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Desenvolvimento de Software, Apps e Sistemas de Gestão sob medida. 
                Qualidade técnica com a inovação do Instituto Federal.
              </p>
            </div>
            <div>
              <button className="group bg-[#0000FF] text-white px-8 py-4 rounded-xl hover:bg-[#0000CC] transition-all hover:shadow-xl hover:scale-105 flex items-center gap-3">
                Conheça Nossas Soluções
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              {/* Gradient orb background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9E5EFF] to-[#610287] rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              
              {/* Main card with glassmorphism */}
              <div className="relative backdrop-blur-sm bg-white/40 rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="space-y-6">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-[#0000FF] to-[#0000CC] p-4 rounded-xl text-white">
                        <p className="text-sm opacity-80">Projetos Ativos</p>
                        <p className="text-3xl font-bold mt-1">24</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#9E5EFF] to-[#610287] p-4 rounded-xl text-white">
                        <p className="text-sm opacity-80">Clientes</p>
                        <p className="text-3xl font-bold mt-1">50+</p>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Desenvolvimento</span>
                          <span className="text-gray-700">85%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[85%] bg-gradient-to-r from-[#0000FF] to-[#9E5EFF]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Testes</span>
                          <span className="text-gray-700">70%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[70%] bg-gradient-to-r from-[#9E5EFF] to-[#610287]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Activity indicators */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-16 bg-[#0000FF]/10 rounded-lg"></div>
                      <div className="h-16 bg-[#9E5EFF]/10 rounded-lg"></div>
                      <div className="h-16 bg-[#610287]/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#9E5EFF] to-[#610287] rounded-2xl opacity-50 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#0000FF] to-[#9E5EFF] rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
