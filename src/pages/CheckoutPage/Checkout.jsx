import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import './Checkout.scss'
import { useCart } from '../../utils/CartContext/cartContext'

const Checkout = () => {
  const { cartItems, clearCart } = useCart()
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    if (validateData()) {
      setShowModal(true)
    }
  }

  const validateData = () => {
    return true
  }

  const handleConfirmPayment = () => {
    clearCart()
    localStorage.clear()
    setShowModal(false)
    navigate('/browse')
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__items">{cartItems.length} Items in Cart</div>
      <Container className="checkout__container">
        <form className="checkout__form" onSubmit={onSubmit}>
          <Row>
            <Col md={6} className="checkout__section">
              <h2 className="checkout__title">Billing Information</h2>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="checkout__input"
                  placeholder="John M. Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="checkout__input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col md={6} className="checkout__section">
              <h2 className="checkout__title">Payment Information</h2>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="cardName">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  className="checkout__input"
                  placeholder="John More Doe"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="cardNumber">
                  Credit card number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="checkout__input"
                  placeholder="1111-2222-3333-4444"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="expMonth">
                  Exp Month
                </label>
                <input
                  type="text"
                  id="expMonth"
                  name="expMonth"
                  className="checkout__input"
                  placeholder="September"
                  value={formData.expMonth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="expYear">
                  Exp Year
                </label>
                <input
                  type="text"
                  id="expYear"
                  name="expYear"
                  className="checkout__input"
                  placeholder="2018"
                  value={formData.expYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout__field">
                <label className="checkout__label" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="checkout__input"
                  placeholder="352"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
          </Row>
          <button type="submit" className="checkout__button">
            Confirm and Pay
          </button>
        </form>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to confirm payment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmPayment}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Checkout
