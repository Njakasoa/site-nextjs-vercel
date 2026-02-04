import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPublishedPosts } from '@/content/blog';
import { constructMetadata } from '@/lib/seo/metadata';
import { Hero } from '@/components/sections/hero';
import { formatDate } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Blog',
  description:
    'Conseils, stratégies et insights sur le marketing digital pour les entreprises malgaches.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Hero
        title="Insights et conseils pour votre croissance digitale"
        subtitle="Blog"
        description="Stratégies testées, retours d'expérience et tendances du marketing digital. Du concret, pas du blabla."
        showCta={false}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-md transition-shadow"
              >
                {/* Mobile: vertical layout, Desktop: horizontal */}
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-4 md:gap-6">
                  {/* Image Placeholder */}
                  <div className="aspect-video md:aspect-square bg-muted rounded-lg relative overflow-hidden m-4 md:m-0 md:ml-4 lg:ml-6 md:mt-4 lg:mt-6 md:mb-4 lg:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground text-center px-2">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 pt-0 md:pt-4 lg:pt-6 md:pl-0">
                    <CardHeader className="p-0 pb-3 sm:pb-4">
                      {/* Flex wrap for mobile spacing */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <span className="hidden sm:inline">•</span>
                        <span>{formatDate(post.date)}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime} min
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <Link href={`/blog/${post.slug}`}>
                        <span className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1">
                          Lire l&apos;article
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </span>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
