import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

// interface IProps {
// }
export default function OpenedFilesBar() {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="select-none">
      <ul
        className="flex items-center"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </ul>
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
      {showMenu && (
        <ContextMenu positions={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
}
