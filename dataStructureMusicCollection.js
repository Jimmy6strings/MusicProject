var ArtistList = [
  {artists: ['the beatles', 'the rolling stones', 'm83', 'elton john', 'black sabbath', 'james brown']},
  {albums: ['the white album', 'some girls', 'junk', 'goodbye yellowbrick road', 'paranoid', 'sex machine']},
  {genres: ['classic rock', 'alternative', 'funk']},
  {songs: ['blackbird', 'dear prudence', 'best of burden', 'miss you', 'go', 'solitude', 'bennie and the jets', 'candle in the wind', 'paranoid', 'iron man', 'get up', 'i got the feelin']}
]
//create return value functions of music collection
var musicCategory = function (name, category ) {
  return category.push(name);
}

var findMusicCatagory = function (name) {
  return name;
}

Array.prototype.isSubsetOf = function(contextArray) {
  if (this.every(function(val) {
    return contextArray.indexOf(val) >= 0;
  })) {
    return true;
  }
  return false;
};