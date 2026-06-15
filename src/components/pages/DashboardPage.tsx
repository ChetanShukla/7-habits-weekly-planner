'use client';

import { User, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useState } from 'react';

interface DashboardPageProps {
  user: User;
}

export default function DashboardPage({ user }: DashboardPageProps) {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">7 Habits Weekly Planner</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Weekly Planner!</h2>
          <p className="text-gray-600 mb-8">Building amazing features...</p>
        </div>
      </main>
    </div>
  );
}
