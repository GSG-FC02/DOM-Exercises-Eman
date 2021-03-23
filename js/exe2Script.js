function getAttributes() {
    var hrefValue = document.getElementById("wcc").href;
    alert('The value of the href attribute of the link is : ' + hrefValue);
    var hreflangValue = document.getElementById("wcc").hreflang;   
    alert('The value of the hreflang attribute of the link is : ' + hreflangValue);
    var relValue = document.getElementById("wcc").rel; 
    alert('The value of the rel attribute of the link is : ' + relValue);
    var targetValue = document.getElementById("wcc").target; 
    alert('The value of the taget attribute of the link is : ' + targetValue);
    var typeValue = document.getElementById("wcc").type; 
    alert('The value of the type attribute of the link is : ' + typeValue);  
  }