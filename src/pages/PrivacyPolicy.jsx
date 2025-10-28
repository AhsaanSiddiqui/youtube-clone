import React from 'react'
import Footer from '../components/Footer'

const PrivacyPolicy = ({ sidebarExpanded }) => {
  return (
    <main className={`flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out bg-white ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex-1 bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. This privacy policy 
                explains how we collect, use, and safeguard your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Account information (username, email address, password)</li>
                <li>Profile information (name, photo, bio)</li>
                <li>Content you upload (videos, comments, playlists)</li>
                <li>Communication data (messages, feedback)</li>
                <li>Payment information (for premium services)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information only:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>With your consent or at your direction</li>
                <li>With service providers who assist us in operating the platform</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the safety of our users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Correct any inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our support channels.
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

export default PrivacyPolicy

