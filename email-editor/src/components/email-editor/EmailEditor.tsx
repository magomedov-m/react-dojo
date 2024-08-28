import { Eraser, Bold, Italic, Underline } from "lucide-react";
import style from "../email-editor/EmailEditor.module.sass";

export default function EmailEditor() {
  return (
    <div>
      <h1>Email editor</h1>

      <div className={style.card}>
        <div className={style.editor}>hey lorem ipsum</div>
        <div className={style.actions}>
          <div className={style.tools}>
            <button className={style.icon}>
              <Eraser />
            </button>
            <button className={style.icon}>
              <Bold />
            </button>
            <button className={style.icon}>
              <Italic />
            </button>
            <button className={style.icon}>
              <Underline />
            </button>
          </div>
          <button className={style.sendButton}>Send now</button>
        </div>
      </div>
    </div>
  );
}
