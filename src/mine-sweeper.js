const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let l = 0; l < matrix.length; l++) {
    result.push(
      "0"
        .repeat(3)
        .split("")
        .map((a) => +a)
    );
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      // 1
      // ===========================================
      // первый блок
      if (i === 0) {
        if (matrix[i][j] === true) {
          // крайняя левая позиция блока
          if (j === 0) {
            result[i][j + 1] += 1;
            // добавление тем кто снизу
            if (j < result[i].length - 1) {
              result[i + 1][j] += 1;
              result[i + 1][j + 1] += 1;
            }
          }
          //не крайние позиция блока
          if (j !== 0 && j !== result[i].length - 1) {
            //добавление по бокам
            result[i][j + 1] += 1;
            result[i][j - 1] += 1;
            // добавление тем кто снизу
            if (j < result[i].length - 1) {
              result[i + 1][j] += 1;
              result[i + 1][j + 1] += 1;
            }
          }
          //крайняя правая позиция блока
          if (j === result[i].length - 1) {
            result[i][j - 1] += 1;
            // добавление тем кто снизу
            if (j < result[i].length - 1) {
              result[i + 1][j] += 1;
              result[i + 1][j + 1] += 1;
            }
          }
        }
      }
      // ===========================================
      // не первые и не последние блоки
      if (matrix[i][j] === true && i !== 0 && i !== result[i].length - 1) {
        if (j === 0) {
          // крайняя левая позиция
          result[i][j + 1] += 1;
          // добавление тем кто снизу
          if (j < result[i].length - 1) {
            result[i + 1][j] += 1;
            result[i + 1][j + 1] += 1;
          }
          //добавление тем кто сверху
          if (j > 0) {
            result[i - 1][j] += 1;
            result[i - 1][j + 1] += 1;
          }
        }
        //не крайняя позиция блока
        if (j !== 0 && j !== result[i].length - 1) {
          //добавление по бокам
          result[i][j + 1] += 1;
          result[i][j - 1] += 1;
          // добавление тем кто снизу
          if (j < result[i].length - 1) {
            result[i + 1][j] += 1;
            result[i + 1][j + 1] += 1;
            result[i + 1][j - 1] += 1;
          }
          //добавление тем кто сверху
          if (j > 0) {
            result[i - 1][j] += 1;
            result[i - 1][j + 1] += 1;
            result[i - 1][j - 1] += 1;
          }
        }
        //крайняя правая позиция блока
        if (j === result[i].length - 1) {
          result[i][j - 1] += 1;
          // добавление тем кто снизу
          if (j < result[i].length - 1) {
            result[i + 1][j] += 1;
            result[i + 1][j + 1] += 1;
          }
        }
      }
      // ===========================================
      // последний блок
      if (i === result[i].length - 1) {
        if (matrix[i][j] === true) {
          // крайняя левая позиция блока
          if (j === 0) {
            result[i][j + 1] += 1;
            // добавление тем кто сверху
            if (j < result[i].length - 1) {
              result[i - 1][j] += 1;
              result[i - 1][j + 1] += 1;
            }
          }
          //не крайние позиция блока
          if (j !== 0 && j !== result[i].length - 1) {
            //добавление по бокам
            result[i][j + 1] += 1;
            result[i][j - 1] += 1;
            // добавление тем кто сверху
            if (j < result[i].length - 1) {
              result[i - 1][j] += 1;
              result[i - 1][j + 1] += 1;
              result[i - 1][j - 1] += 1;
            }
          }
          //крайняя правая позиция блока
          if (j === result[i].length - 1) {
            result[i][j - 1] += 1;
            // добавление тем кто сверху
            if (j < result[i].length - 1) {
              result[i - 1][j] += 1;
              result[i - 1][j + 1] += 1;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
