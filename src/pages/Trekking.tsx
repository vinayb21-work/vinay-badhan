import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from '@/components/ThemeToggle';

const Trekking = () => {
  // Add your treks here
  const treks = [
    {
      name: "Trek Name",
      location: "Location, State",
      date: "Month Year",
      altitude: "X,XXX m",
      difficulty: "Moderate",
      description: "Description of the trek and experience.",
      images: [], // Add image URLs here
    },
    // Add more treks as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
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
          <div className="max-w-5xl mx-auto">
            {treks.length > 0 && treks[0].name !== "Trek Name" ? (
              <div className="grid md:grid-cols-2 gap-6">
                {treks.map((trek, index) => (
                  <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    {trek.images && trek.images.length > 0 && (
                      <div className="h-48 bg-slate-200 dark:bg-slate-700">
                        <img src={trek.images[0]} alt={trek.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-slate-800 dark:text-slate-100">{trek.name}</CardTitle>
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          {trek.difficulty}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {trek.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {trek.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          {trek.altitude}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{trek.description}</p>
                    </CardContent>
                  </Card>
                ))}
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

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Vinay Badhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trekking;

