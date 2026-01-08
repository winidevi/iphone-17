

function Footer() {
    const sections = [
{
title: 'Comprar e Saber Mais',
links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessorios']
},

{
title: 'Especificações',
links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']

},
{
title: 'Suporte',
links: ['Suporte ao iPhone', 'AppleCare+', 'i0S 19', 'Contato']

},

{

title: 'Apple',
links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
    
}
    ];


   const buttolinks = ['Política de Privacidade', 'Termos de Uso', 'Mapa do Site', 'Informações Legais'
    ]; 

    const desenvolvedor = 'WIniDevi';
    return (

           <footer className="bg-gray-900 border-t border-gray-800">
             <div className="max-w-7xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li className="hover:text-white cursor-pointer" key={linkIndex}>{link}</li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
             </div>

             <div>
                <div className="text-center justify-center border-t border-gray-800 pt-8">
                    <p className="mb-2">&copy; 2026 Apple Inc. Todos os direitos reservados.</p>
                    <div>
                        {buttolinks.map((link, index) => (
                            <button key={index} className=" hover:underline mx-2 text-sm text-gray-400 mt-3 cursor-pointer hover:text-white">{link}</button>
                        ))}
                    </div>
                </div>
                <div className="text-center justify-center pt-4 pb-4">
                    <a href="https://winidevi.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 cursor-pointer hover:text-white inline-block">Desenvolvido por {desenvolvedor}</a>
                </div>
                </div> 


           </footer>




    );}


export default Footer;