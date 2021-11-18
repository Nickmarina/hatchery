// Create closure with 
// fileds:
// 1) _name
// 2) _revision
//
// exoprted function:
// 1) changeName(name) to set new name and increment revision
// 2) getRevision() to get current revision

function main(name) {
  // Change code below
  let _name = name;
  let _revision = 0;

  function changeName(name){
    _name = name;
    _revision ++;
  }

  function getRevision(){
    return _revision;
  }
  return { changeName, getRevision}
}

module.exports = main;