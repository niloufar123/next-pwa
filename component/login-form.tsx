'use client';
import { useState } from 'react';

export default function LoginForm({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="userId" className="block text-sm font-medium text-slate-700 mb-2">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your user ID"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      {/* Google button renders here */}
      {children}
    </div>
  );
}