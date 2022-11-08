import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    " http://localhost:8800/api/hotels/countByCity?cities=Kolkata,London,Berlin,Paris"
  );
  //   console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://img.freepik.com/free-photo/chicago-downtown-bridge-buiding-usa_268835-3590.jpg?w=740&t=st=1667229768~exp=1667230368~hmac=80f2f27eec8ba593fcedb9fdab07e7b2669fb977ea5d7a11bbe045b95d727c52"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.freepik.com/free-photo/view-famous-fountain-nimes_268835-3823.jpg?w=740&t=st=1667230447~exp=1667231047~hmac=f89e2b05a9cce564d596184a509e7ebcdd2c9af24f73f86c07646b1264f77ab2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.freepik.com/free-photo/gondolas-moored-by-saint-mark-square-with-san-giorgio-di-maggiore-church-space-venice-venezia-italy-europe_268835-1046.jpg?w=740&t=st=1667230506~exp=1667231106~hmac=43d8c6d300fb03f7fe3697c03688f5cd33ca26ac62aa20b115a79310a015df6e"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.freepik.com/free-photo/los-angeles-night-with-urban-buildings-griffith-observatory_649448-104.jpg?w=740&t=st=1667230707~exp=1667231307~hmac=29f07b777b207a14b70c2bf57a6dc9cf328ee161a4f83f79037b80785118a3ea"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Paris</h1>
              <h2>{data[3]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
