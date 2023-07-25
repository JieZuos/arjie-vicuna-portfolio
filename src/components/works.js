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
            <img src="/assets/images/ui/tailored.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/smart brand 1.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/smart brand 2.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/smart brand 3.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/modal 3.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/modal 1.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/modal 2.png" alt="ui" />
        </Tilt>
        </div>
        <div className="item" data-list="ui">
        <Tilt options={TiltImage} >
            <img src="/assets/images/ui/modal 4.png" alt="ui" />
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
