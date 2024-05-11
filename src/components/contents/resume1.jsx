import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Resume1() {
  return (
    <div className="grid justify-center w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid text-gray-700 h-[900px] lg:h-[600px] py-[50px] lg:w-[1280px] lg:grid-cols-2">
        <div className="relative grid">
          <Image
            className="absolute lg:end-0 bottom-[90px]"
            src={"/images/circle.png"}
            width={500}
            height={500}
            alt="circle"
          />

          {/* Description */}
          <div className="z-10 py-[20px] px-[40px] flex flex-col gap-[35px]">
            <h1 className="text-[25px] lg:text-[45px] font-bold">
              Transform your resume instantly with AI. Elevate to the Top 2%
            </h1>
            <div className="relative grid gap-[10px]">
              <div className="hidden lg:flex absolute top-2 start-[6px] w-1 h-[80%] bg-gray-600"></div>
              <div className="flex z-10 items-center gap-[5px]">
                <div className="hidden lg:flex rounded-full border bg-green-500 w-4 h-4"></div>
                <p>Unique Resume Templates to get your dream Job!</p>
              </div>
              <div className="flex z-10 items-center gap-[5px]">
                <div className="hidden lg:flex rounded-full border bg-green-500 w-4 h-4"></div>
                <p>Be in top of 2% with Resume</p>
              </div>
              <div className="flex z-10 items-center gap-[5px]">
                <div className="hidden lg:flex rounded-full border bg-green-500 w-4 h-4"></div>
                <p>Dare to be different.</p>
              </div>
            </div>

            {/* Button */}
            <div className="grid lg:flex gap-[30px]">
              <button className="rounded-lg border px-[30px] py-[10px] text-black bg-yellow-300">
                Upload Your CV
              </button>
              <button className="flex justify-center items-center gap-[5px] rounded-lg border px-[20px] py-[10px] text-black bg-white">
                <FaLinkedin className="text-[20px] text-blue-600" />
                <h1>Connect with LinkedIn</h1>
              </button>
            </div>
          </div>
        </div>

        {/* Jumbotron */}
        <div className="grid items-center justify-center">
          <Image
            className="w-[400px] lg:w-auto lg:h-auto"
            src={"/images/resume.png"}
            width={500}
            height={500}
            alt="resume"
          />
        </div>
      </div>
    </div>
  );
}
