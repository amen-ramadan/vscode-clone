import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import OpenedFilesBar from "./components/OpenedFilesBar";
import ResizablePanel from "./components/ResizablePanel";

function App() {
  return (
    <div className="">
      <div className="flex h-screen">
        <ResizablePanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpenedFilesBar />}
          showLeftPanel
        />
      </div>
    </div>
  );
}

export default App;
