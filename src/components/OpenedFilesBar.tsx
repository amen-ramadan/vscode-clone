import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

// interface IProps {
// }
export default function OpenedFilesBar() {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  return (
    <div>
      <ul className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </ul>
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
}
