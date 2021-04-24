import { BaseError } from "../error/BaseError";
import { Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  private static tableName: string = "Lama_Shows";

  public addShow = async (show: Show): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: show.id,
          week_day: show.weekDay,
          start_time: show.startTime,
          end_time: show.endTime,
          band_id: show.bandId,
        })
        .into(ShowDatabase.tableName);
    } catch (error) {
      console.log(error, "addshow");
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public showExists = async (
    weekDay: string,
    startTime: number,
    endTime: number
  ): Promise<any> => {
    try {
      const result = await BaseDatabase.connection
        .select("*")
        .from(ShowDatabase.tableName)
        .where({ week_day: weekDay })
        .andWhere("start_time", "<", endTime)
        .andWhere("end_time", ">", startTime);
      if (result.length > 0) {
        return true;
      }
    } catch (error) {
      throw new BaseError("This time already have a show", 406);
    }
  };
}
