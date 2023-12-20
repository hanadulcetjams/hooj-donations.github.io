function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 
function getData() {
    try {
        const ss = SpreadsheetApp.openById('1wvY7AXiKFdOdoohG3b5JRTdD_shN7D52WZGDjzgesfU');
        const sheet = ss.getSheetByName('Main');
        const result = sheet.getSheetValues(4, 8, 1, 1);
        console.log(result);
        return result;
    } catch (err) {
        // TODO (developer) - Handle exception
        console.log('Failed with error %s', err.message);
    }

  return;
}