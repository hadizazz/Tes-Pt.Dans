import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  //   const [searchLoc, setSearchLoc] = useState("");
  const [dataJob, setDataJob] = useState("");

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      setData(res.data);
      setLoading(false);
      getDataJob();
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  const getDataJob = async () => {
    try {
      const res = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
      );
      setDataJob(res.data.id);
      console.log(res.data.id);
    } catch (err) {
      console.log(err);
    }
  };
  //   const key = ["title", "company", "type", "location"];
  //   const filters = (data) => {
  //     return data.filter((item) => item.title.toLowerCase().includes(search));
  //   };
  //   console.log(dataJob);
  return (
    <div>
      <div className="relative overflow-x-auto my-10 p-10  text-black">
        <div className="flex">
          <div className="relative">
            <span>Search Job</span>
            <input
              type="search"
              className="block w-96 p-4 pl-10 text-sm  rounded-lg dark:bg-gray-100 "
              placeholder="Filter by title, benefits, companies, expertise"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className=" mx-20">
            <span>Location</span>
            <input
              type="search"
              className="block w-96 p-4 pl-10 text-sm  rounded-lg  dark:bg-gray-100"
              placeholder="Search Job"
              //   onChange={(e) => setSearchLoc(e.target.value)}
            />
          </div>
          <div className="mt-9 mr-28 flex">
            <input
              type="checkbox"
              className=" w-4 h-5 border-gray-300 rounded"
            />
            <label className="ml-5 text-sm font-medium">Full Time Job</label>
          </div>
          <div className="mt-7">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        data
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search) ||
              item.type.toLowerCase().includes(search) ||
              item.company.toLowerCase().includes(search) ||
              item.location.toLowerCase().includes(search)
          )
          .map((item) => {
            return (
              <div key={item.id} className="mx-10 grid-rows-2">
                <div
                  className={
                    // First Job
                    item == data[data.length]
                      ? "border-b-2 border-t-2"
                      : // Last Job
                      item == data[0]
                      ? "border-b-2 border-t-2"
                      : "border-b-2 "
                  }
                >
                  <button
                    onClick={(e) => getDataJob(e.target.value)}
                    className="text-blue-500 font-bold text-lg"
                  >
                    {item.title}
                  </button>
                  <div>
                    <div className="mr-2 ">{item.company}</div>
                    <div>{item.type}</div>
                    <div className="flex justify-end items-end -mt-5">
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      )}
      <br />
      <br />
    </div>
  );
};

export default Home;
