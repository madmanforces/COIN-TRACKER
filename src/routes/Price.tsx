import { useQuery } from "react-query";
import { fetchCoinToday } from "./api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";



interface Today {
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
  const { isLoading, data } = useQuery<Today[]>(["ohlcv", coinId], () =>
    fetchCoinToday(coinId));
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
              data: data?.map((price) => price.close),
            },
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
              type: 'datetime',
              categories: data?.map((price) => price.time_close),
            },
            fill : {
              type: "gradient",
              gradient: { gradientToColors: ["tomato"], stops: [0,100]},
            },
            colors: ["red"],
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


  
