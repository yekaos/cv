function imprimir() {
  window.print();
}
document.getElementById("pdf").addEventListener("click", function() {
    var link = document.createElement('a');
    link.href = 'curriculum_kyllian_arribas.pdf';
    link.download = 'CV_Kyllian_Arribas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});