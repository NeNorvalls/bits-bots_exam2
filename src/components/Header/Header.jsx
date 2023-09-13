import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../utils/CartContext/cartContext'

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { cartQuantity } = useCart()

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header__left">
        <Link to="/">
          <h1 className="header__brand">Bits & Bots</h1>
        </Link>
      </div>
      <button className="header__menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav className="header__nav">
        {isLoggedIn ? (
          <>
            <Link to="/browse" className="header__nav-item">
              Browse
            </Link>
            <Link to="/cart" className="header__nav-item">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartQuantity})
            </Link>
            <Link to="/checkout" className="header__nav-item">
              Checkout
            </Link>
            <Link to="/logout" className="header__nav-item">
              Logout
            </Link>
          </>
        ) : null}
      </nav>
    </header>
  )
}

export default Header