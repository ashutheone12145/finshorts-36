import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockStockData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const mockNews = [
  {
    id: 1,
    title: "Global Markets Show Strong Recovery",
    description: "Major indices surge as economic indicators point to sustained growth",
    category: "Markets",
  },
  {
    id: 2,
    title: "Tech Sector Leads Market Rally",
    description: "Technology stocks continue to drive market gains amid AI advancements",
    category: "Technology",
  },
  {
    id: 3,
    title: "Federal Reserve Signals Rate Decision",
    description: "Central bank's latest meeting suggests potential shift in monetary policy",
    category: "Economy",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight animate-fade-down">
                Smart Investment Decisions Start Here
              </h1>
              <p className="text-xl text-gray-600 animate-fade-up">
                Get real-time market insights, advanced analytics, and expert recommendations to optimize your investment strategy.
              </p>
              <div className="space-x-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth/signup")}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/features")}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="h-[400px] bg-white rounded-2xl shadow-lg p-6 animate-fade-up">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockStockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Why Choose MarketIntel
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Analytics",
                description: "Get instant insights with our advanced analytics platform",
                icon: "📊",
              },
              {
                title: "Expert Recommendations",
                description: "Receive personalized investment recommendations",
                icon: "🎯",
              },
              {
                title: "Market Intelligence",
                description: "Access comprehensive market research and analysis",
                icon: "📈",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-secondary">
            Latest Financial News
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary hover:text-primary/90 hover:bg-primary/10 transition-all duration-300"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of investors who trust MarketIntel for their financial decisions.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth/signup")}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;