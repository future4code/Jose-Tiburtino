import { TicketDatabase } from "../data/TicketDatabase";
import { BaseError } from "../error/BaseError";
import { Ticket, TicketInputDTO } from "../model/Ticket";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class TicketBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
    private ticketDatabase: TicketDatabase
  ) {}

  public addTicket = async (ticket: TicketInputDTO, token: string) => {
    try {
      if (!ticket.name || !ticket.quantity || !ticket.showId || !ticket.value) {
        throw new BaseError("Missin input", 422);
      }
      if (ticket.quantity <= 0) {
        throw new BaseError("Invalid quantity, must be greater than 0", 406);
      }
      if (ticket.value <= 0) {
        throw new BaseError("Invalida value, must be greater than 0", 406);
      }
      const authentication: AuthenticationData = this.authenticator.getData(
        token
      );
      if (authentication.role !== "ADMIN") {
        throw new BaseError("Only Administrators can register bands.", 401);
      }
      const id = this.idGenerator.generate();
      const newTicket = new Ticket(
        id,
        Ticket.stringToTicketType(ticket.name),
        ticket.value,
        ticket.quantity,
        ticket.showId
      );
      await this.ticketDatabase.createTicket(newTicket);
      return newTicket;
    } catch (error) {
      throw new BaseError(error.message || error.sqlMessage, error.statusCode);
    }
  };
}
