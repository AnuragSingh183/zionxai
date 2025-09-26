export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="section py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-semibold"><span className="text-brand-400">Zion</span>XAI</div>
          <p className="text-white/60 mt-2">Tech consulting & software—AI, Cloud, Data, Security.</p>
        </div>
        <div>
          <h4 className="font-medium text-white/90">Contact</h4>
          <p className="text-white/60 mt-2">Dan@zionxai.com</p>
          <p className="text-white/60">Philadelphia, PA</p>
        </div>
        <div>
          <h4 className="font-medium text-white/90">Links</h4>
          <ul className="mt-2 space-y-2 text-white/60">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#clients" className="hover:text-white">Clients</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
          </ul>
        </div>
      </div>
      <div className="section pb-10 text-white/40 text-sm">© {new Date().getFullYear()} ZionXAI. All rights reserved.</div>
    </footer>
  );
}
