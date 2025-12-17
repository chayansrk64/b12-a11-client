import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { FaPen } from 'react-icons/fa6';

const ManageUsers = () => {
    const modalRef = useRef(null)
    const axiosSecure = useAxiosSecure()

    const {isPending, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })


    if(isPending){
        return <LoadingSpinner />
    }


    const handleOpenModal = (user) => {
       console.log('user from manage user', user);
        modalRef.current.showModal()


    }

   

    return (
        <div>
             <SectionTitle title="Manage Users" subtitle="manage your users here"/>
             <div>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
         users.map((user, i) => <tr key={user.id}>
        <th>{i + 1}</th>
        <td>{user.displayName}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
            <button onClick={() => handleOpenModal(user)} className='btn btn-sm hover:bg-gray-500 hover:text-white'><FaPen /> </button>
        </td>
      </tr>)
      }
      
    </tbody>
  </table>

  {/* modal */}

{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

     <h3 className="font-bold text-lg">Update User Role</h3>

       

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


</div>
             </div>
        </div>
    );
};

export default ManageUsers;