const AIPrediction = () => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-3">AI Prediction</h2>

      <p className="text-sm">Next Month's Spending</p>
      <p className="text-2xl font-bold mb-3">₹19,200</p>

      <p className="text-sm">Risk Level</p>
      <p className="mb-2">Medium</p>

      <p className="text-sm">Confidence</p>
      <p className="mb-3">87%</p>

      <button className="mt-2 bg-white text-blue-700 px-3 py-2 rounded-lg text-sm">
        View Analysis
      </button>
    </>
  );
};

export default AIPrediction;