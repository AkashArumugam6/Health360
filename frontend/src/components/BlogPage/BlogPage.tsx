import React from "react"
import "../LandingPage/Landing.css"
import "./BlogPage.css"
import Header from "./Header"
import Body from "./Body"
import Footer from "../LandingPage/Footer"
import BlogFooter from "./BlogFooter"
import BlogHeading from "./BlogHeading"
import Main from "./Main"


const Blog = () => {
    return (
        <div className="blogPage">
            <Header />
            <Main />
            <BlogFooter />
        </div>
    )
}

export default Blog