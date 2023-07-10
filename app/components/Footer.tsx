import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple gap-8 px-8 py-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] text-center text-white">
      <div>
        <p>Sitio Web diseñado por el Área Sistemas de la Municipalidad de Malargüe, Ciudad Amigable</p>
      </div>
      <div>
        <h4 className=" uppercase font-bold text-xl">Nuestras redes</h4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h4 className=" uppercase font-bold text-xl">Buscar</h4>
        <form>
          <input type="text" placeholder="Buscar" />
        </form>
      </div>
      <div >
        <Image src="https://turismo.malargue.gov.ar/newstart/wp-content/uploads/2017/08/marca-malargue-chica.png" alt="logo-footer" height={200} width={200} />
      </div>
    </footer>
  )
}