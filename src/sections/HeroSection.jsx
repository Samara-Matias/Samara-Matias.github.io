import { ChevronDown } from 'lucide-react';

function HeroSection(){
    return (
        <section id="hero_section">
           <div className="hero_section_content">
                <h1>oxi?!</h1>
                <div className="hero_section_bottom">
                    <p>arraste p/ descobrir</p>
                    <ChevronDown size={44} className='seta' />
                </div>
           </div>
        </section>
    )
}

export default HeroSection;