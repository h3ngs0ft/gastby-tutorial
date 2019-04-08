/* eslint-disable */
import React from 'react'
import Img from "gatsby-image"
import Iu from "../images/iu/person.jpg"
import { StaticQuery,graphql } from "gatsby"

const getIu = graphql`
{
    file(relativePath:{eq:"iu/person.jpg"}) {
        childImageSharp {
            fluid(maxWidth:300) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`
export default function iu() {
    return (
        <StaticQuery  
            query={getIu} 
            render={data => {
                return (
                    <div style={{maxWidth:'300px'}}>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                )
            }} 
        />
    )
}