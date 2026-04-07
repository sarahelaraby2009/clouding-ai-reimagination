export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t text-center"
      style={{ background: '#020e20', borderColor: 'rgba(0,200,224,0.1)' }}
    >
      <p
        className="text-xl font-bold mb-3"
        style={{
          background: 'linear-gradient(135deg, #00c8e0, #045089)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        clouding.ai
      </p>
      <p className="text-xs text-white/25 mb-4">
        © 2025 Clouding AI · Dubai South Business Park, UAE
      </p>
      <div className="flex items-center justify-center gap-6 text-xs text-white/25">
        <a
          href="https://www.linkedin.com/company/clouding-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00c8e0] transition-colors"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a href="#" className="hover:text-[#00c8e0] transition-colors">
          Privacy Policy
        </a>
        <span>·</span>
        <a
          href="mailto:info@clouding.ai"
          className="hover:text-[#00c8e0] transition-colors"
        >
          info@clouding.ai
        </a>
      </div>
    </footer>
  )
}
