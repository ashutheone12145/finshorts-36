import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

// Expanded mock data to match new design
const mockNews = [
  {
    id: 1,
    title: "Federal Reserve Maintains Interest Rates Despite Market Pressure",
    category: "Economy",
    source: "Financial Times",
    time: "2 hours ago",
    author: "Sarah Johnson",
    summary: "The Federal Reserve kept interest rates steady at its latest meeting, signaling a cautious approach to monetary policy amid growing concerns about inflation and economic growth.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    isFeatured: true
  },
  {
    id: 2,
    title: "Tech Giants Report Strong Earnings in Q1",
    category: "Technology",
    source: "Reuters",
    time: "4 hours ago",
    author: "Michael Chen",
    summary: "Major technology companies exceeded market expectations in their latest quarterly earnings reports, driven by AI and cloud services growth.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
    isFeatured: false
  },
  {
    id: 3,
    title: "Global Markets Rally on Positive Economic Data",
    category: "Markets",
    source: "Bloomberg",
    time: "6 hours ago",
    author: "Emma Wilson",
    summary: "Stock markets worldwide surge as new economic indicators suggest robust growth in major economies, particularly in the technology and manufacturing sectors.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    isFeatured: false
  },
  {
    id: 4,
    title: "Emerging Markets Show Strong Recovery Signs",
    category: "Global Markets",
    source: "Wall Street Journal",
    time: "8 hours ago",
    author: "David Park",
    summary: "Emerging markets display resilience with substantial growth in key sectors, attracting increased foreign investment.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    isFeatured: false
  },
  {
    id: 5,
    title: "Cryptocurrency Market Faces New Regulations",
    category: "Crypto",
    source: "CoinDesk",
    time: "10 hours ago",
    author: "Alex Rivera",
    summary: "Global regulatory bodies propose new framework for cryptocurrency trading and exchange operations.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
    isFeatured: false
  }
];

const News = () => {
  const featuredNews = mockNews.find(news => news.isFeatured);
  const regularNews = mockNews.filter(news => !news.isFeatured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        {featuredNews && (
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-[500px]">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-4">
                    {featuredNews.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredNews.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-4">
                    {featuredNews.summary}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{featuredNews.time}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{featuredNews.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.time}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{news.author}</span>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;