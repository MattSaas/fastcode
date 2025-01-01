"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    setisLoading(true);

    try {
      // const response = await fetch("/api/board", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name,
      //   }),
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });

      // const boardData = await response.json();

      const data = await axios.post("/api/board", { name });
      setName("");
      toast.success("Board added successfully! 😇");

      router.refresh();
    } catch (error) {
      const tostMessage =
        error.response?.data?.error ||
        error.message ||
        "Something went wrong! 😞";
      toast.error(tostMessage);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl max-w-3xl"
      onSubmit={handelSubmit}
    >
      {/* Title */}
      <p className="font-bold text-xl text-center">
        Create a new feedback board.
      </p>
      {/* Form */}
      <label className="form-control w-full my-8">
        <div className="label">
          <span className="label-text text-base">Board Name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      {/* Button */}
      <button className="btn btn-secondary btn-block text-white" type="submit">
        Save Board
        {isLoading && <span className="loading loading-dots loading-xs"></span>}
      </button>
    </form>
  );
};

export default FormNewBoard;
