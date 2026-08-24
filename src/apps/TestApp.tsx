import AppWindow from "../components/AppWindow";

interface TestAppProps {
  onBack: () => void;
}

export default function TestApp({
  onBack,
}: TestAppProps) {
  return (
    <AppWindow
      title="Hello"
      onBack={onBack}
    >
      <div className="test-app">
        <div className="test-app-icon">
          ✨
        </div>

        <h1>
          It works.
        </h1>

        <p>
          You just opened your first
          little app.
        </p>
      </div>
    </AppWindow>
  );
}