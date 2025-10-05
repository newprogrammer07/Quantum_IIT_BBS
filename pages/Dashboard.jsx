import React from 'react';
// Import the local image for the Users by Region chart
import usersRegionChart from '../assets/users-region-chart.jpg'; 

const Dashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white animate-fade-in">
      <header className="bg-brand-gray border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-brand-orange">Q</span>UANTUM
          </div>
          <button onClick={onLogout} className="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-brand-gray p-6 rounded-lg border border-white/10">
                <p className="text-brand-light-gray text-sm">Total Revenue</p>
                <p className="text-3xl font-bold text-brand-orange mt-2">$1.2M</p>
            </div>
             <div className="bg-brand-gray p-6 rounded-lg border border-white/10">
                <p className="text-brand-light-gray text-sm">Active Users</p>
                <p className="text-3xl font-bold text-brand-orange mt-2">3,456</p>
            </div>
             <div className="bg-brand-gray p-6 rounded-lg border border-white/10">
                <p className="text-brand-light-gray text-sm">Conversion Rate</p>
                <p className="text-3xl font-bold text-brand-orange mt-2">12.5%</p>
            </div>
             <div className="bg-brand-gray p-6 rounded-lg border border-white/10">
                <p className="text-brand-light-gray text-sm">Avg. Session</p>
                <p className="text-3xl font-bold text-brand-orange mt-2">5m 32s</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-brand-gray p-6 rounded-lg border border-white/10 h-[400px] flex flex-col">
                <h3 className="text-xl font-bold mb-4">Financial Overview</h3>
                <div className="flex-grow flex items-center justify-center">
                    {/* Placeholder for Financial Chart */}
                    <img src="https://placehold.co/600x400/1A1A1A/FF6B00?text=Financial+Chart" alt="Financial Overview Chart" className="w-full h-full object-contain p-4" />
                </div>
            </div>
             <div className="lg:col-span-2 bg-brand-gray p-6 rounded-lg border border-white/10 h-[400px] flex flex-col">
                <h3 className="text-xl font-bold mb-4">Users by Region</h3>
                 <div className="flex-grow flex items-center justify-center">
                    {/* Using your local image */}
                    <img src={usersRegionChart} alt="Users by Region Chart" className="w-full h-full object-contain p-4" />
                </div>
            </div>
        </div>
      </main>
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default Dashboard;
