import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function MainLayout(Content:any) {
  return () => (
    <div className="flex h-screen bg-dark-70 text-white-90">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}
