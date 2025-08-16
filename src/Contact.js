import { FaGithub, FaLinkedin, FaSalesforce } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Contact Me</h2>
      <p className="text-gray-600 mb-8">
        Let’s connect! I’m open to Salesforce Developer roles, collaborations, or just a chat.
      </p>

      <div className="flex justify-center gap-8 text-3xl">
        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>

        {/* Trailhead */}
       {/* Salesforce (for Trailhead profile) */}
        <a
        href="https://trailblazer.me/id/yourtrailheadid"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition"
        >
        <FaSalesforce />
        </a>


        {/* Email */}
        <a
          href="mailto:schandna308@gmail.com"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <MdEmail />
        </a>
      </div>
    </section>
  );
}

export default Contact;
