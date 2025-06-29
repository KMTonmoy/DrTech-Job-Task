 
import Sidebar from "@/components/Sidebar";
import "../../app/globals.css";
import DashboardNav from "@/components/DashboardNav";
   

export default function RootLayout({ children }) {
  return (
    <div>
        <DashboardNav/>
         <div className="flex ">
          <Sidebar />
          <main className="flex justify-center w-full">{children}</main>
        </div>
     </div>
  );
}