import { useGetPhysicalChart } from "@/hooks/queries/useRecord";
import { getChartSorted, getChartType, getUnit } from "@/utils/chart";
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
import Loading from "../loading/Loading";

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

const LineChart = ({ chartId }: Props) => {
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 40,
        bottom: 10
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
          weight: "bold",
          family: "Pretendard"
        },
        formatter: function (value: number) {
          return value.toFixed(1) + getUnit(chartId);
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

  const {
    data: chartData,
    isError,
    isLoading
  } = useGetPhysicalChart(getChartType(chartId));

  if (isLoading) {
    return <Loading />;
  }

  if (!chartData || isError) {
    return (
      <div>
        페이지 일부를 불러오는 데 오류가 생겼어요. <br />
        잠시 후 다시 시도해주세요
      </div>
    );
  }

  const labels = getChartSorted(chartData).map((point) => point.recordDate);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: getChartSorted(chartData).map((point) => point.value),
        borderColor: "#9CABEF",
        backgroundColor: "#fff",
        lineTension: 0
      }
    ]
  };

  const chartWidth = chartData.length * 100;

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
