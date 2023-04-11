import Nav from './Nav'

function Header() {
  return (
    <div className="relative">
      <div className="bg-header-img bg-center bg-cover bg-fixed min-h-screen relative">
        <h1 className="p-10 text-primary text-4xl font-bold text-stone-100">
          Lana Del Rey
        </h1>
        <div className="p-5 bg-red-800 bg-opacity-50 text-stone-100 text-center absolute  left-0 bottom-0 min-w-full">
          <Nav />
        </div>
      </div>
    </div>
  )
}
export default Header
