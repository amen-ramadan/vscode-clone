import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import OpenedFilesBar from "./components/OpenedFilesBar";

function App() {
  return (
    <div className="">
      <div className="flex h-screen">
        <div className="w-64 border-r p-2  border-b-[1px] border-[#ffffff1f]">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  );
}

export default App;
