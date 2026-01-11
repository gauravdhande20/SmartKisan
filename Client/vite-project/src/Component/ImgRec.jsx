import React, { useRef, useState } from "react";

const ImgRec = () => {
  const cameraInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // ✅ Multiple Recommendation Data
  const recommendations = [
    {
      issue: "Nitrogen Deficiency",
      fertilizer: "Urea",
      quantity: "45 kg per acre",
      advice: "Apply during early morning and avoid overuse.",
    },
    {
      issue: "Potassium Deficiency",
      fertilizer: "Muriate of Potash (MOP)",
      quantity: "30 kg per acre",
      advice: "Apply after irrigation for better absorption.",
    },
    {
      issue: "Phosphorus Deficiency",
      fertilizer: "DAP",
      quantity: "40 kg per acre",
      advice: "Mix well with soil before irrigation.",
    },
    {
      issue: "Leaf Blight Detected",
      fertilizer: "Mancozeb Fungicide",
      quantity: "2.5 g per liter of water",
      advice: "Spray in the evening to reduce leaf burn.",
    },
    {
      issue: "Healthy Crop",
      fertilizer: "No fertilizer required",
      quantity: "—",
      advice: "Your crop is healthy. Maintain proper irrigation.",
    },
  ];

  const handleCameraClick = () => {
    cameraInputRef.current.click();
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

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
      setError("Please upload a leaf image before submitting.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    // 🔄 Simulating ML API response
    setTimeout(() => {
      setLoading(false);

      // 70% chance image is valid
      const isLeafImage = Math.random() > 0.3;

      if (!isLeafImage) {
        setError(
          "The uploaded image does not appear to be a crop leaf. Please upload a clear leaf image."
        );
        return;
      }

      // 🎯 Random recommendation selection
      const randomIndex = Math.floor(
        Math.random() * recommendations.length
      );
      setResult(recommendations[randomIndex]);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f6fbf7] px-4">
      <div className="w-full max-w-xl bg-white border-2 border-dashed border-green-300 rounded-2xl p-8 text-center shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Upload your leaf image
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Capture or upload a clear crop leaf image
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
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            📁 Select File
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

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Analyzing Image..." : "Submit for Analysis"}
        </button>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-left">
            <h3 className="font-semibold text-green-700 mb-2">
              🌱 Recommendation Result
            </h3>
            <p><strong>Issue:</strong> {result.issue}</p>
            <p><strong>Fertilizer:</strong> {result.fertilizer}</p>
            <p><strong>Quantity:</strong> {result.quantity}</p>
            <p className="text-sm text-gray-600 mt-2">
              {result.advice}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ImgRec;
