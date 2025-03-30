import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import ResizablePanel from "./components/ResizablePanel";
import Preview from "./components/Preview";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  return (
    <div className="">
      <div className="flex h-screen">
        <ResizablePanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTab />}
          showLeftPanel
        />
      </div>
    </div>
  );
}

export default App;
