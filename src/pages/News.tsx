import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, ChevronRight } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "The Shy Person's Guide to Winning Friends and Influencing People",
    category: "Society",
    source: "Financial Times",
    time: "July 25, 2023",
    summary: "Understanding the art of building meaningful connections and relationships in a world that often favors extroversion.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "This Concept Jet Could Get You From New York To London in Under 11 Minutes",
    category: "Technology",
    source: "Reuters",
    time: "July 20, 2023",
    summary: "Revolutionary aerospace technology promises to transform international travel with unprecedented speed and efficiency.",
    image: "https://images.unsplash.com/photo-1559627755-43a9e06e39e7?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Greek Islanders are to be Nominated for Peace Prize",
    category: "World",
    source: "Bloomberg",
    time: "July 18, 2023",
    summary: "Local communities demonstrate extraordinary humanitarian efforts in times of crisis, earning international recognition.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "10 Creative Courses That Will Keep You Learning New Things Next Year",
    category: "Education",
    source: "The Guardian",
    time: "July 15, 2023",
    summary: "Innovative learning platforms offer diverse opportunities for personal and professional growth in the coming year.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop"
  }
];

const latestNews = [
  "Those who have created peace, are the world better?",
  "This Concept Jet Could Get You From New York To London in Under 11 Minutes",
  "The Shy Person's Guide to Winning Friends and Influencing People",
  "Bradley Cooper's 'Maestro' Stirs Wellness At Sundance Film Festival Opening",
  "Greek Islanders are to be Nominated for Peace Prize",
  "35th Anniversary of the Space Shuttle Challenge Catastrophe, in pictures",
  "Uber is Using Phone Gyrometers to Check Whether Drivers go Over Speed",
  "10 Creative Courses That Will Keep You Learning New Things Next Year"
];

const News = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - Takes up 3 columns on large screens */}
        <div className="lg:col-span-3">
          {/* Featured Article */}
          <div className="mb-12">
            <article className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {mockNews[0].category}
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                  {mockNews[0].title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {mockNews[0].summary}
                </p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{mockNews[0].time}</span>
                  </div>
                  <span>•</span>
                  <span>{mockNews[0].source}</span>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img 
                  src={mockNews[0].image} 
                  alt={mockNews[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </article>
          </div>

          <Separator className="my-8" />

          {/* Latest News Grid */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Latest News</h2>
              <button className="text-primary hover:text-primary/80 flex items-center gap-1">
                More <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {mockNews.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.time}</span>
                      </div>
                      <span>•</span>
                      <span>{article.source}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Side News Bar - Takes up 1 column on large screens */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
                Latest News
                <span className="text-sm text-primary hover:text-primary/80 cursor-pointer">
                  More...
                </span>
              </h2>
              <ul className="space-y-4">
                {latestNews.map((title, index) => (
                  <li key={index} className="group">
                    <a 
                      href="#" 
                      className="block text-sm leading-snug hover:text-primary transition-colors duration-200"
                    >
                      {title}
                    </a>
                    {index < latestNews.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;