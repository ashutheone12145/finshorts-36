import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockMarketData = [
  { time: '9:30', sp500: 4800, nasdaq: 15000, dow: 37500 },
  { time: '10:30', sp500: 4820, nasdaq: 15100, dow: 37600 },
  { time: '11:30', sp500: 4810, nasdaq: 15050, dow: 37550 },
  { time: '12:30', sp500: 4830, nasdaq: 15150, dow: 37650 },
  { time: '13:30', sp500: 4825, nasdaq: 15120, dow: 37620 },
  { time: '14:30', sp500: 4840, nasdaq: 15200, dow: 37700 },
];

const topNews = [
  {
    title: "Fed Signals Rate Decision Impact",
    time: "10 mins ago",
    impact: "High"
  },
  {
    title: "Tech Sector Shows Strong Growth",
    time: "30 mins ago",
    impact: "Medium"
  },
  {
    title: "Global Markets React to Economic Data",
    time: "1 hour ago",
    impact: "High"
  }
];

const MarketOverview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Market Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>S&P 500</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">4,840.25</div>
            <div className="text-sm text-success">+0.85%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>NASDAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">15,200.50</div>
            <div className="text-sm text-success">+1.1%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dow Jones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">37,700.75</div>
            <div className="text-sm text-success">+0.7%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Market Movement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockMarketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sp500" stroke="#348e37" name="S&P 500" />
                    <Line type="monotone" dataKey="nasdaq" stroke="#2a722c" name="NASDAQ" />
                    <Line type="monotone" dataKey="dow" stroke="#10B981" name="Dow Jones" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Market Moving News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topNews.map((news, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-semibold mb-1">{news.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{news.time}</span>
                      <span className={`px-2 py-0.5 rounded-full ${
                        news.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {news.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;