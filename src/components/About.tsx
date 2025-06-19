function About() {
  return (
    <div className="bg-black text-gray-300 font-sans leading-relaxed"> // the main div with background color and text color
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20 text-left">

        <section id="overview" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            What is ProctorView?
          </h2>
          <p className="text-lg max-w-prose">
            ProctorView is a modern online exam proctoring platform designed for institutions and educators who want to conduct remote tests seamlessly. Our user-friendly interface and screen monitoring tools make it easy to maintain test discipline in a virtual environment. Causing the students to appear the exams or any tests without any cheating or any other malpractices.
          </p>
          <p className="text-lg max-w-prose">
            Built for simplicity and scale, ProctorView helps ensure fair testing conditions with minimal setup — Easy setup, no hassle.
          </p>
        </section>

        <section id="features" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            What Makes Us Different
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg max-w-prose">
            <li><strong>Screen Monitoring:</strong> Tracks browser tabs and activity to flag unauthorized actions. Must be developed with within site</li>
            <li><strong>Effortless Setup:</strong> No plugins or Complex setups — exams start directly in the browser after installed .</li>
            <li><strong>Session Recording:</strong> Test sessions are recorded for post-exam review and transparency.</li>
            <li><strong>Prevents Malpractices</strong>No other applications and tabs cant open , keyboard shortcuts dont work.</li>
          </ul>
        </section>

        <section id="get-started" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            Why Choose ProctorView?
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-lg max-w-prose">
            <li><strong>Browser-Based:</strong> 100% web-based exam experience with no installations required.</li>
            <li><strong>Streamlined Monitoring:</strong> See candidate activity live with minimal overhead.</li>
            <li><strong>Time-Saving:</strong> Automate the exam process and reduce manual overhead.</li>
            <li><strong>Flexible Integration:</strong> Easy to embed into your learning systems or workflows.</li>
          </ol>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-200 border-b-4 border-gray-700 inline-block pb-2">
            FAQs
          </h2>
          <div className="space-y-4 max-w-prose">
            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">Is ProctorView easy to set up?</summary>
              <p className="mt-2 text-gray-300">
                Yes. Just share a link — no installations or setup needed.
              </p>
            </details>
            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">Can ProctorView track browser activity?</summary>
              <p className="mt-2 text-gray-300">
                Yes. It monitors tab switching, copy-paste actions, and other screen-based behaviors.
              </p>
            </details>
            <details className="bg-gray-800 rounded-md p-4">
              <summary className="cursor-pointer font-semibold text-gray-300">How are exams reviewed?</summary>
              <p className="mt-2 text-gray-300">
                Recordings and logs are saved for supervisors to review after the test session.
              </p>
            </details>
          </div>
        </section>

        <div className="mt-8">
          <a href="/" className="text-white hover:underline">← Back to Home</a>
        </div>

      </main>
    </div>
  )
}

export default About;
