import logo from "../images/reactjs-icon.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} />
        <h1>React Facts</h1>
      </div>
      <h2>React Course - Project 1</h2>
    </nav>
  )
}

export default Navbar