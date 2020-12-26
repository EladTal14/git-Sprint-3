const { NavLink } = ReactRouterDOM;

export function MainNav() {


  return (

    <nav className="main-header flex space-between">
      <div className="main-screen" onClick={toggleMenu}></div>
      <div className="left-header flex">
        <img src="./assets/img/unicorn.png" alt="" />
        <h1>Appsus</h1>
      </div>
      <ul className="nav-list clean-list flex">
        <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="my-active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="my-active" to="/email">Email</NavLink></li>
        <li><NavLink activeClassName="my-active" to="/note">Notes</NavLink></li>
        <li><NavLink activeClassName="my-active" to="/book">Books</NavLink></li>

      </ul>
      <button className="menu-btn" onClick={toggleMenu}><img src="./assets/img/grid.png" /></button>
    </nav>

  )
}





function toggleMenu() {
  document.body.classList.toggle('open-menu');
}