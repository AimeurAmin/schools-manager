import MainLayout from "@layouts/MainLayout";
import Table from "@components/Table";
import { RiDeleteBin5Line, RiFileList2Line } from "react-icons/ri";
import { useEffect } from "react";
import { useGetStudentsQuery } from "src/features/students/students.service";
import getAge from "src/utils/getAge";


function Students() {
  const {data: {data: clients} = {}, isLoading, isError, error} = useGetStudentsQuery();

  useEffect(() => {
    console.log('data');
    console.log(clients);
    
    
  }, [clients])

  return (
    <div className="flex flex-col h-full justify-center items-center">
      {isLoading? 'Loading...' : (
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Age</th>
              <th>Niveau</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client: any, index: number) => (
              <tr key={client.id} onClick={(e) => {alert('cool')}} className="cursor-pointer hover:bg-dark-90">
                <td>{index + 1}</td>
                <td><img src="https://api.lorem.space/image/face" alt="étudiant" height={34} className="w-20 h-20 p-0 rounded-full object-cover"/></td>
                <td>{client.lastName}</td>
                <td>{client.firstName}</td>
                <td>{getAge(client.birthdate)}</td>
                <td>{client.level}</td>
                <td onClick={(e) => {e.stopPropagation();}}  className="cursor-default">
                  <RiFileList2Line
                      color="#DC6F40"
                      size={20}
                      style={{ marginInlineEnd: 10, cursor: "pointer" }}
                  />
                  <RiDeleteBin5Line
                      color="#FF4337"
                      size={20}
                      style={{ cursor: "pointer" }}
                  />
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MainLayout(Students);