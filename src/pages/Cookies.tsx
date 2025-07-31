import  { Settings, Eye, Database, Shield } from 'lucide-react'; 

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 rounded-xl p-8 mb-8 shadow-2xl border border-yellow-600">
          <div className="flex items-center space-x-4">
            <Settings className="h-12 w-12 text-green-800" />
            <div>
              <h1 className="text-4xl font-bold text-green-800 cursive-font">Cookie Policy</h1>
              <p className="text-green-700 text-lg mt-2">How we use cookies to enhance your experience</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-yellow-200 p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-green-600" />
                What Are Cookies?
              </h2>
              <p className="text-amber-800 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-green-600" />
                Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Essential Cookies</h3>
                  <p className="text-blue-700 text-sm">Required for basic website functionality, login sessions, and security features.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Preference Cookies</h3>
                  <p className="text-green-700 text-sm">Remember your settings like theme, language, and reading preferences.</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Analytics Cookies</h3>
                  <p className="text-yellow-700 text-sm">Help us understand how you use our site to improve user experience.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Marketing Cookies</h3>
                  <p className="text-purple-700 text-sm">Enable personalized book recommendations and relevant content.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-amber-800">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to view, delete, and block cookies</li>
                  <li><strong>Cookie Banner:</strong> Choose your preferences when you first visit our site</li>
                  <li><strong>Privacy Settings:</strong> Update your preferences anytime in your account settings</li>
                  <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Third-Party Cookies</h2>
              <p className="text-amber-800 leading-relaxed mb-4">
                We may allow trusted third-party services to set cookies on our site for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-amber-800 ml-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>Social media platforms for sharing features</li>
                <li>Content delivery networks for improved performance</li>
                <li>Book recommendation engines for personalized suggestions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-600" />
                Cookie Security
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 leading-relaxed">
                  We implement security measures to protect the information stored in cookies. 
                  Session cookies are encrypted and automatically deleted when you close your browser. 
                  Persistent cookies have expiration dates and are regularly reviewed for necessity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Updates to This Policy</h2>
              <p className="text-amber-800 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for legal or regulatory reasons. We will notify you of any significant changes by posting 
                the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Contact Us</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800">
                  <strong>Questions about our Cookie Policy?</strong><br />
                  Email: privacy@bookhaven.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Enchanted Grove, Fantasy Realm, FR 12345
                </p>
              </div>
            </section>

            <div className="text-center text-sm text-gray-600 border-t border-gray-200 pt-6">
              <p>Last updated: December 2024</p>
              <p>© 2024 BookHaven. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
 