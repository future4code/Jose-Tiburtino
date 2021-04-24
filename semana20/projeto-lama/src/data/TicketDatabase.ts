import { Ticket } from "../model/Ticket";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase {
  private static tableName: string = "Lama_Tickets";

  public createTicket = async (ticket: Ticket): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: ticket.id,
          name: ticket.name,
          value: ticket.value,
          quantity: ticket.quantity,
          show_id: ticket.showId,
        })
        .into(TicketDatabase.tableName);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
