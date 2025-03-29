import { useSelector } from "react-redux";
import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="my-5">
      <RecursiveComponent fileTree={fileTree} />

      {openedFiles.map((file, idx) => (
        <div key={idx}>
          <span>{file.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
