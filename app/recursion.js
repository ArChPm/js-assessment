recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let listOfFiles = [];
    
    processDir = dir => {
      if(dir != undefined) {
        if(dirName === dir.dirName || dirName === undefined) {
          saveFiles(dir)
        } else {
          dir.subDirs.forEach(dirTmp => processDir(dirTmp));
        }
      }
    }

    saveFiles = (dir) => {
      if(dir != undefined) {
        listOfFiles.push(...dir.files)
        dir.subDirs.forEach(dirTmp => saveFiles(dirTmp));
      }
    }
    processDir(data)
    return listOfFiles;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  },
};
