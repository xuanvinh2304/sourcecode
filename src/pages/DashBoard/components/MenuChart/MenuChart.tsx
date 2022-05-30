import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';

const { Option } = Select;
function handleChange(value: any) {
  console.log(value);
} 
const MenuChart: FC = () => {

  const invoices = [
    { 
      id: '/', 
      name: 'Ngày'
    },
    { 
      id: '/1', 
      name: 'Tuần'
    },
    { 
      id: '/2', 
      name: 'Tháng'
    }
  ];

  return(
    <>
      <div className="mainboard-table--right">
        <Select labelInValue defaultValue="Ngày" style={{ width: 120 }} onChange={handleChange}>
          {
            invoices.map((item,index) => (
              <Option value={item.name} key={index}>
                <Link to={`${item.id}`}>{item.name}</Link>
              </Option>
            ))
              
          }
        </Select>
      </div>
    </>
  );
}

export default MenuChart;