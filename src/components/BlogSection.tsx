
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
}

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Using RSS2JSON service to fetch Medium RSS feed
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vinay-badhan21'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();

        if (data.status === 'ok') {
          const formattedBlogs = data.items.slice(0, 6).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            categories: item.categories || []
          }));
          setBlogs(formattedBlogs);
        } else {
          throw new Error('RSS feed not found');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Unable to load blog posts');
        // Fallback data if RSS fails
        setBlogs([
          {
            title: "Building Scalable Web Applications with React and Node.js",
            link: "https://medium.com/@vinay-badhan21",
            pubDate: "2024-01-15",
            description: "Learn best practices for building scalable web applications using modern technologies like React, Node.js, and cloud services...",
            categories: ["React", "Node.js", "Web Development"]
          },
          {
            title: "AI/ML Integration in Modern Web Applications",
            link: "https://medium.com/@vinay-badhan21",
            pubDate: "2024-01-10",
            description: "Exploring how to integrate machine learning models into production web applications for enhanced user experiences...",
            categories: ["AI/ML", "Web Development", "Python"]
          },
          {
            title: "Cloud Infrastructure Best Practices",
            link: "https://medium.com/@vinay-badhan21",
            pubDate: "2024-01-05",
            description: "A comprehensive guide to setting up robust cloud infrastructure using AWS, Docker, and Kubernetes for scalable applications...",
            categories: ["Cloud", "AWS", "DevOps"]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse dark:bg-slate-800/50">
                <CardHeader>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 dark:bg-slate-900/30 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">Latest Blog Posts</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
            Sharing insights on software development, AI/ML, and cloud technologies
          </p>

          {error && (
            <div className="text-center text-slate-500 dark:text-slate-400 mb-8">
              <p>{error}</p>
              <p className="text-sm mt-2">Showing sample posts below</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 dark:bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 leading-tight dark:text-slate-100">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(blog.pubDate)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>

                  {blog.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {blog.categories.slice(0, 3).map((category, catIndex) => (
                        <Badge key={catIndex} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="https://medium.com/@vinay-badhan21" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Posts on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
