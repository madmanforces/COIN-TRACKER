import { useQuery } from "react-query";
import { fetchCoinHistory, fetchCoinToday } from "../api/api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atoms";
import { type } from "os";



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

interface TodayProps {
  coinId: string;
  
}


  function Today({ coinId }: TodayProps) {
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
              name: "price",
              data: data?.map((price) => price.open),  
            },
            {
              type:"line",
              name: "price",
              data: data?.map((price) => price.close),
            }
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              id: 'realtime',
              height: 600,
              width: 500,
              background: "tranparent",
              stacked: true,
            },
            grid: {show: true },
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
              type: 'datetime',
              categories: data?.map((price) =>price.time_close),
              
            },
            fill : {
              type: "gradient",
              gradient: { gradientToColors: ["yellow"], stops: [0,100]},
            },
            colors: ["green"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            }
          }}
          
          />
        )}
      </div>
    );
  }

  
  
  export default Today 


  
