import  { Shield, Eye, Lock, Database } from 'lucide-react'; 

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 rounded-xl p-8 mb-8 shadow-2xl border border-yellow-600">
          <div className="flex items-center space-x-4">
            <Shield className="h-12 w-12 text-green-800" />
            <div>
              <h1 className="text-4xl font-bold text-green-800 cursive-font">Privacy Policy</h1>
              <p className="text-green-700 text-lg mt-2">Your privacy is our priority</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-yellow-200 p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-green-600" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-amber-800">
                <div>
                  <h3 className="font-semibold">Personal Information:</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Name, email address, and contact information</li>
                    <li>Library card number and account credentials</li>
                    <li>Reading preferences and history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Usage Data:</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Books borrowed, read, and reviewed</li>
                    <li>Search queries and browsing history</li>
                    <li>Device information and IP address</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-amber-800">
                <li>Provide and maintain library services</li>
                <li>Personalize book recommendations</li>
                <li>Send notifications about due dates and new releases</li>
                <li>Improve our services through analytics</li>
                <li>Communicate important updates and announcements</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-green-600" />
                Data Protection & Security
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="space-y-3 text-blue-800">
                  <p><strong>Encryption:</strong> All data transmitted is encrypted using industry-standard SSL/TLS protocols</p>
                  <p><strong>Access Control:</strong> Strict access controls limit who can view your personal information</p>
                  <p><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</p>
                  <p><strong>Data Minimization:</strong> We only collect data necessary for providing our services</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Information Sharing</h2>
              <div className="space-y-3 text-amber-800">
                <p><strong>We do NOT sell your personal information to third parties.</strong></p>
                <p>Limited sharing occurs only in these circumstances:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With service providers under strict confidentiality agreements</li>
                  <li>To protect rights, property, or safety</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Access & Portability</h3>
                  <p className="text-green-700 text-sm">Request a copy of your personal data in a portable format</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Correction</h3>
                  <p className="text-yellow-700 text-sm">Update or correct inaccurate personal information</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Deletion</h3>
                  <p className="text-red-700 text-sm">Request deletion of your personal data (with certain limitations)</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Opt-out</h3>
                  <p className="text-purple-700 text-sm">Unsubscribe from marketing communications at any time</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Cookies & Tracking</h2>
              <p className="text-amber-800 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside space-y-1 text-amber-800">
                <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
                <li><strong>Marketing Cookies:</strong> Provide personalized recommendations (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Contact Us</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800">
                  <strong>Privacy Questions?</strong><br />
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

export default Privacy;
 