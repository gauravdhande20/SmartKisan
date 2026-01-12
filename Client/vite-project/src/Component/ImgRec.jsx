import React, { useRef, useState } from "react";
import img1 from '../Photos/NitroD1.png';
import img2 from '../Photos/MOP1.png';
import img3 from '../Photos/MancozebFungicide1.png';
import img4 from '../Photos/CarbendazimFungicide1.png';
import img5 from '../Photos/Ferrous Sulphate1.png';


const ImgRec = () => {
  const cameraInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // 🌱 Recommendation Data (with image & description)
  const recommendations = [
    {
      issue: "Nitrogen Deficiency",
      fertilizer: "Urea",
      quantity: "45 kg per acre",
      advice: "Apply during early morning and avoid overuse.",
      description:
        "Urea is a nitrogen-rich fertilizer that enhances leaf growth and improves crop yield.",
      image:img1,
    },
    {
      issue: "Potassium Deficiency",
      fertilizer: "Muriate of Potash (MOP)",
      quantity: "30 kg per acre",
      advice: "Apply after irrigation for better absorption.",
      description:
        "MOP strengthens plant immunity and improves resistance to drought and disease.",
      image:img2,
    },
    {
      issue: "Leaf Blight Detected",
      fertilizer: "Mancozeb Fungicide",
      quantity: "2.5 g per liter of water",
      advice: "Spray in the evening to reduce leaf burn.",
      description:
        "Mancozeb is a broad-spectrum fungicide effective against leaf blight and fungal diseases.",
      image:img3,
    },
    {
       issue: "Root Rot Symptoms Detected",
  fertilizer: "Carbendazim Fungicide",
  quantity: "1 g per liter of water",
  advice: "Apply to soil near the root zone and avoid waterlogging.",
  description:
    "Carbendazim controls root rot by stopping fungal growth and protecting plant roots.",
  image: img4,
    },
    {
      issue: "Yellowing Leaves Detected",
  fertilizer: "Ferrous Sulphate",
  quantity: "5 g per liter of water",
  advice: "Apply as a foliar spray in the morning for better absorption.",
  description:
    "Ferrous sulphate corrects iron deficiency, helping restore leaf color and improve photosynthesis.",
  image: img5,
    },
  ];

  const handleCameraClick = () => cameraInputRef.current.click();
  const handleFileClick = () => fileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const handleSubmit = () => {
    if (!imageFile) {
      setError("Please upload a clear crop or leaf image.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    // 🔄 Fake AI analysis
    setTimeout(() => {
      setLoading(false);

      const isValidLeaf = Math.random() > 0.3;
      if (!isValidLeaf) {
        setError(
          "The image does not appear to be a crop leaf. Please upload a proper leaf image."
        );
        return;
      }

      const randomIndex = Math.floor(
        Math.random() * recommendations.length
      );
      setResult(recommendations[randomIndex]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6fbf7] px-4 py-12 flex flex-col items-center">

      {/* UPLOAD BOX */}
      <div className="w-full max-w-xl bg-white border-2 border-dashed border-green-300 rounded-2xl p-8 text-center shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Upload Crop Leaf Image
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Capture or upload a clear image for analysis
        </p>

        {/* Hidden Inputs */}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          hidden
          onChange={handleImageChange}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hidden
          onChange={handleImageChange}
        />

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={handleFileClick}
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            📁 Select Image
          </button>

          <button
            onClick={handleCameraClick}
            className="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
          >
            📷 Use Camera
          </button>
        </div>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mx-auto mt-6 max-h-64 rounded-xl shadow"
          />
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Analyzing Image..." : "Submit for Analysis"}
        </button>

        {/* Error */}
        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}
      </div>

      {/* RESULT SECTION (OUTSIDE BOX) */}
      {result && (
        <div className="mt-10 w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={result.image}
              alt={result.fertilizer}
              className="w-64 h-64 object-contain rounded-xl"
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700">
              🌱 {result.fertilizer}
            </h3>

            <p className="mt-2">
              <strong>Detected Issue:</strong> {result.issue}
            </p>

            <p className="mt-1">
              <strong>Recommended Quantity:</strong> {result.quantity}
            </p>

            <p className="mt-4 text-gray-600">
              {result.description}
            </p>

            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <strong>Usage Advice:</strong> {result.advice}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              ⚠ Always follow local agricultural guidelines before applying fertilizers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgRec;
