import { useTranslations } from "next-intl";
import LandingHeader from "@/components/Header/LandingHeader";
import BodyMiddle from "@/components/Body/BodyMiddle";
import Footer from "@/components/Footer/Footer";

export default function Home() {
   const t = useTranslations("Index");

   return (
      <>
         <LandingHeader />
         <BodyMiddle />
         <Footer />
      </>
   );
}
