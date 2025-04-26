import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Users, Map, Activity, TrendingUp, Clock, Calendar, Filter, Download, Search } from 'lucide-react';

const CrowdSenseDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for visualizations
  const hourlyData = [
    { hour: '8AM', count: 45, avgDwell: 2.5 },
    { hour: '9AM', count: 78, avgDwell: 3.2 },
    { hour: '10AM', count: 125, avgDwell: 4.7 },
    { hour: '11AM', count: 156, avgDwell: 5.6 },
    { hour: '12PM', count: 210, avgDwell: 6.8 },
    { hour: '1PM', count: 245, avgDwell: 7.2 },
    { hour: '2PM', count: 188, avgDwell: 6.1 },
    { hour: '3PM', count: 166, avgDwell: 5.3 },
    { hour: '4PM', count: 178, avgDwell: 4.9 },
    { hour: '5PM', count: 220, avgDwell: 4.2 },
    { hour: '6PM', count: 198, avgDwell: 3.7 },
    { hour: '7PM', count: 145, avgDwell: 3.1 },
    { hour: '8PM', count: 98, avgDwell: 2.8 },
  ];
  
  const zoneData = [
    { name: 'Entrance', visitors: 1245, avgDwell: 1.2, color: '#8884d8' },
    { name: 'Electronics', visitors: 865, avgDwell: 8.7, color: '#83a6ed' },
    { name: 'Apparel', visitors: 765, avgDwell: 7.2, color: '#8dd1e1' },
    { name: 'Checkout', visitors: 1024, avgDwell: 5.4, color: '#82ca9d' },
    { name: 'Customer Service', visitors: 456, avgDwell: 12.3, color: '#a4de6c' },
    { name: 'Home Goods', visitors: 678, avgDwell: 6.8, color: '#d0ed57' },
  ];
  
  const demographicData = [
    { name: '18-24', value: 22, color: '#8884d8' },
    { name: '25-34', value: 31, color: '#83a6ed' },
    { name: '35-44', value: 18, color: '#8dd1e1' },
    { name: '45-54', value: 15, color: '#82ca9d' },
    { name: '55+', value: 14, color: '#a4de6c' },
  ];
  
  const weeklyData = [
    { day: 'Mon', visitors: 1245, conversion: 22 },
    { day: 'Tue', visitors: 1345, conversion: 24 },
    { day: 'Wed', visitors: 1190, conversion: 20 },
    { day: 'Thu', visitors: 1290, conversion: 23 },
    { day: 'Fri', visitors: 1590, conversion: 28 },
    { day: 'Sat', visitors: 1940, conversion: 34 },
    { day: 'Sun', visitors: 1740, conversion: 30 },
  ];
  
  const queueData = [
    { time: '9AM', waitTime: 2.1 },
    { time: '10AM', waitTime: 3.5 },
    { time: '11AM', waitTime: 5.2 },
    { time: '12PM', waitTime: 7.8 },
    { time: '1PM', waitTime: 8.4 },
    { time: '2PM', waitTime: 6.1 },
    { time: '3PM', waitTime: 4.7 },
    { time: '4PM', waitTime: 5.2 },
    { time: '5PM', waitTime: 6.8 },
  ];

  const zoneDemoData = [
    { zone: 'Electronics', '18-24': 32, '25-34': 28, '35-44': 24, '45-54': 10, '55+': 6 },
    { zone: 'Apparel', '18-24': 26, '25-34': 34, '35-44': 18, '45-54': 12, '55+': 10 },
    { zone: 'Home Goods', '18-24': 14, '25-34': 26, '35-44': 32, '45-54': 18, '55+': 10 },
    { zone: 'Customer Service', '18-24': 15, '25-34': 22, '35-44': 28, '45-54': 20, '55+': 15 },
    { zone: 'Checkout', '18-24': 21, '25-34': 30, '35-44': 25, '45-54': 14, '55+': 10 }
  ];
  
  // Custom gradient for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="font-bold text-xl text-blue-600">CrowdSense</div>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">Analytics Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Location:</span> Retail Store #124
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span>April 26, 2025</span>
            </div>
            <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-md flex items-center">
              <Activity className="w-4 h-4 mr-1" />
              <span>Live Data</span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex px-4 border-t">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('zones')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'zones' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Zone Analytics
          </button>
          <button 
            onClick={() => setActiveTab('queues')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'queues' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Queue Management
          </button>
          <button 
            onClick={() => setActiveTab('demographics')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'demographics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Demographics
          </button>
          <button 
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Reports
          </button>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dashboard Controls */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeTab === 'overview' && 'Store Performance Overview'}
            {activeTab === 'zones' && 'Zone Analytics'}
            {activeTab === 'queues' && 'Queue Management'}
            {activeTab === 'demographics' && 'Demographic Insights'}
            {activeTab === 'reports' && 'Analytics Reports'}
          </h1>
          
          <div className="flex space-x-3">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Last updated: 5 min ago</span>
            </div>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm">Total Visitors</h3>
              <div className="bg-blue-100 p-2 rounded-md">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">1,867</span>
              <span className="ml-2 text-sm text-green-600">+12.4%</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">Compared to yesterday</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm">Avg. Dwell Time</h3>
              <div className="bg-green-100 p-2 rounded-md">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">14.2m</span>
              <span className="ml-2 text-sm text-green-600">+2.1%</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">Compared to yesterday</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
              <div className="bg-purple-100 p-2 rounded-md">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">23.8%</span>
              <span className="ml-2 text-sm text-red-600">-1.2%</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">Compared to yesterday</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm">Peak Hour</h3>
              <div className="bg-yellow-100 p-2 rounded-md">
                <Activity className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold">1-2 PM</span>
              <span className="ml-2 text-sm text-gray-600">245 visitors</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">Today's busiest period</div>
          </div>
        </div>
        
        {/* Main Charts - Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Hourly Traffic</h2>
                <div className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Today</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hourlyData}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="count" 
                    stroke="#3b82f6" 
                    name="Visitors" 
                    strokeWidth={2} 
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="avgDwell" 
                    stroke="#10b981" 
                    name="Avg. Dwell Time (min)" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    dot={{ r: 3 }}
                  />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="count" 
                    fill="url(#colorVisitors)" 
                    stroke="none" 
                    fillOpacity={0.1}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-3 bg-blue-50 p-2 rounded-md text-sm text-blue-700">
                <div className="font-semibold">Insight:</div>
                <div>Traffic peaks during lunch hours (1-2 PM) with average 7.2 min dwell time.</div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Weekly Comparison</h2>
                <div className="text-xs text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Last 7 days</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorWeeklyVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" domain={[0, 2000]} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 40]} />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    yAxisId="left"
                    dataKey="visitors" 
                    fill="url(#colorWeeklyVisitors)" 
                    name="Total Visitors" 
                    radius={[5, 5, 0, 0]}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="conversion" 
                    stroke="#10b981" 
                    name="Conversion %" 
                    strokeWidth={2}
                    dot={{ stroke: '#10b981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-3 bg-green-50 p-2 rounded-md text-sm text-green-700">
                <div className="font-semibold">Insight:</div>
                <div>Saturday shows highest traffic (1,940) and conversion rate (34%).</div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Zone Performance</h2>
                <div className="text-xs text-gray-500 flex items-center">
                  <Map className="w-4 h-4 mr-1" />
                  <span>All zones</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart 
                    data={zoneData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="visitors" 
                      name="Visitors" 
                      radius={[0, 4, 4, 0]}
                    >
                      {zoneData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart 
                    data={zoneData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="avgDwell" 
                      name="Avg. Dwell Time (min)" 
                      fill="#10b981"
                      radius={[0, 4, 4, 0]}
                    >
                      {zoneData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 3) % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 bg-purple-50 p-2 rounded-md text-sm text-purple-700">
                <div className="font-semibold">Zone Analysis:</div>
                <div>Entrance has highest traffic (1,245) while Customer Service shows longest dwell time (12.3 min).</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Demographics</h2>
              </div>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 bg-indigo-50 p-2 rounded-md text-sm text-indigo-700">
                <div className="font-semibold">Demographic Insight:</div>
                <div>25-34 age group represents largest visitor segment (31%).</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Queue Wait Times</h2>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={queueData}>
                  <defs>
                    <linearGradient id="colorWait" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="waitTime" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#colorWait)" 
                    name="Wait Time (min)"
                  />
                  <ReferenceLine y={5} stroke="red" strokeDasharray="3 3" label="Threshold" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-3 bg-red-50 p-2 rounded-md text-sm text-red-700">
                <div className="font-semibold">Alert:</div>
                <div>Wait times exceeded threshold (5 min) between 11AM-2PM. Peak wait: 8.4 min at 1PM.</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Zone Analytics Tab */}
        {activeTab === 'zones' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Zone Performance Overview</h2>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {zoneData.slice(0, 3).map((zone, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="font-medium text-gray-900">{zone.name}</div>
                    <div className="flex justify-between mt-2">
                      <div>
                        <div className="text-xs text-gray-500">Visitors</div>
                        <div className="text-xl font-bold text-blue-600">{zone.visitors.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Avg. Dwell</div>
                        <div className="text-xl font-bold text-green-600">{zone.avgDwell} min</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg">
                <div className="text-sm font-medium text-gray-700 mb-2">Zone Demographics Analysis</div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">18-24</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">25-34</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">35-44</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">45-54</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">55+</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {zoneDemoData.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.zone}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['18-24']}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['25-34']}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['35-44']}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['45-54']}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row['55+']}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-3 rounded-lg text-sm">
                <div className="font-medium text-blue-800 mb-1">Zone Insights</div>
                <ul className="list-disc pl-5 text-blue-700 space-y-1">
                  <li>Electronics zone attracts predominantly younger demographics (18-34)</li>
                  <li>Home Goods shows strongest engagement from 35-44 age group</li>
                  <li>Customer Service has most balanced age distribution</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Store Heatmap</h2>
              </div>
              
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center max-w-md p-6">
                  <Map className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-lg font-medium text-gray-600">Store Layout Heatmap</p>
                  <p className="mt-1 text-sm text-gray-500">Interactive heatmap showing traffic patterns and engagement zones throughout the store.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'queues' && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Wait Time Analysis</h2>
                <div className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Today</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={queueData}>
                  <defs>
                    <linearGradient id="colorWaitQueue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="waitTime" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#colorWaitQueue)" 
                    name="Wait Time (min)"
                  />
                  <ReferenceLine y={5} stroke="red" strokeDasharray="3 3" label="Threshold" />
                </AreaChart>
              </ResponsiveContainer>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-purple-800">Average Wait Time</div>
                    <div className="text-lg font-bold text-purple-700">5.4 min</div>
                  </div>
                  <div className="text-xs text-purple-600 mt-1">Overall daily average</div>
                </div>
                
                <div className="bg-red-50 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-red-800">Peak Wait Time</div>
                    <div className="text-lg font-bold text-red-700">8.4 min</div>
                  </div>
                  <div className="text-xs text-red-600 mt-1">At 1:00 PM</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Queue Status</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Main Checkout</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      High Wait
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">6.8</div>
                      <div className="text-xs text-gray-500">min avg. wait</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-gray-500">people in line</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">3/5</div>
                      <div className="text-xs text-gray-500">counters open</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Customer Service</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Medium Wait
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">4.2</div>
                      <div className="text-xs text-gray-500">min avg. wait</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">5</div>
                      <div className="text-xs text-gray-500">people in line</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">2/3</div>
                      <div className="text-xs text-gray-500">counters open</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Express Checkout</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Low Wait
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">1.5</div>
                      <div className="text-xs text-gray-500">min avg. wait</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <div className="text-xs text-gray-500">people in line</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">2/2</div>
                      <div className="text-xs text-gray-500">counters open</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Staff Recommendations</h2>
                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                  AI-Powered
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Main Checkout</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm font-medium text-red-600">Action Needed</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Current wait times exceed threshold by 37%. Customer satisfaction at risk.</p>
                  <div className="bg-red-50 p-3 rounded-md text-sm">
                    <span className="font-medium">Recommendation:</span> Open 2 additional checkout counters until 6PM to reduce wait times below 4 minutes.
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Customer Service</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm font-medium text-yellow-600">Monitor</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Wait times approaching upper acceptable threshold. Monitor situation closely.</p>
                  <div className="bg-yellow-50 p-3 rounded-md text-sm">
                    <span className="font-medium">Recommendation:</span> Prepare to allocate one additional staff member if queue exceeds 8 people.
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Express Checkout</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium text-green-600">Optimal</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Current staffing levels appropriate for customer volume. Wait times within target range.</p>
                  <div className="bg-green-50 p-3 rounded-md text-sm">
                    <span className="font-medium">Recommendation:</span> Maintain current staffing through closing hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'demographics' && (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Age Distribution</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <div className="text-sm font-medium text-gray-800">Key Insights:</div>
                <ul className="mt-1 text-sm text-gray-600 space-y-1 pl-5 list-disc">
                  <li>25-34 age group represents largest segment (31%)</li>
                  <li>Young adults (18-34) make up more than half of visitors (53%)</li>
                  <li>Seniors (55+) represent smallest segment (14%)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Gender Distribution</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Male', value: 54, color: '#3b82f6' },
                      { name: 'Female', value: 46, color: '#8b5cf6' }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#8b5cf6" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <div className="text-sm font-medium text-gray-800">Key Insights:</div>
                <ul className="mt-1 text-sm text-gray-600 space-y-1 pl-5 list-disc">
                  <li>Slight male majority (54% vs 46%)</li>
                  <li>Gender split consistent throughout weekdays</li>
                  <li>Female ratio increases on weekends (49%)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Demographic Engagement by Zone</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">18-24</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">25-34</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">35-44</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">45-54</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">55+</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Group</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electronics</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">18-24</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Apparel</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">25-34</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Home Goods</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">35-44</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer Service</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">35-44</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Checkout</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">25-34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Available Reports</h2>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Generate New Report
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <BarChart className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">Weekly Performance</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive analysis of traffic patterns, conversion rates, and zone engagement.</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Generated: Apr 23, 2025</span>
                    <span className="text-blue-600">PDF, 12 pages</span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-md mr-3">
                      <PieChart className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">Demographic Insights</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Detailed breakdown of visitor demographics and engagement patterns by zone.</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Generated: Apr 18, 2025</span>
                    <span className="text-blue-600">PDF, 8 pages</span>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-md mr-3">
                      <Map className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">Flow Path Analysis</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Customer journey mapping through the store with conversion points highlighted.</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Generated: Apr 15, 2025</span>
                    <span className="text-blue-600">PDF, 15 pages</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Scheduled Reports</h2>
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule New
                </button>
              </div>
              
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Generation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weekly Performance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Weekly (Monday)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 3, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 recipients</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button className="hover:underline">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monthly Comparison</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monthly (1st)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 1, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 recipients</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button className="hover:underline">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Queue Management</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Weekly (Friday)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 30, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 recipients</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button className="hover:underline">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CrowdSenseDashboard;
