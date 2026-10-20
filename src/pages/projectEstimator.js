import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/pageLayout";
import ProjectEstimator from "../components/Section/estimator";

export default function ProjectEstimatorPage() {
  return (
    <>
      <Helmet>
        <title>Project Pricing & Timeline Estimator | MD Tanvir Shaharia</title>
        <meta
          name="description"
          content="Estimate your mobile app, web application, or backend development project investment and timeline with MD Tanvir Shaharia's transparent, production-grade calculator."
        />
        <link
          rel="canonical"
          href="https://tanvirshaharia.vercel.app/project-estimator"
        />
      </Helmet>

      <PageLayout>
        {/* Navigation Breadcrumb / Return to Portfolio */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 text-xs font-mono-tag font-semibold text-gray-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all shadow-sm group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Dedicated Project Estimator */}
        <ProjectEstimator className="mt-0" />
      </PageLayout>
    </>
  );
}
