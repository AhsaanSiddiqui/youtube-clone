import React from 'react'
import Footer from '../components/Footer'

const PoliciesSafety = ({ sidebarExpanded }) => {
  return (
    <main className={`flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out bg-white ${sidebarExpanded ? 'ml-0' : 'ml-0'}`}>
      <div className="flex-1 bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Policies & Safety</h1>
          
          <div className="text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community Guidelines</h2>
              <p className="leading-relaxed">
                Our community guidelines help maintain a safe and respectful environment for all users. 
                We expect all users to follow these guidelines when participating in our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Harmful or Dangerous Content</h2>
              <p className="leading-relaxed">
                We prohibit content that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Encourages dangerous activities that could lead to physical harm</li>
                <li>Contains graphic violence or disturbing imagery</li>
                <li>Promotes harmful substances or illegal drug use</li>
                <li>Provides instructions for dangerous activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hateful Content</h2>
              <p className="leading-relaxed">
                We do not tolerate content that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Promotes violence or hatred against individuals or groups based on race, ethnicity, 
                    religion, gender, or sexual orientation</li>
                <li>Contains slurs or offensive language targeting protected groups</li>
                <li>Incites hostility or discrimination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Harassment and Cyberbullying</h2>
              <p className="leading-relaxed">
                We are committed to protecting our users from harassment and cyberbullying. This includes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Targeted harassment or abuse</li>
                <li>Threats or intimidation</li>
                <li>Repeated unwanted contact</li>
                <li>Public disclosure of private information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Spam and Misleading Content</h2>
              <p className="leading-relaxed">
                We prohibit:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Repetitive, unwanted, or unsolicited messages</li>
                <li>Misleading metadata or thumbnails</li>
                <li>Clickbait titles or descriptions</li>
                <li>Scalping or selling inauthentic content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sexual Content</h2>
              <p className="leading-relaxed">
                Adult content is not allowed on our platform. This includes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Explicit sexual content or nudity</li>
                <li>Sexually suggestive content</li>
                <li>Content that depicts sexual acts</li>
                <li>Exploitation of minors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Copyright and Intellectual Property</h2>
              <p className="leading-relaxed">
                Respect the intellectual property rights of others. Do not upload content that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Infringes on copyrighted material</li>
                <li>Uses trademarked content without permission</li>
                <li>Violates other intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Reporting Violations</h2>
              <p className="leading-relaxed">
                If you encounter content or behavior that violates these policies, please report it using 
                our reporting tools. We review all reports and take appropriate action, which may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Removing the offending content</li>
                <li>Issuing warnings to users</li>
                <li>Suspending or terminating accounts</li>
                <li>Reporting to law enforcement when necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Age Restrictions</h2>
              <p className="leading-relaxed">
                Our service is intended for users who are at least 13 years old. Users under 18 must have 
                parental or guardian supervision. We have additional protections and restrictions for younger users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Safety Tools</h2>
              <p className="leading-relaxed">
                We provide various safety tools to help you control your experience:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Content filtering and restrictions</li>
                <li>Comment moderation settings</li>
                <li>Block and report features</li>
                <li>Privacy settings for your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Enforcement</h2>
              <p className="leading-relaxed">
                We use a combination of automated systems and human review to enforce these policies. 
                Our enforcement actions are designed to be fair and consistent, with opportunities for 
                appeal in appropriate cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about these policies or need to report a safety concern, please 
                contact our safety team through the support center.
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

export default PoliciesSafety

