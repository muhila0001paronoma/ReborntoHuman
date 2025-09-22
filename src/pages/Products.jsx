import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Hair Care')
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState(2) // Starting with 2 items as shown in design

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

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
      <Navbar />
     
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 
              className="text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'Poetsen One',
                fontWeight: 400,
                fontStyle: 'normal',
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
          
          {/* Shopping Cart */}
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h12M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
            </svg>
            <span 
              className="text-white font-semibold"
              style={{ fontFamily: 'Poppins' }}
            >
              Cart ({cartItems})
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
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

      <Footer />
    </div>
  )
}

export default Products
