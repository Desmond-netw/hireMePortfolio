
import DrawerList from "./components/DrawerList";

export default function Home() {
  return (
    <div className="w-full flex relative">
      {/* ---side Menu static on large screen */}
      <aside className="w-[250px] hidden md:flex bg-[#F9F9F8] min-h-screen fixed top-0 left-0 z-10">
        <DrawerList />
      </aside>

      {/* ---Main content area with left margin to avoid overlap with fixed sidebar */}
      <main className="w-full md:ml-[250px] p-4">
       {/* -----   Other Components Here ------------- */}
       contents
      </main>
    </div>
  );
}
