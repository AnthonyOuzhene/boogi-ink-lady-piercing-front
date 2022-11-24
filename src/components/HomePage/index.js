// Import CSS
import './styles.scss';
import '../../assets/fonts/Stayola.ttf';

// Import du caroussel
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

// import Images
import boogiinklogo from './images/boogiinklogo.jpg';
import ladypiercinglogo from './images/ladypiercinglogo.jpg';
import GoogleMap from './GoogleMap';

const HomePage = () => (
    <div>
        <ImageSlider slides={SliderData}/>

    <div className='logos'>
        <div className='boogi-ink-logo'>
        <h1 className='boogi-ink-logo-fonts'>BoOgi 'InK Tattoo</h1>
        <img src={boogiinklogo} alt="tattoo"/>
        </div>

        <div className='lady-piercing-logo'>
        <h1 className='lady-piercing-logo-fonts'>Lady Piercing</h1>
        <img src={ladypiercinglogo} alt="piercing"/>
        </div>
    </div>

    <div className='presentation-salon'>
        <h2>Présentation du salon</h2>
        <p>Lorem ipsum dolor sit amet. Eum ratione soluta non reprehenderit consequatur vel veniam quia non obcaecati vitae qui labore aspernatur. Nam totam cupiditate et voluptates temporibus sit mollitia alias non optio soluta eos eligendi autem. Non voluptatem quia est cumque amet et exercitationem quia ut excepturi exercitationem et deleniti fugit. A animi nulla non ipsa porro et culpa consectetur.</p>
    </div>

    <div className='coordonnees-salon'>
        <h2>Coordonnées du salon</h2>
        <GoogleMap />
    </div>
    </div>
    
); 

export default HomePage;