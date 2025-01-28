import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationContent = [
  {
    id: 1,
    title: "Market Basics",
    topics: [
      "Understanding Market Terms",
      "Reading Financial News",
      "Market Indicators",
      "Economic Calendar Guide"
    ]
  },
  {
    id: 2,
    title: "Market Analysis",
    topics: [
      "Market Trends",
      "Global Market Events",
      "Economic Reports",
      "Market Updates"
    ]
  },
  {
    id: 3,
    title: "Financial News Guide",
    topics: [
      "News Reading Tips",
      "Market News Analysis",
      "Financial Terms Guide",
      "News Impact Analysis"
    ]
  }
];

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial News Guide</h1>
      
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
          <CardTitle>About Our Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Welcome to our free financial news resources! We provide comprehensive guides to help you better understand
            and interpret financial news and market events.
          </p>
          <p className="text-gray-600">
            Our guides are designed to help readers of all levels understand financial news better. Browse through our
            sections to enhance your financial news reading experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;