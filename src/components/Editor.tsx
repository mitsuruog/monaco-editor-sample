import { useEffect, useRef, useState, VFC } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export const Editor: VFC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef && !editor) {
      setEditor(monaco.editor.create(editorRef.current!, {
        language: "typescript"
      }))
    }
  }, [editorRef.current]);

  return <main className="w-screen h-screen" ref={editorRef} />;
};
