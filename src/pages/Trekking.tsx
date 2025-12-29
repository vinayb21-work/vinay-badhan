import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, ArrowLeft, MapPin, Calendar, Route, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from '@/components/ThemeToggle';

// Base path for the site
const BASE_PATH = '/vinay-badhan';

// Helper to get images for a specific trek folder
// Images should be placed in /public/uploads/treks/{trekId}/
const getTrekImages = (trekId: string, imageCount: number): string[] => {
  const images: string[] = [];
  // Try to load numbered images (1.jpg, 2.jpg, etc.) and common names
  for (let i = 1; i <= imageCount; i++) {
    images.push(`${BASE_PATH}/uploads/treks/${trekId}/${i}.jpg`);
  }
  return images;
};

// Alternative: Manually list images for each trek
const trekImageMap: Record<string, string[]> = {
  'Rayakottai_Fort_Trek': [
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6291.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6292.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6293.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6294.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6295.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6296.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6298.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6301.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6302.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6303.jpg`,
    `${BASE_PATH}/uploads/treks/Rayakottai_Fort_Trek/IMG_6305.JPG`,
  ],
};

// Get images from the map or return empty array
const getTrekImagesFromMap = (trekId: string): string[] => {
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

  // Add your treks here - images are auto-loaded from /public/uploads/treks/{id}/
  const treks: Trek[] = [
    {
      id: "Rayakottai_Fort_Trek",           // Folder name in /public/uploads/treks/
      name: "Rayakottai Fort Trek",
      location: "Rayakottai, Tamil Nadu",
      date: "March 2024",
      altitude: "747 m",
      distance: "5 km",
      duration: "2 hours",
      difficulty: "Easy",
      description: "The fort is situated within the town of Rayakottai which is one of the ancient fortress in the Krishnagiri district. It is now one of the protected monument by the Archaeological Survey of India.In the 18th century Hyder Ali and Tipu sultan ruled this fort. The fort was captured by Major Gowdie during the third Anglo-Mysore War in 1791. According to the Treaty of Srirangapatna, this fort came into the hands of the British.",
      highlights: ["Forests", "Sunrise at summit"],
    },
  ];

  const openLightbox = (trekId: string, imageIndex: number) => {
    const images = getTrekImagesFromMap(trekId);
    setLightboxImage({ images, index: imageIndex });
  };

  const closeLightbox = () => setLightboxImage(null);

  const nextImage = () => {
    if (lightboxImage) {
      setLightboxImage({
        ...lightboxImage,
        index: (lightboxImage.index + 1) % lightboxImage.images.length
      });
    }
  };

  const prevImage = () => {
    if (lightboxImage) {
      setLightboxImage({
        ...lightboxImage,
        index: (lightboxImage.index - 1 + lightboxImage.images.length) % lightboxImage.images.length
      });
    }
  };

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
                  const images = getTrekImagesFromMap(trek.id);
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
                                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-4">
                                  {images.map((img, idx) => (
                                    <div 
                                      key={idx}
                                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                      onClick={() => openLightbox(trek.id, idx)}
                                    >
                                      <img src={img} alt={`${trek.name} ${idx + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                  ))}
                                </div>
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
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Vinay Badhan. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Trekking;
