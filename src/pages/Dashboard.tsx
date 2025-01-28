import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '2024-01', value: 4000 },
  { date: '2024-02', value: 3000 },
  { date: '2024-03', value: 5000 },
  { date: '2024-04', value: 2780 },
  { date: '2024-05', value: 1890 },
  { date: '2024-06', value: 2390 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">$24,500</div>
            <div className="text-sm text-muted">+2.5% from last month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">15</div>
            <div className="text-sm text-muted">Active positions</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Returns (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">+12.8%</div>
            <div className="text-sm text-muted">Since January 2024</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#348e37" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;