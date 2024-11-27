
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    let studentsData = [
        { id: 1, name: "Student 1", physics: 85, chemistry: 78, math: 90, english: 88 },
        { id: 2, name: "Student 2", physics: 80, chemistry: 82, math: 85, english: 79 },
        { id: 3, name: "Student 3", physics: 89, chemistry: 91, math: 92, english: 93 },
        { id: 4, name: "Student 4", physics: 76, chemistry: 75, math: 78, english: 80 },
        { id: 5, name: "Student 5", physics: 84, chemistry: 87, math: 81, english: 85 },
        { id: 6, name: "Student 6", physics: 93, chemistry: 90, math: 95, english: 91 },
        { id: 7, name: "Student 7", physics: 78, chemistry: 81, math: 79, english: 82 },
        { id: 8, name: "Student 8", physics: 70, chemistry: 68, math: 72, english: 74 },
        { id: 9, name: "Student 9", physics: 90, chemistry: 92, math: 89, english: 88 },
        { id: 10, name: "Student 10", physics: 77, chemistry: 80, math: 76, english: 78 }
      ];
    return (
        <div>
            <LChart width={500} height={400} data={studentsData}>
                <XAxis dataKey = "name"/>
                <YAxis></YAxis>
                <Line dataKey={"physics"} stroke="red"></Line>
                <Line dataKey={"chemistry"} stroke=" blue"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;