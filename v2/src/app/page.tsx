import DrawerList from "./components/DrawerList";
import Aboutme from "./components/aboutMe/Aboutme";

export default function Home() {
  return (
    <div className="w-[80%] flex ">
      {/* --- Side Menu fixed on large screen --- */}
      <div className="hidden md:flex fixed top-0 left-0 z-30 bg-[#F9F9F8] w-[250px] min-h-screen">
        <DrawerList />
      </div>

      {/* --- Main content with margin to avoid sidebar overlap --- */}
      <main className="w-full ml-0 md:ml-[200px]">
        <Aboutme />
      </main>
    </div>
  );
}
