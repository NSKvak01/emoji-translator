const search = function(searchStr) {
    output.innerTet=''
    return emojis.filter(function(emoji) {
        return emoji.name.includes(searchStr.toLowerCase());
    }) 
}
