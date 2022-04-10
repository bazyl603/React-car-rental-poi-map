import { useEffect, useState } from 'react';
import { dataElement } from '../components/types';

export default function FilterApi(data: dataElement[], filter: {batteryLeve: boolean, status: boolean}): dataElement[] | null {
  const [filterData, setfilterData] = useState<dataElement[] | null>(null);

  useEffect(() => {
    if(data){
      if(filter.status) {
        setfilterData(
          data.filter((el: dataElement) => {
            return el.status === "AVAILABLE" && filter.batteryLeve ? el.batteryLevelPct > 50 : el.batteryLevelPct > 0;
          })
        )
      } else {
        setfilterData(
          data.filter((el: dataElement) => {
            return filter.batteryLeve ? el.batteryLevelPct > 50 : el.batteryLevelPct > 0;
          })
        )
      }
    }
  }, [data, filter.batteryLeve, filter.status]);

  return filterData;
}