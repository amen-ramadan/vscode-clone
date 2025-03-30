import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}
export default function OpenedFilesBarTab({ file }: IProps) {
  const {
    clickedFile: { activeTabId },
    openedFiles,
  } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  //** handlers
  const onClick = () => {
    const { name, content, id } = file;
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        filename: name,
        fileContent: content,
      })
    );
  };

  const onRemove = (selectedId: string) => {
    const filteredFiles = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filteredFiles[0];
    if (!lastTab) {
      dispatch(setOpenFilesAction([]));
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          filename: "",
          fileContent: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenFilesAction(filteredFiles));
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        filename: name,
        fileContent: content,
      })
    );
  };
  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
}
