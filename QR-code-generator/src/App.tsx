import QRCodeGenerator from "./components/QRCodeGenerator";
import "./App.css";
import { QRCodeGeneratorProvider } from "./contexts/QRCodeGeneratorContext";

export default function App() {
  return (
    <QRCodeGeneratorProvider>
      <QRCodeGenerator />
    </QRCodeGeneratorProvider>
  );
}
