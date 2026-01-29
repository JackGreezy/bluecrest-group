import { client, featuredArticlesQuery } from "@/lib/sanity";
import HomePageClient from "@/components/HomePageClient";

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

async function getFeaturedArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch<Article[]>(featuredArticlesQuery, {}, {
      cache: "force-cache"
    });
    return articles || [];
  } catch (error) {
    console.error("Failed to fetch featured articles", error);
    return [];
  }
}

export default async function HomePage() {
  const featuredArticles = await getFeaturedArticles();
  
  return <HomePageClient featuredArticles={featuredArticles} />;
}
