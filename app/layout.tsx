import Header from "./components/Header";
import Provider from "./Provider";
import "./globals.css";
import SearchBox from "./components/SearchBox";

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
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
