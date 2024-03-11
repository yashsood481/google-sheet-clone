import { useMemo, useState } from "react";
import GridCell from "../GridCell/GridCell";
import PropTypes from "prop-types";

const generateSheetMatrix = (row, col) => {
  return new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));
};

const Grid = ({ row, col }) => {
  const GRID_ARRAY = useMemo(() => generateSheetMatrix(row, col), [row, col]);
  const [focusedCell, setFocusedCell] = useState("");
  const [isEditingCell, setIsEditingCell] = useState(false);
  const customClass = `w-full grid grid-cols-${row + 1}`;
  return (
    <section className={customClass}>
      {GRID_ARRAY.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <GridCell
            setFocusedCell={setFocusedCell}
            focusedCell={focusedCell}
            key={`${rowIndex}-${colIndex}`}
            setIsEditingCell={setIsEditingCell}
            isEditingCell={isEditingCell}
            rowIndex={rowIndex}
            colIndex={colIndex}
          />
        ))
      )}
    </section>
  );
};

Grid.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
};

export default Grid;
