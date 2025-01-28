import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockNews = [
  {
    id: 1,
    title: "Federal Reserve Maintains Interest Rates",
    category: "Economy",
    source: "Financial Times",
    time: "2 hours ago",
    summary: "The Federal Reserve kept interest rates steady at its latest meeting, signaling a cautious approach to monetary policy.",
  },
  {
    id: 2,
    title: "Tech Giants Report Strong Earnings",
    category: "Technology",
    source: "Reuters",
    time: "4 hours ago",
    summary: "Major technology companies exceeded market expectations in their latest quarterly earnings reports.",
  },
  {
    id: 3,
    title: "Global Markets Rally on Economic Data",
    category: "Markets",
    source: "Bloomberg",
    time: "6 hours ago",
    summary: "Stock markets worldwide surge as new economic indicators suggest robust growth in major economies.",
  },
];

const News = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial News</h1>
      
      <div className="grid gap-6">
        {mockNews.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                    <span>•</span>
                    <span className="text-primary">{item.category}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;