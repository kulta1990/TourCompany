import React from 'react';
/*kepek importalasa ehhez a componenshez a kepek mappabol */
import images from '../images/about.jpeg'
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">

      <Title title="about" subtitle="us" />

      {/* <div className="section-title">
      <h2>about <span>us</span></h2>
    </div>
    
    ehelyett van a prop a title.js ben. ezt azert  csinaltuk mert 3 egyforma h2 tag van
    ezert csinaltunk egy title.js komponenst 
  */}
      <div className="section-center about-center">
        <div className="about-img">
          <img
            //a import images elnevezes ide kerül bele hiszen referenciakent hivatkozok ra. 
            src={images}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About