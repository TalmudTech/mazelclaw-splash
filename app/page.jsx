export default function Page() {
  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, background: "#000" }}>
      <iframe
        src="/site/index.html"
        title="MazelClaw Splash"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </main>
  );
}
