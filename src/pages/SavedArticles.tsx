import { Card } from "@/components/ui/card";
import { Clock, ChevronRight, Bookmark, Share2, Star, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SavedArticles = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<any[]>([]);
  const [ratings, setRatings] = useState<{[key: number]: number}>({});
  const { toast } = useToast();

  // Get the bookmarked articles from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (savedBookmarks) {
      setBookmarkedArticles(JSON.parse(savedBookmarks));
    }
  }, []);

  const handleShare = async (title: string, summary: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: summary,
          url: window.location.href
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          toast({
            title: "Unable to share",
            description: "You can copy the URL from your browser's address bar",
            variant: "destructive"
          });
        }
      }
    } else {
      toast({
        title: "Share",
        description: "Copy the URL from your browser's address bar to share this article",
      });
    }
  };

  const handleRating = (id: number, rating: number) => {
    setRatings(prev => ({...prev, [id]: rating}));
  };

  if (bookmarkedArticles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No Saved Articles</h2>
          <p className="text-gray-600">You haven't bookmarked any articles yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Saved Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookmarkedArticles.map((article) => (
          <Card 
            key={article.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
          >
            <div className="relative aspect-[16/9]">
              <img 
                src={article.image} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {article.category}
              </span>
              <h3 className="text-xl font-bold leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {article.summary}
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.time}</span>
                </div>
                <span>•</span>
                <span>{article.source}</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRating(article.id, star)}
                    className={`${
                      (ratings[article.id] || 0) >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <Star className="h-8 w-8" fill={(ratings[article.id] || 0) >= star ? "currentColor" : "none"} />
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => handleShare(article.title, article.summary)}
                >
                  Share <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  Read More <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedArticles;