import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, ExternalLink, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface TrendingArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  source: string;
  date: string;
  rating: number;
}

const Trending = () => {
  const [articles, setArticles] = useState<TrendingArticle[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Simulated trending articles data
    const trendingArticles: TrendingArticle[] = [
      {
        id: "1",
        title: "Major Market Movements: Global Trends Analysis",
        description: "An in-depth look at the latest market trends and their impact on global economies.",
        url: "https://example.com/article1",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        source: "Financial Times",
        date: "2024-02-15",
        rating: 4.5
      },
      {
        id: "2",
        title: "Tech Sector Shows Strong Growth in Q1",
        description: "Technology companies report exceptional first-quarter results amid digital transformation.",
        url: "https://example.com/article2",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        source: "Bloomberg",
        date: "2024-02-14",
        rating: 4.8
      },
      {
        id: "3",
        title: "New Developments in Renewable Energy",
        description: "Latest breakthroughs in sustainable energy technology and their potential impact.",
        url: "https://example.com/article3",
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        source: "Reuters",
        date: "2024-02-13",
        rating: 4.2
      },
      {
        id: "4",
        title: "Global Supply Chain Updates",
        description: "Recent changes in international logistics and their effects on world trade.",
        url: "https://example.com/article4",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        source: "Wall Street Journal",
        date: "2024-02-12",
        rating: 4.6
      },
      {
        id: "5",
        title: "Healthcare Innovation Report",
        description: "New medical technologies and treatments reshaping the healthcare industry.",
        url: "https://example.com/article5",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        source: "Health Weekly",
        date: "2024-02-11",
        rating: 4.7
      }
    ];
    setArticles(trendingArticles);
  }, []);

  const handleBookmark = (article: TrendingArticle) => {
    try {
      const savedArticles = JSON.parse(localStorage.getItem("savedArticles") || "[]");
      if (!savedArticles.some((saved: TrendingArticle) => saved.id === article.id)) {
        localStorage.setItem("savedArticles", JSON.stringify([...savedArticles, article]));
        toast({
          title: "Article Saved",
          description: "The article has been added to your saved articles.",
        });
      } else {
        toast({
          title: "Already Saved",
          description: "This article is already in your saved articles.",
          variant: "destructive",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trending Articles</h1>
      <div className="space-y-6">
        {articles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative aspect-[4/3]">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl line-clamp-2 mb-2">{article.title}</CardTitle>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.description}
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`w-5 h-5 ${
                            index < Math.floor(article.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {article.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{article.source}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleBookmark(article)}
                        className="hover:text-primary"
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(article.url)}
                        className="hover:text-primary"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(article.url, "_blank")}
                      className="hover:text-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Trending;