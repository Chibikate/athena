import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer";
import "animate.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function MandiWebLayout({ children }) {
  return (
    <section className={`${openSans.className}`}>
      {children}
      <Footer />
    </section>
  );
}
