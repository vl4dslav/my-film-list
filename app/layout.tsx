import "./globals.css";

export const metadata = {
  title: "MyFilmList",
  description: "This is my flim list website.",
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
