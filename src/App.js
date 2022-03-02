import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
<body>
<label>Write text to add: </label>  <input type="text" id='txtLect'></input> 
     <button id="btnAdd"> add</button>
    
    <div id='list'></div>
</body>
    </Fragment>
  );
}
window.onload = beginning;
var fitt = [];
function beginning (){
  var btnAgregar = document.getElementById('btnAdd');
  btnAgregar.addEventListener('click', clickBtnAdd);
}

function clickBtnAdd (){
  var txtLect = document.getElementById('txtLect');
  var lect = txtLect.value;
  fitt.push(lect);
  showAggregation(); 
}

function showAggregation (){
  var etList = document.getElementById('list');
  var html = "";
  for (var lect of fitt){
    html += lect + "<br/>";
  }

  etList.innerHTML = html;
}
export default App;
