import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/54005646?s=460&u=f5600927c1569e0eb7bc2cbdc386961f5c759e6e&v=4" alt="Avatar" />
        <div>
          <strong>Jonathan Marques</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto
          <br /><br />
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
export default TeacherItem