import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api/api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atoms";

interface Historical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
  
}


  function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<Historical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId));
    return (
      <div>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close),
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 500,
                width: 500,
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((price) => price.time_close),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["blue"], stops: [0,100] },
              },
              colors: ["red"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
        )}
      </div>
    );
  }

  
  
  export default Chart 