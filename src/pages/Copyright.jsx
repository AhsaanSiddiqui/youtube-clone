import React from 'react'
import Footer from '../components/Footer'

const Copyright = ({ sidebarExpanded }) => {
  return (
    <main className={`flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out bg-white ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex-1 bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Copyright & Intellectual Property</h1>
          
          <div className="text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Respect for Copyright</h2>
              <p className="leading-relaxed">
                We respect intellectual property rights and expect our users to do the same. This policy 
                explains how we handle copyright complaints and protect the rights of content creators.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Copyright Protection</h2>
              <p className="leading-relaxed">
                Content uploaded to our platform must not infringe on the intellectual property rights 
                of others. This includes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Copyrighted music, videos, images, or other media</li>
                <li>Copyrighted text, scripts, or other written works</li>
                <li>Protected trademarks or brand names</li>
                <li>Patented processes or designs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Handle Copyright Claims</h2>
              <p className="leading-relaxed">
                When we receive a valid copyright complaint, we:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Review the complaint for validity and completeness</li>
                <li>Notify the uploader of the copyright claim</li>
                <li>Remove or restrict access to the allegedly infringing content</li>
                <li>Provide a process for the uploader to respond or appeal</li>
                <li>Take action against repeat offenders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Digital Millennium Copyright Act (DMCA)</h2>
              <p className="leading-relaxed">
                We comply with the DMCA and similar copyright laws worldwide. To file a DMCA takedown notice, 
                please provide:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your contact information and signature</li>
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Location of the allegedly infringing content</li>
                <li>Statement of good faith belief that the use is not authorized</li>
                <li>Statement that the information is accurate and you are the copyright owner</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Counter-Notification</h2>
              <p className="leading-relaxed">
                If you believe your content was wrongfully removed, you may file a counter-notification. 
                A valid counter-notification must include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your contact information</li>
                <li>Identification of the removed content</li>
                <li>Statement under penalty of perjury that the content was removed by mistake</li>
                <li>Consent to the jurisdiction of federal court</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Fair Use</h2>
              <p className="leading-relaxed">
                You may use copyrighted content if your use qualifies as fair use. Fair use considers:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>The purpose and character of your use</li>
                <li>The nature of the copyrighted work</li>
                <li>The amount and substantiality of the portion used</li>
                <li>The effect on the potential market for the copyrighted work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Copyright Licensing</h2>
              <p className="leading-relaxed">
                Some content may be used under Creative Commons licenses or other open licenses. Be sure to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Check the license terms carefully</li>
                <li>Provide proper attribution when required</li>
                <li>Follow any license restrictions</li>
                <li>Respect the license holder's rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Repeat Infringer Policy</h2>
              <p className="leading-relaxed">
                In accordance with our repeat infringer policy, users who receive multiple copyright 
                complaints may have their accounts terminated. We reserve the right to suspend or terminate 
                accounts of users who repeatedly infringe on intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Content</h2>
              <p className="leading-relaxed">
                By uploading content to our platform, you retain ownership of your original works. However, 
                you grant us a license to use, display, and distribute your content as necessary to provide 
                our services. Make sure you have the right to upload any content that is not originally yours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Copyright Agent</h2>
              <p className="leading-relaxed">
                To contact our copyright agent for DMCA notices, please send correspondence to our designated 
                agent at the address provided in your account settings or contact our legal department through 
                the support center.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Questions and Support</h2>
              <p className="leading-relaxed">
                If you have questions about copyright or intellectual property on our platform, please 
                contact our legal team through the support center. We're here to help protect your rights 
                and ensure a respectful environment for all creators.
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

export default Copyright

