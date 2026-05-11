import * as XLSX from 'xlsx'  //importing xlsx using import statmnt
function getCellData(row,column){ //row and column to read data from excel

    const workbook=XLSX.readFile('TestData/Testdata.xlsx')//track workbook location and opens it
    const sheet=workbook.Sheets['LoginSheet']  //sheet name for login credentials
    const cellValue=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1
    })

    const cell=sheet[cellValue]  //cell address retrieve cheyyan aanu we use cellAddress
    return cell?cell.v:undefined  //if else alternative operator--if value is there in cell,return value in v else return undefined

}

module.exports={getCellData} //to get the fn in other files also
 