import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormUser() {
  return (
    <>
      <div className="w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center fixed top-0 left-0 z-50">
        <div className="bg-white w-1/3 py-3 px-4 flex flex-col items-center justify-center relative">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold uppercase mb-3">Form</p>
            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-black" />
          </div>
          <input
            className="w-full py-1 px-2 border outline-none mb-3"
            placeholder="Fullname"
            type="text"
            required
          />
          <input
            className="w-full py-1 px-2 border outline-none mb-3"
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full py-1 px-2 border outline-none mb-3"
            placeholder="Phone number"
            type="text"
            required
          />

          <button className="bg-blue-500 text-white font-bold w-full py-2">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
