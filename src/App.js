import "./App.css";
import Profile from "./components/Profile";
import BmiForm from "./components/BmiForm";
import Chart from "./components/Chart";
import Diet from "./components/Diet";
import { FirebaseLoginProvider } from "./contexts/FirebaseLoginContext";
import { BmiProvider } from "./contexts/BmiContext";

function App() {
  return (
    <FirebaseLoginProvider>
      <BmiProvider>
        <div className="App w-screen min-h-screen sm:p-16 p-6 font-sans bg-slate-100">
          <Profile />
          <div className="flex sm:flex-row flex-col items-center justify-center sm:mt-8 mt-2">
            <BmiForm />
            <Chart />
          </div>
          <Diet />
          <div className="font-bold mb-8 mt-4">
            Coded by{" "}
            <a className="text-red-500" href="https://github.com/tahacagrimen">
              Taha Cagri Men
            </a>
          </div>
        </div>
      </BmiProvider>
    </FirebaseLoginProvider>
  );
}

export default App;
