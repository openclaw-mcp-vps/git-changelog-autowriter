export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-Generate Changelogs from{" "}
          <span className="text-[#58a6ff]">Git History</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI reads your commits and PR descriptions and writes polished, user-facing changelogs — with semantic versioning and categorized changes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e] leading-relaxed">
          <p className="text-[#58a6ff] mb-2">## v2.4.0 — 2024-06-10</p>
          <p className="text-green-400">### ✨ Features</p>
          <p>- Add dark mode support across all dashboard views</p>
          <p>- Introduce CSV export for analytics reports</p>
          <p className="text-yellow-400 mt-2">### 🐛 Bug Fixes</p>
          <p>- Fix pagination reset on filter change</p>
          <p>- Resolve race condition in webhook delivery</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repositories",
              "GitHub & GitLab support",
              "AI-powered commit parsing",
              "Semantic versioning detection",
              "Markdown & HTML export",
              "Webhook & CI/CD integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which Git platforms are supported?",
              a: "We support GitHub and GitLab. Connect any public or private repository using a personal access token."
            },
            {
              q: "How does the AI parse commits?",
              a: "We analyze commit messages, PR titles, and PR body descriptions to extract features, fixes, and breaking changes — then format them into clean, readable changelog entries."
            },
            {
              q: "Can I customize the output format?",
              a: "Yes. You can choose between Markdown, HTML, or JSON output and configure category labels, version bump rules, and date formats."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Git Changelog Autowriter. All rights reserved.
      </footer>
    </main>
  );
}
