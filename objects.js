var playlist = {stMotel: 'My Type'}
function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
