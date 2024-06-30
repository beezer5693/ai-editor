"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";

type EditorProps = {
  onChange: (richText: JSONContent) => void;
};

const Editor = ({ onChange }: EditorProps) => {
  const handleChange = (richText: JSONContent) => {
    onChange(richText);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({ placeholder: "Write something..." }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "flex flex-col min-h-[100px] focus-visible:outline-0",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getJSON());
    },
  });

  return (
    <div className="w-full md:max-w-[55%]">
      <div className="border-x border-t p-3">
        {editor && <Toolbar editor={editor} />}
      </div>
      <div className="border p-6">
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
