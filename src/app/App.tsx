import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <Suspense fallback={<div />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
