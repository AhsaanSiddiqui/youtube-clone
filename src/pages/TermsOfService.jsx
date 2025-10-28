import React from 'react'
import Footer from '../components/Footer'

const TermsOfService = ({ sidebarExpanded }) => {
  return (
    <main className={`flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out bg-white ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex-1 bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using this platform, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="leading-relaxed">
                We provide a video sharing platform where users can upload, share, and view video content. 
                The service includes features for commenting, liking, subscribing, and creating playlists.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="leading-relaxed">
                To access certain features, you must create an account. You are responsible for maintaining 
                the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Conduct</h2>
              <p className="leading-relaxed">
                You agree to use the service only for lawful purposes and in a manner that does not infringe 
                the rights of or restrict the use of this website by any third party. You may not:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Post or transmit any material that is defamatory, offensive, or violates any laws</li>
                <li>Upload content that infringes on intellectual property rights</li>
                <li>Use the service for any commercial purpose without authorization</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Content Ownership</h2>
              <p className="leading-relaxed">
                You retain ownership of any content you upload. By uploading content, you grant us a worldwide, 
                non-exclusive, royalty-free license to use, reproduce, distribute, and display your content 
                in connection with the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content and materials on this platform, including but not limited to text, graphics, logos, 
                and software, are the property of the service or its content suppliers and are protected by 
                international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                The service is provided "as is" without warranties of any kind, either express or implied. 
                We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall the service be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the service after 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our 
                support channels.
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default TermsOfService

