import MainLayout from "@layouts/MainLayout"
import { useRouter } from "next/router"

function Student() {
  const router = useRouter();
  const { studentId } = router.query;
  return (<p>Student: {studentId}</p>)
}


export default MainLayout(Student);