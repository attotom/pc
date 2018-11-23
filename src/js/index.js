
import  '../less/index.less';

const navLiNodes = document.querySelectorAll('.nav li');
// const navLiNodes = document.querySelectorAll('#rap #header .hearder-main .nav li');

for (var i = 0; i < navLiNodes.length; i++) {
  navLiNodes[i].onclick = function () {
    for (var j = 0; j < navLiNodes.length; j++) {
      navLiNodes[j].className = '';
    }
    this.className = 'active';
  };
}