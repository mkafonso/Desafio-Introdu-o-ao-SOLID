/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id }: any = request.params;
    let user = null;

    try {
      user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
    return response.json(user);
  }
}

export { TurnUserAdminController };
