import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
                Smart Market Intelligence for Modern Investors
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-fade-up">
                Get real-time insights, track your portfolio, and make informed investment decisions with MarketIntel.
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth/signup")}
                  className="bg-white text-primary hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/features")}
                  className="text-white border-white hover:bg-white/20 transition-colors duration-200"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose MarketIntel?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-accent mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Investing Smarter?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of investors who trust MarketIntel for their market research.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth/signup")}
              className="bg-accent text-white hover:bg-accent/90 transition-colors duration-200"
            >
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const features = [
  {
    icon: "📈",
    title: "Real-Time Market Data",
    description: "Access live market data and advanced analytics to stay ahead of market trends.",
  },
  {
    icon: "📰",
    title: "Financial News Feed",
    description: "Get curated news and insights from trusted financial sources worldwide.",
  },
  {
    icon: "📊",
    title: "Portfolio Tracking",
    description: "Track your investments and monitor your portfolio performance in real-time.",
  },
];

export default Index;