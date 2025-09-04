import React, { useEffect, useRef } from "react";
import room1 from "../../assets/Images/banner-3.png"; // First image
import pool from "../../assets/Images/banner-2.png";   // Second image
import room2 from "../../assets/Images/banner-4.jpg"; // Third image

const VirtualTour = () => {
  const panoRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!window.pannellum || !panoRef.current) return;

    viewerRef.current = window.pannellum.viewer(panoRef.current, {
      type: "equirectangular",
      panorama: room1, // ✅ imported image
      autoLoad: true,
      showControls: true,
      compass: false,
      hfov: 100,
      hotSpots: [
        {
          pitch: 0,
          yaw: 120,
          type: "scene",
          text: "Go to Pool",
          sceneId: "pool",
        },
      ],
      scenes: {
        pool: {
          type: "equirectangular",
          panorama: pool, // ✅ imported image
          autoLoad: true,
          hfov: 100,
          hotSpots: [
            {
              pitch: 0,
              yaw: -60,
              type: "scene",
              text: "Back to Room",
              sceneId: "room1",
            },
          ],
        },
        room1: {
          type: "equirectangular",
          panorama: room2, // ✅ imported image
          autoLoad: true,
          hfov: 100,
          hotSpots: [
            {
              pitch: 0,
              yaw: 120,
              type: "scene",
              text: "Go to Pool",
              sceneId: "pool",
            },
          ],
        },
      },
    });

    return () => {
      viewerRef.current = null;
    };
  }, []);

  return (
    <div
      ref={panoRef}
      id="panorama"
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default VirtualTour;
