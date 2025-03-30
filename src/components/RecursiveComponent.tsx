import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setClickedFileAction,
  setOpenFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/function";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, content, children } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // handlers
  const toggle = () => setIsOpen((prev) => !prev);

  const onFileClicked = () => {
    const exist = doesFileObjectExist(openedFiles, id);
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        filename: name,
        fileContent: content,
      })
    );
    if (exist) return;
    dispatch(setOpenFilesAction([...openedFiles, fileTree]));
  };

  return (
    <div className="mb-1 ml-2 cursor-pointer select-none">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div className="flex items-center mb-1" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="flex items-center mb-1" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
