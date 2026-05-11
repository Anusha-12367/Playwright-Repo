//const Xlsx=require('xlsx') //importing xlsx library
import * as XLSX from 'xlsx'  //importing xlsx using import statmnt
function getdata(){
    const workbook=XLSX.readFile('TestData/Testdata.xlsx')//track workbook location and opens it
    const sheet=workbook.Sheets['LoginSheet']   //get login sheet from workbook
    const data=XLSX.utils.sheet_to_json(sheet) //convert data to json format
    return data
}

module.exports={getdata} //to get the fn in other files also