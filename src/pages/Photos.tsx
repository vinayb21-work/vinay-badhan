import { useState, useEffect, useCallback, useRef } from 'react';
import { Camera, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

// Auto-import all photo images at build time as URLs
const photoImageModules = import.meta.glob(
  '/public/uploads/photos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

// Build a map of category -> image URLs
const categoryImageMap: Record<string, string[]> = {};
const allPhotos: string[] = [];

for (const [path, url] of Object.entries(photoImageModules)) {
  // Extract category from path: /public/uploads/photos/{category}/image.jpg
  const match = path.match(/\/public\/uploads\/photos\/([^/]+)\//);
  if (match) {
    const category = match[1];
    if (!categoryImageMap[category]) {
      categoryImageMap[category] = [];
    }
    categoryImageMap[category].push(url);
    allPhotos.push(url);
  }
}

// Sort images within each category
for (const category in categoryImageMap) {
  categoryImageMap[category].sort();
}

// Shuffle array with deterministic algorithm (consistent across page loads)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 3) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Prioritize certain cities to appear first in "All" view
const priorityCities = ['Chicago', 'Orlando', 'Denver', 'San_Francisco', 'San Francisco'];
const priorityPhotos: string[] = [];
const otherPhotos: string[] = [];

for (const photo of allPhotos) {
  const isPriority = priorityCities.some(city =>
    photo.toLowerCase().includes(city.toLowerCase().replace(' ', '_')) ||
    photo.toLowerCase().includes(city.toLowerCase())
  );
  if (isPriority) {
    priorityPhotos.push(photo);
  } else {
    otherPhotos.push(photo);
  }
}

// Sort first to ensure consistent order across dev/prod, then shuffle
priorityPhotos.sort();
otherPhotos.sort();
const shuffledPhotos = [...shuffleArray(priorityPhotos), ...shuffleArray(otherPhotos)];

// Get available categories - sort by year descending (newest first)
const availableCategories = Object.keys(categoryImageMap).sort((a, b) => {
  // Try to extract year from folder name
  const yearA = parseInt(a.match(/\d{4}/)?.[0] || '0');
  const yearB = parseInt(b.match(/\d{4}/)?.[0] || '0');

  // If both have years, sort descending (newest first)
  if (yearA && yearB) {
    return yearB - yearA;
  }
  // If only one has a year, put the one with year first
  if (yearA) return -1;
  if (yearB) return 1;
  // Otherwise sort alphabetically
  return a.localeCompare(b);
});

const INITIAL_PHOTO_COUNT = 12; // Show only 12 photos initially

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ images: string[]; index: number } | null>(null);
  const [displayCount, setDisplayCount] = useState(INITIAL_PHOTO_COUNT);
  const touchStartX = useRef<number | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextImage(); // Swipe left -> next image
      } else {
        prevImage(); // Swipe right -> previous image
      }
    }
    touchStartX.current = null;
  };

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(INITIAL_PHOTO_COUNT);
  }, [selectedCategory]);

  // Get photos based on selected category
  const getPhotos = (): string[] => {
    if (selectedCategory === 'All') {
      return shuffledPhotos;
    }
    return categoryImageMap[selectedCategory] || [];
  };

  const photos = getPhotos();

  const openLightbox = (imageIndex: number) => {
    setLightboxImage({ images: photos, index: imageIndex });
  };

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const nextImage = useCallback(() => {
    setLightboxImage(prev => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.images.length
      };
    });
  }, []);

  const prevImage = useCallback(() => {
    setLightboxImage(prev => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index - 1 + prev.images.length) % prev.images.length
      };
    });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      switch (e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, nextImage, prevImage, closeLightbox]);

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
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Photography</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Capturing the beauty of landscapes, wildlife, and the natural world
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        {availableCategories.length > 0 && (
          <section className="pb-8">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant={selectedCategory === 'All' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory('All')}
                  >
                    All ({allPhotos.length})
                  </Button>
                  {availableCategories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.replace(/_/g, ' ')} ({categoryImageMap[category].length})
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Photo Gallery */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {photos.length > 0 ? (
                <>
                  {/* Masonry-style grid */}
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {photos.slice(0, displayCount).map((photo, index) => (
                      <div
                        key={index}
                        className="break-inside-avoid group cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            loading="lazy"
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {displayCount < photos.length && (
                    <div className="text-center mt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setDisplayCount(prev => Math.min(prev + 12, photos.length))}
                      >
                        Load More ({photos.length - displayCount} remaining)
                      </Button>
                    </div>
                  )}
                </>
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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={lightboxImage.images[lightboxImage.index]}
            alt="Photo"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {lightboxImage.index + 1} / {lightboxImage.images.length}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Photos;
