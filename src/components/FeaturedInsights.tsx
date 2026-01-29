"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    alt?: string;
    [key: string]: unknown;
  };
  publishedAt: string;
  category?: string;
}

interface FeaturedInsightsProps {
  articles: Article[];
}

export default function FeaturedInsights({ articles }: FeaturedInsightsProps) {
  const featuredArticles = articles;
  return (
    <>
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-12 h-0.5 bg-[var(--color-brand-gold)]"></span>
                  <span className="text-[var(--color-brand-gold)] font-semibold text-sm uppercase tracking-wider">
                    Expert Perspectives
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-brand-navy)]">
                  Latest Insights
                </h2>
                <p className="text-xl text-gray-600 mt-4">
                  Strategic guidance and industry expertise to help your business thrive
                </p>
              </div>
              <Link
                href="/insights"
                className="mt-6 lg:mt-0 inline-flex items-center text-[var(--color-brand-gold)] font-semibold hover:gap-3 transition-all gap-2"
              >
                View All Insights
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => {
                const imageUrl = article.mainImage
                  ? urlFor(article.mainImage).width(800).height(500).quality(80).format("webp").url()
                  : "/images/Orange-County-CA-fractional-cfo.jpg";

                const publishedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <Link
                    key={article._id}
                    href={`/insights/${article.slug.current}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={article.mainImage?.alt || article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {article.category && (
                        <span className="absolute top-4 left-4 bg-[var(--color-brand-gold)] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {article.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <time className="text-xs text-gray-500 uppercase tracking-wide">
                        {publishedDate}
                      </time>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-[var(--color-brand-blue)] transition-colors">
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex items-center text-[var(--color-brand-blue)] font-semibold text-sm group-hover:gap-3 transition-all gap-2">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
