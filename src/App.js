import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Component/SignInWithFegma/SignUp";
import SignIn from "./Component/SignInWithFegma/SignIn";
// import ClassComponent from "./Component/ClassComponent";
// import FunctionalProps from "./Component/FunctionalProps";
// import FunctionComponent from "./Component/FunctionComponent";
// import ClassProps from "./Component/ClassProps";
// import UserSubscription from "./Component/UserSubscription";
// import Counter from "./Component/CounterFunction/counter";
// import SignIn from "./Component/Sign/SignIn";
// import SignUp from "./Component/Sign/SignUp";
// import Switch from "./Component/Sign/Switch";
// import ProductHome from "./Component/ProductHome/ProductHome";
// import Products from "./Component/ProductHome/Products";
// import Comment from "./Component/Comments";
// import CommentForm from "./Component/CommentForm";
// import SignUp from "./Component/SignInWithFegma/SignUp";
function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <FunctionalProps
        fname="Omar"
        lname="Ashraf"
        LinkedIn="https://www.linkedin.com/in/omar-ashraf-abdul-qader/"
        github="https://github.com/OmarAshraf1911"
      />
      <ClassProps course1="React" course2="JS">
        <p>child element</p>
      </ClassProps>
      <UserSubscription></UserSubscription> */}
      {/* <Counter /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Switch /> */}
      {/* <Products /> */}
      {/* <CommentForm /> */}
      {/* <SignUp /> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
