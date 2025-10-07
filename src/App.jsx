import "../src/components/todo/styles.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

// const ParentComponent = (props) => {
//   console.log(">>>Check props parents: ", props);

//   return (
//     <>
//       <div>Parent components</div>
//       {props.children}
//     </>
//   );
// };

// const ChildComponent = (props) => {
//   console.log(">>>Check props child: ", props);

//   return (
//     <>
//       <div>Children components</div>
//       {props.children}
//     </>
//   );
// };

function App() {
  return (
    <>
      {/* <ParentComponent>
        <ChildComponent />
      </ParentComponent> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
