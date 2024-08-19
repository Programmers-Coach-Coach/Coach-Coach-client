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

interface Props {
  chartId: number;
}

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

const options = {
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
      formatter: function (value: number) {
        // 데이터레이블 값 변경 함수
        return value.toFixed(1) + "kg";
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      border: {
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
  events: [],
  animation: {
    duration: 2000, // 전체 애니메이션 지속 시간
    easing: "easeInOutElastic" // 애니메이션의 이징 효과 설정
  }
};

const labels = CHART_DATA.map((item) => item.date);

const data = {
  labels,
  datasets: [
    {
      label: "",
      data: CHART_DATA.map((item) => item.weight),
      borderColor: "#9CABEF",
      backgroundColor: "#fff",
      fill: true,
      lineTension: 0
    }
  ]
};

const LineChart = ({ chartId }: Props) => {
  const chartWidth = CHART_DATA.length * 80;

  // TODO: type에 맞는 차트 데이터를 가져옴
  console.log(chartId);

  return (
    <Wrapper>
      <Line
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options={options as any}
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
