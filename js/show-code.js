function show_go_get() {
    document.getElementById('code-area').innerHTML = "<code>go get https://github.com/Go4Algorithms/golang</code>";
}
function show_go_git() {
    document.getElementById('code-area').innerHTML = "<code>git clone https://github.com/Go4Algorithms/golang</code>";
}
function show_py_git() {
    document.getElementById('code-area').innerHTML = "<code>git clone https://github.com/Go4Algorithms/python</code>";
}
function show_download() {
  document.getElementById('code-area').innerHTML =

 '<a href="https://github.com/Go4Algorithms/golang/archive/master.zip" class="btn btn-info" role="button">Go Code</a>' +
 '&nbsp;&nbsp;&nbsp;' +
 '<a href="https://github.com/Go4Algorithms/python/archive/master.zip" class="btn btn-info" role="button">Python Code</a>'

}
function reset() {
  document.getElementById('code-area').innerHTML = ""
}
