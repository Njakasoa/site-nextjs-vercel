import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/content/blog';
import { constructMetadata } from '@/lib/seo/metadata';
import { formatDate } from '@/lib/utils';
import { generateBlogPostingJsonLd } from '@/lib/seo/jsonld';

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return constructMetadata({
      title: 'Article non trouvé',
      description: 'L\'article demandé n\'existe pas.',
    });
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = generateBlogPostingJsonLd(post);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.published &&
        p.category === post.category &&
        p.slug !== post.slug
    )
    .slice(0, 2);

  return (
    <div className="py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Back Link */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime} min de lecture
            </div>
          </div>
        </header>

        {/* Image Placeholder */}
        <div className="aspect-video bg-muted rounded-lg mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground">
              Image header: {post.title}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-gray max-w-none">
          {/* Simple content rendering - in production use a markdown renderer */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="mb-4">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">Articles similaires</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <Badge variant="secondary" className="mb-2">
                    {related.category}
                  </Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
