import Link from "next/link"

export default function Header({ children }: {
  children?: React.ReactNode
}) {
  return (
    <>
      <header>
        <Link href="/">
          <img src="/favicon.ico" alt="logo do site" />
        </Link>
      </header>
      {children}
    </>
  );
}