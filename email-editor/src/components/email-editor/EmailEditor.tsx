import React, { useState, useRef } from "react";
import { Eraser, Bold, Italic, Underline } from "lucide-react";
import style from "../email-editor/EmailEditor.module.sass";
import { applyStyle } from "./apply-style";
import parse from "html-react-parser";

export default function EmailEditor() {
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const [text, setText] = useState(
    "Hey hello - this is email editor. My project - good luck"
  );
  const textRef = useRef<HTMLAreaElement | null>(null);
  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };
  const applyFormat = (type: "bold" | "italic" | "underline") => {
    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);
    const selectedText = text.substring(selectionStart, selectionEnd);

    setText(before + applyStyle(type, selectedText) + after);
    console.log(selectedText);
  };

  return (
    <div>
      <h1>Email editor</h1>
      <div className={style.preview}>{parse(text)}</div>
      <div className={style.card}>
        <textarea
          contentEditable
          className={style.editor}
          spellCheck={false}
          onSelect={updateSelection}
          ref={textRef}
          value={text}
          readOnly
          onChange={(e) => setText(e.target.value)}
        >
          hey lorem ipsum hey lorem ipsum hey lorem ipsum hey lorem ipsum hey
          lorem ipsum hey lorem ipsum hey lorem ipsum hey lorem ipsum hey lorem
          ipsum hey lorem ipsum hey lorem ipsumem ipsum
        </textarea>
        <div className={style.actions}>
          <div className={style.tools}>
            <button className={style.icon} onClick={() => setText("")}>
              <Eraser />
            </button>
            <button className={style.icon} onClick={() => applyFormat("bold")}>
              <Bold />
            </button>
            <button
              className={style.icon}
              onClick={() => applyFormat("italic")}
            >
              <Italic />
            </button>
            <button
              className={style.icon}
              onClick={() => applyFormat("underline")}
            >
              <Underline />
            </button>
          </div>
          <button className={style.sendButton}>Send now</button>
        </div>
      </div>
    </div>
  );
}
