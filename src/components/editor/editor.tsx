"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";

type EditorProps = {
  onChange: (richText: string) => void;
};

const Editor = ({ onChange }: EditorProps) => {
  const handleChange = (richText: string) => {
    onChange(richText);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Copy and paste your article here...",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "flex flex-col min-h-[100px] focus-visible:outline-0",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full md:max-w-[65%] border rounded-lg bg-white dark:bg-muted/30 shadow-sm">
      <div className="border-b p-3 bg-muted dark:bg-muted/70">
        {editor && <Toolbar editor={editor} />}
      </div>
      <div className="p-6">
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
