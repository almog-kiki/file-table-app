const CONSTANTS = require('./constants')
const { promises: fs } = require("fs");

const getFileNames = async () =>{
  let filesList = []
  try{
    const files = await fs.readdir(CONSTANTS.FILES_PATH)
    files.forEach(function (file) {
        filesList.push(file)
    });

  }catch(error){
    throw new Error(error);
  }
  return filesList;
}

const getFileContent= async(fileName, encoding = "utf-8")=> {
  
  const filePath = CONSTANTS.FILES_PATH +"/"+ fileName
  if (!filePath) {
      throw new Error("filePath required");
  }
  
  const content = await fs.readFile(filePath, { encoding });
  return JSON.parse(content)
}

module.exports = Utils = {
  getFileContent: getFileContent,
  getFileNames: getFileNames,
}