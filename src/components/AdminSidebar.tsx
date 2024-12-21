
import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { GrTransaction, GrLineChart } from "react-icons/gr";
import { IoPeople, IoBarChart, IoGameController } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { LuTicket} from "react-icons/lu";
import { FaStopwatch } from "react-icons/fa";


function Adminsidebar() {
  return (
    <>
      <aside>
        <h2>LOGO.</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <li><MdDashboard />  Dashboard</li>
            <li><FiShoppingBag /> Product</li>
            <li><IoPeople /> Customer</li>
            <li><GrTransaction />  Transaction</li>
          </ul>
          <h5>
            CHARTS
          </h5>
          <ul>
            <li><IoBarChart />Bar</li>
            <li><GiPieChart />Pie</li>
            <li><GrLineChart />Line</li>
          </ul>
          <div>
            <h5>
              APPS
            </h5>
            <ul>
              <li><FaStopwatch />
                STOPWATCH</li>
              <li><LuTicket />
                COUPAN</li>
              <li><IoGameController />
                TOSS</li>
            </ul>
          </div>
        </div>
      </aside>

    </>
  )
}

export default Adminsidebar
