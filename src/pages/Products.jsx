import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Hair Care')
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState(2) // Starting with 2 items as shown in design
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    province: '',
    district: '',
    postalCode: '',
    address: ''
  })
  const [shippingMethod, setShippingMethod] = useState('standard')
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })
  const [cartProducts, setCartProducts] = useState([
    {
      id: 5,
      name: 'Beard Oil - Classic',
      brand: 'Honest Amish',
      price: 'LKR 2000.00',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      quantity: 1
    },
    {
      id: 2,
      name: 'Strong Hold Hair Wax',
      brand: 'Gatsby',
      price: 'LKR 3450.00',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop',
      quantity: 2
    }
  ])

  const categories = ['Hair Care', 'Beard Care', 'Skin Care', 'Shaving Essentials']

  const hairCareProducts = [
    {
      id: 1,
      name: 'Anti-Dandruff Shampoo',
      brand: 'Sisley Hair Rituel',
      price: 'LKR 950.00',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Strong Hold Hair Wax',
      brand: 'Gatsby',
      price: 'LKR 2000.00',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Keratin Repair Serum',
      brand: 'L\'Oreal Professionnel',
      price: 'LKR 3500.00',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Goldwell StyleSign Paste',
      brand: 'Goldwell',
      price: 'LKR 2400.00',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop'
    }
  ]

  const beardCareProducts = [
    {
      id: 5,
      name: 'Beard Oil - Classic',
      brand: 'Honest Amish',
      price: 'LKR 3200.00',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Beard Balm',
      brand: 'Beardbrand',
      price: 'LKR 4200.00',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=300&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Beard Comb - Wooden',
      brand: 'Kent',
      price: 'LKR 2000.00',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=300&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Beard Wash',
      brand: 'Scotch Porter',
      price: 'LKR 3900.00',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=300&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Beard Growth Serum',
      brand: 'Ustraa',
      price: 'LKR 2750.00',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop'
    }
  ]

  const skinCareProducts = [
    {
      id: 10,
      name: 'Daily Face Wash',
      brand: 'Nivea Men',
      price: 'LKR 2200.00',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Moisturizing Cream',
      brand: 'L\'Oreal Men Expert',
      price: 'LKR 3800.00',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'Exfoliating Scrub',
      brand: 'Bulldog Skincare',
      price: 'LKR 2900.00',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop'
    },
    {
      id: 13,
      name: 'Sunscreen - SPF 50',
      brand: 'Neutrogena Men',
      price: 'LKR 3900.00',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop'
    }
  ]

  const shavingProducts = [
    {
      id: 14,
      name: 'Double Edge Safety Razor',
      brand: 'Merkur Solingen',
      price: 'LKR 6500.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop'
    },
    {
      id: 15,
      name: 'Shaving Cream',
      brand: 'Taylor of Old Bond Street',
      price: 'LKR 3000.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop'
    },
    {
      id: 16,
      name: 'Aftershave Lotion',
      brand: 'Proraso',
      price: 'LKR 3200.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop'
    },
    {
      id: 17,
      name: 'Shaving Brush',
      brand: 'Parker',
      price: 'LKR 5500.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop'
    },
    {
      id: 18,
      name: 'Disposable Razors - 10 Pack',
      brand: 'Gillette',
      price: 'LKR 2400.00',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop'
    }
  ]

  const getCurrentProducts = () => {
    switch (activeCategory) {
      case 'Hair Care':
        return hairCareProducts
      case 'Beard Care':
        return beardCareProducts
      case 'Skin Care':
        return skinCareProducts
      case 'Shaving Essentials':
        return shavingProducts
      default:
        return hairCareProducts
    }
  }

  const filteredProducts = getCurrentProducts().filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    setCartItems(prev => prev + 1)
    // Here you would typically add the product to cart state
    console.log('Added to cart:', product)
  }

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartProducts(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (productId) => {
    setCartProducts(prev => prev.filter(item => item.id !== productId))
    setCartItems(prev => prev - 1)
  }

  const getTotalPrice = () => {
    return cartProducts.reduce((total, item) => {
      const price = parseFloat(item.price.replace('LKR ', '').replace(',', ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const getShippingCost = () => {
    switch (shippingMethod) {
      case 'standard': return 500
      case 'express': return 1200
      case 'overnight': return 2500
      default: return 500
    }
  }

  const getFinalTotal = () => {
    return getTotalPrice() + getShippingCost() - 180 // 180 is the discount
  }

  const handleCheckout = () => {
    setShowCart(false)
    setShowCheckout(true)
  }

  const handleBackToProducts = () => {
    setShowCheckout(false)
    setCurrentStep(1)
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleShippingChange = (field, value) => {
    setShippingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePaymentChange = (field, value) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePlaceOrder = () => {
    // Simulate order placement
    alert('Order placed successfully! Thank you for your purchase.')
    setShowCheckout(false)
    setCurrentStep(1)
    setCartProducts([])
    setCartItems(0)
  }

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
     
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 
            className="text-white mb-4"
            style={{
              fontFamily: 'Poetsen One, cursive',
              fontWeight: 400,
              fontStyle: 'bold ',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Our Products
          </h1>
          <p 
            className="text-xl text-white"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
            Premium grooming essentials to keep you looking sharp
          </p>
        </div>

        {/* Shopping Cart - Positioned absolutely in top right */}
        <div className="absolute top-8 right-8">
          <button 
            onClick={toggleCart}
            className="bg-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span 
              className="text-black font-bold"
              style={{ fontFamily: 'Poppins' }}
            >
              Cart ({cartItems})
            </span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-black font-semibold'
                  : 'bg-transparent text-white border-white hover:bg-gray-700'
              }`}
              style={{ fontFamily: 'Poppins' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
            style={{ fontFamily: 'Poppins' }}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-800 border border-white rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#00000099' }}
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-white rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h3 
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-gray-300 mb-3"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {product.brand}
                </p>
                <p 
                  className="text-white font-semibold mb-4"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors w-full"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p 
              className="text-white text-xl"
              style={{ fontFamily: 'Poppins' }}
            >
              No products found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Cart Popup */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 h-full bg-white w-full max-w-md max-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span className="text-white font-bold" style={{ fontFamily: 'Poppins' }}>
                  Cart ({cartItems})
                </span>
              </div>
              <button 
                onClick={toggleCart}
                className="text-white text-2xl font-bold hover:text-gray-300"
              >
                ×
              </button>
            </div>

            {/* Product List */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
              {cartProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 mb-4 relative">
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                  >
                    <span className="text-gray-600 text-sm">×</span>
                  </button>

                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins' }}>
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Poppins' }}>
                        {product.brand}
                      </p>
                      <p className="font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                        {product.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center font-bold" style={{ fontFamily: 'Poppins' }}>
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white" style={{ fontFamily: 'Poppins' }}>Sub Total:</span>
                <span className="text-white font-bold" style={{ fontFamily: 'Poppins' }}>
                  LKR {getTotalPrice().toLocaleString()}.00
                </span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors" 
                style={{ fontFamily: 'Poppins' }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Page */}
      {showCheckout && (
        <div className="fixed inset-0 bg-gray-800 z-50 overflow-y-auto flex flex-col">
          {/* Header */}
          <Header />
          
          {/* Top Bar */}
          <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
            <button 
              onClick={handleBackToProducts}
              className="text-white hover:text-gray-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span style={{ fontFamily: 'Poppins' }}>Back to Products</span>
            </button>
            <div className="text-white font-bold" style={{ fontFamily: 'Poppins' }}>
              Total: LKR {getFinalTotal().toLocaleString()}.00
            </div>
          </div>

          <div className="flex flex-1">
            {/* Left Side - Checkout Form */}
            <div className="flex-1 p-8">
              <h1 
                className="text-4xl font-bold text-white mb-8"
                style={{ fontFamily: 'Poetsen One, cursive' }}
              >
                Checkout
              </h1>

              {/* Dynamic Form Content */}
              <div className="bg-white rounded-lg p-6 flex">
                {/* Left Side - Vertical Progress Indicator */}
                <div className="w-64 pr-8">
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-300"></div>
                    
                    {/* Steps */}
                    {['Shipping Address', 'Shipping Method', 'Payment Details', 'Review & Place Order'].map((step, index) => (
                      <div key={step} className="relative flex items-center mb-8">
                        {/* Step Circle */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                          index + 1 <= currentStep ? 'bg-white text-black border-2 border-black' : 'bg-black text-white'
                        }`} style={{ fontFamily: 'Poppins' }}>
                          {index + 1}
                        </div>
                        
                        {/* Step Label */}
                        <div className="ml-4">
                          <span className={`text-sm font-bold ${
                            index + 1 <= currentStep ? 'text-black' : 'text-gray-600'
                          }`} style={{ fontFamily: 'Poppins' }}>
                            {step}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Form Content */}
                <div className="flex-1">
                  {/* Step 1: Shipping Address */}
                  {currentStep === 1 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                        Shipping Address
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            First Name
                          </label>
                          <input 
                            type="text" 
                            value={shippingData.firstName}
                            onChange={(e) => handleShippingChange('firstName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            value={shippingData.lastName}
                            onChange={(e) => handleShippingChange('lastName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Province
                          </label>
                          <input 
                            type="text" 
                            value={shippingData.province}
                            onChange={(e) => handleShippingChange('province', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            District
                          </label>
                          <input 
                            type="text" 
                            value={shippingData.district}
                            onChange={(e) => handleShippingChange('district', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Postal Code
                          </label>
                          <input 
                            type="text" 
                            value={shippingData.postalCode}
                            onChange={(e) => handleShippingChange('postalCode', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Address
                          </label>
                          <textarea 
                            rows={3}
                            value={shippingData.address}
                            onChange={(e) => handleShippingChange('address', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 2: Shipping Method */}
                  {currentStep === 2 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                        Shipping Method
                      </h2>
                      <div className="space-y-4">
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            shippingMethod === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                          }`}
                          onClick={() => setShippingMethod('standard')}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                Standard Shipping
                              </h3>
                              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins' }}>
                                5-7 business days
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                LKR 500.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            shippingMethod === 'express' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                          }`}
                          onClick={() => setShippingMethod('express')}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                Express Shipping
                              </h3>
                              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins' }}>
                                2-3 business days
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                LKR 1,200.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            shippingMethod === 'overnight' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                          }`}
                          onClick={() => setShippingMethod('overnight')}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                Overnight Shipping
                              </h3>
                              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins' }}>
                                Next business day
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-800" style={{ fontFamily: 'Poppins' }}>
                                LKR 2,500.00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 3: Payment Details */}
                  {currentStep === 3 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                        Payment Details
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Card Number
                          </label>
                          <input 
                            type="text" 
                            placeholder="1234 5678 9012 3456"
                            value={paymentData.cardNumber}
                            onChange={(e) => handlePaymentChange('cardNumber', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                              Expiry Date
                            </label>
                            <input 
                              type="text" 
                              placeholder="MM/YY"
                              value={paymentData.expiryDate}
                              onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              style={{ fontFamily: 'Poppins' }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                              CVV
                            </label>
                            <input 
                              type="text" 
                              placeholder="123"
                              value={paymentData.cvv}
                              onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              style={{ fontFamily: 'Poppins' }}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Cardholder Name
                          </label>
                          <input 
                            type="text" 
                            placeholder="John Doe"
                            value={paymentData.cardName}
                            onChange={(e) => handlePaymentChange('cardName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ fontFamily: 'Poppins' }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 4: Review & Place Order */}
                  {currentStep === 4 && (
                    <>
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                        Review & Place Order
                      </h2>
                      <div className="space-y-6">
                        {/* Shipping Address Review */}
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Shipping Address
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700" style={{ fontFamily: 'Poppins' }}>
                              {shippingData.firstName} {shippingData.lastName}<br/>
                              {shippingData.address}<br/>
                              {shippingData.district}, {shippingData.province}<br/>
                              {shippingData.postalCode}
                            </p>
                          </div>
                        </div>

                        {/* Shipping Method Review */}
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Shipping Method
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 capitalize" style={{ fontFamily: 'Poppins' }}>
                              {shippingMethod} Shipping
                            </p>
                          </div>
                        </div>

                        {/* Payment Review */}
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                            Payment Method
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700" style={{ fontFamily: 'Poppins' }}>
                              **** **** **** {paymentData.cardNumber.slice(-4)}<br/>
                              {paymentData.cardName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    {currentStep > 1 && (
                      <button 
                        onClick={handlePrevStep}
                        className="bg-gray-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors" 
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Previous
                      </button>
                    )}
                    <div className="flex-1"></div>
                    {currentStep < 4 ? (
                      <button 
                        onClick={handleNextStep}
                        className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors" 
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Next
                      </button>
                    ) : (
                      <button 
                        onClick={handlePlaceOrder}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors" 
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Summary */}
            <div className="w-96 bg-white overflow-y-auto">
              {/* Summary Header */}
              <div className="bg-gray-800 px-6 py-4">
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins' }}>
                  Summary
                </h2>
              </div>

              {/* Product List */}
              <div className="p-4 space-y-4">
                {cartProducts.map((product) => (
                  <div key={product.id} className="bg-gray-50 rounded-lg p-4 relative">
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    >
                      <span className="text-gray-600 text-sm">×</span>
                    </button>

                    <div className="flex items-center space-x-3">
                      {/* Product Image */}
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Poppins' }}>
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Poppins' }}>
                          {product.brand}
                        </p>
                        <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Poppins' }}>
                          {product.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                          className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 text-xs"
                        >
                          -
                        </button>
                        <span className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center font-bold text-xs" style={{ fontFamily: 'Poppins' }}>
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                          className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Coupon */}
              <div className="px-4 pb-4">
                <input 
                  type="text" 
                  placeholder="Enter Discount Coupon"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  style={{ fontFamily: 'Poppins' }}
                />
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-gray-800 px-6 py-4 space-y-2">
                <div className="flex justify-between text-white text-sm" style={{ fontFamily: 'Poppins' }}>
                  <span>sub total</span>
                  <span>LKR {getTotalPrice().toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between text-white text-sm" style={{ fontFamily: 'Poppins' }}>
                  <span>Shipping Fees</span>
                  <span>LKR {getShippingCost().toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between text-white text-sm" style={{ fontFamily: 'Poppins' }}>
                  <span>Tax</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between text-white text-sm" style={{ fontFamily: 'Poppins' }}>
                  <span>Discount</span>
                  <span>- LKR 180.00</span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-4">
                  <div className="flex justify-between text-white font-bold" style={{ fontFamily: 'Poppins' }}>
                    <span>Total</span>
                    <span>LKR {getFinalTotal().toLocaleString()}.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      )}
     
    </div>
  )
}

export default Products
