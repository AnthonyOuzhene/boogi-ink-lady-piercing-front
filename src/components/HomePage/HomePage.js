// Import CSS
import './styles.scss';
import '../../assets/fonts/Stayola.ttf';

// Import du caroussel
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

// import Images
import boogiinklogo from './images/boogiinklogo.jpg';
import ladypiercinglogo from './images/ladypiercinglogo.jpg';

const HomePage = () => (
    <div>


        <div className='presentation-salon'>
            <h1 className='welcome'>Bienvenue chez Boog'ink et Lady Piercing</h1>

            <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur.</p>
        </div>

        <div className='logos'>
            <div className='boogi-ink-logo'>
                <h2 className='boogi-ink-logo-fonts'>BoOgi 'InK Tattoo</h2>
                <img src={boogiinklogo} alt="tattoo" />
            </div>

            <div className='lady-piercing-logo'>
                <h2 className='lady-piercing-logo-fonts'>Lady Piercing</h2>
                <img src={ladypiercinglogo} alt="piercing" />
            </div>
        </div>

        <h2>Découvrez nos réalisations</h2>
        <h3>coucou</h3>
        {/* <GoogleMap /> */}

        <ImageSlider slides={SliderData} />

    </div>

);

export default HomePage;