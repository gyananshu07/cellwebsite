//Past Recruiting Organisations Caraousel
import React from "react";
import './OrgsCaraousal.css';
import testimo from "./Testimonial.png";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const OrgsCaraousal =()=>{
    const [width, setWidth] = useState(0);
    const carousel1 = useRef();

    useEffect(() => {
        setWidth(carousel1.current.scrollWidth - carousel1.current.offsetWidth);
    }, []);

    return(
    <>
    <div className="Testimonials">
        <h2>Testimonials From Past Recruiters</h2>
        <div className="underline-head"></div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={testimo} className="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={testimo} className="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={testimo} className="d-block w-100" />
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="Testimonials">
        <h2>Past Recruiters</h2>
        <div className="underline-head2"></div>
        </div>
        <motion.div ref={carousel1} className="carousel1">
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-crousel">
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218957/Client-logo/Wipro_logo_oprttd.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218957/Client-logo/Zensar_Technologies_logo_nqhohn.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/tech_mahindra_logo_xf1mkp.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/Walmart_logo_bf1enm.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/planetspark_logo_li6ybb.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/TCS_logo_joqiax.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/TCS_logo_joqiax.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/practo_logo_okgjya.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/practo_logo_okgjya.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218956/Client-logo/NIIT_logo_c3x2jv.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/Nuclei_logo_tz6fpx.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/nagarro_logo_vustw8.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/myntra_logo_aam8qx.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/lumiq_logo_af8wx7.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/Lowes_Companies_Logo_vsw08c.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/microsoft_logo_bpxmjm.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218955/Client-logo/L_T_logo_u5lyv9.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/juspay_logo_yx89w8.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/Indiamart_logo_swaovg.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/jkcement_logo_h50wyf.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/jaro_rueru3.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/intellipaat_logo_yjve4t.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218954/Client-logo/Infosys_logo_jxsvmr.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/Ericsson_logo_jpo0tj.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/hummingwave_logo_i9cmjw.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/HCL_Technologies_logo_a1kiow.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/GlobalLogic_logo_bpffuq.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/hexaview_logo_i5dinx.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/Extramarks_Logo_uptncz.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218953/Client-logo/delhivery_logo_hq2quh.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/de_shaw_logo_s1cisj.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/Dentsu_logo_cyirvw.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/Coforge-Logo_k4hfyb.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/cognizant_logo_fjcfox.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/cognizant_logo_fjcfox.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/Capgemini_logo_i0ina8.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218952/Client-logo/Aditya_Birla_Group_Logo_a1tqgn.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218951/Client-logo/amazon_logo_yb1kpm.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218951/Client-logo/BNY_Mellon_logo_yuuwmq.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218951/Client-logo/appirio_logo_hj3tkc.jpg"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218951/Client-logo/BYJU_S_logo_upmbnb.png"></img>
                </motion.div>
                <motion.div className="item">
                    <img src="https://res.cloudinary.com/vaish1101/image/upload/v1658218951/Client-logo/Accenture_logo_qxznbt.png"></img>
                </motion.div>
            </motion.div>
        </motion.div>
  </div>

  <div className="btns-invitation">
          <div className="btn-invitation">
            <button className="downloadBrochure-button">
              <i className="fa fa-download" aria-hidden="true">
                {" "}
              </i>
              <span>
                {" "}
                &nbsp;{" "}
                <a
                  href="https://drive.google.com/file/d/1H2UVnWmQmS-wATsCzgiXyqNX31WDKqw1/view?usp=drivesdk"
                  target="_"
                >
                  <strong>Placement Brochure</strong>
                </a>
              </span>
            </button>
          </div>
          <div className="btn-invitation">
            <button className="mail-button">
              <a href="mailto:tnp@mmmut.ac.in">
                <strong>Mail To: tnp@mmmut.ac.in</strong>
              </a>
            </button>
          </div>
        </div>
        <br/>
        <br />
        <Footer />
    </>
    )
}

export default OrgsCaraousal;