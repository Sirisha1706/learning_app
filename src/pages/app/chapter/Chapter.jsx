import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import styles from "./Chapter.module.css";

function Chapter() {
  const {id} = useParams();
  const course = useOutletContext();

  const chapter = course.chapters.find((chap)=> String(chap.chapter) === id);
  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          frameborder='1'
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
