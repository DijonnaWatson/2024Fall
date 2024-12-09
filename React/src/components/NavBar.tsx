
import {usedState} from 'react'
import { NavLink as RouterLink } from "react-router-dom"

const FlyoutPanel ({isOpen, children}: {isOpen: boolean, children: JSX:Element}) => {
const ShoppingCart from './ShoppingCart.vue';
const LoginBadge from './LoginBadge.vue';

export default function NavBar(){
const [isOpen, setIsOpen] = ref(false)
const [isCartOpen] = ref(false)

return (
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <img alt="Vue logo" className="logo" src="@/assets/logo.svg" width="30" height="30" />

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
           :className="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" :className="{ 'is-active': isOpen }">
        <div className="navbar-start">
          <RouterLink to="/" className="navbar-item">Home</RouterLink>
          <RouterLink to="/products" className="navbar-item">Shop</RouterLink>


          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <RouterLink to="/about" className="navbar-item">
                About
              </RouterLink>
              <RouterLink to="/jobs" className="navbar-item">
                Jobs
              </RouterLink>
              <RouterLink to="/contact" className="navbar-item">
                Contact
              </RouterLink>
              <hr className="navbar-divider">
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <LoginBadge />
              <button className="button is-warning is-light is-active" :className="{ 'is-focused': isCartOpen }"
                      @click="isCartOpen = !isCartOpen">
                <span className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <FlyoutPanel :is-open="isCartOpen">
    <ShoppingCart />
  </FlyoutPanel>
  </nav>
 
)
}

