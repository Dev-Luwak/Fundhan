import { Mail, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6 text-sm mt-12 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Fundhan. Made with ❤️ by Dev-Luwak
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="mailto:hello@fundhan.app" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/pranav-projects/fundhan" target="_blank" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/pranav" target="_blank" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
