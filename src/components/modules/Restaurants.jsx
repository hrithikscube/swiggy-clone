import React from 'react'
import Title from '../common/Title'
import CommonTable from '../common/Table';

const Restarants = () => {

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
      title: "Rating",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Description",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Location",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Belongs to",
      render: (rowData) => {
        return <span>dummy_value</span>;
      },
    },

    {
      title: "Status",
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
            <Title heading="List of Restaurants" />
          </div>

          <div className="my-5 w-full flex items-center justify-end gap-3">
            <button className='p-2 rounded-lg px-4 text-sm font-poppins'>Filter</button>
            <button className='p-2 px-5 bg-swiggyOrange rounded text-white font-poppins text-sm'>Create New Restarant</button>
          </div>
        </div>

        <div className='my-5'>
          <CommonTable cols={cols} data={[1, 1, 1, 1]} />
        </div>

      </div>
    </div>
  )
}

export default Restarants