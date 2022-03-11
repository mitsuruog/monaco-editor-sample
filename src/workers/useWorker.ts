import * as monaco from "monaco-editor";

const editorWorker = new Worker(
  new URL("monaco-editor/esm/vs/editor/editor.worker", import.meta.url)
);
const jsonWorker = new Worker(
  new URL("monaco-editor/esm/vs/language/json/json.worker", import.meta.url)
);
const cssWorker = new Worker(
  new URL("monaco-editor/esm/vs/language/css/css.worker", import.meta.url)
);
const htmlWorker = new Worker(
  new URL("monaco-editor/esm/vs/language/html/html.worker", import.meta.url)
);
const tsWorker = new Worker(
  new URL("monaco-editor/esm/vs/language/typescript/ts.worker", import.meta.url)
);

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === "json") {
      return jsonWorker;
    } else if (label === "css" || label === "scss" || label === "less") {
      return cssWorker;
    } else if (label === "html") {
      return htmlWorker;
    } else if (label === "typescript" || label === "javascript") {
      return tsWorker;
    } else {
      return editorWorker;
    }
  },
};

monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
