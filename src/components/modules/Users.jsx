import React from 'react'
import Title from '../common/Title'
import CommonTable from '../common/Table';

const Users = () => {

  const cols = [
    {
      title: "Sl No.",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Name",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Phone",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Email",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Created At",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Actions",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },
  ]

  return (
    <div>
      <div className='p-4 w-full'>
      
        <div className='flex items-center justify-between w-full'>
          <div className='w-full'>
            <Title heading="List of Users" />
          </div>

          <div className="my-5 w-full flex items-center justify-end gap-3">
            <button className='p-2 rounded-lg px-4 text-sm font-poppins'>Filter</button>
            <button className='p-2 px-5 bg-swiggyOrange rounded text-white font-poppins text-sm'>Create User</button>
          </div>
        </div>

        <div className='my-5'>
          <CommonTable cols={cols} data={[1, 1, 1, 1]} />
        </div>

      </div>
    </div>
  )
}

export default Users