function NavBar() {
  return (
    <nav className="fixed top-0 bg-black/60 backdrop-blur-md w-full z-50 p-0.5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8 text-white">
        <a href="#design" className="hover:text-gray-300 cursor-pointer">Design</a>
        <a href="#performance" className="hover:text-gray-300 cursor-pointer">Performance</a>
        <a href="#camera" className="hover:text-gray-300 cursor-pointer">Câmera</a>
        <a href="#cores" className="hover:text-gray-300 cursor-pointer">Cores</a>
        <button className=" shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-4xl cursor-pointer">Comprar</button>
      </div>
    </nav>
  )
}
export default NavBar; 