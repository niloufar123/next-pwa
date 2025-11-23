import '@/app/ui/global.css'
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    { path: "./fonts/PelakFA-Medium.ttf", weight: "400" },
    { path: "./fonts/PelakFA-Bold.ttf", weight: "500" },
    { path: "./fonts/credit_card_number.ttf", weight: "700" },
  ],
  variable: "--font-myfont",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.variable}>
      <body>{children}</body>
    </html>
  );
}
