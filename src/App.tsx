import { RouterProvider, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme/theme-provider';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programs', element: <Programs /> },
      { path: 'events', element: <Events /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donate', element: <Donate /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="getmore-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;