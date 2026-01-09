

function Highlights() {
      const specs = [

            { value: '48MP', label: 'Principal', label2: 'Sensor quad-pixel com foco automático', color: 'text-blue-600' }, 
            { value: '12MP', label: 'Ultra Wide', label2: 'Campo de visão de 120° com modo noturno', color: 'text-orange-500' },
            { value: '12MP', label: 'Telefoto 5x', label2: 'Zoom óptico 5x com estabilização', color: 'text-blue-600' },
            
      ];
      
      
      return (
            <section className="bg-black mx-auto my-20 max-w-7xl py-20 px-6 text-center" id="design">
                  <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-5">Design revolucionário</h2>
                        <p className="mt-4 text-lg text-gray-300 ">Cada detalhe foi pensado para criar a melhor experiência.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-16 mt-10">
                        <div className="bg-gray-900  rounded-3xl p-8  hover:scale-105 transition-all duration-300 cursor-pointer">
                              <img className="w-full rounded-2xl mb-4" src="../public/img/aluminium-design.jpg" alt="Destaques do iPhone 17 Pro" />
                              <h3 className="text-3xl mb-2 font-bold">Alumínio forjado.</h3>
                              <p className="text-gray-300">Design unibody. Alumínio forjado a quente. Capacidade excepcional.</p>

                        </div>

                        <div className="bg-gray-900 rounded-3xl p-8   hover:scale-105 transition-all duration-300 cursor-pointer">
                              <img className="w-full rounded-2xl mb-4" src="../public/img/ios-features.jpg" alt="Destaques do iPhone 17 Pro" />
                              <h3 className="text-3xl mb-2 font-bold">IOS 26</h3>
                              <p className="text-gray-300">O sistema operacional mais avançado da história, com IA integrada.</p>

                        </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl p-12 mb-16 hover:scale-105 transition-all duration-300 cursor-pointer" id="performance">
                        <h3 className="text-4xl font-bold mb-8 text-gradient">A18</h3>
                        <p className="text-gray-300 mb-6">O Chip mais rápido e eficiente da história do iPhone.</p>
                        <img className="w-full rounded-2xl mb-4" src="../public/img/chip-a18-pro.jpg" alt="A18 Chip" />
                        <ul className="space-y-3 text-gray-300 ">
                              <li>CPU 20% mais rápida</li>
                              <li>GPU 25% mais eficiente</li>
                              <li>Neural Engine com 16 núcleos</li>
                              <li>Ray Tracing acelerado por hardware</li>
                        </ul>
                  </div>
                  <div id="camera" className="mb-10 texxt-center">    
                       <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto ">

                        {specs.map((spec, index) => (
                              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer border-gray-700 hover:border-blue-100 border-2">
                                    <span className={`text-2xl font-bold ${spec.color}`}>{spec.value}</span>
                                    <h4 className="text-xl font-semibold mt-2">{spec.label}</h4>
                                    <p className="text-gray-400 mt-1">{spec.label2}</p>
                              </div>
                        ))}
                  </div>
                  </div>                                         
            </section>


      )
};




export default Highlights;
