import React from 'react';

const Home = ({name, paragraph, authorImage}) => {
    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
                <h1> 
                    Hello, I'm <br/>
                    <span>{name}..</span>
                    <br></br>
                    <span>Sutrave...</span>
                </h1>
                <p id = 'head'>{paragraph}</p>
                <p id = 'head2'>I enjoy learning different technologies and helping improve the efficiency of organizations whenever possible.</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Author"/>
                <div className="bg"/>
            </div>
        </div>
    </div>
    )
}

export default Home;
