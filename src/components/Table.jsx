import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Table = ({ header, urlPre }) => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right border-[1px] rounded-3xl">
        <thead className="text-xs text-[#A4A7B7] uppercase bg-[#a4a7b70a] border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              <input type="checkbox" name="" id="" />
            </th>
            {header.map((each) => (
              <>
                <th scope="col" className="px-6 py-3">
                  {each}
                </th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b text-[#667085]">
            <td className="px-6 py-4">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="px-6 py-4">Moon Light</td>
            <td className="px-6 py-4">9/18/20</td>
            <td className="px-6 py-4">Esther Howard</td>
            <td className="px-6 py-4">Paracetamol</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">https://swapi.dev/api/people</td>
            <td className="px-6 py-4">
              <Link
                to={`/${urlPre}details/1`}
                className="text-[#0A74DC] text-xs underline underline-offset-2"
              >
                Details
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  header: PropTypes.array,
  urlPre: PropTypes.string,
};

export default Table;
