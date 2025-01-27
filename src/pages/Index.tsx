import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-down leading-tight">
                Build Brand and Unlock Your Business Potential
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-up">
                Get real-time insights, track your portfolio, and make informed investment decisions with MarketIntel.
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth/signup")}
                  className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-8"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/features")}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
              What We Do to Serve You Best
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="text-primary mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses who trust MarketIntel for their growth.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth/signup")}
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-8"
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
    title: "Market Analysis",
    description: "Get comprehensive market analysis and insights to make informed decisions.",
  },
  {
    icon: "🎯",
    title: "Strategic Planning",
    description: "Develop effective strategies based on real-time market data and trends.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    description: "Monitor and optimize your business performance with advanced analytics.",
  },
];

export default Index;