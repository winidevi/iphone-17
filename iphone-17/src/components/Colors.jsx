import { useState } from "react";


function Colors() {


    const colors = [
        { id: 'blue', name: 'Aluminío Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Aluminío Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Aluminío Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' },

    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de video', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de video', weight: '199g' },

    ];

    const [selectedColor, setSelectedColor] = useState("blue");

    return (
        <section id="cores" className="bg-black py-20 px-8">

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">

                    <h2 className="text-5xl mb:text-6xl mb-4 font-bold">Escolha sua cor</h2>
                    <p className="text-gray-400">Acabamento elegante em alumínio premium</p>

                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex justify-center items-center min-h-125">
                            <img src={colors.find(color => color.id === selectedColor).image} alt="Iphone 17 Pro max"
                                className="max-w-full max-h-150 mx-auto" />
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block z-10">
                                <h3 className="text-2xl font-semibold text-white">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {colors.map((color) => (
                        <button key={color.id} 
                        onClick={() => setSelectedColor(color.id)}
                        className={`relative transition-all duration-300 cursor-pointer hover:scale-110`}
                        >
                            <div className={`w-16 h-16 rounded-full ${color.colorClass} ${selectedColor === color.id ? 'border-white border-4' : 'border-gray-600 border-4'}`}></div>
                        </button>

                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-20 ">
                {models.map((model, index) => (
                    <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border-gray-800 border-2 hover:from-gray-800 hover:scale-105 transition-all duration-300 font-bold">
                        <div className="text-4xl mb-4">📱</div> 
                        <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                        <p className="text-gray-400 mb-4">{model.screen}</p>
                        <p className="space-y-2 text-gray-300">{model.storage}</p>
                        <p className="text-gray-300">{model.battery}</p>
                        <p className="text-gray-300">{model.weight}</p>   

                    </div>
                ))}
            </div>

            <div className="text-center justify-center ">
               <button className="mt-16 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-blue-800 shadow-lg shadow-blue-500/50 mb-4">
                  Compre agora á partir de R$ 9.299,00
               </button>
               <p className="text-gray-400">Ou em até 12x de R$ 774,92 sem juros</p>
            </div>

        </section>
    );
}

export default Colors;