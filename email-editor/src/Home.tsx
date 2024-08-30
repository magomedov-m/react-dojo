import EmailEditor from "./components/email-editor/EmailEditor";

export default function Home() {
  return (
    <div style={{ display: "flex", gridTemplateColumns: "1fr .6fr", padding: '1.5 rem', marginLeft: '40%' }}>
      <EmailEditor />
    </div>
  );
}
