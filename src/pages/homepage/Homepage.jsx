import React from 'react'
import { Spotlight } from '../../components/Spotlight'
import { ArticleCard } from '../../components/ArticleCard'
import { StyledContainer } from './homepage.style'

import articles from "../../data/articles.json"
import QuickInfoCard from '../../components/QuickInfoCard/quickInfoCard'
import quick from "../../data/quick.json"

function Homepage(props) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        
        <div className="news-container">
          <div className="articles-section">
            {articles.map(({urlToImage,title,description}) => (
              <ArticleCard
                img={urlToImage}
                title={title}
                description = {description}
              />
            )
            ) }
           
            
          </div>
          <div className="quick-info-section">
            {quick.map(({title,description})=> (
              <QuickInfoCard
              title={title}
              description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Homepage;
