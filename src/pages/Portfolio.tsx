import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockPortfolio = [
  { symbol: "AAPL", name: "Apple Inc.", shares: 10, price: 175.50, value: 1755.00, change: 2.5 },
  { symbol: "MSFT", name: "Microsoft Corp.", shares: 8, price: 380.20, value: 3041.60, change: 1.8 },
  { symbol: "GOOGL", name: "Alphabet Inc.", shares: 5, price: 142.30, value: 711.50, change: -0.5 },
  { symbol: "AMZN", name: "Amazon.com Inc.", shares: 12, price: 175.35, value: 2104.20, change: 3.2 },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Holdings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Symbol</th>
                  <th className="text-left py-4">Name</th>
                  <th className="text-right py-4">Shares</th>
                  <th className="text-right py-4">Price</th>
                  <th className="text-right py-4">Value</th>
                  <th className="text-right py-4">24h Change</th>
                </tr>
              </thead>
              <tbody>
                {mockPortfolio.map((stock) => (
                  <tr key={stock.symbol} className="border-b">
                    <td className="py-4 font-medium">{stock.symbol}</td>
                    <td className="py-4">{stock.name}</td>
                    <td className="py-4 text-right">{stock.shares}</td>
                    <td className="py-4 text-right">${stock.price.toFixed(2)}</td>
                    <td className="py-4 text-right">${stock.value.toFixed(2)}</td>
                    <td className={`py-4 text-right ${stock.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;