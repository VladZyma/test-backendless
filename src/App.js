import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

import data from "./tabs.json";

import MainLayout from "./MainLayout";
import DummyList from "./tabs/dummyList";

const DummyTable = lazy(() => import("./tabs/dummyTable"));
const DummyChart = lazy(() => import("./tabs/dummyChart"));

function App() {
  const orderedData = data.slice().sort((a, b) => a.order - b.order);

  console.log(orderedData);
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={`/${orderedData.at(0).id}`}>List</NavLink>
            </li>
            <li>
              <NavLink to={`/${orderedData.at(1).id}`}>Table</NavLink>
            </li>
            <li>
              <NavLink to={`/${orderedData.at(2).id}`}>Chart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate replace to="/dummyList" />} />
            <Route
              path={`/${orderedData.at(0).id}`}
              element={<DummyList data={orderedData.at(0)} />}
            />
            <Route
              path={`/${orderedData.at(1).id}`}
              element={<DummyTable data={orderedData.at(1)} />}
            />
            <Route
              path={`/${orderedData.at(2).id}`}
              element={<DummyChart data={orderedData.at(2)} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
