import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Login from "./components/Login";
function App() {
  let MyList = ["Pg 1", "Pg 2", " Pg 3", "Pg 4"];
  const handleSelectItem = (Item: string) => {
    console.log(Item);
  };
  const [isVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Login></Login>
      <ListGroup
        MyList={MyList}
        heading="Pages"
        onSelectItem={handleSelectItem}
      />
      {isVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span> World</span>
        </Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}
export default App;
