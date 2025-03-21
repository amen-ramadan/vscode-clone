import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "vs code clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [{ name: "react.js", isFolder: false }],
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "App.tsx",
      isFolder: false,
      children: [],
      content: "",
    },
  ],
};
