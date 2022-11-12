import MainLayout from "@layouts/MainLayout";
import Table from "@components/Table";
import { RiDeleteBin5Line, RiFileList2Line } from "react-icons/ri";
import { useEffect } from "react";
import { useGetStudentsQuery } from "src/features/students/students.service";
import getAge from "src/utils/getAge";
import Input from "@components/Input";
import { BsSearch } from "react-icons/bs";
import Paginator from "@components/Paginator";


function Students() {
  const {data: {data: clients} = {}, isLoading, isError, error} = useGetStudentsQuery();

  useEffect(() => {
   
  }, [clients])

  return (
    <div className="flex flex-col h-full items-center">
      {isLoading? 'Loading...' : (
        <div className="py-4">
          <div className="flex justify-between pb-4">
            <Input className="text-dark-70 w-10/12">
              <BsSearch size={22} className="mx-2"/>
              <input 
                type="text" placeholder='Rechercher un étudiant.' name='filter' id='filter'
                className={`bg-transparent w-full outline-none ml-2 text-dark-70`}
              />
            </Input> 
            <button
              className='border-none rounded bg-blue-500 text-white-100 font-bold py-3 text-center w-60'
              onClick={() => alert("coming soon...")}
            >Ajouter un étudiant</button>
          </div>
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
                <tr key={client.id} onClick={(e) => {alert('coming soon... (details)')}} className="cursor-pointer hover:bg-dark-90">
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
                        onClick={() => alert('comming soon... (update)')}
                    />
                    <RiDeleteBin5Line
                        color="#FF4337"
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => alert('coming soon... (delete)')}
                    />
                    </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginator pagesNumber={10} selectedPage={1} />
        </div>
      )}
    </div>
  );
};

export default MainLayout(Students);