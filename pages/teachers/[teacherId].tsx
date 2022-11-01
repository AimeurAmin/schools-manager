import MainLayout from "@layouts/MainLayout";
import { useRouter } from "next/router"

function Teacher() {
  const router = useRouter();
  const {teacherId} = router.query;
  return <div className="">Teacher: {teacherId}</div>
}

export default MainLayout(Teacher);