import { Globe, LocationEdit } from "lucide-react";

function ProfileInformation() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center pt-5 pb-0 px-10 rounded-lg bg-white shadow-md lg:h-100   ">
      <div className="h-22 w-22 flex items-center justify-center rounded-full bg-[#4f46e5] ">
        <span className="font-bold text-3xl text-white">AF</span>
      </div>
      <h1 className="font-bold text-2xl">Ali Farooqi</h1>
      <p className="text-gray-600 mb-3">Full Stack Developer</p>
      <div className="flex flex-col mb-5">
        <div className="flex gap-2 text-gray-600">
          <LocationEdit size={20} />
          <span>Islamabad, Pakistan</span>
        </div>
        <div className="flex gap-2 text-gray-600">
          <Globe size={20} />
          <span>alifarooqi.netlify.app</span>
        </div>
      </div>
      <div className="border-t border-t-gray-300 py-5 flex flex-col items-center gap-1 w-full">
        <span className="text-3xl text-[#4f46e5] font-bold">$85/hr</span>
        <span className="text-gray-600 text-sm">Hourly Rate</span>
      </div>
    </div>
  );
}

export default ProfileInformation;
