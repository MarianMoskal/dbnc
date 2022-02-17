import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

const Layout = lazy(() =>
  import('../Pages/Layout' /* webpackChunkName: "Layout-page" */),
);

const Task1 = lazy(() =>
  import('../Pages/Task1' /* webpackChunkName: "Task1-page" */),
);

const Task2 = lazy(() =>
  import('../Pages/Task2' /* webpackChunkName: "Task2-page" */),
);

const Task3 = lazy(() =>
  import('../Pages/Task3' /* webpackChunkName: "Task3-page" */),
);

const Task4 = lazy(() =>
  import('../Pages/Task4' /* webpackChunkName: "Task4-page" */),
);

const Task5 = lazy(() =>
  import('../Pages/Task5' /* webpackChunkName: "Task5-page" */),
);


function App() {
  return (
    <Suspense fallback={<h1 className={css.center}>Loading...</h1>}>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              <Route
                index
                element={<Task1 />}
              />
              <Route
                path="task2"
                element={<Task2 />}
              />
              <Route
                path="task3"
                element={<Task3 />}
              />
              <Route
                path="task4"
                element={<Task4 />}
              />
              <Route
                path="task5"
                element={<Task5 />}
              />
            </Route>

            <Route
              path="*"
              element={<h1 className={css.center}>Not found!</h1>}
            />
          </Routes>
        </Suspense>
  );
}

export default App;
