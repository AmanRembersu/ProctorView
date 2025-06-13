function About() {

  return (
    <body className="bg-black text-gray-300 font-sans leading-relaxed">


      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 text-left">

        <section id="overview" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Overview
          </h2>
          <p className="text-lg max-w-prose">
            ProctorView is an AI-powered secure online examination system designed for educational institutions, certification bodies, and training organizations that want to administer exams remotely with confidence and integrity. Our platform provides a seamless, user-friendly experience for both examiners and candidates, ensuring fair and transparent assessments without compromising convenience.
          </p>
          <p className="text-lg max-w-prose">
            In an era where remote learning and online certification are becoming the norm, ProctorView bridges the gap by providing cutting-edge technology to prevent cheating, monitor candidate behavior, and secure exam content — all while being easy to deploy and manage.
          </p>
        </section>

        <section id="features" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Key Features
          </h2>

          <ul className="list-disc list-inside space-y-3 text-lg max-w-prose">
            <li><strong>AI-Based Proctoring:</strong> Uses advanced AI algorithms to detect suspicious behaviors such as multiple faces, screen switching, and unusual movements in real time.</li>
            <li><strong>Live Video Monitoring:</strong> Invigilators can observe candidates remotely via live webcam feeds with recording options for later review.</li>
            <li><strong>Secure Browser Lockdown:</strong> Prevents access to other applications, websites, or copying tools during exams, ensuring candidates stay focused on the test.</li>
            <li><strong>Identity Verification:</strong> Multi-factor authentication and biometric checks to confirm candidate identity before exam start.</li>
            <li><strong>Question Randomization:</strong> Automatic shuffling of questions and answer options to reduce cheating opportunities.</li>
            <li><strong>Detailed Reports & Analytics:</strong> Generate comprehensive reports highlighting suspicious activity, performance metrics, and exam summaries.</li>
            <li><strong>Scalable & Cloud-Based:</strong> Easily handle thousands of concurrent exams with zero infrastructure hassle.</li>
          </ul>
        </section>

        <section id="security" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Security & Privacy
          </h2>
          <p className="text-lg max-w-prose">
            Security is our top priority at ProctorView. We follow industry best practices to safeguard exam data and protect user privacy:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg max-w-prose">
            <li><strong>End-to-End Encryption:</strong> All video streams, exam data, and user information are encrypted both in transit and at rest.</li>
            <li><strong>GDPR & FERPA Compliance:</strong> We strictly adhere to international data protection regulations to ensure candidates' rights are respected.</li>
            <li><strong>Role-Based Access Control:</strong> Granular permissions allow only authorized personnel to access sensitive information.</li>
            <li><strong>Data Retention Policies:</strong> Exam recordings and logs are stored for configurable durations with secure deletion afterward.</li>
            <li><strong>Secure Authentication:</strong> Multi-factor authentication (MFA) supports secure user login and access to exam environments.</li>
          </ul>
        </section>

        <section id="benefits" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Benefits of Using ProctorView
          </h2>
          <p className="text-lg max-w-prose">
            Institutions and organizations using ProctorView enjoy multiple advantages that help improve the credibility and efficiency of their examination processes:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-lg max-w-prose">
            <li><strong>Reduced Cheating:</strong> AI monitoring and secure lockdown drastically reduce cheating incidents.</li>
            <li><strong>Cost Savings:</strong> Eliminate the need for physical exam centers and invigilators on-site.</li>
            <li><strong>Flexibility:</strong> Candidates can take exams from anywhere, increasing participation rates.</li>
            <li><strong>Data-Driven Insights:</strong> Detailed reports help improve question quality and exam fairness over time.</li>
            <li><strong>Fast Deployment:</strong> Cloud-based architecture means no heavy IT setup or maintenance.</li>
          </ol>
        </section>

        <section id="technology" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Technology Behind ProctorView
          </h2>
          <p className="text-lg max-w-prose">
            ProctorView leverages the latest advancements in AI, cloud computing, and cybersecurity:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg max-w-prose">
            <li><strong>Artificial Intelligence:</strong> Computer vision models analyze webcam feeds for facial recognition, eye movement tracking, and anomaly detection.</li>
            <li><strong>Cloud Infrastructure:</strong> Hosted on scalable cloud platforms ensuring high availability and performance.</li>
            <li><strong>WebRTC & Video Streaming:</strong> Real-time video streaming optimized for low latency and reliability.</li>
            <li><strong>Advanced Encryption:</strong> Industry-standard cryptographic protocols protect exam content and user data.</li>
            <li><strong>Responsive Web UI:</strong> Intuitive and accessible design compatible with desktop and mobile devices.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-prose">
            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">How does ProctorView ensure exam integrity?</summary>
              <p className="mt-2 text-gray-300">
                ProctorView uses AI to monitor video feeds, locks down browsers to prevent cheating, and verifies candidate identity to maintain exam integrity throughout.
              </p>
            </details>

            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">Is my data secure with ProctorView?</summary>
              <p className="mt-2 text-gray-300">
                Absolutely. All data is encrypted and stored securely. We comply with GDPR and other regulations to protect your privacy.
              </p>
            </details>

            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">Can candidates use mobile devices to take exams?</summary>
              <p className="mt-2 text-gray-300">
                Yes, our responsive design supports most modern smartphones and tablets, but webcams and stable internet are required.
              </p>
            </details>

            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">What if there is a connectivity issue during the exam?</summary>
              <p className="mt-2 text-gray-300">
                ProctorView automatically attempts to reconnect the video stream. Exams can be resumed, and logs are preserved to ensure fairness.
              </p>
            </details>

            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">How can institutions get started?</summary>
              <p className="mt-2 text-gray-300">
                Simply contact our sales team or sign up on our website. We offer onboarding and support to ensure a smooth experience.
              </p>
            </details>
          </div>
        </section>
        <div className="mt-8">
          <a href="/" className="text-white-600 hover:underline">← Back to Home</a>
        </div>

      </main>


    </body>
  )
}
export default About;