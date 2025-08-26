import { useState } from "react";
import { useForm } from "react-hook-form";
import { Edit2, Save, SaveAll, SaveAllIcon, User } from "lucide-react";
import ProfileInformation from "../components/ProfileInformation";
import InputField from "../components/InputField";

function Profile() {
  const [userProfile, setUserProfile] = useState({
    firstName: "Ali",
    lastName: "Farooqi",
    email: "alifarooqi@gmail.com",
    phoneNumber: "1234567890",
    location: "Islamabad, Pakistan",
    website: "alifarooqi.netlify.app",
    bio: "Full Stack Developer experienced in React, Node.js, and MongoDB.",
  });
  const [editing, setEditing] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: userProfile,
  });

  const onSubmit = (data) => {
    console.log("Updated Profile Data:", data);
    setUserProfile(data);
    setEditing(false);
  };

  const Icon = editing ? Save : Edit2;

  return (
    <div className="flex flex-col gap-5 px-4 ">
      {/* Profile Header */}
      <div className="flex justify-between items-center max-xs:flex-col  max-xs:gap-5 max-xs:items-baseline max-xs:mr-auto max-xs:pl-2 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-lg text-gray-600 max-xs:w-70">
            Manage your account settings and preferences
          </p>
        </div>
        <button
          className="bg-[#4338ca] text-white cursor-pointer px-4 font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-103 flex items-center gap-2  whitespace-nowrap"
          onClick={() => setEditing((s) => !s)}
        >
          <Icon size={17} />
          <span>{editing ? "Save Changes" : "Edit Profile"}</span>
        </button>
      </div>
      {/* Personal Information */}
      <form
        className="lg:flex-row flex flex-col gap-5 "
        id="profile-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfileInformation />
        <div className="flex flex-col gap-1 py-5 px-5 rounded-lg bg-white shadow-md flex-1 ">
          <div className="flex gap-2 items-center ">
            <User size={22} className="text-[#4f46e5] " />
            <h1 className="font-bold text-xl">Personal Information</h1>
          </div>
          <div className="flex gap-5 max-sm:flex-col ">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1 text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  {...register("email")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="" className="text-md text-gray-800">
                  Website
                </label>
                <input
                  type="text"
                  {...register("website")}
                  className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   text-black disabled:text-gray-600 disabled:cursor-not-allowed "
                  disabled={!editing}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-1 justify-center ">
            <label htmlFor="" className="text-md text-gray-800">
              Bio
            </label>
            <textarea
              name=""
              id=""
              className=" bg-stone-100 rounded-lg px-2 py-3 border-gray-300 border-1 focus:outline-none transition-all duration-300 shadow-sm disabled:cursor-not-allowed  text-black disabled:text-gray-600 "
              disabled={!editing}
              {...register("bio")}
            ></textarea>
            <div
              className={`transition-all duration-300 overflow-hidden self-start mt-3
    ${editing ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <button
                className="bg-[#4338ca] text-white cursor-pointer px-4 font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-103 flex items-center gap-2 whitespace-nowrap"
                type="submit"
                disabled={!editing}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
