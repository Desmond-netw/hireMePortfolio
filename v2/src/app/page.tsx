
import DrawerList from "./components/DrawerList";

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
       contents con Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nam, eveniet quibusdam nobis, porro alias error repellendus obcaecati, esse quisquam similique! Eius, tenetur? Vitae veniam sequi natus, rem voluptatum vero.
      </main>
    </div>
  );
}
