import { NextFunction } from "connect"
import { Request, Response } from "express"

export interface reqRes {
    (req: Request, res: Response): Promise<void>
}

export interface reqResNext {
	(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void>
}