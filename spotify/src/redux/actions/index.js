export const GET_SONGS = "GET_SONGS";

export const searchSongsActionAsync = (query) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        let fetchedSongs = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: fetchedSongs,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
