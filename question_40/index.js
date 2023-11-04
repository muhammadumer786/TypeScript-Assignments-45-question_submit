// //question 40 - done here.
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// part 1
function make_album(artist, title) {
    return {
        artist: artist,
        title: title
    };
}
var myAlbum = make_album("Artist Name", 'Album Title');
console.log(myAlbum);
// part 2
function make_Album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album('Artist 1', 'Album 1');
var album2 = make_Album('Artist 2', 'Album 2', 15);
var album3 = make_Album('Artist 3', 'Album 3');
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
