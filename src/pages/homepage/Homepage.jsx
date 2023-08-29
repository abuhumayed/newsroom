import React from 'react'
import { Spotlight } from '../../components/Spotlight'
import { ArticleCard } from '../../components/ArticleCard'
import { StyledContainer } from './homepage.style'


function Homepage(props) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        
        <div className="news-container">
          <div className="articles-section">
            <ArticleCard />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Homepage;
