import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// ! NOT BEING USING NOW, MORE RESEARCH ON GATSBY-IMAGE NEEDED
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "header-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1203) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fixedHeaderImage: file(relativePath: { eq: "header-image.png" }) {
        childImageSharp {
          fixed(width: 1203, height: 631) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fluid={data.headerImage.childImageSharp.fluid} />;
};

export default Image;
