// Import CSS
import './styles.scss';
import '../../assets/fonts/Stayola.ttf';

// Import du caroussel
import Slider from './Slider';
import { SliderData } from './SliderData';

// import Images
import boogiinklogo from './images/boogi_ink-logo.png';
import ladypiercinglogo from './images/lady-piercing-logo.png';

const HomePage = () => (
    <div>

        <div>
            <div className='presentation-salon'>
                <h1 className='welcome'>Bienvenue chez Boog'ink et Lady Piercing !</h1>

                <div className='salon-description'>
                    <p>Nous sommes un salon de tatouage et de piercing situé à Saint-Malo, en Bretagne. Nous sommes spécialisés dans les tatouages et les piercings de qualité. Nous vous proposons un large choix de tatouages et de piercings, ainsi que des bijoux de qualité.
                    </p>

                    <p>Notre équipe est composée d'un tatoueur et d'une pierceurse professionnels, qui vous conseilleront et vous guideront dans votre choix. Nous vous accueillons dans un cadre chaleureux et convivial, dans le respect des normes sanitaires et de sécurité.</p>

                    <p>Nous sommes ouverts du mardi au samedi de 12h à 19h. Nous sommes situés au 2 rue de la République, à Saint-Malo.</p>

                    <p>Vous pouvez également nous suivre sur Facebook et Instagram pour découvrir nos dernières réalisations.</p>

                    <p>À bientôt !</p>
                </div>

                <a href="/contact">
                    < div >
                        <p className="redirection-contact">Parlez-nous de votre projet</p>
                    </div>
                </a>
            </div>


            <div className='logos'>
                <div className='boogi-ink-logo'>
                    <h2 className='boogi-ink-logo-fonts'>BoOgi 'InK Tattoo</h2>
                    <a href="/atelier-tatouage">
                        <img src={boogiinklogo} className="boogiink-image" alt="tattoo" />
                    </a>
                </div>

                <div className='lady-piercing-logo'>
                    <h2 className='lady-piercing-logo-fonts'>Lady Piercing</h2>
                    <a href="/espace-piercing">
                        <img className="lady-piercing-image" src={ladypiercinglogo} alt="piercing" />
                    </a>
                </div>
            </div>
        </div>

        <h2 className='slider-title'>Découvrez nos réalisations</h2>

        <Slider slides={SliderData} />
    </div>


);

export default HomePage;