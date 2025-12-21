import React from 'react';
import { FaEnvelope, FaUserShield, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

const MyProfile = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure()

   const {isPending, data: users = []} = useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })

    const profile = users.find(me => me.email === user?.email)
   

  const handleLogout = async () => {
    await logOut();
  };

  if(isPending){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <SectionTitle
        title="My Profile"
        subtitle="Manage your account information"
      />

      {/* Profile Card */}
      <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-1 shadow-xl">
        <div className="bg-base-100 rounded-2xl p-8">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                />
              </div>
            </div>

            {/* Name & Role */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">{user?.displayName}</h2>
              <span className="badge badge-secondary badge-lg mt-2 capitalize">
                {profile?.role}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="divider my-8"></div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <FaEnvelope className="text-3xl text-primary" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm break-all">{user?.email}</p>
              </div>
            </div>

            {/* Role */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <FaUserShield className="text-3xl text-primary" />
                <h3 className="font-semibold">Role</h3>
                <p className="capitalize">{profile?.role}</p>
              </div>
            </div>

            {/* Joined Date */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <FaCalendarAlt className="text-3xl text-primary" />
                <h3 className="font-semibold">Joined</h3>
                <p>
                  {new Date(profile?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleLogout}
              className="btn btn-primary text-white px-8"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
