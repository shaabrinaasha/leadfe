import Image from "next/image";
// import Sidebar from "./components/global/sidebar";
import ContentLayout from "./components/global/layout-components/content-layout";
import Wrapper from "./components/global/layout-components/wrapper";
import Header from "./components/global/layout-components/header";
import TitleBar from "./components/global/layout-components/title-bar";
import Emailfield from "./components/pages/login/emailfield";
// import Passwordfield from "./components/pages/login/passwordfield";
import SubmitButton from "./components/global/submit-button";
import dynamic from "next/dynamic";

const Passwordfield = dynamic(
  () => import("./components/pages/login/passwordfield"),
  {
    ssr: false,
  }
);

export default function Login() {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-sky-950 via-sky-800  to-sky-600 flex items-center justify-center">
      <div className="w-[400px] bg-white h-[500px] rounded-xl drop-shadow-xl ">
        <div className="w-full flex justify-center mt-5 mb-2">
          <Image
            src="/logo-lead-black.png"
            width={200}
            height={200}
            alt="Logo"
          />
        </div>
        <h1 className="w-full flex justify-center text-sky-950 font-bold text[25px]">
          Sign In
        </h1>
        <div className="w-full justify-items-center flex-col px-5 pr-6 mt-6">
          <Emailfield
            label={"Email"}
            id={"email"}
            onChange={""}
            placeholder={"input your email..."}
            mandatory={true}
          />
          <Passwordfield
            label={"Password"}
            id={"password"}
            onChange={""}
            placeholder={"input your password..."}
            mandatory={true}
          />
        </div>
        <div className="flex justify-between px-6 mb-5">
          {/* remember me */}
          <div className="flex items-center ">
            <input
              id="remember-checkbox"
              type="checkbox"
              className="w-4 h-4 accent-sky-600 rounded-md"
            />
            <label htmlFor="remember-checkbox" className="ms-2 text-[12px] font-medium">
              Remember me
            </label>
          </div>

          <p className="ms-2 text-[12px] font-medium text-red-600">Forgot Password?</p>
        </div>

        <div className="px-5 mt-20">
          <SubmitButton width={"w-[360px]"} >Sign In</SubmitButton>
        </div>
      </div>
    </main>
  );
}
