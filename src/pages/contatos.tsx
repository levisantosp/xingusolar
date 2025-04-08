import Header from "@/components/common/Header"
import "../styles/globals.css"

export default function Contatos() {
  return (
    <>
      <Header/>
      <title>Contatos | Xingu Solar</title>
      <link rel="icon" href="/logo.svg" />
      <div>
        <h1>
          Contatos
        </h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:xingusolar13@gmail.com" target="_blank">xingusolar13@gmail.com</a>
            </div>
          </li>
          <li>
            <span>WhatsApp</span>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5593991185178" target="_blank">93 99118-5178</a>
            </div>
          </li>
          <li>
            <span>Instagram</span>
            <div>
              <a href="https://www.instagram.com/xingu_solar/" target="_blank">@xingu_solar</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}