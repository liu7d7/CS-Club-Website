import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { Computer } from "../components/Computer";
import { OrbitControls } from "@react-three/drei";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.intro}>
          <h1 style={{ fontSize: "54px", textAlign: "center" }}>MSJ CS Club</h1>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aspernatur nobis perspiciatis velit possimus sapiente adipisci iste
            assumenda. Voluptates adipisci voluptatem rerum. Eaque facere
            placeat consequatur expedita excepturi blanditiis explicabo.
          </p>
        </div>
        <div className={styles.canvas}>
          <Canvas>
            <Suspense fallback={null}>
              <Computer />
              <OrbitControls enableZoom={false} />
              <directionalLight position={[0, 0, 6]} color="white" />
              <directionalLight position={[0, 6, 0]} color="white" />
              <directionalLight position={[6, 0, 0]} color="white" />
              <ambientLight intensity={0.3} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <button
          style={{
            borderRadius: "10px",
            border: "none",
            padding: "1rem",
            fontFamily: "Inter",
            fontWeight: "bold",
            backgroundColor: "#5865F2",
            color: "white",
            fontSize: "1.2rem",
            marginRight: "1rem",
          }}
        >
          Join our Dicsord
        </button>
        <button
          style={{
            borderRadius: "10px",
            border: "none",
            padding: "1rem",
            fontFamily: "Inter",
            fontWeight: "bold",
            backgroundColor: "#5865F2",
            color: "white",
            fontSize: "1.2rem",
          }}
        >
          Blogs
        </button>
      </div>
    </div>
  );
};

export default Home;
