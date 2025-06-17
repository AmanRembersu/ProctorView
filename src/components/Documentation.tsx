import { Helmet } from "react-helmet";

function Documentation() {
    return (
        <>
            {/* Meta Tags and Title */}
            <Helmet>
                <title>ProctorBView Documentation</title>
                <meta
                    name="description"
                    content="ProctorBView Full Documentation for Secure Online Exam Browser"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <main className="bg-white text-black font-sans min-h-screen py-16 px-4 md:px-0 text-left">
                <div className="container mx-auto">

                    {/* Introduction */}
                    <section id="introduction" className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-700">
                            <strong>ProctorBView</strong> is a secure, Electron-based desktop browser built for high-stakes online assessments...
                        </p>
                    </section>

                    {/* Core Features */}
                    <section id="core-features" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Full-screen locked kiosk mode</li>
                            <li>Disabled shortcuts (Ctrl, F12, PrintScreen)</li>
                            <li>Secure URL loading from config</li>
                            <li>Electron-powered browser interface</li>
                            <li>Custom top-bar with secure exit</li>
                            <li>Iframe-based secure exam system</li>
                            <li>Daily-updated builds</li>
                        </ul>
                    </section>

                    {/* Technology Stack */}
                    <section id="technical-stack" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Frontend:</strong> HTML, CSS (Tailwind), JavaScript</li>
                            <li><strong>Backend:</strong> Electron (Node.js)</li>
                            <li><strong>Security Layer:</strong> Preload script</li>
                            <li><strong>Configurable:</strong> URL from JSON config</li>
                        </ul>
                    </section>

                    {/* App Structure */}
                    <section id="structure" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Application Structure</h2>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-black overflow-auto">
                            {`/ProctorBView
├── index.html         # Secure exam interface layout
├── main.js            # Electron app launcher
├── preload.js         # Input restrictions
├── config.json        # Exam URL
└── package.json       # Metadata and dependencies`}
                        </pre>
                    </section>

                    {/* How it Works */}
                    <section id="usage" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li>Launches in fullscreen kiosk mode</li>
                            <li>Loads secure exam via iframe</li>
                            <li>Blocks shortcuts/dev tools</li>
                            <li>Secure date + exit UI</li>
                            <li>Prevents screenshots/context menu</li>
                        </ol>
                    </section>

                    {/* Installation */}
                    <section id="installation" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-black overflow-auto">
                            {`# Clone the repo
git clone https://github.com/your-org/proctorbview.git
cd proctorbview

# Install dependencies
npm install

# Start app (dev mode)
npm start

# Build app (for production)
npm run build`}
                        </pre>
                    </section>

                    {/* Security Measures */}
                    <section id="security" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Right-click disabled via <code>preload.js</code></li>
                            <li>Shortcut blocking (Ctrl, F12, PrintScreen)</li>
                            <li>No dev tools access</li>
                            <li>Auto-updated security patches</li>
                        </ul>
                    </section>

                    {/* Customization */}
                    <section id="customization" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Customization & Branding</h2>
                        <p className="text-gray-700">
                            White-labeled versions available with your logo, policies, and platform. Contact us for details.
                        </p>
                    </section>

                    {/* Support */}
                    <section id="support" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Support & Updates</h2>
                        <p className="text-gray-700">
                            Every license includes support, documentation, and automatic security updates.
                        </p>
                    </section>

                    {/* Contact */}
                    <section id="contact" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-700">
                            For demos or licensing, email <a href="mailto:support@proctorbview.com" className="text-blue-600 underline">support@proctorbview.com</a>.
                        </p>
                    </section>

                    {/* Back to Home */}
                    <div className="mt-8">
                        <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Documentation;
