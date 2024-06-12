import { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("image", file[0]);

    for (let i = 0; i < file.length; i++) {
      formData.append("image", file[i]);
    }

    formData.append("description", description);

    const result = await axios.post(
      "http://localhost:5000/upload-single",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    setImageName(result.data.imageName);
  };
  return (
    <>
      <div>
        <nav className="bg-blue-200 p-5 mb-5 w-full text-center">
          <h3>Image Uploader Form </h3>
        </nav>
        <form onSubmit={submitForm} className="p-5">
          <label>Choose File: </label>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files);
            }}
            accept="image/*"
            multiple
          />{" "}
          <br />
          <label>Description: </label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            className="border-slate-500 border mx-2 rounded-md"
          />{" "}
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          />
        </form>
      </div>
    </>
  );
};

export default App;
