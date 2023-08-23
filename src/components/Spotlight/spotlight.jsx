import React from 'react'
import { ModelDiamond as Icon } from "react-basicons";
import { StyledContainer} from './spotlight.style';

function Spotlight() {
    return (
        <StyledContainer>
            <div className="spotlight-section">
                <div className="title">NEWS</div>
                <p className= "description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, magnam aut. Unde eos ipsam quidem id officia quisquam pariatur facere esse perferendis repellat, repellendus placeat, porro omnis hic ex corrupti.</p>
                <div className="dividers-container">
                    <div className="divider" />
                    <div className="icon-container"><Icon/></div>
                    <div className="divider" />
                </div>              
            </div> 
        </StyledContainer>
    );
}

export default Spotlight
