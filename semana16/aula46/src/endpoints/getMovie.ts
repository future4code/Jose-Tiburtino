import connection from "../connection";

export const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date,
  rating: number
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_Date: releaseDate,
      playing_limit_date: playingLimitDate,
      rating: rating,
    })
    .into("Movie");
};

export const getMovies = async (): Promise<void> => {
  const result = await connection.raw(`
        SELECT * FROM Movie
    `);
  return result[0];
};

export const searchMovies = async (
  title: string
  //   synopsis: string
): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT * FROM Movie WHERE title OR synopsis LIKE "%${title}%"
    `);
    return result[0];
  } catch (error) {
    return [];
  }
};
