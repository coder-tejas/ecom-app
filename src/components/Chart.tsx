import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie } from 'recharts';

const BarChartComp: React.FC = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        fetch("/MOCK_DATA_BAR_CHART.json")
            .then(response => response.json())
            .then(data => setdata(data.RAT))
            .catch(err => { console.log(err) })

    }, [])


    return (<>

        <ResponsiveContainer width="100%" height={400}>

            <BarChart

                data={data}
                margin={{
                    top: 20,
                    bottom: 5,
                }}
            >

                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <XAxis dataKey="Month" />
                <Legend />
                <Bar dataKey="Revenue" fill="#2563eb" />
                <Bar dataKey="Transaction" fill="#8b5cf6" />
            </BarChart>





        </ResponsiveContainer>


    </>)
}

interface GenderData {
    gender: string;
    value: number;
}


interface DonutChartProps {
    gender_data: GenderData[];
}


export const DonutChart: React.FC<DonutChartProps> = ({ gender_data }) => {

    return (
        <>     
                <ResponsiveContainer width="100%" height={300}>

            <PieChart >
                <Tooltip />
                <Pie data={gender_data}
                    dataKey="value"
                    nameKey="gender"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={80}
                    label
                     />



            </PieChart>

</ResponsiveContainer>

        </>


    )


}









export default BarChartComp
