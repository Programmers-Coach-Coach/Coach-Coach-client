import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CHART_DATA = [
  {
    date: "2024.01.01",
    weight: 55.0
  },
  {
    date: "2024.01.02",
    weight: 54.0
  },
  {
    date: "2024.01.03",
    weight: 56.0
  },
  {
    date: "2024.01.04",
    weight: 54.0
  },
  {
    date: "2024.01.05",
    weight: 55.0
  },
  {
    date: "2024.01.10",
    weight: 55.0
  },
  {
    date: "2024.01.11",
    weight: 70.0
  },
  {
    date: "2024.01.12",
    weight: 56.0
  }
];

export const options = {
  responsive: false,
  layout: {
    padding: {
      left: 50,
      right: 50,
      top: 30,
      bottom: 30
    }
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      align: "end",
      anchor: "end",
      font: {
        size: 12,
        weight: "bold"
      },
      formatter: function (value, context) {
        // 데이터레이블 값 변경 함수
        return value + "kg";
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      }
    }
  },
  events: []
};

const labels = CHART_DATA.map((item) => item.date);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: CHART_DATA.map((item) => item.weight),
      borderColor: "#9CABEF",
      backgroundColor: "#fff",
      fill: true,
      lineTension: 0
    }
  ]
};

const LineChart = () => {
  const chartWidth = CHART_DATA.length * 80;

  return (
    <Wrapper>
      <Line
        options={options}
        data={data}
        width={chartWidth}
        height={200}
        plugins={[ChartDataLabels]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: auto;
`;
export default LineChart;
