const { NavLink, WithRouter } = ReactRouterDOM;

export function MainNav() {

  return (

    <nav className="main-header flex space-between">
      <div className="left-header flex">
        <img src="./assets/img/unicorn.png" alt="" />
        <h1>Appsus</h1>
      </div>
      <ul className="nav-list clean-list flex">
        <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/email">Email</NavLink></li>
        <li><NavLink to="/note">Notes</NavLink></li>
        <li><NavLink to="/book">Books</NavLink></li>

      </ul>
    </nav>

  )
}
