import "./globals.css";

export const metadata = {
  title: "Portfolio Krzysztof Zalewski",
  description:
    "Strona portfolio, wykonana w React przy pomocy Next.js 14, Tailwind CSS oraz Shadcn-ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
