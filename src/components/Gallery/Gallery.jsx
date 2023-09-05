import './Gallery.css'

const Gallery = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="fenetre__coulissante">
                <div className="gallery">
                            <section id="portfolio">
                                <div className="row portfolio-content">
                                    <div id="folio-wrap" className="bricks-wrapper">
                                        <div className="brick folio-item">
                                            <a 
                                                data-fancybox = "gallery1"
                                                href="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_4788.JPG" 
                                            >
                                                <img src="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_4788.JPG" alt="Skaterboy" />
                                            </a>
                                        </div>
                                        <div className="brick folio-item">
                                            <a 
                                                data-fancybox = "gallery1"
                                                href="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_4805-1.jpg" 
                                            >
                                                <img src="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_4805-1.jpg" alt="Skaterboy" />
                                            </a>
                                        </div>
                                        <div className="brick folio-item">
                                            <a 
                                                data-fancybox = "gallery1"
                                                href="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_7673.jpg" 
                                            >
                                                <img src="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_7673.jpg" alt="Skaterboy" />
                                            </a>
                                        </div>
                                        <div className="brick folio-item">
                                            <a 
                                                data-fancybox = "gallery1"
                                                href="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_7927-1.jpg" 
                                            >
                                                <img src="./images/redim_FENÊTRES/redim_FENÊTRE_COULISSANTES/_MG_7927-1.jpg" alt="Skaterboy" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Gallery