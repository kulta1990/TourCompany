import React from 'react'
import Title from './Title'
//azert importaljuk kapcsos zarojelben mert nem component.js hanem egy masik js fajlban adat/map/tomb/valtozo neve
import { article } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">

      <Title title="our" subtitle="services" />

      {/* <div className="section-title">
      <h2>our <span>services</span></h2>
  </div>*/}


      <div className="section-center services-center">

        {article.map((tartalom) => {
          return (
            <article className="service">
              <span className="service-icon"><i className={tartalom.icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{tartalom.h4}</h4>
                <p className="service-text">
                  {tartalom.p}
                </p>
              </div>
            </article>
          );
        })}



        {/* ezeket mind ki tudtam valtani a fentebbi fuggvennyel mivel 3x ismetlodik
          <article className="service">
          <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
        */}

      </div>
    </section>
  )
}

export default Services