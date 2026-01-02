import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, ArrowLeft, MapPin, Calendar, Route, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

// Auto-import all trek images at build time as URLs
const trekImageModules = import.meta.glob(
  '/public/uploads/treks/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

// Build a map of trek ID -> image URLs
const trekImageMap: Record<string, string[]> = {};

for (const [path, url] of Object.entries(trekImageModules)) {
  // Extract trek ID from path: /public/uploads/treks/{trekId}/image.jpg
  const match = path.match(/\/public\/uploads\/treks\/([^/]+)\//);
  if (match) {
    const trekId = match[1];
    if (!trekImageMap[trekId]) {
      trekImageMap[trekId] = [];
    }
    trekImageMap[trekId].push(url);
  }
}

// Sort images for each trek (cover first, then alphabetically by URL)
for (const trekId in trekImageMap) {
  trekImageMap[trekId].sort((a, b) => {
    if (a.toLowerCase().includes('cover')) return -1;
    if (b.toLowerCase().includes('cover')) return 1;
    return a.localeCompare(b);
  });
}

// Get images for a specific trek
const getTrekImages = (trekId: string): string[] => {
  return trekImageMap[trekId] || [];
};

interface Trek {
  id: string;
  name: string;
  location: string;
  date: string;
  altitude?: string;
  distance?: string;
  duration?: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Extreme';
  description: string;
  highlights?: string[];
}

const Trekking = () => {
  const [selectedTrek, setSelectedTrek] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ images: string[]; index: number } | null>(null);
  const [displayCount, setDisplayCount] = useState<Record<string, number>>({});
  const touchStartX = useRef<number | null>(null);

  const INITIAL_IMAGE_COUNT = 12; // Show only 12 images initially
  const LOAD_MORE_COUNT = 12; // Load 12 more on each click

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Touch handlers for swipe gestures (single touch only, not pinch zoom)
  const handleTouchStart = (e: React.TouchEvent) => {
    // Only track single touch (ignore pinch zoom)
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
    } else {
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    // Only handle if it was a single touch gesture
    if (e.changedTouches.length !== 1) {
      touchStartX.current = null;
      return;
    }

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

  // Add your treks here - images are auto-loaded from /public/uploads/treks/{id}/
  const treks: Trek[] = [
    {
      id: "Rayakottai_Fort_Trek",
      name: "Rayakottai Fort Trek",
      location: "Rayakottai, Tamil Nadu",
      date: "March 2024",
      altitude: "747 m",
      distance: "5 km",
      duration: "2.5 hours",
      difficulty: "Easy",
      description: "The fort is situated within the town of Rayakottai which is one of the ancient fortress in the Krishnagiri district.",
      highlights: ["Forests", "Sunrise at summit"],
    },
    {
      id: "Kaurava_Kunda_Trek",
      name: "Kaurava Kunda Trek",
      location: "Sonennahalli, Kavaranahalli, Karnataka",
      date: "August 2023",
      altitude: "250 m",
      distance: "4 km",
      duration: "2 hours",
      difficulty: "Easy",
      description: "Joined peaks, named after the mythological characters – the Kauravas and Pandavas, are located at around 70 km from Bangalore in the district of Chikkaballapur.",
      highlights: ["Adiyogi", "Grasslands", "Steps"],
    },
    {
      id: "Makalidurga_Trek",
      name: "Makalidurga Trek",
      location: "Makalidurga, Karnataka",
      date: "June 2023",
      altitude: "1117 m",
      distance: "5 km",
      duration: "2.5 hours",
      difficulty: "Moderate",
      description: "Historic trail known for its panoramic views, fort ruins, and a Shiva temple at the summit, featuring rocky, uneven paths with lush greenery.",
      highlights: ["Railway tracks", "Grasslands", "Lake view", "Ruined fort"],
    },
    {
      id: "Skandagiri_Trek",
      name: "Skandagiri Trek",
      location: "Skandagiri, Karnataka",
      date: "May 2023",
      altitude: "1450 m",
      distance: "7 km",
      duration: "4 hours",
      difficulty: "Moderate",
      description: "Famous for its challenging sunrise treks through misty clouds, historical ruins of a Tipu Sultan fort, and stunning views.",
    },
    {
      id: "Savandurga_Trek",
      name: "Savandurga Trek",
      location: "Savandurga, Karnataka",
      date: "May 2023",
      altitude: "1226 m",
      distance: "5 km",
      duration: "2.5 hours",
      difficulty: "Moderate",
      description: "One of Asia's largest monolithic hills, with its trek involving two peaks, Karigudda (black hill) and Biligudda (white hill).",
    },
    {
      id: "Anthargange_Cave_Trek",
      name: "Anthargange Cave Trek",
      location: "Vibhuthipura, Karnataka",
      date: "April 2023",
      altitude: "1712 m",
      distance: "4 km",
      duration: "4 hours",
      difficulty: "Moderate",
      description: "Famous for its volcanic rock formations, mysterious caves, and a sacred spring flowing from a bull's mouth at the Kashi Vishweshwara temple.",
      highlights: ["Caves", "Rock formations", "Temple", "Spring"],
    },
    {
      id: "Hutridurga_Trek",
      name: "Hutridurga Trek",
      location: "Yelachavadi Gullahallipura, Karnataka",
      date: "April 2023",
      altitude: "1142 m",
      distance: "5 km",
      duration: "2.5 hours",
      difficulty: "Easy",
      description: "Historic ruins, rock-cut steps, rocky terrain, and panoramic views, featuring temples and fort walls from the 17th century.",
      highlights: ["Historic ruins", "Rock-cut steps", "Rocky terrain", "Panoramic views", "Temples", "Fort walls"],
    },
    {
      id: "Kuntibetta_Trek",
      name: "Kuntibetta Trek",
      location: "Kachenahalli, Karnataka",
      date: "March 2023",
      altitude: "878 m",
      distance: "4 km",
      duration: "4 hours",
      difficulty: "Moderate",
      description: "Sunrise views, ancient mythology (Pandavas' exile)",
      highlights: ["Sunrise", "Ancient mythology", "Pandavas' exile", "Nearby lake"],
    }
  ];

  const openLightbox = (trekId: string, imageIndex: number) => {
    const images = getTrekImages(trekId);
    setLightboxImage({ images, index: imageIndex });
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Moderate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Difficult': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Extreme': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
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
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Mountain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Trekking Adventures</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Trails conquered, peaks summited, and memories made along the way
              </p>
            </div>
          </div>
        </section>

        {/* Treks Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {treks.length > 0 ? (
                <div className="space-y-8">
                  {treks.map((trek) => {
                    const images = getTrekImages(trek.id);
                    const coverImage = images[0];
                    const isExpanded = selectedTrek === trek.id;

                    return (
                      <Card
                        key={trek.id}
                        className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="md:flex">
                          {/* Cover Image */}
                          {coverImage && (
                            <div
                              className="md:w-1/3 h-64 md:h-auto cursor-pointer relative group"
                              onClick={() => openLightbox(trek.id, 0)}
                            >
                              <img
                                src={coverImage}
                                alt={trek.name}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                  View Photos ({images.length})
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Content */}
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{trek.name}</h3>
                              <Badge className={getDifficultyColor(trek.difficulty)}>
                                {trek.difficulty}
                              </Badge>
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {trek.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {trek.date}
                              </span>
                              {trek.altitude && (
                                <span className="flex items-center gap-1">
                                  <Mountain className="w-4 h-4" />
                                  {trek.altitude}
                                </span>
                              )}
                              {trek.distance && (
                                <span className="flex items-center gap-1">
                                  <Route className="w-4 h-4" />
                                  {trek.distance}
                                </span>
                              )}
                              {trek.duration && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {trek.duration}
                                </span>
                              )}
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 mb-4">{trek.description}</p>

                            {/* Highlights */}
                            {trek.highlights && trek.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {trek.highlights.map((highlight, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            {/* Photo thumbnails */}
                            {images.length > 1 && (
                              <div className="mt-4">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setSelectedTrek(isExpanded ? null : trek.id)}
                                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 p-0"
                                >
                                  {isExpanded ? 'Hide Photos' : `View All ${images.length} Photos`}
                                </Button>

                                {isExpanded && (
                                  <>
                                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-4">
                                      {images.slice(0, displayCount[trek.id] || INITIAL_IMAGE_COUNT).map((img, idx) => (
                                        <div
                                          key={idx}
                                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                          onClick={() => openLightbox(trek.id, idx)}
                                        >
                                          <img src={img} alt={`${trek.name} ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                                        </div>
                                      ))}
                                    </div>
                                    {(displayCount[trek.id] || INITIAL_IMAGE_COUNT) < images.length && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setDisplayCount(prev => ({
                                          ...prev,
                                          [trek.id]: Math.min((prev[trek.id] || INITIAL_IMAGE_COUNT) + LOAD_MORE_COUNT, images.length)
                                        }))}
                                        className="mt-4"
                                      >
                                        Load More ({images.length - (displayCount[trek.id] || INITIAL_IMAGE_COUNT)} remaining)
                                      </Button>
                                    )}
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                /* Coming Soon placeholder */
                <div className="text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <Mountain className="w-12 h-12 text-slate-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">Coming Soon</h2>
                  <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Trek stories and photos are being organized. Check back soon for adventures from the trails!
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
            alt="Trek photo"
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

export default Trekking;
