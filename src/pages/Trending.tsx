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
        description: "An in-depth look at the latest market trends and their impact on global economies. This comprehensive analysis explores key factors driving market changes, including technological advancements, geopolitical developments, and shifting consumer behaviors. The report highlights emerging patterns in various sectors and their potential long-term implications for investors and businesses worldwide.",
        url: "https://example.com/article1",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        source: "Financial Times",
        date: "2024-02-15",
        rating: 4.5
      },
      {
        id: "2",
        title: "Tech Sector Shows Strong Growth in Q1",
        description: "Technology companies report exceptional first-quarter results amid digital transformation. The surge in remote work solutions, cloud computing, and artificial intelligence implementations has driven unprecedented growth. Industry leaders attribute this success to increased enterprise spending on digital infrastructure and innovative solutions for hybrid work environments.",
        url: "https://example.com/article2",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        source: "Bloomberg",
        date: "2024-02-14",
        rating: 4.8
      },
      {
        id: "3",
        title: "New Developments in Renewable Energy",
        description: "Latest breakthroughs in sustainable energy technology and their potential impact. Scientists and researchers have made significant progress in improving solar panel efficiency and wind turbine technology. These advancements promise to revolutionize the renewable energy sector and accelerate the global transition to clean energy sources.",
        url: "https://example.com/article3",
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        source: "Reuters",
        date: "2024-02-13",
        rating: 4.2
      },
      {
        id: "4",
        title: "Global Supply Chain Updates",
        description: "Recent changes in international logistics and their effects on world trade. The analysis covers emerging trends in supply chain management, including the adoption of blockchain technology, AI-driven optimization, and sustainable practices. Industry experts discuss strategies for building resilient supply chains in an increasingly complex global market.",
        url: "https://example.com/article4",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        source: "Wall Street Journal",
        date: "2024-02-12",
        rating: 4.6
      },
      {
        id: "5",
        title: "Healthcare Innovation Report",
        description: "New medical technologies and treatments reshaping the healthcare industry. This comprehensive report examines breakthrough developments in personalized medicine, AI-driven diagnostics, and revolutionary treatment methods. Healthcare professionals discuss the potential impact of these innovations on patient care and medical practice.",
        url: "https://example.com/article5",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        source: "Health Weekly",
        date: "2024-02-11",
        rating: 4.7
      },
      {
        id: "6",
        title: "Artificial Intelligence in Financial Services",
        description: "Exploring how AI is transforming the banking and financial services sector. From automated trading systems to personalized banking experiences, artificial intelligence is revolutionizing how financial institutions operate. Industry experts discuss the benefits and challenges of implementing AI solutions in traditional banking systems.",
        url: "https://example.com/article6",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        source: "TechFinance",
        date: "2024-02-10",
        rating: 4.9
      },
      {
        id: "7",
        title: "Sustainable Agriculture Innovations",
        description: "Revolutionary farming techniques and technologies promoting sustainable agriculture. This report covers advanced hydroponics systems, precision farming technologies, and AI-driven crop management solutions. Agricultural experts share insights on how these innovations are addressing global food security challenges.",
        url: "https://example.com/article7",
        imageUrl: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
        source: "AgriTech Today",
        date: "2024-02-09",
        rating: 4.4
      },
      {
        id: "8",
        title: "Future of Electric Vehicles",
        description: "Analysis of the rapidly evolving electric vehicle market and upcoming innovations. The report examines new battery technologies, charging infrastructure developments, and emerging players in the EV space. Industry experts discuss the challenges and opportunities in the transition to electric mobility.",
        url: "https://example.com/article8",
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
        source: "Auto Insider",
        date: "2024-02-08",
        rating: 4.6
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
                  <p className="text-sm text-gray-600 line-clamp-5">
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