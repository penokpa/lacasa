import React from "react";
import Overlay from "../Overlay";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Typography, { TagType } from "../Typography";
import { StyledDiv } from "./style";

type Props = {
  bgImage: string;
  title?: string;
  description?: string;
  as?: string;
};

const SectionBgImage = ({ bgImage, title, description, as = "h1" }: Props) => {
  return (
    <StyledDiv className="section-image-wrapper" $bgImage={bgImage}>
      <div className="our-story-title">
                <Typography as="h2" className="section-title">
                 About Us
      
                </Typography>
                <div className="background-image-container">
                  <Typography as="p" className="motto">
                    Not just a trend | A tradition since 1967
                  </Typography>
                </div>
        </div>

      {/* <Overlay />
      <Container fluid>
        <Row>
          <Col>
            <div className="menu-title-content">
              <Typography as={as as TagType} className="section-title">
                {title}
              </Typography>
              {description && <Typography as="h5">{description}</Typography>}
            </div>
          </Col>
        </Row>
      </Container> */}
    </StyledDiv>
  );
};

export default SectionBgImage;
