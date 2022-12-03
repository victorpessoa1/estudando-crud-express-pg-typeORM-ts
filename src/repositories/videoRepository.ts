import { Video } from './../entities/Video';
import { AppDataSource } from './../data-source';

export const videoRepository = AppDataSource.getRepository(Video)