export const getSearchResults = (str) => {
    return(
        $.ajax( {
            method: "get",
            url: `/api/search`,
            data: {str}
        } ))
}