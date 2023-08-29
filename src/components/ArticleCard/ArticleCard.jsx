import React from 'react'
import { StyledContainer } from './articleCard.styles'
import { ThumbsUp as Like,CommentChatMessageAlt as Comment, ArrowRight } from 'react-basicons'
import DarknetImg from "../../assets/darknet.jpg"

function ArticleCard(props) {
  return (
    <StyledContainer>
        <div className="article-card">
                      <img src={DarknetImg} alt="" />
                      <div className="title">21 Early Black Friday Deals: Electric Scooters, Binoculars, and Camera Bags</div>
                      <div className="divider"/>
                      <div className="description">Black Friday has taken over the month of November. You can stock up on gifts for your family now (or gadgets for yourself).</div>
                      <div className="data-section">
                          <div className="like-icon vertical-centred">
                              <Like size={16}/>
                              <span className='like-icon'>165</span>
                          </div>
                          <div className="comments-icon vertical-centred">
                              <Comment size={16}/>
                              <span >16</span>
                          </div>
                          <div className="more vertical-centred">
                            
                      <span>More....</span>
                      <ArrowRight size={16}/>
                          </div>

                      </div>
                  </div>
    </StyledContainer>
  )
}

export default ArticleCard
