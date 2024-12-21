import React from "react";
import Adminsidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import BarChartComp from "../components/Chart";
import data from "../assets/data.json"
import { DonutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashTable from "../components/DashboardTable";



interface WidgetItemProps {


  heading: string;
  value: number;
  percentage: number;
  color: string;
  amount?: boolean;

}
interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

const WidgetItem = ({
  heading,
  value,
  percentage,
  color,
  amount = false,
}: WidgetItemProps) => (

  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percentage > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percentage}%{" "}
        </span>
      ) :
        (
          <span className="red">
            <HiTrendingDown /> -{percentage}%{" "}
          </span>
        )}
    </div>

    <div className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percentage) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >

      <span
        style={{
          color,
        }}
      >
        {percentage}%
      </span>

    </div>


  </article>


);

const genderData = [
  { gender: 'Male', value: 60 , "fill" :'#2563eb'},
  { gender: 'Female', value: 40 , "fill" : '#ec4899'},
];


const Dashboard: React.FC = () => {
  return (
    <>
      <div className="admin-container">
        <Adminsidebar />
        <main className="dashboard">
          <div className="bar">


            <BsSearch />
            <input type="text" placeholder="Search for data, users, docs" />
            <FaRegBell />
            <img src={userImg} alt="User" />
          </div>

          <section className="widget-container">

          <WidgetItem
          percentage={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0,115,255)"
          />
          <WidgetItem
          percentage={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0,115,255)"
          />
          <WidgetItem
          percentage={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0,115,255)"
          />
          <WidgetItem
          percentage={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0,115,255)"
          />


          </section>

        <section className="graph-container">
        <div className="revenue-chart">
          <h2>Revenue & Transaction</h2>
          <BarChartComp/>       
        </div>

      <div className="dashboard-categories">
       
        <h2>Inventory</h2>
        <div>
        {data.categories.map((element)=>(
                <CategoryItem 
                 key={element.heading}
                 heading={element.heading}
                 value={element.value}
                 color={`hsl(${element.value * 4},${element.value}%,50%)`}
                />
        ))}

        </div>


      </div>

        </section>
         <section className="transaction-container">
          <div className="gender-chart">
          <h2>Gender Ratio</h2>

          
             <DonutChart gender_data={genderData} />
            

           <p>
              <BiMaleFemale />
            </p>

          </div>

          
          
          <DashTable />
        
         </section>
        


        </main>
      </div>
      


    </>
  )
};

export default Dashboard;
