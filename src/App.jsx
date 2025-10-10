import "../src/components/todo/styles.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";

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
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  const delay = (miliSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, miliSeconds);
    });
  };
  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(1000);
    if (res.data) {
      // Success
      setUser(res.data.user);
      console.log(">>>Check user data: ", res.data);
    }
    setIsAppLoading(false);
  };
  return (
    <>
      {/* <ParentComponent>
        <ChildComponent />
      </ParentComponent> */}
      {isAppLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}>
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
