import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="w-16 h-16"
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
