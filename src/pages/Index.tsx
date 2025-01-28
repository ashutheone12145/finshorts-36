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
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
  },
  {
    id: 2,
    title: "Tech Sector Leads Market Rally",
    description: "Technology stocks continue to drive market gains amid AI advancements",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7"
  },
  {
    id: 3,
    title: "Federal Reserve Signals Rate Decision",
    description: "Central bank's latest meeting suggests potential shift in monetary policy",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
  },
];

const features = [
  {
    title: "Real-Time Analytics",
    description: "Get instant market insights with our advanced analytics platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    title: "Expert Guidance",
    description: "Access professional investment recommendations",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Portfolio Management",
    description: "Manage and track your investments in one place",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#348e37]/10 to-white">
      {/* Hero Section with Diagonal Design */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#348e37] to-[#348e37]/80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-down">
                Smart Investment Decisions Start Here
              </h1>
              <p className="text-xl opacity-90 animate-fade-up">
                Get real-time market insights, advanced analytics, and expert recommendations to optimize your investment strategy.
              </p>
              <div className="space-x-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth/signup")}
                  className="bg-white text-green-600 px-8 py-6 text-lg shadow-lg"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
            <div className="h-[400px] bg-white/90 rounded-2xl shadow-lg p-6 animate-fade-up backdrop-blur-sm">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockStockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#059669" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Overlapping Cards */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-green-50">
                  <h3 className="text-xl font-semibold mb-2 text-green-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section with Horizontal Scroll */}
      <section className="py-20 bg-gradient-to-r from-[#348e37]/10 via-[#348e37]/5 to-[#348e37]/10">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-green-800">
            Latest Financial News
          </h2>
          <div className="flex overflow-x-auto gap-8 pb-8 -mx-4 px-4">
            {mockNews.map((news) => (
              <div
                key={news.id}
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex-shrink-0"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-green-800">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-green-600 hover:text-green-700 hover:bg-green-50 transition-all duration-300"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#348e37]/90 to-[#348e37]/90"></div>
        </div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of investors who trust MarketIntel for their financial decisions.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth/signup")}
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
