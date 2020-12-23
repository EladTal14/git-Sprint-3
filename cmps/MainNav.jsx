const { NavLink, WithRouter } = ReactRouterDOM;

export function MainNav() {

  return (

    <nav>
      <ul className="">
        <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/email">Email</NavLink></li>
        <li><NavLink to="/keep">Keep</NavLink></li>
        <li><NavLink to="/book">Book</NavLink></li>

      </ul>
    </nav>

  )
}
