import React from 'react'
import Footer from '../components/Footer'

const About = ({ sidebarExpanded }) => {
  return (
    <main className={`flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out bg-white ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      {/* Image Grid Section */}
      <div className="w-full bg-white px-8 py-8 flex-shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-6 gap-4">
          {/* Row 1 */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&h=400&fit=crop" 
              alt="Scientist illustration" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop" 
              alt="Bicycle" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=500&h=400&fit=crop" 
              alt="Popcorn" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop" 
              alt="Motorcycle" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=400&fit=crop" 
              alt="Abstract pattern" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=400&fit=crop" 
              alt="Ice cream" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop" 
              alt="Gardening" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=400&fit=crop" 
              alt="Mountain climbing" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=400&fit=crop" 
              alt="Dancing" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1534945773093-48b6960f0a11?w=500&h=400&fit=crop" 
              alt="Fruits" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop" 
              alt="Nature" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=500&h=400&fit=crop" 
              alt="Abstract art" 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* About YouTube Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About YouTube</h1>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Our mission is to give everyone a voice and show them the world.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                <i className="fas fa-box text-white"></i>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                <i className="fas fa-cube text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default About

