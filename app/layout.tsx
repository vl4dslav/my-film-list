import Header from "./components/Header";
import Provider from "./Provider";
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
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
