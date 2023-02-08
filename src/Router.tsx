import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "./redux/store";
const Navbar = lazy(() => import("./components/Navbar"));
// const router = createBrowserRouter([{ path: "/navbar", element: <Navbar /> }]);
function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/navbar" element={<Navbar />} />
            </Routes>
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
