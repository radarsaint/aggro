import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { useGame } from '../utils/GameContext';
import { Navigate } from 'react-router-dom';

export function Layout() {
  const { state } = useGame();
  if (!state.hunter.created) return <Navigate to="/onboarding" replace />;
  return (
    <div className="app-shell">
      <main className="app-main">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
