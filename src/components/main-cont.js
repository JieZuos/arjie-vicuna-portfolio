import React, { useEffect, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Abt from './abt';
import TiltImage from "./imgTilt";
import { Tilt } from 'react-tilt';
import { PowerGlitch } from 'powerglitch';
import Works from './works';

// Initialize ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Glitch = () => {
    useEffect(() => {
      PowerGlitch.glitch('.glitching', {
        "playMode": "always",
        "createContainers": true,
        "hideOverflow": true,
        "timing": {
          "duration": 4000,
          "easing": "ease-in-out"
        },
        "glitchTimeSpan": {
          "start": 0.5,
          "end": 0.7
        },
        "shake": {
          "velocity": 20,
          "amplitudeX": 0.41,
          "amplitudeY": 0.34
        },
        "slice": {
          "count": 6,
          "velocity": 15,
          "minHeight": 0.02,
          "maxHeight": 0.15,
          "hueRotate": true
        },
        "pulse": false
      });
    }, []);
  
    return (
      <>
      </>
    );
  };
const RevealAnimation = () => {
    const animateFrom = useCallback((elem, direction) => {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains('gs_reveal_fromLeft')) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains('gs_reveal_fromRight')) {
            x = 100;
            y = 0;
        }
        elem.style.transform = `translate(${x}px, ${y}px)`;
        elem.style.opacity = '0';
        gsap.fromTo(
            elem,
            { x: x, y: y, autoAlpha: 0 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: 'expo',
                overwrite: 'auto',
            }
        );
    }, []);

    const hide = useCallback((elem) => {
        gsap.set(elem, { autoAlpha: 0 });
    }, []);

    useEffect(() => {
        // Animation setup
        gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            const scrollTrigger = ScrollTrigger.create({
                trigger: elem,
                onEnter: function () {
                    animateFrom(elem);
                },
                onEnterBack: function () {
                    animateFrom(elem, -1);
                },
                onLeave: function () {
                    hide(elem);
                }, // assure that the element is hidden when scrolled out of view
            });

            // Cleanup function for ScrollTrigger on unmount
            return () => {
                scrollTrigger.kill();
            };
        });
    }, [animateFrom, hide]);


    return (
        <>
        <Glitch />
            <div className="cInnerContent" style={{marginTop: 50}}>
                {/* <Abt /> */}

                <div className="features">
                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className='glitching'>
                            <model-viewer 
                                src="/assets/my-model.glb" 
                                ar 
                                shadow-intensity="1" 
                                camera-controls 
                                // touch-action="pan-y" 
                                style={{height: 500, width: 500}}
                                camera-orbit="20deg 80deg 7.5m" 
                                camera-target="0m 3.2m 0m" 
                                  
                                ></model-viewer>
                            </div>
                        </div>

                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">
                                
                                About Me
                            </h2>
                            <p className="gs_reveal">
                            I am a recent graduate from University of the Assumption with a Bachelor's Degree in Information Technology.I am based in Philippines, San Fernando, Pampanga. My interest lies in Web Development and Graphics Design that sparked during my 3rd year college. I am passionate about Web Development and Graphics Design. I have always been interested in creating things, and I love the challenge of taking an idea and bringing it to life. I am also a strong believer in the power of technology that ideas can turn into reality. In my spare time, I enjoy playing video games, hiking, and spending time with my friends and family. I am also an avid learner and I am always looking for new ways to improve my skills.</p>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>



            <div className="cInnerContent">
                <Abt />

                <div className="features">
                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div>
                                <Tilt options={TiltImage} style={{ height: 500, width: 500 }}>
                                    <img
                                        width="479"
                                        src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
                                        alt="Image 1"
                                    />
                                    {/* Creadits to the owner of the image */}
                                </Tilt>
                            </div>
                        </div>

                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">
                                Web Development
                            </h2>
                            <p className="gs_reveal">
                                I'm passionate about using my skills to create websites that make a difference. I developed a passion for creating websites that are both functional and visually appealing. I'm proficient in a variety of web development technologies, including HTML, CSS, JavaScript, PHP, and MySQL. I'm also familiar with a number of popular web development frameworks, such as Laravel and React. In my spare time, I enjoy working on personal projects that allow me to explore new technologies and techniques. Here are some web apps that i made:<br /><br />
                                <ul>
                                    <li>Journex - A simple web app with personal journals</li>
                                    <li>ShopAR - Ecommerce platform with integrated Augmented Reality</li>
                                    <li>Event and Raffle App - A web app that can create an event and has a raffle system for every event</li>
                                    <li>Simple Chat App</li>
                                </ul>
                                 <br /> For demo of the application you can freely contact me through email.
                            </p>
                        </div>
                    </div>

                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="ipsGrid_span7 ipsType_right">
                            <h2 className="heading_large gs_reveal">3D Modeling</h2>
                            <p className="gs_reveal">In my spare time, I use Blender 3D to create 3D models based on my inspirations or just to kill the time. I find it to be a relaxing and rewarding hobby that allows me to express my creativity and problem-solving skills. I've always been fascinated by the world around me, and I love being able to bring my imagination to life in a digital format.</p>
                        </div>

                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                            <div>
                                <Tilt options={TiltImage} style={{ height: 400, width: 500 }}>
                                    <img
                                        width="479"
                                        src="/assets/Alien-Orb.gif"
                                        alt="Image 1"
                                    />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                    
                    <br /><br />
                </div>
            </div>
            <div className="cInnerContent" style={{marginTop: 50}}>
            <h2 className='glitching header-section gs_reveal ipsType_center' data-value="Passions">My Works</h2>

            <div className="features">
                <Works />
            </div>
                

                
            </div>
        </>
    );
};

export default RevealAnimation;
