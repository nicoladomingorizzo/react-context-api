
export default function Footer() {
    return (
        <footer>
            <div className="bg-black text-white py-3">
                <h3 className="text-center my-5">LINK UTILI</h3>
                <div className="d-flex flex-wrap justify-content-around align-items-center my-5 mx-3 text-center">

                    <ul className="list-unstyled">
                        <li>
                            <h4>Chi Siamo</h4>
                        </li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Missione</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Visione </a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Il nostro team</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Storia</a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><h4>Policy</h4></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Privacy Policy </a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Cookie Policy</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Termini di servizio</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Politica di accessibilità </a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><h4>Link Utili</h4></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Assistenza clienti</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Lavora con noi</a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Blog aziendale </a></li>
                        <li><a className=' link-underline link-underline-opacity-0 text-white' href="#">Contatti </a></li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}