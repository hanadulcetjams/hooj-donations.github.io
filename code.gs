function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 
function getData() {
  return SpreadsheetApp
      .openById('1wvY7AXiKFdOdoohG3b5JRTdD_shN7D52WZGDjzgesfU')
      .getSheet('Main')
      .getDataRange(D8:D8)
      .getValues();
}