import "../../styles/globals.sass";
import { Montserrat } from "next/font/google";
import { Providers } from "@/context/context";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </Providers>
  );
}
