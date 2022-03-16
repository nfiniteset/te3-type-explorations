import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import Layout from "./Layout";

import Today from "./routes/today";
import FutureSmallHeaders from "./routes/future-headers-small";
import FutureMediumHeaders from "./routes/future-headers-medium";
import FutureLargeHeaders from "./routes/future-headers-large";
import FuturePwoMargin from "./routes/future-p-wo-margin";
import FuturePwMargin from "./routes/future-p-w-margin";
import FutureBlankPNarrow from "./routes/future-blank-p-narrow";
import FutureListsWMargin from "./routes/future-lists-w-margin";
import FutureListItemsWMargin from "./routes/future-list-items-w-margin";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="today" element={<Today />} />
          <Route path="future-small-headers" element={<FutureSmallHeaders />} />
          <Route
            path="future-medium-headers"
            element={<FutureMediumHeaders />}
          />
          <Route path="future-large-headers" element={<FutureLargeHeaders />} />
          <Route path="future-p-w-margin" element={<FuturePwMargin />} />
          <Route
            path="future-blank-p-narrow"
            element={<FutureBlankPNarrow />}
          />
          <Route path="future-p-wo-margin" element={<FuturePwoMargin />} />
          <Route
            path="future-lists-w-margin"
            element={<FutureListsWMargin />}
          />
          <Route
            path="future-list-items-w-margin"
            element={<FutureListItemsWMargin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
