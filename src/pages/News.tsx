import { Separator } from "@/components/ui/separator";
import { Clock, ChevronRight, Bookmark, Share2, Star, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  source: string;
  date: string;
  category: string;
  url: string;
}

const latestNews: NewsArticle[] = [
  {
    id: 1,
    title: "Global Markets Rally on Strong Economic Data",
    summary: "Markets worldwide show positive momentum as economic indicators exceed expectations.",
    content: "Global financial markets experienced a significant upturn today as new economic data from major economies surpassed analysts' forecasts. The positive momentum was particularly evident in technology and healthcare sectors.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    source: "Financial Times",
    date: "2024-02-15",
    category: "Markets",
    url: "https://example.com/article1"
  },
  {
    id: 2,
    title: "Tech Giants Announce Breakthrough in AI Development",
    summary: "Major technology companies reveal collaborative advancement in artificial intelligence capabilities.",
    content: "Leading technology companies have jointly announced a significant breakthrough in artificial intelligence development, promising more efficient and ethical AI systems for various applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    source: "Tech Review",
    date: "2024-02-14",
    category: "Technology",
    url: "https://example.com/article2"
  },
  {
    id: 3,
    title: "Renewable Energy Investment Reaches Record High",
    summary: "Global investment in renewable energy infrastructure sets new records in Q1 2024.",
    content: "Investment in renewable energy projects has reached unprecedented levels in the first quarter of 2024, with solar and wind power installations leading the surge in sustainable energy development.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    source: "Energy Weekly",
    date: "2024-02-13",
    category: "Energy",
    url: "https://example.com/article3"
  }
];

const popularTopics = [
  "Market Analysis",
  "Technology Trends",
  "Economic Policy",
  "Cryptocurrency",
  "Sustainable Finance",
  "Global Trade",
  "Startup News",
  "Industry Reports"
];

const News = () => {
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [ratings, setRatings] = useState<{[key: number]: number}>({});
  const { toast } = useToast();

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (savedBookmarks) {
      try {
        const parsed = JSON.parse(savedBookmarks);
        setBookmarked(parsed.map((article: any) => article.id));
      } catch (error) {
        console.error('Error parsing bookmarks:', error);
      }
    }
  }, []);

  const handleBookmark = (article: NewsArticle) => {
    const isBookmarked = bookmarked.includes(article.id);
    try {
      const savedBookmarks = localStorage.getItem('bookmarkedArticles');
      const currentBookmarks = savedBookmarks ? JSON.parse(savedBookmarks) : [];

      if (!isBookmarked) {
        const newBookmark = {
          id: article.id,
          title: article.title,
          summary: article.summary,
          image: article.image,
          url: article.url,
          source: article.source,
          time: article.date,
          category: article.category
        };
        
        localStorage.setItem('bookmarkedArticles', JSON.stringify([...currentBookmarks, newBookmark]));
        setBookmarked(prev => [...prev, article.id]);
        
        toast({
          title: "Article Saved",
          description: "The article has been added to your saved articles.",
        });
      } else {
        const filteredBookmarks = currentBookmarks.filter((bookmark: any) => bookmark.id !== article.id);
        localStorage.setItem('bookmarkedArticles', JSON.stringify(filteredBookmarks));
        setBookmarked(prev => prev.filter(id => id !== article.id));
        
        toast({
          title: "Article Removed",
          description: "The article has been removed from your saved articles.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save the article. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async (url: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this article",
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link Copied",
          description: "Article link has been copied to clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share the article. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRating = (articleId: number, rating: number) => {
    setRatings(prev => ({...prev, [articleId]: rating}));
    toast({
      title: "Rating Updated",
      description: "Thank you for rating this article!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Latest News</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {latestNews.map((article) => (
            <div key={article.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {format(new Date(article.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <span className="text-sm text-primary font-medium">{article.category}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <p className="text-gray-600">{article.summary}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRating(article.id, star)}
                          className={`p-0 hover:bg-transparent ${
                            (ratings[article.id] || 0) >= star ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          <Star className="w-5 h-5" fill={(ratings[article.id] || 0) >= star ? "currentColor" : "none"} />
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBookmark(article)}
                      className={bookmarked.includes(article.id) ? "text-primary" : ""}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked.includes(article.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(article.url)}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(article.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="my-8" />
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Popular Topics</h2>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-2">
                  {popularTopics.map((topic, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-between"
                    >
                      {topic}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;