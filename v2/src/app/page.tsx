
import DrawerList from "./components/DrawerList";
import Aboutme from "./components/aboutMe/Aboutme";

export default function Home() {
  return (
    <div className="w-full flex ">
      {/* ---side Menu static on large screen */}
      <aside className="w-[25%] max-w-[250px] hidden md:flex bg-[#F9F9F8] min-h-screen fixed top-0 left-0 z-10">
        <DrawerList />
      </aside>

      {/* ---Main content area with left margin to avoid overlap with fixed sidebar */}
      <main className="w-[75%] ml-0 md:ml-[200px] lg:ml-[200px]">
       {/* -----   Other Components Here ------------- */}
        <Aboutme/>
      </main>
    </div>
  );
}
