/* eslint-disable i18next/no-literal-string */
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
