import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GameProvider, useGame } from './utils/GameContext';
import { Layout } from './components/Layout';
import { Onboarding } from './pages/Onboarding';
import { Discover } from './pages/Discover';
import { Match } from './pages/Match';
import { ChatList } from './pages/ChatList';
import { Chat } from './pages/Chat';
import { Encounters } from './pages/Encounters';
import { Combat } from './pages/Combat';
import { Profile } from './pages/Profile';
import { HowItWorks } from './pages/HowItWorks';

function RootRedirect() {
  const { state } = useGame();
  return <Navigate to={state.hunter.created ? '/discover' : '/onboarding'} replace />;
}

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route element={<Layout />}>
            <Route path="/discover" element={<Discover />} />
            <Route path="/match/:matchId" element={<Match />} />
            <Route path="/chats" element={<ChatList />} />
            <Route path="/chat/:matchId" element={<Chat />} />
            <Route path="/encounters" element={<Encounters />} />
            <Route path="/combat/:matchId" element={<Combat />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}
