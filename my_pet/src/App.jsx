import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      {/* <AuthContext.Provider value={auth}> */}
      <Outlet context={[context, setContext]} />
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;


// --- Min gamle kode: ---
//
// import "./App.css";
// import { Outlet } from "react-router-dom";
//
// function App() {
//   return (
//     <div className="app">
//       <Outlet />
//     </div>
//   );
// }
//
// export default App;
