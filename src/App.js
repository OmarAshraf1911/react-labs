import "./App.css";
import ClassComponent from "./Component/ClassComponent";
import FunctionalProps from "./Component/FunctionalProps";
import FunctionComponent from "./Component/FunctionComponent";
import ClassProps from "./Component/ClassProps";
import UserSubscription from "./Component/UserSubscription";

function App() {
  return (
    <div className="App">
      <ClassComponent />
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
      <UserSubscription></UserSubscription>
    </div>
  );
}

export default App;
