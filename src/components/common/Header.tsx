import Link from "next/link"
import { Merriweather_Sans } from "next/font/google"

const merri = Merriweather_Sans({
  weight: "300",
  subsets: ["latin"]
});

export default function Header({ children }: {
  children?: React.ReactNode
}) {
  return (
    <>
      <header>
        <div>
          <h1 className="xingusolar">
            <Link href="/">Xingu Solar</Link>
          </h1>
        </div>
      </header>
      <html lang="pt-br">
        <body
          className={merri.className}
        >
          {children}
        </body>
      </html>
    </>
  );
}