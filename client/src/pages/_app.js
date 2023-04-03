import { AuthProviders } from "@/context/context";
import "../../styles/globals.sass";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }) {
  return (
    <AuthProviders>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </AuthProviders>
  );
}
