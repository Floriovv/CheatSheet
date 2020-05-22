//Step 1: import react
import React from 'react'

//Step 2: Create a component
function Nav() {
  return(
      <header>
          <div className="logo">logo</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
  )
}

//Step 3 : Export my Component
export default Nav