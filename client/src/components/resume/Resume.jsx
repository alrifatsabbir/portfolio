import React from 'react';

function Resume() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">University Name, City, Country</p>
              <p className="text-gray-600">Graduation Year</p>
            </div>
            {/* Add more education entries */}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Web Developer</h4>
              <p className="text-gray-600">Company Name, City, Country</p>
              <p className="text-gray-600">Start Date - End Date</p>
              <ul className="list-disc list-inside">
                <li>Developed and maintained web applications.</li>
                <li>Collaborated with team members to deliver projects.</li>
                <li>Implemented new features and improved existing ones.</li>
              </ul>
            </div>
            {/* Add more experience entries */}
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/path/to/your/resume.pdf" // Replace with the actual path to your resume file
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            download="my-resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;