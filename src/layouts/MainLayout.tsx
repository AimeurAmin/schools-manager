import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function MainLayout(Content:any) {
  return () => (
    <div className="flex bg-dark-70 text-white-90 h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
