const Footer = () => {
  return (
    <footer className="py-8 bg-navy text-white/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">B</span>
          </div>
          <span className="text-sm">© 2025 Brain Station 23. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
