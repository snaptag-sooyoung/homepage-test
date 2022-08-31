import "./reset.css";
import "./App.css";
import { UAParser } from "ua-parser-js";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { storage } from "./firebase";
import { useCallback } from "react";

function App() {
  const parser = new UAParser();
  const result = parser.getResult();
  console.log(result, "result");

  const storage1 = storage;
  const gsReference = ref(storage1, "gs://labcode-program.appspot.com/mac(arm)/Labcode-2.1.0-arm64.dmg");

  // const downloadFile = () => {
  //   getDownloadURL(ref(storage1, "/mac(arm)/Labcode-2.1.0-arm64.dmg"))
  //     .then((url) => {
  //       // `url` is the download URL for 'images/stars.jpg'

  //       // This can be downloaded directly:
  //       console.log(url);
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = "blob";
  //       xhr.onload = (event) => {
  //         const blob = xhr.response;
  //         console.log(blob);
  //       };
  //       xhr.open("GET", url);
  //       xhr.send();

  //       // Or inserted into an <img> element
  //       // const img = document.getElementById('myimg');
  //       // img.setAttribute('src', url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // };

  const downloadFile = useCallback((os: string | undefined) => {
    let fileType =
      os === "Windows"
        ? "/windows/Labcode Setup 2.1.0.exe"
        : os === undefined
        ? "/mac(arm)/Labcode-2.1.0-arm64.dm"
        : "/mac(intel)/Labcode-2.1.0.dmg";
    getDownloadURL(ref(storage1, "/mac(arm)/Labcode-2.1.0-arm64.dmg")).then((url) => {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = url;
      link.click();
      link.remove();
    });
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={() => downloadFile(result.os.name)}>{result.os.name} 다운로드</button>
    </div>
  );
}

export default App;
