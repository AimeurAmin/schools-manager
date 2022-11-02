import MainLayout from "@layouts/MainLayout";
import Table from "@components/Table";
import { RiDeleteBin5Line, RiFileList2Line } from "react-icons/ri";

const fakeData = [{
  id: 1,
  img: "https://api.lorem.space/image/face",
  firstName: 'Mathew',
  lastName: 'Perry',
  lateFromPayment: 23000,
  totalUnpained: 54000
}, {
  id: 2,
  img: "https://api.lorem.space/image/face",
  firstName: 'Joseph',
  lastName: 'Francis',
  lateFromPayment: 0,
  totalUnpained: 1900
}, {
  id: 3,
img: "https://api.lorem.space/image/face",
  firstName: 'Courtney',
  lastName: 'Cox',
  lateFromPayment: 0,
  totalUnpained: 0
}, {
  id: 4,
img: "https://api.lorem.space/image/face",
  firstName: 'Lisa',
  lastName: 'Kudrow',
  lateFromPayment: 999999,
  totalUnpained: 999999
}, {
  id: 5,
img: "https://api.lorem.space/image/face",
  firstName: 'Jennifer',
  lastName: 'Aniston',
  lateFromPayment: 43000,
  totalUnpained: 60000
}]

function Students() {
  return (
    <div className="flex h-full justify-center items-center">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Photo</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>En retard de paiement</th>
            <th>Total à payer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((client, index) => (
            <tr key={client.id}>
              <td>{index + 1}</td>
              <td><img src={client.img} alt="Tomates" height={34} className="w-20 h-20 p-0 rounded-full object-cover"/></td>
              <td>{client.lastName}</td>
              <td>{client.firstName}</td>
              <td className={client.lateFromPayment ? "text-[#FF4337]" : "text-[#88B487]"}>{client.totalUnpained} DZD</td>
              <td>{client.totalUnpained} DZD</td>
              <td>
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
    </div>
  );
};

export default MainLayout(Students);