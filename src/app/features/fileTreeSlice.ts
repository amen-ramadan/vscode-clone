import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile= action.payload;
    },
    setActiveTabIdAction: (state, action: PayloadAction<string>) => {
      state.clickedFile.activeTabId = action.payload;
    },
  },
})

export const { setOpenFilesAction, setClickedFileAction, setActiveTabIdAction } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
