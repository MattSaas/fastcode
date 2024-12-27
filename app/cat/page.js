"use client";
import { useState } from "react";
import Image from "next/image";
import CatImage from "@/app/cat.webp";

export default function Cat() {
  const apiKey = "https://api.thecatapi.com/v1/images/search";
  const [status, setStatus] = useState("Idel");
  const [imageUrl, setImageUrl] = useState(CatImage);

  const getNewImage = async () => {
    setStatus("Sending...🌞");

    // method #1
    // fetch(apiKey)()
    //   .then((response) => {
    //     setStatus("Getting response...🚥");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // setImageUrl(data[0].url);
    //     setStatus("Done 👍 Check console.");
    //   })
    //   .catch(() => {
    //     setStatus("failed 😞");
    //   });
    try {
      const response = await fetch(apiKey);
      setStatus("Getting response...🚥");
      const data = await response.json(response);
      setStatus("Done 👍 Check console.");
      console.log(data[0].url);
    } catch (error) {
      setStatus("failed 😞");
      console.log(error);
    }
  };

  return (
    <div className="bg-base-200 size-96 mx-auto flex-col flex justify-center items-center">
      <h1 className="font-extrabold uppercase m-3">Async/ Await Demo</h1>
      <h2 className="font-medium uppercase ">{status}</h2>
      <button className="btn btn-primary my-5" onClick={getNewImage}>
        Fatch Cat{" "}
      </button>
      {/* {console.log(imageUrl.src)} */}
      <Image
        src={imageUrl}
        alt="cat"
        width={300}
        height={100}
        priority={true}
      ></Image>
    </div>
  );
}
