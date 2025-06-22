import DrawerList from "./components/DrawerList";
import Aboutme from "./components/aboutMe/Aboutme";

export default function Home() {
  return (
    <>
      {/* Desktop Sidebar - now moved to ClientLayout */}
      <div className="hidden md:flex fixed top-0 left-0 z-40 bg-[#F9F9F8] w-[250px] min-h-screen">
        <DrawerList />
      </div>

      {/* Main content */}
      <Aboutme />
    </>
  );
}