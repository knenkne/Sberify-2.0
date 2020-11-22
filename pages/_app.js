import useDarkMode from "use-dark-mode";
import { globalStyles } from "../shared/styles";

const App = ({ Component, pageProps }) => {
  useDarkMode();

  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

export default App;
