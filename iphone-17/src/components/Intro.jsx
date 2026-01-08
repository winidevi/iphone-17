

function Intro() {

    const specs = [

        { value: '6.3"', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Chip mais rapido', color: 'text-orange-500' },
        { value: '48MP', label: 'Sistema de camera', color: 'text-blue-600' },
        { value: '29h', label: 'Bateria', color: 'text-orange-500' }
    ];


    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
                <h2 className="text-2xl md:text-4xl mb-4 text-gradient font-bold">Titânio. Tão forte. Tão leve. Tão Pro.</h2>
                <p className="text-lg md:text-2xl  text-gray-300 mb-10 max-w-3xl mx-auto">O futuro está aqui. Experimente o poder do iPhone 17 Pro com tecnologia de ponta e design inovador.</p>

            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
                <a href="#buy" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-4xl text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer ">Compre Agora</a>
                <a href="#saibamais" className=" bg-black hover:bg-white hover:text-black text-white px-8 py-4 rounded-4xl text-lg font-medium transition-all duration-300 hover:scale-110 cursor-pointer border-2">Saiba Mais</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
                {specs.map((spec, index) => (
                    <div key={index} className="flex flex-col items-center border-2 bg-gray-900  border-gray-700 rounded-lg p-4 hover:border-blue-100 transition-all duration-300  hover:scale-105 cursor-pointer">
                        <span className={`text-2xl font-bold ${spec.color}`}>{spec.value}</span>
                        <span className="text-gray-400">{spec.label}</span>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Intro
