import EmailEditor from "./components/email-editor/EmailEditor";
import EmailList from "./components/email-list/EmailList";

export default function Home() {
  return (
    <div style={{ display: "flex", gridTemplateColumns: "1fr .6fr", padding: '1.5 rem' }}>
      <EmailEditor />
      {/* <EmailList /> */}
    </div>
  );
}
