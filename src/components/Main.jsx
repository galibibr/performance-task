import React, { memo } from "react";
import General from "./General.jsx";
import Scripts from "./Scripts.jsx";
import Devices from "./Devices.jsx";
const Main = memo(() => {
  return (
    <main className="main">
      <General />
      <Scripts />
      <Devices />
    </main>
  );
});
export default Main;