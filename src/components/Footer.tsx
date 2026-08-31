import { Code2, AtSign, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 py-12 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Guarantee */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight text-white">
            EXP MOTION
          </Link>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <ShieldCheck size={16} className="text-green-400" />
            <span>Built by developers, for developers.</span>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-white">Legal</h4>
          <Link href="/terms" className="text-sm hover:text-white transition-colors w-fit">Terms of Service</Link>
          <Link href="/privacy" className="text-sm hover:text-white transition-colors w-fit">Privacy Policy</Link>
          <span className="text-sm">Refunds: <a href="mailto:expstudio26@gmail.com" className="hover:text-white transition-colors">expstudio26@gmail.com</a></span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://twitter.com/@KranthiV378873" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm"
          >
            <AtSign size={18} />
            <span>Creator</span>
          </a>
          <a 
            href="https://github.com/kranthi-07/ExpMotion.git" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <Code2 size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:expstudio26@gmail.com" 
            className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <Mail size={18} />
            <span>expstudio26@gmail.com</span>
          </a>
          <a 
            href="https://forms.gle/placeholder" 
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-white transition-colors flex items-center gap-2 text-sm font-medium bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20"
          >
            <span>Request a Component</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 text-center md:text-left text-xs text-text-secondary/60">
        &copy; {new Date().getFullYear()} EXP Studio. All rights reserved.
      </div>
    </footer>
  );
}
