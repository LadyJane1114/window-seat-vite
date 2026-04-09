import {Carousel} from "react-bootstrap";

const HeroBanner = () => {
    return (
        <div className="hero-wrapper">
            <Carousel
                controls={false}
                indicators={false}
                pause={false}
                touch={false}
                keyboard={false}
                interval={6000}
                fade>
                <Carousel.Item>
                    <picture>
                        <source media="(max-width:768px)" srcSet="src/assets/hero/WindowSeat_primary_logo_alt_text.png"/>
                        <img src="src/assets/hero/WindowSeat_hero_dreams.png" alt="doll sitting in window with text that says Made for Daydreamers" className="hero-image"/>
                    </picture>
                </Carousel.Item>

                <Carousel.Item>
                    <picture>
                        <source media="(max-width:768px)" srcSet="src/assets/hero/WindowSeat_tertiary_logo_alt_text.png"/>
                        <img src="src/assets/hero/WindowSeat_hero_free.png" alt="doll sitting in window with text that says Where Imagination Runs Free" className="hero-image"/>
                    </picture>
                </Carousel.Item>

                <Carousel.Item>
                    <picture>
                        <source media="(max-width:768px)" srcSet="src/assets/hero/WindowSeat_secondary_logo_alt_text.png"/>
                        <img src="src/assets/hero/WindowSeat_hero_write.png" alt="doll sitting in window with text that says Made for Daydreamers" className="hero-image"/>
                    </picture>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeroBanner;