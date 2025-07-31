import  { FileText, Shield, AlertCircle } from 'lucide-react'; 

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 rounded-xl p-8 mb-8 shadow-2xl border border-yellow-600">
          <div className="flex items-center space-x-4">
            <FileText className="h-12 w-12 text-green-800" />
            <div>
              <h1 className="text-4xl font-bold text-green-800 cursive-font">Terms of Service</h1>
              <p className="text-green-700 text-lg mt-2">BookHaven Digital Library Agreement</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-yellow-200 p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-green-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-amber-800 leading-relaxed">
                By accessing and using BookHaven's digital library services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">2. Library Services</h2>
              <div className="space-y-3 text-amber-800">
                <p><strong>Digital Collections:</strong> Access to e-books, audiobooks, and digital resources</p>
                <p><strong>Borrowing Period:</strong> Standard loan period is 21 days with renewal options</p>
                <p><strong>Holds and Reservations:</strong> Reserve titles and receive notifications when available</p>
                <p><strong>Reading Progress:</strong> Automatic synchronization across devices</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-amber-800">
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the service for personal, non-commercial purposes only</li>
                <li>Respect intellectual property rights and copyright laws</li>
                <li>Provide accurate information during registration</li>
                <li>Report any technical issues or unauthorized access promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">4. Prohibited Activities</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div className="space-y-2 text-red-800">
                    <p><strong>Strictly Prohibited:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Sharing account credentials with unauthorized users</li>
                      <li>Attempting to circumvent digital rights management</li>
                      <li>Downloading or redistributing copyrighted content</li>
                      <li>Using automated tools to access the service</li>
                      <li>Posting inappropriate content in reviews or discussions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-amber-800 leading-relaxed">
                We are committed to protecting your privacy. Our Privacy Policy details how we collect, 
                use, and protect your personal information. By using BookHaven, you consent to the 
                practices described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">6. Service Availability</h2>
              <p className="text-amber-800 leading-relaxed">
                While we strive to provide continuous service, BookHaven may experience downtime for 
                maintenance, updates, or unforeseen circumstances. We do not guarantee uninterrupted 
                access to our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">7. Modifications to Terms</h2>
              <p className="text-amber-800 leading-relaxed">
                BookHaven reserves the right to modify these Terms of Service at any time. 
                We will notify users of significant changes via email or service announcements. 
                Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">8. Contact Information</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  <strong>Questions about these terms?</strong><br />
                  Email: legal@bookhaven.com<br />
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

export default Terms;
 