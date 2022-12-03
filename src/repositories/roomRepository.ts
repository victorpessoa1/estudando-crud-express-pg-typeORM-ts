import { Room } from './../entities/Room';
import { AppDataSource } from './../data-source';

export const roomRepository = AppDataSource.getRepository(Room)