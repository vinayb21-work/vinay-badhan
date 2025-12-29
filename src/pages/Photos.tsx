import { Camera, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from '@/components/ThemeToggle';

const Photos = () => {
  // Add your photos here
  // Each photo should have: src, alt, category (optional)
  const photos: { src: string; alt: string; category?: string }[] = [
    // Example:
    // { src: "/uploads/photos/landscape1.jpg", alt: "Sunset over mountains", category: "Landscape" },
    // { src: "/uploads/photos/wildlife1.jpg", alt: "Eagle in flight", category: "Wildlife" },
  ];

  const categories = ["All", "Landscape", "Wildlife", "Flora", "Macro"];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-violet-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm dark:shadow-slate-800/50 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Nature Photography</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Capturing the beauty of landscapes, wildlife, and the natural world
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {photos.length > 0 ? (
              /* Masonry-style grid */
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{photo.alt}</p>
                          {photo.category && (
                            <p className="text-white/70 text-xs">{photo.category}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Coming Soon placeholder */
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <Camera className="w-12 h-12 text-slate-400" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">Coming Soon</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Photo gallery is being curated. Check back soon for nature photography from my adventures!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Vinay Badhan. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Photos;

