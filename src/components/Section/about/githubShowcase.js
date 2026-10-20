import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { GitHubIcon } from "../../SocialBrandIcon";

const FEATURED_REPO_NAMES = ["Crypto-market", "Blog-Application", "Portfolio"];

const FALLBACK_REPOS = [
  {
    id: 1,
    name: "Crypto-market",
    description: "Cryptocurrency market tracking application built with Kotlin, Android SDK, and REST API integration.",
    language: "Kotlin",
    stargazers_count: 3,
    html_url: "https://github.com/tanvir-shaharia/Crypto-market",
    topics: ["kotlin", "android", "crypto"]
  },
  {
    id: 2,
    name: "Blog-Application",
    description: "Full-featured blog and content management web application built with Ruby.",
    language: "Ruby",
    stargazers_count: 2,
    html_url: "https://github.com/tanvir-shaharia/Blog-Application",
    topics: ["ruby", "web", "backend"]
  },
  {
    id: 3,
    name: "Portfolio",
    description: "Modern developer portfolio & engineering architecture showcase built with React, Tailwind CSS, and Linear/Raycast design system.",
    language: "JavaScript",
    stargazers_count: 5,
    html_url: "https://github.com/tanvir-shaharia/Portfolio",
    topics: ["react", "tailwind", "portfolio"]
  }
];

export default function GitHubShowcase() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);

  useEffect(() => {
    let isMounted = true;
    fetch("https://api.github.com/users/tanvir-shaharia/repos?per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API rate limit or error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const matched = FEATURED_REPO_NAMES.map((name) => {
            const found = data.find((r) => r.name.toLowerCase() === name.toLowerCase());
            if (found) {
              return {
                id: found.id,
                name: found.name,
                description: found.description || FALLBACK_REPOS.find((f) => f.name.toLowerCase() === name.toLowerCase())?.description || "Public repository.",
                language: found.language || (name === "Crypto-market" ? "Kotlin" : name === "Blog-Application" ? "Ruby" : "JavaScript"),
                stargazers_count: found.stargazers_count || 0,
                html_url: found.html_url,
                topics: found.topics || []
              };
            }
            return FALLBACK_REPOS.find((f) => f.name.toLowerCase() === name.toLowerCase());
          }).filter(Boolean);

          if (matched.length > 0) {
            setRepos(matched);
          }
        }
      })
      .catch(() => {
        // Silently keep fallback repos
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pt-8 border-t border-gray-200/60 dark:border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
            OPEN SOURCE ACTIVITY
          </span>
          <h4 className="font-headline-sm text-xl sm:text-2xl font-bold text-gray-900 dark:text-text-primary flex items-center gap-2 mt-1">
            <GitHubIcon className="w-6 h-6 text-gray-900 dark:text-white" />
            GitHub Open Source Activity
          </h4>
          <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted mt-1">
            Featured open-source Android Native (Kotlin) &amp; Flutter repositories
          </p>
        </div>

        <a
          href="https://github.com/tanvir-shaharia"
          target="_blank"
          rel="noreferrer"
          className="font-label-ui text-xs font-semibold px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-surface-glass dark:hover:bg-white/10 text-gray-800 dark:text-on-surface border border-gray-200/80 dark:border-white/15 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
        >
          <span>View GitHub Profile</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-sky-600 dark:text-sky-400"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <Fade up key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white/70 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:border-sky-500/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="font-headline-sm font-bold text-sm sm:text-base text-gray-900 dark:text-text-primary group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2 truncate">
                    <i className="fa-solid fa-book-bookmark text-xs text-sky-600 dark:text-sky-400"></i>
                    {repo.name}
                  </span>
                  <span className="font-mono-tag text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20 flex-shrink-0">
                    {repo.language}
                  </span>
                </div>

                <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted line-clamp-2 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono-tag text-[11px] text-gray-500 dark:text-text-muted pt-3 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-regular fa-star text-amber-400"></i>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Public
                  </span>
                </div>
                <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-400 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
}
