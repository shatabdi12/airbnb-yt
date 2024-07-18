import { Button } from "@/components/ui/button";
import { Navbar } from "./components/Navbar";
import { MapFilterItems } from "./components/MapFilterItems";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems />
    </div>
   </div>
  );
}
