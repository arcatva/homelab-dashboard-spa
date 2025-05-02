function Card({ status, children }) {
  let color = "bg-red-400";
  if (status === "alive") {
    color = "bg-green-400";
  }

  return (
    // The main card container
    <div className=" w-1/5 overflow-hidden rounded-2xl drop-shadow-lg bg-white text-black   relative ">
      {/* Content wrapper: Needs relative positioning and z-index > 0 */}
      <div
        className={`absolute p-2 translate-4 ${color} rounded-full blur-xs`}
      />
      <div
        className={`absolute p-2 translate-4 ${color} rounded-full blur-xs`}
      />
      <div className="z-10 p-4">
        {/* Adjust padding as needed */}
        {children}
      </div>
    </div>
  );
}

export default Card;
