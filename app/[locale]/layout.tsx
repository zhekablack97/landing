import "@/public/scss/styles.scss";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";

export default async function LocaleLayout({
   children,
   params: { locale },
}: any) {
   let messages;
   try {
      messages = (await import(`../../messages/${locale}.json`)).default;
   } catch (error) {
      notFound();
   }

   return (
      <html lang={locale}>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
