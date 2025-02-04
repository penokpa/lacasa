import React from "react";
import { StyledSection } from "./style";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Button from "../Button";
import settings from "content/settings/settings.json";
import Typography from "../Typography";

const OurStory = () => {
  // const { story_content = "", story_sub_description = "" } = settings || {};
  return (
    <StyledSection>
      <Container fluid>
        <Row>
          <Col>
            <div className="our-story-wrapper" style={{position:"relative"}}>
             
             
                <Typography as="p">
                La Casa Restaurant opened its doors in 1967 and blossomed into a Sonoma landmark known for its fine Mexican food, great margaritas, fun and entertainment. Set in the Wine Country, this lively restaurant has been family owned and operated since the day it opened with that special quality that makes it a favorite gathering place for visitors and locals alike.
                </Typography>
                <Typography as="p">
                During the summer you are likely to find a Latin soloist strolling through the dining room enchanting guests with traditional music. La Casa also features garden patio dining set in the charming El Paseo courtyard reminiscent of old Mexico.
                </Typography>
                {/* {story_sub_description && (
                  <Typography as="h6" className="section-title-helper">
                    {story_sub_description}
                  </Typography>
                )} */}
              </div>

              {/* {story_content && <Typography as="p">{story_content}</Typography>} */}
            
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default OurStory;
