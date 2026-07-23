import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

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
    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-zinc-800/80">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
            <i className="fa-brands fa-github text-brand-500 dark:text-brand-400"></i>
            GitHub Open Source Activity
          </h4>
          <p className="text-xs text-gray-500 dark:text-zinc-400">
            Featured open-source Android Native (Kotlin) & Flutter repositories
          </p>
        </div>

        <a
          href="https://github.com/tanvir-shaharia"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800/80 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700/60 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>View GitHub Profile</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <Fade up key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-brand-500/50 dark:hover:border-brand-400/50"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-gray-900 dark:text-zinc-100 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors flex items-center gap-2 truncate">
                    <i className="fa-solid fa-book-bookmark text-xs text-gray-400"></i>
                    {repo.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-50 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 flex-shrink-0">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-zinc-400 pt-3 border-t border-gray-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-star text-amber-500"></i>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    Public
                  </span>
                </div>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-400 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
}
