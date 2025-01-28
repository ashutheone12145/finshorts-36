import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationContent = [
  {
    id: 1,
    title: "Investment Basics",
    topics: [
      "Understanding Stocks and Bonds",
      "Portfolio Diversification",
      "Risk Management",
      "Market Analysis Fundamentals"
    ]
  },
  {
    id: 2,
    title: "Technical Analysis",
    topics: [
      "Chart Patterns",
      "Technical Indicators",
      "Trading Strategies",
      "Market Trends"
    ]
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    topics: [
      "Financial Statements",
      "Company Valuation",
      "Industry Analysis",
      "Economic Indicators"
    ]
  }
];

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial Education</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationContent.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.topics.map((topic, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Welcome to our educational resources! Whether you're new to investing or looking to expand your knowledge,
            our comprehensive guides and tutorials will help you make informed investment decisions.
          </p>
          <p className="text-gray-600">
            Start with the basics and progressively move to more advanced topics. Each section includes practical
            examples and real-world applications to help you better understand the concepts.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;