import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "gsap/ScrollTrigger";
import { Tilt } from 'react-tilt';
import TiltImage from "./imgTilt";


const GalleryComponent = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const btnList = document.querySelector(".btn-list");
    const gallery = document.querySelector(".gallery");
    const items = document.querySelectorAll(".item");

    const anim = gsap.from(".item", { scale: 0.4, opacity: 0, duration: 0.4, paused: true });

    // Animation starts when the component is mounted
    anim.restart();

    btnList.addEventListener("click", function (e) {
      // SELECT THE TARGET BTN
      const target = e.target.closest(".btn");
      if (!target) return;
      // TOGGLE THE ACTIVE CLASS
      document.querySelectorAll(".btn").forEach((el) => el.classList.remove("active"));
      target.classList.add("active");
      // TRIGGER GSAP ANIMATION ON GALLERY ITEMS
      anim.restart();
      // FILTERING THE GALLERY ITEMS
      const cat = target.className.split(" ")[1];
      items.forEach(function (el) {
        const dataName = el.dataset.list;
        if (cat !== dataName) {
          if (cat === "all") {
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        } else {
          el.style.display = "block";
        }
      });
    });

    // Add event listeners to open and close the modal
    items.forEach((item) => {
      item.addEventListener("click", () => {
        setModalImage(item.querySelector("img").src);
      });
    });

    document.addEventListener("keydown", handleModalClose);

    return () => {
      document.removeEventListener("keydown", handleModalClose);
    };
  }, []);

  const handleModalClose = (e) => {
    if (e.key === "Escape") {
      setModalImage(null);
    }
  };

  return (
    <section>
      <div className="btn-list">
        <div className="btn all active">All</div>
        <div className="btn 3d">3D Models</div>
        <div className="btn post">Poster</div>
        <div className="btn ui">UI</div>
      </div>
      <br />
      <p className="text-center">Click the images</p>
      <div className="gallery">
        <div className="item" data-list="3d">
        <Tilt options={TiltImage} >
          <img src="/assets/images/3d/flower.jpg" alt="3d" />
        </Tilt>
        </div>
        <div class="item" data-list="post">
        <Tilt options={TiltImage} >
            <img src="/assets/images/poster/Sim Rig Racing Poster-02.png" />
        </Tilt>
        </div>
        <div class="item" data-list="post">
        <Tilt options={TiltImage} >
            <img src="/assets/images/poster/Sim Rig Racing Poster-03.png" />
        </Tilt>
        </div>
        <div class="item" data-list="post">
        <Tilt options={TiltImage} >
            <img src="/assets/images/poster/msc-fst.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/aliend-orb-background.png" />
        </Tilt>
        </div>
        <div class="item" data-list="post">
        <Tilt options={TiltImage} >
            <img src="/assets/images/poster/sale.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/cubone 2.0.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/lanscape.png" />
        </Tilt>
        </div>
        <div class="item" data-list="post">
        <Tilt options={TiltImage} >
            <img src="/assets/images/poster/MUSIC-MUSIC.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/lego activity1.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/Pochita.png" />
        </Tilt>
        </div>
        <div class="item" data-list="3d">
        <Tilt options={TiltImage} >
            <img src="/assets/images/3d/Midterms Examination-Final.png" />
        </Tilt>
        </div>
        <div className="item" data-list="3d">
        <Tilt options={TiltImage} >
          <img src="/assets/images/3d/flower.jpg" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
          <a href="https://www.figma.com/proto/hoflO9eF0T1AYGwCK2NkNv/tailoredbuilding?page-id=0%3A1&type=design&node-id=1-2&t=NxxcZWoMR2Yp1aVf-0&scaling=min-zoom">
            <img src="/assets/images/ui/tailored.png" alt="ui" />
          </a>
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
          <a href="https://www.figma.com/proto/3XmeEx8OlMr1wMqpMqHJNe/SMART-BRAND-1?page-id=0%3A1&type=design&node-id=1-2&t=zCEqqKv5AcRcAC9T-0&scaling=min-zoom">
            <img src="/assets/images/ui/smart brand 1.png" alt="ui" />
          </a>
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
          <a href="https://www.figma.com/proto/SFtiVOdpZsYvxnNrXmucDN/SMART-BRAND-2?page-id=0%3A1&type=design&node-id=1-2&t=iq2uiCBtWDPStax9-0&scaling=min-zoom">
            <img src="/assets/images/ui/smart brand 2.png" alt="ui" />
          </a>
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
          <a href="https://www.figma.com/proto/2XN3t3c3Ui1lXbn2HxWvfR?page-id=0%3A1&type=design&node-id=1-2&t=7DX7jE9375GbcQmR-0&scaling=min-zoom">
            <img src="/assets/images/ui/smart brand 3.png" alt="ui" />
          </a>
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
          <a href="https://www.figma.com/proto/wOI1LII9t3BUlFesB5i6WM/Lead-Magnet?page-id=0%3A1&type=design&node-id=7-44&t=w7Q1q3o7Ncrz0gvn-0&scaling=min-zoom">
            <img src="/assets/images/ui/modal.png" alt="ui" />
          </a>
        </Tilt>
        </div>
      </div>
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <button className="modal-exit" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage} alt="Full size" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryComponent;
